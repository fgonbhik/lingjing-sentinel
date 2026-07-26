"use client";

import { useMemo, useState } from "react";
import {
  analyzeAccidentImageUrl,
  warmOnnxModel,
  type VisionResult,
} from "./decision-engine";

type ExpectedLabel = "hazard" | "normal";
type BenchmarkResult = {
  predicted: ExpectedLabel;
  label: string;
  confidence: number;
  inferenceMs: number;
};

const benchmarkSamples = [
  {
    id: "fire-01",
    title: "近景火焰",
    image: "./ai-benchmark/fire-01-campfire-flames.jpg",
    expected: "hazard" as ExpectedLabel,
    source: "Wikimedia Commons · Public Domain",
    initial: { predicted: "hazard" as ExpectedLabel, label: "明火", confidence: .6703, inferenceMs: 82 },
  },
  {
    id: "fire-02",
    title: "户外明火",
    image: "./ai-benchmark/fire-02-campfire.jpg",
    expected: "hazard" as ExpectedLabel,
    source: "Wikimedia Commons · Public Domain",
    initial: { predicted: "hazard" as ExpectedLabel, label: "明火", confidence: .9171, inferenceMs: 78 },
  },
  {
    id: "smoke-01",
    title: "建筑火灾烟雾",
    image: "./ai-benchmark/fire-smoke-06-model-sample.webp",
    expected: "hazard" as ExpectedLabel,
    source: "模型仓库演示样本 · MIT",
    initial: { predicted: "hazard" as ExpectedLabel, label: "烟雾+明火", confidence: .9099, inferenceMs: 81 },
  },
  {
    id: "normal-01",
    title: "北京地图底图",
    image: "./beijing-map-base.jpg",
    expected: "normal" as ExpectedLabel,
    source: "项目地图资产",
    initial: { predicted: "normal" as ExpectedLabel, label: "未检出", confidence: 0, inferenceMs: 128 },
  },
  {
    id: "normal-02",
    title: "道路地图底图",
    image: "./real-map-base.jpg",
    expected: "normal" as ExpectedLabel,
    source: "项目地图资产",
    initial: { predicted: "normal" as ExpectedLabel, label: "未检出", confidence: 0, inferenceMs: 74 },
  },
  {
    id: "normal-03",
    title: "智慧城市预览",
    image: "./og-future-city.png",
    expected: "normal" as ExpectedLabel,
    source: "项目视觉资产",
    initial: { predicted: "normal" as ExpectedLabel, label: "未检出", confidence: 0, inferenceMs: 100 },
  },
  {
    id: "false-positive-01",
    title: "橙色城市灯光",
    image: "./og.png",
    expected: "normal" as ExpectedLabel,
    source: "项目视觉资产 · 误判样本",
    initial: { predicted: "hazard" as ExpectedLabel, label: "烟雾", confidence: .5557, inferenceMs: 95 },
  },
] as const;

function calculateMetrics(results: Record<string, BenchmarkResult>) {
  let tp = 0, fp = 0, tn = 0, fn = 0;
  for (const sample of benchmarkSamples) {
    const predicted = results[sample.id]?.predicted ?? sample.initial.predicted;
    if (sample.expected === "hazard" && predicted === "hazard") tp += 1;
    if (sample.expected === "normal" && predicted === "hazard") fp += 1;
    if (sample.expected === "normal" && predicted === "normal") tn += 1;
    if (sample.expected === "hazard" && predicted === "normal") fn += 1;
  }
  const precision = tp / Math.max(1, tp + fp);
  const recall = tp / Math.max(1, tp + fn);
  const f1 = 2 * precision * recall / Math.max(.0001, precision + recall);
  const accuracy = (tp + tn) / Math.max(1, tp + tn + fp + fn);
  return { tp, fp, tn, fn, precision, recall, f1, accuracy };
}

