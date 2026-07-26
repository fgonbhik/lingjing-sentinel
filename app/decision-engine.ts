export type VisionDetection = {
  classId: 0 | 1;
  label: "smoke" | "fire";
  labelZh: "烟雾" | "明火";
  confidence: number;
  box: { x: number; y: number; width: number; height: number };
};

export type VisionResult = {
  type: string;
  confidence: number;
  smokeRatio: number;
  flameRatio: number;
  edgeDensity: number;
  persons: number;
  summary: string;
  modelMode: "onnx" | "explainable-fallback" | "demo";
  modelName: string;
  modelVersion: string;
  inferenceMs: number;
  detections: VisionDetection[];
  explanation: string[];
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

type OrtTensor = { data: Float32Array | Int32Array | number[] };
type OrtSession = {
  run: (feeds: Record<string, unknown>) => Promise<Record<string, OrtTensor>>;
};
type OrtRuntime = {
  env: { wasm: { wasmPaths: string; numThreads: number } };
  Tensor: new (type: "float32", data: Float32Array, dims: number[]) => unknown;
  InferenceSession: {
    create: (
      model: string,
      options: { executionProviders: string[]; graphOptimizationLevel: string },
    ) => Promise<OrtSession>;
  };
};

declare global {
  interface Window {
    ort?: OrtRuntime;
  }
}

let runtimePromise: Promise<OrtRuntime> | null = null;
let sessionPromise: Promise<OrtSession> | null = null;

const loadOnnxRuntime = () => {
  if (runtimePromise) return runtimePromise;
  runtimePromise = new Promise<OrtRuntime>((resolve, reject) => {
    const configure = () => {
      if (!window.ort) {
        reject(new Error("ONNX Runtime Web 未挂载"));
        return;
      }
      window.ort.env.wasm.wasmPaths = new URL("./models/", document.baseURI).href;
      window.ort.env.wasm.numThreads = 1;
      resolve(window.ort);
    };
    if (window.ort) {
      configure();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>('script[data-onnx-runtime="local"]');
    if (existing) {
      existing.addEventListener("load", configure, { once: true });
      existing.addEventListener("error", () => reject(new Error("ONNX Runtime Web 加载失败")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "./models/ort.min.js";
    script.async = true;
    script.dataset.onnxRuntime = "local";
    script.onload = configure;
    script.onerror = () => reject(new Error("ONNX Runtime Web 加载失败"));
    document.head.appendChild(script);
  }).catch((error) => {
    runtimePromise = null;
    throw error;
  });
  return runtimePromise;
};

const getOnnxSession = async () => {
  if (!sessionPromise) {
    sessionPromise = loadOnnxRuntime()
      .then((ort) =>
        ort.InferenceSession.create("./models/fire-smoke-yolo26n.onnx", {
          executionProviders: ["wasm"],
          graphOptimizationLevel: "all",
        }),
      )
      .catch((error) => {
        sessionPromise = null;
        throw error;
      });
  }
  return sessionPromise;
};

export const warmOnnxModel = async () => {
  const started = performance.now();
  await getOnnxSession();
  return Math.round(performance.now() - started);
};

function extractPixelFeatures(bitmap: ImageBitmap) {
  const width = 240, height = Math.max(120, Math.round(width * bitmap.height / bitmap.width));
  const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(bitmap, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height).data;
  let smoke = 0, flame = 0, edges = 0, samples = 0;
  const gray = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    const r=data[i*4],g=data[i*4+1],b=data[i*4+2]; const max=Math.max(r,g,b),min=Math.min(r,g,b);
    const saturation=max===0?0:(max-min)/max, light=(max+min)/510;
    const graySmoke=saturation<.22&&light>.27&&light<.88;
    const chemicalTint=r>g*1.02&&g>b*1.12&&light>.32;
    if(graySmoke||chemicalTint)smoke++; if(r>165&&r>g*1.35&&g>b*1.15)flame++;
    gray[i]=Math.round(r*.299+g*.587+b*.114);
  }
  for(let y=1;y<height;y+=2)for(let x=1;x<width;x+=2){const i=y*width+x;const delta=Math.abs(gray[i]-gray[i-1])+Math.abs(gray[i]-gray[i-width]);if(delta>52)edges++;samples++}
  const total=width*height, smokeRatio=smoke/total, flameRatio=flame/total, edgeDensity=edges/samples;
  return { smokeRatio, flameRatio, edgeDensity };
}

async function createModelInput(bitmap: ImageBitmap, ort: OrtRuntime) {
  const size = 640;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.fillStyle = "rgb(114,114,114)";
  ctx.fillRect(0, 0, size, size);
  const scale = Math.min(size / bitmap.width, size / bitmap.height);
  const drawWidth = bitmap.width * scale;
  const drawHeight = bitmap.height * scale;
  ctx.drawImage(bitmap, (size - drawWidth) / 2, (size - drawHeight) / 2, drawWidth, drawHeight);
  const pixels = ctx.getImageData(0, 0, size, size).data;
  const plane = size * size;
  const input = new Float32Array(plane * 3);
  for (let index = 0; index < plane; index += 1) {
    input[index] = pixels[index * 4] / 255;
    input[plane + index] = pixels[index * 4 + 1] / 255;
    input[plane * 2 + index] = pixels[index * 4 + 2] / 255;
  }
  return new ort.Tensor("float32", input, [1, 3, size, size]);
}

const intersectionOverUnion = (a: VisionDetection["box"], b: VisionDetection["box"]) => {
  const left = Math.max(a.x, b.x);
  const top = Math.max(a.y, b.y);
  const right = Math.min(a.x + a.width, b.x + b.width);
  const bottom = Math.min(a.y + a.height, b.y + b.height);
  const intersection = Math.max(0, right - left) * Math.max(0, bottom - top);
  const union = a.width * a.height + b.width * b.height - intersection;
  return union > 0 ? intersection / union : 0;
};

function parseDetections(output: OrtTensor, sourceWidth: number, sourceHeight: number): VisionDetection[] {
  const values = output.data;
  const candidates: VisionDetection[] = [];
  const scale = Math.min(640 / sourceWidth, 640 / sourceHeight);
  const padX = (640 - sourceWidth * scale) / 2;
  const padY = (640 - sourceHeight * scale) / 2;
  for (let index = 0; index < 300; index += 1) {
    const offset = index * 6;
    const confidence = Number(values[offset + 4] ?? 0);
    const rawClass = Math.round(Number(values[offset + 5] ?? -1));
    if (confidence < 0.25 || (rawClass !== 0 && rawClass !== 1)) continue;
    const x1 = clamp((Number(values[offset] ?? 0) - padX) / scale, 0, sourceWidth);
    const y1 = clamp((Number(values[offset + 1] ?? 0) - padY) / scale, 0, sourceHeight);
    const x2 = clamp((Number(values[offset + 2] ?? 0) - padX) / scale, 0, sourceWidth);
    const y2 = clamp((Number(values[offset + 3] ?? 0) - padY) / scale, 0, sourceHeight);
    const classId = rawClass as 0 | 1;
    candidates.push({
      classId,
      label: classId === 0 ? "smoke" : "fire",
      labelZh: classId === 0 ? "烟雾" : "明火",
      confidence,
      box: {
        x: x1 / sourceWidth * 100,
        y: y1 / sourceHeight * 100,
        width: Math.max(0, x2 - x1) / sourceWidth * 100,
        height: Math.max(0, y2 - y1) / sourceHeight * 100,
      },
    });
  }
  candidates.sort((a, b) => b.confidence - a.confidence);
  const selected: VisionDetection[] = [];
  for (const candidate of candidates) {
    if (selected.some((item) => item.classId === candidate.classId && intersectionOverUnion(item.box, candidate.box) > 0.45)) continue;
    selected.push(candidate);
    if (selected.length >= 8) break;
  }
  return selected;
}

function fallbackResult(features: ReturnType<typeof extractPixelFeatures>, started: number, reason: unknown): VisionResult {
  const { smokeRatio, flameRatio, edgeDensity } = features;
  const type=flameRatio>.045?"疑似明火特征":smokeRatio>.16?"疑似烟羽特征":"未发现显著火烟特征";
  const confidence=clamp(.52+smokeRatio*.42+edgeDensity*.12+flameRatio*.5,.52,.84);
  return {
    type,
    confidence,
    smokeRatio,
    flameRatio,
    edgeDensity,
    persons: 0,
    modelMode: "explainable-fallback",
    modelName: "端侧可解释视觉研判原型",
    modelVersion: "PIXEL-FEATURE v1.1",
    inferenceMs: Math.round(performance.now() - started),
    detections: [],
    summary: `本地 ONNX 模型未能加载，已明确降级为像素特征研判；烟羽辅助占比 ${(smokeRatio*100).toFixed(1)}%，该结果不作为深度学习识别结论。`,
    explanation: [
      "使用色彩饱和度、亮度与边缘复杂度进行可解释判别",
      "降级结果不会冒充深度学习模型输出",
      `降级原因：${reason instanceof Error ? reason.message : "未知运行时错误"}`,
    ],
  };
}

export async function analyzeAccidentImage(file: File): Promise<VisionResult> {
  const started = performance.now();
  const bitmap = await createImageBitmap(file);
  const features = extractPixelFeatures(bitmap);
  try {
    const ort = await loadOnnxRuntime();
    const session = await getOnnxSession();
    const input = await createModelInput(bitmap, ort);
    const outputs = await session.run({ images: input });
    const detections = parseDetections(outputs.output0, bitmap.width, bitmap.height);
    const smoke = detections.filter((item) => item.label === "smoke");
    const fire = detections.filter((item) => item.label === "fire");
    const topConfidence = detections[0]?.confidence ?? 0;
    const type = smoke.length && fire.length
      ? "烟雾与明火复合险情"
      : smoke.length
        ? "烟雾/泄漏羽流"
        : fire.length
          ? "明火险情"
          : "未检出火焰或烟雾";
    const inferenceMs = Math.round(performance.now() - started);
    return {
      type,
      confidence: topConfidence,
      smokeRatio: features.smokeRatio,
      flameRatio: features.flameRatio,
      edgeDensity: features.edgeDensity,
      persons: 0,
      modelMode: "onnx",
      modelName: "YOLO-26n Fire & Smoke",
      modelVersion: "ONNX FP32 · 640×640",
      inferenceMs,
      detections,
      summary: detections.length
        ? `本地 ONNX 模型检出 ${smoke.length} 个烟雾目标、${fire.length} 个明火目标，最高置信度 ${(topConfidence*100).toFixed(1)}%。图片仅在浏览器本机推理。`
        : `本地 ONNX 模型未检出火焰或烟雾目标；像素辅助烟羽占比 ${(features.smokeRatio*100).toFixed(1)}%，建议结合现场传感器复核。`,
      explanation: [
        "输入图片缩放并填充为 640×640 RGB 张量",
        "ONNX Runtime Web 使用 WASM 在浏览器本地执行",
        "输出经 0.25 置信度阈值与 0.45 IoU 去重",
      ],
    };
  } catch (error) {
    return fallbackResult(features, started, error);
  } finally {
    bitmap.close();
  }
}

export async function analyzeAccidentImageUrl(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`验证图片加载失败：${response.status}`);
  const blob = await response.blob();
  return analyzeAccidentImage(new File([blob], url.split("/").pop() || "benchmark.jpg", { type: blob.type || "image/jpeg" }));
}

export type PlumeResult = {
  lethal: number; high: number; warning: number;
  lethalWidth: number; highWidth: number; warningWidth: number;
  affectedPeople: number; model: string;
};

function concentrationAt(x:number, wind:number, sourceRate=80000, height=2.5){
  const sy=.08*x/Math.sqrt(1+.0001*x),sz=.06*x/Math.sqrt(1+.0015*x);
  return sourceRate/(2*Math.PI*wind*sy*sz)*Math.exp(-(height*height)/(2*sz*sz));
}

function thresholdDistance(threshold:number, minute:number, wind:number){
  const maxDistance=Math.max(20,wind*minute*60);let last=20;
  for(let x=20;x<=Math.min(maxDistance,3200);x+=10)if(concentrationAt(x,wind)>=threshold)last=x;
  const sy=.08*last/Math.sqrt(1+.0001*last);return {distance:last,width:sy*4.3};
}

export function computeGaussianPlume(minute:number,wind=3.4):PlumeResult{
  const lethal=thresholdDistance(145,minute,wind),high=thresholdDistance(29,minute,wind),warning=thresholdDistance(2.9,minute,wind);
  const area=Math.PI*(warning.distance/2)*(warning.width/2); const affectedPeople=Math.round(area*.0078);
  return {lethal:lethal.distance,high:high.distance,warning:warning.distance,lethalWidth:lethal.width,highWidth:high.width,warningWidth:warning.width,affectedPeople,model:"Gaussian Plume · Pasquill-D"};
}

export type RouteNode={id:string;x:number;z:number};
export type RouteResult={path:RouteNode[];distance:number;eta:number;visited:number;algorithm:string};
const nodes:RouteNode[]=[{id:"S",x:-35,z:-30},{id:"A",x:-22,z:-17},{id:"B",x:-13,z:-10},{id:"I",x:-3,z:-3},{id:"C",x:-42,z:-4},{id:"D",x:-25,z:7},{id:"E",x:-11,z:5},{id:"F",x:-31,z:20}];
const edges=["S-A","A-B","B-I","S-C","C-D","D-E","E-I","C-F","F-E"];
const metric=(a:RouteNode,b:RouteNode)=>Math.hypot(a.x-b.x,a.z-b.z);

export function computeAStarRoute(blocked=false):RouteResult{
  const start="S",goal="I",blockedEdges=blocked?new Set(["B-I","I-B"]):new Set<string>();
  const open=new Set([start]),came=new Map<string,string>(),g=new Map(nodes.map(n=>[n.id,Infinity])),f=new Map(nodes.map(n=>[n.id,Infinity]));g.set(start,0);f.set(start,metric(nodes[0],nodes[3]));let visited=0;
  while(open.size){let current=[...open].sort((a,b)=>(f.get(a)??Infinity)-(f.get(b)??Infinity))[0];visited++;if(current===goal){const ids=[current];while(came.has(current)){current=came.get(current)!;ids.unshift(current)}const path=ids.map(id=>nodes.find(n=>n.id===id)!);const distance=Math.round((g.get(goal)??0)*78);return {path,distance,eta:Math.ceil(distance/520),visited,algorithm:"A* · Euclidean heuristic"}}
    open.delete(current);for(const edge of edges){const [a,b]=edge.split("-");let neighbor:string|undefined;if(a===current)neighbor=b;if(b===current)neighbor=a;if(!neighbor||blockedEdges.has(`${current}-${neighbor}`))continue;const cn=nodes.find(n=>n.id===current)!,nn=nodes.find(n=>n.id===neighbor)!;const tentative=(g.get(current)??Infinity)+metric(cn,nn);if(tentative<(g.get(neighbor)??Infinity)){came.set(neighbor,current);g.set(neighbor,tentative);f.set(neighbor,tentative+metric(nn,nodes[3]));open.add(neighbor)}}}
  return {path:[],distance:0,eta:0,visited,algorithm:"A* · no path"};
}
