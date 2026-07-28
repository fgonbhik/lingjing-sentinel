import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (relative) => readFile(new URL(relative, root), "utf8");

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("contract", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("比赛入口合同：登录后先进入新北京智慧城市大屏", async () => {
  const [page, dashboard] = await Promise.all([
    read("app/page.tsx"),
    read("app/SmartCityDashboard.tsx"),
  ]);
  assert.match(page, /useState<"city"\|"emergency">\("city"\)/);
  assert.match(page, /admin/);
  assert.match(page, /123456/);
  assert.match(page, /if\(!currentUser\)return <AuthPortal/);
  assert.match(page, /platformView==="city"/);
  assert.match(page, /<SmartCityDashboard/);
  assert.match(page, /<CityScene/);
  assert.match(dashboard, /future-demo-card/);
});

test("三维动画合同：首帧时间不得产生负数曲线采样", async () => {
  const scene = await read("app/SmartCityScene.tsx");
  assert.match(scene, /Math\.max\(0,\s*\(time - startTime\) \/ 1000\)/);
});

test("模型真实性合同：建筑和车辆保持比赛级程序化精修", async () => {
  const [dashboardScene, emergencyScene] = await Promise.all([
    read("app/SmartCityScene.tsx"),
    read("app/CityScene.tsx"),
  ]);
  assert.match(dashboardScene, /RoundedBoxGeometry/);
  assert.match(dashboardScene, /mechanicalRooms/);
  assert.match(dashboardScene, /roofAntennas/);
  assert.match(dashboardScene, /dashboardVehicles/);
  assert.match(emergencyScene, /competition-realism-v2/);
  assert.match(emergencyScene, /消防车伸缩云梯与器材组/);
  assert.match(emergencyScene, /tankCatwalk/);
  assert.match(emergencyScene, /policeHood/);
});

test("低亮写实合同：场景曝光和建筑泛光保持克制", async () => {
  const [dashboardScene, emergencyScene] = await Promise.all([
    read("app/SmartCityScene.tsx"),
    read("app/CityScene.tsx"),
  ]);
  assert.match(dashboardScene, /toneMappingExposure = 0\.82/);
  assert.match(dashboardScene, /buildingEdgeMaterial\.opacity = lights \? \(night \? 0\.11 : 0\.055\)/);
  assert.match(dashboardScene, /THREE\.NormalBlending/);
  assert.match(emergencyScene, /renderer\.toneMappingExposure=night\?\.58:\.88/);
});

test("唯一入口合同：仅保留右下角灵境哨兵入口", async () => {
  const dashboard = await read("app/SmartCityDashboard.tsx");
  assert.equal((dashboard.match(/立即进入演示项目/g) ?? []).length, 1);
  assert.equal((dashboard.match(/future-demo-card/g) ?? []).length, 1);
  assert.doesNotMatch(dashboard, /启动灵境哨兵|AI 演示项目/);
});

test("AI 证据合同：真实 ONNX 模型、运行时和证据界面均存在", async () => {
  const [engine, evidence, page, model, wasm] = await Promise.all([
    read("app/decision-engine.ts"),
    read("app/AiEvidenceCenter.tsx"),
    read("app/page.tsx"),
    stat(new URL("../public/models/fire-smoke-yolo26n.onnx", import.meta.url)),
    stat(new URL("../public/models/ort-wasm-simd-threaded.wasm", import.meta.url)),
  ]);
  assert.ok(model.size > 5_000_000, "ONNX 模型文件异常");
  assert.ok(wasm.size > 10_000_000, "ONNX WASM 运行时文件异常");
  assert.match(engine, /InferenceSession\.create/);
  assert.match(engine, /modelMode: "onnx"/);
  assert.match(engine, /explainable-fallback/);
  assert.match(evidence, /Precision/);
  assert.match(evidence, /Recall/);
  assert.match(evidence, /F1 Score/);
  assert.match(evidence, /FALSE POSITIVE/);
  assert.match(evidence, /不宣称为人工智能/);
  assert.match(page, /上传图片 · 本地识别/);
  assert.match(page, /查看 AI 证据链/);
});

test("协同审计合同：任务输入、智能体消息和决策依据可导出", async () => {
  const [audit, page] = await Promise.all([
    read("app/AgentAuditDialog.tsx"),
    read("app/page.tsx"),
  ]);
  assert.match(audit, /事件输入/);
  assert.match(audit, /MESSAGE TRACE/);
  assert.match(audit, /决策依据/);
  assert.match(audit, /导出 JSON 审计日志/);
  assert.match(audit, /不宣称为大语言模型自由推理/);
  assert.match(page, /查看协同审计/);
});

test("关键演示能力合同：数据详情、封路重规划和报告仍存在", async () => {
  const [page, dashboard, dataDialog] = await Promise.all([
    read("app/page.tsx"),
    read("app/SmartCityDashboard.tsx"),
    read("app/DataDetailDialog.tsx"),
  ]);
  assert.match(page, /封闭东二环路段并按真实道路重规划/);
  assert.match(page, /生成应急处置报告/);
  assert.match(page, /<DataDetailDialog/);
  assert.match(dashboard, /<DataDetailDialog/);
  assert.match(dataDialog, /role="dialog"/);
});

test("生产构建可以渲染当前产品，不再验证早期模板", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /京域智城/);
  assert.match(html, /安全环境初始化中/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("离线交付合同：模型、地图与相对静态资源全部可用", async () => {
  const [html, server] = await Promise.all([
    read("offline-demo/index.html"),
    read("serve-demo.mjs"),
  ]);
  assert.doesNotMatch(html, /["']\/assets\//);
  assert.match(html, /\.\/assets\//);
  assert.ok(server.includes('".wasm": "application/wasm"'));
  assert.ok(server.includes('".mjs": "text/javascript'));
  await Promise.all([
    access(new URL("../offline-demo/beijing-buildings.json", import.meta.url)),
    access(new URL("../offline-demo/models/fire-smoke-yolo26n.onnx", import.meta.url)),
    access(new URL("../offline-demo/models/ort-wasm-simd-threaded.wasm", import.meta.url)),
    access(new URL("../offline-demo/ai-benchmark/fire-01-campfire-flames.jpg", import.meta.url)),
  ]);
});