export default function AiEvidenceCenter({
  vision,
  onClose,
}: {
  vision: VisionResult;
  onClose: () => void;
}) {
  const [results, setResults] = useState<Record<string, BenchmarkResult>>(
    Object.fromEntries(benchmarkSamples.map((sample) => [sample.id, sample.initial])),
  );
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("已载入最近一次离线实测结果");
  const metrics = useMemo(() => calculateMetrics(results), [results]);
  const meanLatency = Math.round(
    Object.values(results).reduce((sum, result) => sum + result.inferenceMs, 0) /
    Math.max(1, Object.values(results).length),
  );

  const rerunBenchmark = async () => {
    setRunning(true);
    setProgress(0);
    setStatus("正在初始化本地 ONNX 模型…");
    try {
      await warmOnnxModel();
      const next: Record<string, BenchmarkResult> = {};
      for (let index = 0; index < benchmarkSamples.length; index += 1) {
        const sample = benchmarkSamples[index];
        setStatus(`正在验证 ${index + 1}/${benchmarkSamples.length}：${sample.title}`);
        const result = await analyzeAccidentImageUrl(sample.image);
        const top = result.detections[0];
        next[sample.id] = {
          predicted: result.detections.length ? "hazard" : "normal",
          label: result.detections.map((item) => item.labelZh).filter((item, itemIndex, values) => values.indexOf(item) === itemIndex).join("+") || "未检出",
          confidence: top?.confidence ?? 0,
          inferenceMs: result.inferenceMs,
        };
        setResults({ ...next });
        setProgress((index + 1) / benchmarkSamples.length * 100);
      }
      setStatus("本地验证完成 · 指标由当前浏览器实时计算");
    } catch (error) {
      setStatus(`验证中断：${error instanceof Error ? error.message : "未知错误"}`);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="evidence-layer" role="presentation" onMouseDown={onClose}>
      <section className="evidence-dialog" role="dialog" aria-modal="true" aria-label="AI 可答辩证据中心" onMouseDown={(event) => event.stopPropagation()}>
        <header className="evidence-head">
          <div>
            <span>AI EVIDENCE CENTER · LOCAL INFERENCE</span>
            <h2>AI 可答辩证据中心</h2>
            <p>模型、数据、指标、误判和算法边界均可现场复核</p>
          </div>
          <div className="evidence-head-status">
            <b className={vision.modelMode === "explainable-fallback" ? "warning" : ""}>
              {vision.modelMode === "onnx" ? "ONNX 实时推理" : vision.modelMode === "demo" ? "模型待上传触发" : "已明确降级"}
            </b>
            <button aria-label="关闭 AI 证据中心" onClick={onClose}>×</button>
          </div>
        </header>

        <div className="evidence-scroll">
          <section className="model-proof">
            <div className="model-identity">
              <div className="model-chip">ONNX</div>
              <div>
                <span>真实本地视觉模型</span>
                <h3>YOLO-26n Fire & Smoke</h3>
                <p>FP32 · 输入 1×3×640×640 · 输出 300×6 · 模型文件 9.81 MB</p>
              </div>
              <dl>
                <div><dt>运行位置</dt><dd>浏览器本机 / WASM</dd></div>
                <div><dt>网络依赖</dt><dd>无 · 图片不上传</dd></div>
                <div><dt>类别</dt><dd>烟雾 / 明火</dd></div>
                <div><dt>来源许可</dt><dd>Hugging Face · MIT</dd></div>
              </dl>
            </div>
            <div className="current-inference">
              <span>当前上传图片</span>
              <strong>{vision.modelName}</strong>
              <div>
                <b>{vision.type}</b>
                <em>{vision.modelMode === "demo" ? "等待上传" : `${(vision.confidence * 100).toFixed(1)}%`}</em>
                <i>{vision.inferenceMs || "—"} ms</i>
              </div>
              <p>{vision.summary}</p>
            </div>
          </section>

          <section className="metric-section">
            <header>
              <div><span>PROJECT SMOKE TEST</span><h3>项目内置 7 例小型验证集</h3></div>
              <button disabled={running} onClick={rerunBenchmark}>{running ? "验证运行中…" : "重新运行本地验证"}</button>
            </header>
            <div className="benchmark-progress"><i style={{ width: `${progress}%` }} /><span>{status}</span></div>
            <div className="metric-grid">
              <div><span>Accuracy</span><b>{(metrics.accuracy * 100).toFixed(1)}%</b><em>准确率</em></div>
              <div><span>Precision</span><b>{(metrics.precision * 100).toFixed(1)}%</b><em>精确率</em></div>
              <div><span>Recall</span><b>{(metrics.recall * 100).toFixed(1)}%</b><em>召回率</em></div>
              <div><span>F1 Score</span><b>{(metrics.f1 * 100).toFixed(1)}%</b><em>平衡指标</em></div>
              <div><span>Mean latency</span><b>{meanLatency}ms</b><em>当前设备均值</em></div>
            </div>
            <div className="confusion-matrix" aria-label="混淆矩阵">
              <div className="matrix-axis">预测结果 →</div>
              <div className="matrix-label">实际险情</div><div className="matrix-cell good"><b>{metrics.tp}</b><span>TP 正确告警</span></div><div className="matrix-cell bad"><b>{metrics.fn}</b><span>FN 漏报</span></div>
              <div className="matrix-label">实际正常</div><div className="matrix-cell bad"><b>{metrics.fp}</b><span>FP 误报</span></div><div className="matrix-cell good"><b>{metrics.tn}</b><span>TN 正确排除</span></div>
            </div>
            <p className="metric-disclaimer">该 7 例集合用于现场功能复核，不代表模型泛化能力。模型作者报告：Precision 73.6%、Recall 68.3%、AP50 74.3%；本系统不把作者指标冒充为自主测试结果。</p>
          </section>

          <section className="sample-section">
            <header><span>TEST CASES & ERROR ANALYSIS</span><h3>样本结果与真实误判案例</h3></header>
            <div className="sample-grid">
              {benchmarkSamples.map((sample) => {
                const result = results[sample.id] ?? sample.initial;
                const passed = result.predicted === sample.expected;
                return <article className={passed ? "pass" : "fail"} key={sample.id}>
                  <div className="sample-image"><img src={sample.image} alt={sample.title}/><i>{passed ? "PASS" : "FALSE POSITIVE"}</i></div>
                  <div><strong>{sample.title}</strong><span>标注：{sample.expected === "hazard" ? "险情" : "正常"}　预测：{result.label}</span><em>{result.confidence ? `${(result.confidence * 100).toFixed(1)}%` : "无目标"} · {result.inferenceMs}ms</em><small>{sample.source}</small></div>
                </article>;
              })}
            </div>
            <div className="error-analysis"><b>误判解释</b><p>橙色城市灯光样本被模型识别为烟雾，说明颜色与局部纹理可能引发误报。因此系统将视觉模型定位为“告警触发器”，最终响应必须结合气体传感器、车辆遥测和人工复核。</p></div>
          </section>

          <section className="algorithm-boundary">
            <header><span>TECHNOLOGY BOUNDARY</span><h3>明确区分模型、物理计算与搜索算法</h3></header>
            <div>
              <article className="ai"><i>AI</i><b>视觉目标检测</b><strong>YOLO-26n · ONNX</strong><p>由训练模型识别烟雾与明火，展示置信度、目标框和推理耗时。</p></article>
              <article><i>PHY</i><b>风险扩散计算</b><strong>Gaussian Plume · Pasquill-D</strong><p>基于风速、源强和稳定度的物理模型，不宣称为人工智能。</p></article>
              <article><i>ALG</i><b>道路路径规划</b><strong>OSM Graph · A*</strong><p>使用欧氏启发函数搜索真实道路图，不宣称为机器学习。</p></article>
              <article><i>AGT</i><b>协同任务编排</b><strong>Auditable deterministic agents</strong><p>多角色软件智能体按任务和约束协作，保留消息与决策日志，不宣称为自由推理大模型。</p></article>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
