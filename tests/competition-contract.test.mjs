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
  assert.match(dashboardScene, /buildingEdgeMaterial\.opacity = lights \? \(night \? 0\.035 : 0\.022\)/);
  assert.match(dashboardScene, /side: THREE\.BackSide/);
  assert.doesNotMatch(dashboardScene, /buildingEdgeMaterial[\s\S]{0,240}wireframe:\s*true/);
  assert.match(dashboardScene, /width \* 0\.512/);
  assert.match(dashboardScene, /depth \* 0\.512/);
  assert.match(dashboardScene, /THREE\.NormalBlending/);
  assert.match(emergencyScene, /renderer\.toneMappingExposure=night\?1\.02:1\.12/);
  assert.match(dashboardScene, /contactShadows/);
  assert.match(dashboardScene, /contactShadows\.visible = false/);
  assert.match(dashboardScene, /new THREE\.PerspectiveCamera\(42, 1, 1, 1120\)/);
  assert.match(dashboardScene, /const UNIFIED_BUILDING_COLOR = 0x4baee7/);
  assert.match(dashboardScene, /const shade = \(item\.id % 11\) \/ 10/);
  assert.match(dashboardScene, /color\.setRGB\(/);
  assert.doesNotMatch(dashboardScene, /color\.setHSL\(/);
  assert.match(dashboardScene, /emissiveIntensity = lights \? \(night \? 0\.72 : 0\.52\)/);
  assert.match(dashboardScene, /skylineMaterial\.color\.setHex\(UNIFIED_BUILDING_COLOR\)/);
  assert.match(dashboardScene, /buildingMaterial\.color\.setHex\(UNIFIED_BUILDING_COLOR\)/);
  assert.doesNotMatch(dashboardScene, /buildingMaterial\.onBeforeCompile/);
  assert.doesNotMatch(dashboardScene, /windowUV|windowNoise|windowStrength/);
  assert.match(dashboardScene, /const proportionalHeight = \(8 \+ footprintSpan \* \(item\.core \? 9\.2 : 7\.6\)\) \* 1\.1/);
  assert.match(dashboardScene, /const footprintSpan = Math\.sqrt\(width \* depth\)/);
  assert.match(dashboardScene, /color: 0x86b6c7/);
  assert.doesNotMatch(dashboardScene, /color: 0x01060a/);
  assert.match(dashboardScene, /id: "yanqing", label: "延庆区"/);
  assert.match(dashboardScene, /id: "miyun", label: "密云区"/);
  assert.match(dashboardScene, /id: "pinggu", label: "平谷区"/);
  assert.match(dashboardScene, /const CITY_BUILDING_SPREAD = 1\.42/);
  assert.match(dashboardScene, /const CITY_FOOTPRINT_SCALE = 1\.48/);
  assert.match(dashboardScene, /const CITY_HEIGHT_SCALE = 1\.36/);
  assert.match(dashboardScene, /renderer\.shadowMap\.autoUpdate = false/);
  assert.match(dashboardScene, /if \(width === renderedWidth && height === renderedHeight\) return/);
  assert.match(dashboardScene, /const CITY_GROUND_RADIUS = 286/);
  assert.match(dashboardScene, /const CITY_SKY_RADIUS = 680/);
  assert.match(dashboardScene, /new THREE\.CircleGeometry\(CITY_GROUND_RADIUS, 224\)/);
  assert.match(dashboardScene, /new THREE\.SphereGeometry\(CITY_SKY_RADIUS, 40, 24\)/);
  assert.match(dashboardScene, /backgroundHorizon/);
  assert.match(dashboardScene, /backgroundDustPositions/);
  assert.match(dashboardScene, /new THREE\.TextureLoader\(\)\.load\("\.\/beijing-map-base\.jpg"\)/);
  assert.match(dashboardScene, /emissiveMap: cityMapTexture/);
  assert.match(dashboardScene, /uniform float uSkyTime/);
  assert.doesNotMatch(dashboardScene, /uniform float uFloorTime/);
  assert.match(dashboardScene, /float gridLine\(vec2 position, float size\)/);
  assert.match(dashboardScene, /const floorOrbitGroup = new THREE\.Group\(\)/);
  assert.match(dashboardScene, /floorOrbitGroup\.rotation\.y = elapsed \* 0\.012/);
  assert.match(dashboardScene, /const x = centerX \/ 0\.975 \* CITY_BUILDING_SPREAD/);
  assert.match(dashboardScene, /dominantAngle = Math\.atan2\(dz, dx\)/);
  assert.match(dashboardScene, /Math\.min\(6\.6, \(Math\.max\(\.\.\.localXs\) - Math\.min\(\.\.\.localXs\)\) \/ 2\.75\)/);
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

test("视觉层级合同：科幻背景、地图裁剪和独特交互框架完整存在", async () => {
  const [dashboard, scene, polish, frames, referenceOperations] = await Promise.all([
    read("app/SmartCityDashboard.tsx"),
    read("app/SmartCityScene.tsx"),
    read("app/panel-polish.css"),
    read("app/card-frames.css"),
    read("app/reference-operations.css"),
  ]);
  assert.match(dashboard, /future-atmosphere/);
  assert.match(dashboard, /5,275 栋地图内建筑在线/);
  assert.match(scene, /districtZones/);
  assert.match(scene, /facadeFins/);
  assert.match(scene, /facadeRails/);
  assert.match(scene, /annexRecords/);
  assert.match(scene, /crownRecords/);
  assert.match(scene, /setbackRecords/);
  assert.match(scene, /setbackTops/);
  assert.match(scene, /windowPanels/);
  assert.match(scene, /detailRecords\.length \* 16/);
  assert.match(scene, /depth \* 0\.518/);
  assert.match(scene, /width \* 0\.518/);
  assert.match(scene, /detailRecords\.length \* 6/);
  assert.match(scene, /const roofRecords = records/);
  assert.match(scene, /const detailRecords = records/);
  assert.match(scene, /color: 0x55b8dc/);
  assert.match(scene, /color: 0x2e84ad/);
  assert.match(scene, /grid\.visible = false/);
  assert.match(scene, /scan\.visible = false/);
  assert.match(scene, /floorOverlay\.visible = false/);
  assert.match(scene, /floorOrbitGroup\.visible = false/);
  assert.match(scene, /ground\.receiveShadow = false/);
  assert.match(scene, /cityMapTexture\.anisotropy = renderer\.capabilities\.getMaxAnisotropy\(\)/);
  assert.doesNotMatch(scene, /floorUniforms\.uFloorTime\.value = elapsed/);
  assert.doesNotMatch(scene, /backgroundHorizon\.rotation\.y = elapsed/);
  assert.doesNotMatch(scene, /backgroundDust\.rotation\.y = -elapsed/);
  assert.doesNotMatch(scene, /float scanRadius = mod\(uFloorTime/);
  assert.match(scene, /CITY_BUILDING_LIMIT = CITY_GROUND_RADIUS - 8/);
  assert.match(referenceOperations, /overflow:\s*clip/);
  assert.match(referenceOperations, /\.scene-scanline\s*\{[\s\S]*?display:\s*none/);
  assert.match(referenceOperations, /\.future-grid,[\s\S]*?animation:\s*none\s*!important/);
  assert.match(scene, /sourceRecords\.filter\(buildingFitsInsideMap\)/);
  assert.match(dashboard, /OSM 城市底图/);
  assert.match(polish, /future-star-drift/);
  assert.match(polish, /future-beam-a/);
  assert.match(polish, /\.city-vitals\{--panel-accent:#36d9ff/);
  assert.match(polish, /\.event-center\{--panel-accent:#ff8057/);
  assert.match(polish, /\.eco-panel\{--panel-accent:#42e69a/);
  assert.match(polish, /\.ai-index\{--panel-accent:#9d8cff/);
  assert.match(polish, /\.traffic-panel\{--panel-accent:#ffc15c/);
  assert.match(polish, /\.district-rank\{--panel-accent:#579dff/);
  assert.match(frames, /\.city-vitals\{/);
  assert.match(frames, /\.event-center\{/);
  assert.match(frames, /\.vital-grid>button:nth-child\(4\)/);
  assert.match(frames, /\.scene-controls button:nth-child\(6\)/);
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

test("建筑实景合同：本地核验照片优先，KartaView 按建筑坐标独立查询且不冒充已核验", async () => {
  const [scene, dialog] = await Promise.all([
    read("app/SmartCityScene.tsx"),
    read("app/DataDetailDialog.tsx"),
  ]);
  assert.match(scene, /photoForBuilding\(building, buildingRoads\)/);
  assert.match(scene, /verifiedBuildingPhotos\[building\.id\]/);
  assert.match(scene, /createKartaViewPhoto\(building, roads\)/);
  assert.match(scene, /closestStreetViewPoint/);
  assert.match(scene, /localPointToWgs84/);
  assert.match(scene, /api\.openstreetcam\.org\/2\.0\/photo/);
  assert.match(scene, /radius: "160"/);
  assert.match(scene, /lookupUrl/);
  assert.match(scene, /公开地图数据暂未标注该楼宇名称/);
  assert.match(scene, /建筑坐标独立检索 · 待人工核验/);
  assert.doesNotMatch(scene, /baidu|百度/i);
  assert.doesNotMatch(scene, /createBuildingSnapshot|buildingSnapshotCache|数字孪生模型快照/);
  assert.doesNotMatch(scene, /return buildingPhotoCatalog\.cbd/);
  assert.match(dialog, /data-detail-photo/);
  assert.match(dialog, /data-asset-id/);
  assert.match(dialog, /parseKartaViewPhoto/);
  assert.match(dialog, /点击查看真实街景/);
  assert.match(dialog, /图片授权与原始来源/);
  assert.match(dialog, /该建筑附近暂无 KartaView 街景覆盖/);
  assert.match(dialog, /系统不会使用其他建筑照片替代/);
  await Promise.all([
    access(new URL("../KARTAVIEW_STREET_IMAGERY.md", import.meta.url)),
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
  const [html, server, launcher] = await Promise.all([
    read("offline-demo/index.html"),
    read("serve-demo.mjs"),
    read("启动演示.bat"),
  ]);
  assert.doesNotMatch(html, /["']\/assets\//);
  assert.match(html, /\.\/assets\//);
  assert.ok(server.includes('".wasm": "application/wasm"'));
  assert.ok(server.includes('".mjs": "text/javascript'));
  assert.match(server, /EADDRINUSE/);
  assert.match(server, /openBrowser\(url\)/);
  assert.match(launcher, /runtime\\node\.exe/i);
  assert.match(launcher, /pause/i);
  await Promise.all([
    access(new URL("../runtime/node.exe", import.meta.url)),
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
  const [scene, page, globals, mapStyles, demoStyles] = await Promise.all([
    read("app/CityScene.tsx"),
    read("app/page.tsx"),
    read("app/globals.css"),
    read("app/map-enhancements.css"),
    read("app/demo-entry.css"),
  ]);
  assert.match(scene, /buildingOccluders/);
  assert.match(scene, /fadeBuildingForVisibility/);
  assert.match(scene, /stableFollowPosition/);
  assert.match(scene, /camera\.position\.set\(38,48,42\)/);
  assert.match(scene, /resizeFrame=requestAnimationFrame/);
  assert.match(page, /className="shell emergency-shell"/);
  assert.match(globals, /calc\(100dvh - 188px\)/);
  assert.match(mapStyles, /contain:strict/);
  assert.match(page, /suspended=\{demoEntryOpen\|\|activeModule/);
  assert.match(demoStyles, /overflow-x:hidden/);
  assert.match(demoStyles, /scrollbar-gutter:stable/);
  assert.match(demoStyles, /contain:strict/);
  assert.doesNotMatch(demoStyles, /backdrop-filter/);
  assert.doesNotMatch(demoStyles, /demo-fade\{from\{opacity:0;transform/);
});

test("四车救援分屏合同：独立三维摄像机、实时速度和路线信息完整存在", async () => {
  const [scene, page, styles] = await Promise.all([
    read("app/CityScene.tsx"),
    read("app/page.tsx"),
    read("app/map-enhancements.css"),
  ]);
  assert.match(scene, /tacticalFeeds/);
  assert.match(scene, /tacticalOffsets/);
  assert.match(scene, /renderer\.setScissorTest\(true\)/);
  assert.match(scene, /updateTacticalCamera/);
  assert.match(scene, /visualPlayhead/);
  assert.match(scene, /routeHeadingReady/);
  assert.match(scene, /splitRenderTick\+\+%2===0/);
  assert.match(scene, /tacticalFeeds\.forEach\(\(feed,index\)=>\{/);
  assert.doesNotMatch(scene, /if\(index!==renderIndex\)return/);
  assert.match(scene, /!splitViewRef\.current&&shadowTick%3/);
  assert.doesNotMatch(scene, /renderParity/);
  assert.doesNotMatch(scene, /updateBuildingOcclusion\(visibilityFocus,feed\.camera\)/);
  assert.doesNotMatch(scene, /chemicalTruck\.position\.x\+=/);
  assert.match(scene, /四车实时战术分屏/);
  assert.match(scene, /当前时速/);
  assert.match(scene, /执行路线/);
  assert.match(page, /▦ 四车分屏/);
  assert.match(page, /splitAutoActivatedRef/);
  assert.match(styles, /\.vehicle-feed-grid/);
  assert.match(styles, /\.feed-route/);
});

test("导演控制台布局合同：控制区位于三维画面之外", async () => {
  const [page, styles] = await Promise.all([
    read("app/page.tsx"),
    read("app/map-enhancements.css"),
  ]);
  assert.match(page, /<\/div>\s*<div className=\{`scenario-console phase-/);
  assert.match(styles, /\.map-panel>\.scenario-console\{position:relative/);
  assert.match(styles, /\.emergency-shell \.map\{min-height:0\}/);
});

test("智慧城市大屏可读性合同：顶部和左右数据字号已增强", async () => {
  const [styles, polish] = await Promise.all([
    read("app/smart-city.css"),
    read("app/panel-polish.css"),
  ]);
  assert.match(styles, /Competition-screen readability/);
  assert.match(styles, /\.future-heading h1\{font-size:29px/);
  assert.match(polish, /Side panels use their full height/);
  assert.match(polish, /Product Design pass: richer information wings/);
  assert.match(polish, /\.event-center \.event-list\{flex:1;display:grid/);
  assert.match(polish, /\.district-rank>div\{flex:1;display:flex/);
  assert.match(polish, /\.future-column \.future-demo-card>strong\{font-size:clamp\(22px/);
  assert.match(polish, /\.future-stage\{grid-template-columns:minmax\(310px,21%\)/);
});

test("数据详情差异化合同：每类可点击卡片拥有独立结构、配色与指标", async () => {
  const [dialog, styles, layout] = await Promise.all([
    read("app/DataDetailDialog.tsx"),
    read("app/detail-dialogs.css"),
    read("app/layout.tsx"),
  ]);
  for (const variant of ["ai", "vital", "event", "eco", "traffic", "district", "platform", "asset"]) {
    assert.match(dialog, new RegExp(`"${variant}"`));
    assert.match(styles, new RegExp(`variant-${variant}`));
  }
  assert.match(dialog, /CITY AI INDEX · 智能指数详情/);
  assert.match(dialog, /AI EVENT STREAM · 城市事件中枢/);
  assert.match(dialog, /ECOLOGICAL MONITORING · 生态环境/);
  assert.match(dialog, /TRAFFIC MOBILITY · 交通运行脉搏/);
  assert.match(dialog, /DISTRICT OPERATIONS · 城区运行态势/);
  assert.match(dialog, /data-detail-variant/);
  assert.match(styles, /\.detail-ai-summary/);
  assert.match(styles, /\.detail-event-sequence/);
  assert.match(styles, /\.detail-traffic-flow/);
  assert.match(styles, /\.detail-eco-primary/);
  assert.match(styles, /\.detail-district-rank/);
  assert.match(styles, /overflow:hidden/);
  assert.match(layout, /detail-dialogs\.css/);
});
