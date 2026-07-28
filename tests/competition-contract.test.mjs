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

test("清晰写实合同：日夜场景兼顾可读性和克制泛光", async () => {
  const [dashboardScene, emergencyScene] = await Promise.all([
    read("app/SmartCityScene.tsx"),
    read("app/CityScene.tsx"),
  ]);
  assert.match(dashboardScene, /toneMappingExposure = 1\.26/);
  assert.match(dashboardScene, /buildingEdgeMaterial\.opacity = lights \? \(night \? 0\.045 : 0\.025\)/);
  assert.match(dashboardScene, /THREE\.NormalBlending/);
  assert.match(emergencyScene, /renderer\.toneMappingExposure=night\?\.82:1\.08/);
  assert.match(dashboardScene, /contactShadows/);
  assert.match(dashboardScene, /const UNIFIED_BUILDING_COLOR = 0x4baee7/);
  assert.match(dashboardScene, /color\.setHex\(0xffffff\)/);
  assert.doesNotMatch(dashboardScene, /color\.setHSL\(/);
  assert.match(dashboardScene, /emissiveIntensity = lights \? \(night \? 0\.66 : 0\.48\)/);
  assert.match(dashboardScene, /skylineMaterial\.color\.setHex\(UNIFIED_BUILDING_COLOR\)/);
  assert.match(dashboardScene, /buildingMaterial\.color\.setHex\(UNIFIED_BUILDING_COLOR\)/);
  assert.doesNotMatch(dashboardScene, /buildingMaterial\.onBeforeCompile/);
  assert.doesNotMatch(dashboardScene, /windowUV|windowNoise|windowStrength/);
  assert.match(dashboardScene, /const proportionalHeight = 7 \+ footprintSpan \* \(item\.core \? 8\.8 : 7\)/);
  assert.match(dashboardScene, /const footprintSpan = Math\.sqrt\(width \* depth\)/);
  assert.match(dashboardScene, /color: 0x0b466b/);
  assert.doesNotMatch(dashboardScene, /color: 0x01060a/);
  assert.match(dashboardScene, /id: "yanqing", label: "延庆区"/);
  assert.match(dashboardScene, /id: "miyun", label: "密云区"/);
  assert.match(dashboardScene, /id: "pinggu", label: "平谷区"/);
  assert.match(dashboardScene, /new THREE\.CircleGeometry\(210, 192\)/);
  assert.match(dashboardScene, /new THREE\.SphereGeometry\(520, 36, 22\)/);
  assert.match(dashboardScene, /uniform float uSkyTime/);
  assert.match(dashboardScene, /uniform float uFloorTime/);
  assert.match(dashboardScene, /float gridLine\(vec2 position, float size\)/);
  assert.match(dashboardScene, /const floorOrbitGroup = new THREE\.Group\(\)/);
  assert.match(dashboardScene, /floorOrbitGroup\.rotation\.y = elapsed \* 0\.012/);
  assert.match(dashboardScene, /const x = \(Math\.min\(\.\.\.xs\) \+ Math\.max\(\.\.\.xs\)\) \/ 1\.95/);
  assert.match(dashboardScene, /Math\.min\(6\.6, \(Math\.max\(\.\.\.xs\) - Math\.min\(\.\.\.xs\)\) \/ 2\.75\)/);
  assert.match(dashboardScene, /slice\(0, 6200\)/);
  assert.match(dashboardScene, /new Float32Array\(1080 \* 3\)/);
});

test("顶部交互合同：品牌、标题、状态、时间、用户、全屏和导航均可操作", async () => {
  const dashboard = await read("app/SmartCityDashboard.tsx");
  assert.match(dashboard, /className="future-brand future-header-action"/);
  assert.match(dashboard, /className="future-heading future-header-action"/);
  assert.match(dashboard, /className="future-system future-header-action"/);
  assert.match(dashboard, /className="future-time future-header-action"/);
  assert.match(dashboard, /className="future-user future-user-profile future-header-action"/);
  assert.match(dashboard, /onClick=\{toggleFullscreen\}/);
  assert.match(dashboard, /selectNavigation\(item, index\)/);
});

test("视觉层级合同：科幻背景和左右业务分色完整存在", async () => {
  const [dashboard, polish] = await Promise.all([
    read("app/SmartCityDashboard.tsx"),
    read("app/panel-polish.css"),
  ]);
  assert.match(dashboard, /future-atmosphere/);
  assert.match(polish, /future-star-drift/);
  assert.match(polish, /future-beam-a/);
  assert.match(polish, /\.city-vitals\{--panel-accent:#36d9ff/);
  assert.match(polish, /\.event-center\{--panel-accent:#ff8057/);
  assert.match(polish, /\.eco-panel\{--panel-accent:#42e69a/);
  assert.match(polish, /\.ai-index\{--panel-accent:#9d8cff/);
  assert.match(polish, /\.traffic-panel\{--panel-accent:#ffc15c/);
  assert.match(polish, /\.district-rank\{--panel-accent:#579dff/);
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

test("建筑实景交互合同：点击建筑显示名称、照片、匹配说明与授权来源", async () => {
  const [scene, dialog] = await Promise.all([
    read("app/SmartCityScene.tsx"),
    read("app/DataDetailDialog.tsx"),
  ]);
  assert.match(scene, /photoForBuilding\(building\)/);
  assert.match(scene, /公开地图数据暂未标注该楼宇名称/);
  assert.match(scene, /对应建筑群实景/);
  assert.match(scene, /区域实景参考/);
  assert.match(dialog, /data-detail-photo/);
  assert.match(dialog, /点击查看大图/);
  assert.match(dialog, /图片授权与原始来源/);
  await Promise.all([
    access(new URL("../public/building-photos/beijing-cbd-day.jpg", import.meta.url)),
    access(new URL("../public/building-photos/china-world.jpg", import.meta.url)),
    access(new URL("../public/building-photos/cctv-headquarters.jpg", import.meta.url)),
  ]);
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
    access(new URL("../offline-demo/building-photos/beijing-cbd-day.jpg", import.meta.url)),
    access(new URL("../offline-demo/building-photos/china-world.jpg", import.meta.url)),
    access(new URL("../offline-demo/building-photos/cctv-headquarters.jpg", import.meta.url)),
  ]);
});

test("demo stability contract: occlusion safety, smooth tracking and stable viewport", async () => {
  const [scene, page, globals, mapStyles] = await Promise.all([
    read("app/CityScene.tsx"),
    read("app/page.tsx"),
    read("app/globals.css"),
    read("app/map-enhancements.css"),
  ]);
  assert.match(scene, /buildingOccluders/);
  assert.match(scene, /fadeBuildingForVisibility/);
  assert.match(scene, /stableFollowPosition/);
  assert.match(scene, /camera\.position\.set\(38,48,42\)/);
  assert.match(scene, /resizeFrame=requestAnimationFrame/);
  assert.match(page, /className="shell emergency-shell"/);
  assert.match(globals, /calc\(100dvh - 188px\)/);
  assert.match(mapStyles, /contain:strict/);
});
