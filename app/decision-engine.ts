export type VisionResult = {
  type: string;
  confidence: number;
  smokeRatio: number;
  flameRatio: number;
  edgeDensity: number;
  persons: number;
  summary: string;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export async function analyzeAccidentImage(file: File): Promise<VisionResult> {
  const bitmap = await createImageBitmap(file);
  const width = 240, height = Math.max(120, Math.round(width * bitmap.height / bitmap.width));
  const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(bitmap, 0, 0, width, height); bitmap.close();
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
  const type=flameRatio>.045?"火灾伴随危险品泄漏":smokeRatio>.16?"疑似有毒气体泄漏":"道路危化品事故";
  const confidence=clamp(.68+smokeRatio*.72+edgeDensity*.16+flameRatio*.8,.71,.982);
  const persons=Math.max(3,Math.round(8+edgeDensity*46+flameRatio*30));
  return {type,confidence,smokeRatio,flameRatio,edgeDensity,persons,summary:`检测到烟羽特征 ${(smokeRatio*100).toFixed(1)}%，边缘复杂度 ${(edgeDensity*100).toFixed(1)}%。建议启动危化品二级响应。`};
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
