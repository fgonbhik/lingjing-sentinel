import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";
import * as ort from "onnxruntime-web";

const modelPath = "./public/models/fire-smoke-yolo26n.onnx";
const samples = [
  { id: "fire-01", expected: "hazard", file: "./public/ai-benchmark/fire-01-campfire-flames.jpg" },
  { id: "fire-02", expected: "hazard", file: "./public/ai-benchmark/fire-02-campfire.jpg" },
  { id: "smoke-01", expected: "hazard", file: "./public/ai-benchmark/fire-smoke-06-model-sample.webp" },
  { id: "normal-01", expected: "normal", file: "./public/beijing-map-base.jpg" },
  { id: "normal-02", expected: "normal", file: "./public/real-map-base.jpg" },
  { id: "normal-03", expected: "normal", file: "./public/og-future-city.png" },
  { id: "false-positive-01", expected: "normal", file: "./public/og.png" },
];

const session = await ort.InferenceSession.create(modelPath, {
  executionProviders: ["wasm"],
});

async function preprocess(filePath) {
  const { data, info } = await sharp(filePath)
    .removeAlpha()
    .resize(640, 640, {
      fit: "contain",
      background: { r: 114, g: 114, b: 114 },
    })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const input = new Float32Array(3 * 640 * 640);
  const plane = 640 * 640;
  for (let i = 0; i < plane; i += 1) {
    input[i] = data[i * info.channels] / 255;
    input[plane + i] = data[i * info.channels + 1] / 255;
    input[plane * 2 + i] = data[i * info.channels + 2] / 255;
  }
  return new ort.Tensor("float32", input, [1, 3, 640, 640]);
}

const results = [];
for (const sample of samples) {
  const started = performance.now();
  const output = await session.run({ images: await preprocess(sample.file) });
  const rows = output.output0.data;
  const detections = [];
  for (let i = 0; i < 300; i += 1) {
    const offset = i * 6;
    const score = Number(rows[offset + 4]);
    if (score < 0.25) continue;
    detections.push({
      classId: Math.round(Number(rows[offset + 5])),
      score: Number(score.toFixed(4)),
    });
  }
  detections.sort((a, b) => b.score - a.score);
  const predicted = detections.length ? "hazard" : "normal";
  const result = {
    ...sample,
    predicted,
    passed: predicted === sample.expected,
    topClass: detections[0]?.classId === 0 ? "smoke" : detections[0]?.classId === 1 ? "fire" : "none",
    confidence: detections[0]?.score ?? 0,
    inferenceMs: Math.round(performance.now() - started),
  };
  results.push(result);
  console.log(`${result.passed ? "PASS" : "FAIL"} ${sample.id} expected=${sample.expected} predicted=${predicted} class=${result.topClass} confidence=${result.confidence} latency=${result.inferenceMs}ms`);
}

const tp = results.filter((item) => item.expected === "hazard" && item.predicted === "hazard").length;
const fp = results.filter((item) => item.expected === "normal" && item.predicted === "hazard").length;
const tn = results.filter((item) => item.expected === "normal" && item.predicted === "normal").length;
const fn = results.filter((item) => item.expected === "hazard" && item.predicted === "normal").length;
const precision = tp / Math.max(1, tp + fp);
const recall = tp / Math.max(1, tp + fn);
const f1 = 2 * precision * recall / Math.max(.0001, precision + recall);
const accuracy = (tp + tn) / results.length;
const report = {
  generatedAt: new Date().toISOString(),
  model: {
    name: "YOLO-26n Fire & Smoke",
    format: "ONNX FP32",
    input: [1, 3, 640, 640],
    sourceReported: { precision: .736, recall: .683, ap50: .743 },
  },
  projectSmokeTest: { count: results.length, tp, fp, tn, fn, precision, recall, f1, accuracy },
  results,
  limitation: "该小型验证集仅用于项目回归与现场复核，不代表模型泛化能力。",
};
await mkdir("./outputs", { recursive: true });
await writeFile("./outputs/ai-benchmark-report.json", JSON.stringify(report, null, 2), "utf8");
console.log(`METRICS accuracy=${(accuracy * 100).toFixed(1)}% precision=${(precision * 100).toFixed(1)}% recall=${(recall * 100).toFixed(1)}% f1=${(f1 * 100).toFixed(1)}%`);

if (accuracy < .7 || recall < .66 || fp > 2) {
  throw new Error("本地模型回归指标低于演示安全阈值");
}
