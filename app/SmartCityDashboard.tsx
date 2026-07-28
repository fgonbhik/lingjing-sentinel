"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SmartCityScene, { type SmartAsset } from "./SmartCityScene";
import AniNum from "./AniNum";
import DataDetailDialog from "./DataDetailDialog";

type Props = {
  displayName: string;
  onOpenDemo: () => void;
  onLogout: () => void;
};

const navItems = ["全域态势", "城市治理", "交通脉搏", "生态能源", "公共安全"];

const districtData = [
  { name: "朝阳", score: 97.2, tone: "cyan", value: "商务活跃" },
  { name: "海淀", score: 95.8, tone: "blue", value: "科技创新" },
  { name: "东城", score: 94.6, tone: "green", value: "治理高效" },
  { name: "丰台", score: 91.9, tone: "orange", value: "枢纽畅通" },
];

const eventFeed = [
  { time: "21:26:48", level: "AI", text: "朝阳区交通流量预测完成", state: "已闭环" },
  { time: "21:25:32", level: "感", text: "海淀区感知节点状态巡检", state: "正常" },
  { time: "21:24:16", level: "能", text: "全市电网负荷进入平稳区间", state: "稳定" },
  { time: "21:22:09", level: "环", text: "城市空气质量模型已更新", state: "优良" },
];

const ticker = [
  "全市感知设备在线率 99.97%",
  "重点道路平均车速 41.8 km/h",
  "轨道交通在途列车 1,284 列",
  "空气质量优良率 94.6%",
  "城市事件智能闭环率 96.8%",
  "新能源消纳比例 38.7%",
];

const viewOptions = [
  { id: "panorama", code: "01", label: "全景" },
  { id: "cbd", code: "02", label: "CBD" },
  { id: "axis", code: "03", label: "中轴" },
  { id: "top", code: "04", label: "俯瞰" },
  { id: "horizon", code: "05", label: "天际" },
] as const;

const districtViews: Record<string, { position: [number, number, number]; target: [number, number, number] }> = {
  朝阳: { position: [83, 45, 72], target: [38, 9, 18] },
  海淀: { position: [-88, 48, 82], target: [-48, 9, 40] },
  东城: { position: [-58, 42, -58], target: [-22, 9, -15] },
  丰台: { position: [52, 43, -91], target: [12, 8, -48] },
};

export default function SmartCityDashboard({ displayName, onOpenDemo, onLogout }: Props) {
  const [activeNav, setActiveNav] = useState("全域态势");
  const [nightMode, setNightMode] = useState(true);
  const [buildingLights, setBuildingLights] = useState(true);
  const [autoTour, setAutoTour] = useState(true);
  const [topView, setTopView] = useState(false);
  const [trafficDensity, setTrafficDensity] = useState(54);
  const [selectedAsset, setSelectedAsset] = useState<SmartAsset | null>(null);
  const [sceneStatus, setSceneStatus] = useState<"loading" | "ready" | "degraded">("loading");
  const [now, setNow] = useState(() => new Date());
  const [pulse, setPulse] = useState(0);
  const [barsReady, setBarsReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeView, setActiveView] = useState<(typeof viewOptions)[number]["id"]>("panorama");
  const [interactionTip, setInteractionTip] = useState("左键拖拽旋转 · 滚轮缩放 · 右键平移 · 点击建筑查看详情");
  const [tipKey, setTipKey] = useState(0);

  useEffect(() => {
    const clock = window.setInterval(() => setNow(new Date()), 1000);
    const heartbeat = window.setInterval(() => setPulse((value) => (value + 1) % 8), 2400);
    const barFrame = window.requestAnimationFrame(() => setBarsReady(true));
    const syncFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => {
      window.clearInterval(clock);
      window.clearInterval(heartbeat);
      window.cancelAnimationFrame(barFrame);
      document.removeEventListener("fullscreenchange", syncFullscreen);
    };
  }, []);

  const showTip = useCallback((message: string) => {
    setInteractionTip(message);
    setTipKey((value) => value + 1);
  }, []);

  const openInsight = useCallback((id: string, label: string, category: string, details: string, meta: string) => {
    setSelectedAsset({ id: `insight-${id}`, label, category, details, meta });
    showTip(`已打开：${label} · 右侧详情卡片已更新`);
  }, [showTip]);

  const handleSceneSelect = useCallback((asset: SmartAsset | null) => {
    setSelectedAsset(asset);
    if (asset) showTip(`已选中：${asset.label} · 详情卡片已展开`);
  }, [showTip]);

  const time = now.toLocaleTimeString("zh-CN", { hour12: false });
  const date = now.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
  const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][now.getDay()];
  const sceneLabel = useMemo(() => {
    if (sceneStatus === "loading") return "正在构建北京三维建筑群";
    if (sceneStatus === "degraded") return "城市基础模型已启用";
    return "5,200 栋建筑在线 · 城市光网运行中";
  }, [sceneStatus]);

  const focusDistrict = (district: typeof districtData[number]) => {
    setAutoTour(false);
    setTopView(false);
    setActiveView("panorama");
    setSelectedAsset({
      id: `district-${district.name}`,
      label: `${district.name}区`,
      category: "城区运行态势",
      details: `${district.value}，当前城区综合运行指数 ${district.score}，城市感知、交通与公共服务状态正常。`,
      meta: `AI 评分 ${district.score} · 数据刷新 128ms`,
    });
    const view = districtViews[district.name];
    window.dispatchEvent(new CustomEvent("smart-city-camera", {
      detail: { action: "focus", position: view.position, target: view.target },
    }));
    showTip(`正在聚焦${district.name}区 · 镜头已进入城区态势视角`);
  };

  const changeView = (view: (typeof viewOptions)[number]) => {
    setAutoTour(false);
    setTopView(false);
    setActiveView(view.id);
    window.dispatchEvent(new CustomEvent("smart-city-camera", {
      detail: { action: "view", view: view.id },
    }));
    showTip(`视角切换：${view.label} · 镜头缓动飞行中`);
  };

  const resetView = () => {
    setAutoTour(false);
    setTopView(false);
    setActiveView("panorama");
    window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "reset" }));
    showTip("三维视角已复位至北京城市全景");
  };

  const selectNavigation = (item: string, index: number) => {
    const navigationInsights = [
      ["全域态势总览", "汇总人口、交通、生态、公共安全和城市智能指数，中央三维场景已恢复北京城市全景。", "5,200 栋建筑 · 86.4 万感知节点"],
      ["城市治理专题", "展示城市事件发现、派单、处置与闭环情况，当前重点事件闭环率为 96.8%。", "事件闭环率 96.8% · 平均响应 4.2 分钟"],
      ["交通脉搏专题", "联动道路车流、平均速度、拥堵里程和信号协调率，三维车流已调整至高密度观察状态。", "平均车速 41.8 km/h · 信号协调率 92.7%"],
      ["生态能源专题", "汇总空气质量、碳排强度、新能源消纳和重点生态空间监测结果。", "空气优良率 94.6% · 碳排强度 -4.8%"],
      ["公共安全专题", "聚合城市告警、应急资源和重点区域风险研判，可从右下角进入灵境哨兵完整演示。", "在线资源 99.3% · 重点区域实时感知"],
    ];
    setActiveNav(item);
    setAutoTour(false);
    if (index === 0) resetView();
    if (index === 2) setTrafficDensity(54);
    if (index === 3) {
      setTopView(true);
      setActiveView("top");
      window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: { action: "view", view: "top" } }));
    }
    const [label, details, meta] = navigationInsights[index];
    openInsight(`navigation-${index}`, label, item, details, meta);
    showTip(`已进入${item}专题 · 三维场景与右侧详情同步更新`);
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        showTip("已退出全屏演示");
      } else {
        await document.documentElement.requestFullscreen();
        showTip("已进入全屏演示 · 按 Esc 可退出");
      }
    } catch {
      showTip("当前浏览器未开放全屏权限");
    }
  };

  return (
    <main className={`future-city ${nightMode ? "night" : "day"}`}>
      <div className="future-grid" aria-hidden="true" />
      <div className="future-aurora future-aurora-a" aria-hidden="true" />
      <div className="future-aurora future-aurora-b" aria-hidden="true" />
      <div className="future-horizon" aria-hidden="true"><i /><i /><i /></div>
      <div className="future-atmosphere" aria-hidden="true">
        <span className="future-beam future-beam-a" />
        <span className="future-beam future-beam-b" />
        <span className="future-beam future-beam-c" />
        <b /><b /><b /><b /><b /><b /><b /><b />
      </div>

      <header className="future-header">
        <button type="button" className="future-brand future-header-action" onClick={() => {
          resetView();
          openInsight("brand-overview", "京域智城数字孪生底座", "平台总览", "平台融合城市建筑、道路交通、生态感知、公共安全和应急推演能力，所有核心数据卡片均支持点击查看。", "北京城市数字孪生 · 在线运行");
        }}>
          <span className="future-brand-symbol"><i /><i /><i /><b /></span>
          <span className="future-brand-copy"><strong>京域智城</strong><span>BEIJING URBAN INTELLIGENCE CENTER</span></span>
        </button>

        <button type="button" className="future-heading future-header-action" onClick={() => {
          setAutoTour((value) => !value);
          openInsight("command-center", "北京市智慧城市运行指挥中心", "全域感知指挥中枢", "点击标题可启动或暂停三维城市自动巡航；当前场景支持建筑选择、区域聚焦、视角切换与车流调节。", `自动巡航：${autoTour ? "即将暂停" : "即将启动"} · 场景状态：${sceneStatus}`);
          showTip(autoTour ? "标题交互：自动巡航已暂停" : "标题交互：自动巡航已启动");
        }}>
          <span><i /> BEIJING DIGITAL TWIN · 2026</span>
          <strong className="future-title">北京市智慧城市运行指挥中心</strong>
          <div><i /><i /><b>全域感知</b><i /><i /></div>
        </button>

        <div className="future-account">
          <button type="button" className="future-system future-header-action" onClick={() => openInsight("system-health", "城市系统健康度 99.97%", "实时运行状态", "建筑、道路、感知设备和城市指标数据链路运行正常，三维渲染与交互引擎已就绪。", "数据延迟 128ms · 设备在线率 99.97%")}><i />系统正常</button>
          <button type="button" className="future-time future-header-action" onClick={() => openInsight("city-clock", "城市运行时钟", "实时数据基准", `当前城市数字孪生时间为 ${date} ${time}，所有动态指标以本地演示时钟同步刷新。`, `${week} · 每秒同步`)}><strong>{time}</strong><span>{date} · {week}</span></button>
          <button type="button" className="future-user future-user-profile future-header-action" onClick={() => openInsight("operator", displayName, "当前值班用户", "当前账户具有城市态势浏览、三维交互、数据详情查看和应急演示入口权限。", "本地演示会话 · 权限正常")}><i />{displayName}</button>
          <button type="button" className="future-fullscreen future-header-action" aria-label={isFullscreen ? "退出全屏" : "进入全屏"} onClick={toggleFullscreen}>{isFullscreen ? "收" : "全"}</button>
          <button type="button" className="future-logout" onClick={onLogout}>退出</button>
        </div>
      </header>

      <nav className="future-nav" aria-label="智慧城市功能导航">
        {navItems.map((item, index) => (
          <button key={item} className={activeNav === item ? "active" : ""} onClick={() => selectNavigation(item, index)}>
            <i>0{index + 1}</i><span>{item}</span>
          </button>
        ))}
      </nav>

      <section className="future-stage">
        <aside className="future-column left">
          <section className="future-panel city-vitals">
            <header><span>01</span><div><b>城市生命体征</b><em>URBAN VITAL SIGNS</em></div><i>LIVE</i></header>
            <div className="vital-primary">
              <div><span>常住人口</span><strong><AniNum to={2183.2} decimals={1} /></strong><em>万人</em></div>
              <div className="vital-wave" aria-hidden="true">{[34, 52, 41, 68, 48, 76, 57, 82, 61, 72, 55, 88].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
            </div>
            <div className="vital-grid">
              <button type="button" onClick={() => openInsight("area", "北京市域面积", "城市生命体征", "全市域面积 16,410 平方公里，数字孪生已覆盖核心城区、重点交通走廊和公共服务节点。", "全域覆盖 · 数据更新 128ms")}><span>城市面积</span><b><AniNum to={16410} /><small> km²</small></b><em>全域覆盖</em></button>
              <button type="button" onClick={() => openInsight("gdp", "地区生产总值", "城市生命体征", "城市经济运行保持稳健，数字经济、科技服务和现代服务业构成主要增长动能。", "4.98 万亿元 · 同比 +5.2%")}><span>地区生产总值</span><b><AniNum to={4.98} decimals={2} /><small> 万亿元</small></b><em>同比 +5.2%</em></button>
              <button type="button" onClick={() => openInsight("rail", "轨道交通网络", "城市生命体征", "轨道交通运营里程 879 公里，1,284 列列车在途，关键换乘枢纽运行正常。", "线网联动 · 平均准点率 99.6%")}><span>轨道交通</span><b><AniNum to={879} /><small> km</small></b><em>在途 1,284 列</em></button>
              <button type="button" onClick={() => openInsight("parks", "公园绿地体系", "城市生命体征", "全市 1,064 处公园绿地接入生态监测，绿色空间覆盖率达到 49.8%。", "生态感知 · 1,064 处在线")}><span>公园绿地</span><b><AniNum to={1064} /><small> 处</small></b><em>绿色空间 49.8%</em></button>
            </div>
          </section>

          <section className="future-panel event-center">
            <header><span>02</span><div><b>城市事件中枢</b><em>AI EVENT STREAM</em></div><i>04</i></header>
            <div className="event-list">
              {eventFeed.map((event, index) => (
                <button
                  type="button"
                  key={event.time}
                  className={`event-row ${pulse === index ? "pulse" : ""}`}
                  onClick={() => openInsight(`event-${index}`, event.text, "城市事件中枢", `${event.time} 由${event.level}类城市感知模型完成研判，当前处置状态为“${event.state}”。`, `事件编号 BJ-${event.time.replaceAll(":", "")} · ${event.state}`)}
                >
                  <time>{event.time}</time><i>{event.level}</i><p>{event.text}<span>{event.state}</span></p>
                </button>
              ))}
            </div>
          </section>

          <section className="future-panel eco-panel">
            <header><span>03</span><div><b>生态环境监测</b><em>ECOLOGICAL MONITORING</em></div><i>优</i></header>
            <div className="eco-content">
              <button type="button" className="air-orbit" onClick={() => openInsight("pm25", "PM2.5 实时监测", "生态环境监测", "北京市核心区 PM2.5 当前浓度为 28 μg/m³，空气质量等级为优。", "气象与环境感知网 · 分钟级刷新")}><i /><b>28</b><span>PM2.5</span></button>
              <div className="eco-stats">
                <button type="button" onClick={() => openInsight("air", "空气优良率", "生态环境监测", "全市空气质量优良率达到 94.6%，重点站点均处于正常监测状态。", "94.6% · 较昨日 +1.2%")}><span>空气优良率</span><b>94.6%</b></button>
                <button type="button" onClick={() => openInsight("temperature", "城市平均温度", "生态环境监测", "当前城市平均温度 26.3°C，热岛强度处于可控区间。", "26.3°C · 东南风 3.4m/s")}><span>平均温度</span><b>26.3°C</b></button>
                <button type="button" onClick={() => openInsight("carbon", "碳排强度", "生态环境监测", "城市单位产出碳排强度同比下降 4.8%，新能源消纳比例持续提升。", "-4.8% · 绿色转型稳定")}><span>碳排强度</span><b>-4.8%</b></button>
              </div>
            </div>
          </section>
        </aside>

        <section className="future-center">
          <div className="scene-head">
            <div><i /><span>{activeNav}</span><b>北京核心区三维数字孪生</b></div>
            <em className={sceneStatus}>{sceneLabel}</em>
          </div>
          <div className="future-scene">
            <SmartCityScene
              topView={topView}
              nightMode={nightMode}
              buildingLights={buildingLights}
              autoTour={autoTour}
              trafficDensity={trafficDensity}
              onSelect={handleSceneSelect}
              onSceneStatus={setSceneStatus}
            />

            <div className="scene-scanline" aria-hidden="true" />
            <div className="scene-corners" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="scene-coordinate">
              <span>39°54′27″N</span><i /><span>116°27′07″E</span><b>BEIJING</b>
            </div>
            <div className="scene-layer">
              <span>DATA LAYERS</span>
              <i className="cyan" /><em>建筑</em><i className="blue" /><em>交通</em><i className="green" /><em>感知</em>
            </div>
            <div className="scene-orientation"><b>N</b><i /><span>024°</span></div>

            <div className="scene-districts">
              {districtData.map((district) => (
                <button key={district.name} onClick={() => focusDistrict(district)}>
                  <i className={district.tone} /><span>{district.name}</span><b>{district.score}</b>
                </button>
              ))}
            </div>

            <div className="scene-view-presets" aria-label="预设三维视角">
              <span>VIEW</span>
              {viewOptions.map((view) => (
                <button
                  key={view.id}
                  className={activeView === view.id ? "active" : ""}
                  onClick={() => changeView(view)}
                  aria-label={`切换至${view.label}视角`}
                >
                  <i>{view.code}</i><b>{view.label}</b>
                </button>
              ))}
            </div>

            <div key={tipKey} className="scene-operation-tip" role="status" aria-live="polite">
              <i>⌁</i><span>{interactionTip}</span>
            </div>

            <div className="scene-controls">
              <button className={topView ? "on" : ""} onClick={() => {
                const next = !topView;
                setAutoTour(false);
                setTopView(next);
                setActiveView(next ? "top" : "panorama");
                showTip(next ? "垂直俯视已开启 · 可滚轮缩放查看建筑分布" : "已恢复自由视角");
              }}><i>◇</i>{topView ? "自由视角" : "垂直俯视"}</button>
              <button className={autoTour ? "on" : ""} onClick={() => {
                const next = !autoTour;
                setAutoTour(next);
                setTopView(false);
                showTip(next ? "自动巡航已启动 · 手动选视角可随时接管" : "自动巡航已暂停");
              }}><i>{autoTour ? "■" : "▶"}</i>{autoTour ? "停止巡航" : "自动巡航"}</button>
              <button className={buildingLights ? "on" : ""} onClick={() => {
                const next = !buildingLights;
                setBuildingLights(next);
                showTip(next ? "建筑光网已点亮" : "建筑光网已隐藏");
              }}><i>✦</i>建筑光网</button>
              <button onClick={() => {
                const next = !nightMode;
                setNightMode(next);
                showTip(next ? "已切换至夜间城市模式" : "已切换至日间城市模式");
              }}><i>{nightMode ? "☀" : "☾"}</i>{nightMode ? "日间模式" : "夜间模式"}</button>
              <button onClick={() => {
                const next = trafficDensity === 18 ? 36 : trafficDensity === 36 ? 54 : 18;
                setTrafficDensity(next);
                showTip(`动态车流密度已调整为 ${next} 辆`);
              }}><i>⇄</i>车流 {trafficDensity}</button>
              <button aria-label="复位三维视角" onClick={resetView}><i>⌖</i>视角复位</button>
            </div>

            <div className="scene-zoom">
              <button aria-label="放大城市模型" onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "zoomIn" }))}>＋</button>
              <i />
              <button aria-label="缩小城市模型" onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "zoomOut" }))}>−</button>
            </div>

          </div>
        </section>

        <aside className="future-column right">
          <section className="future-panel ai-index">
            <header><span>04</span><div><b>城市智能指数</b><em>CITY AI INDEX</em></div><i>TOP 1</i></header>
            <button type="button" className="ai-score" onClick={() => openInsight("ai-score", "城市智能指数 96.4", "城市 AI 大脑", "综合感知覆盖、协同效率、预测准确和处置闭环四项能力，当前城市智能指数为 96.4。", "全国领先 · 较昨日 +1.8%")}>
              <div className="score-rings"><i /><i /><i /><strong><AniNum to={96.4} decimals={1} /></strong><span>综合评分</span></div>
              <div className="score-copy"><span>AI 城市大脑</span><b>运行卓越</b><em>较昨日 +1.8%</em><p>城市治理模型实时计算中</p></div>
            </button>
            <div className="ai-dimensions">
              {[
                ["感知覆盖", 98],
                ["协同效率", 94],
                ["预测准确", 96],
                ["处置闭环", 97],
              ].map(([name, value], index) => (
                <button type="button" key={name as string} onClick={() => openInsight(`ai-${index}`, `${name} ${value}%`, "城市 AI 能力维度", `${name}能力已接入城市级模型评估，当前得分 ${value}%，运行状态稳定。`, `AI ENGINE · 第 ${index + 1} 维度`)}><span>{name}</span><i><b style={{ width: barsReady ? `${value}%` : "0%", transitionDelay: `${index * 120}ms` }} /></i><em>{value}%</em></button>
              ))}
            </div>
          </section>

          <section className="future-panel traffic-panel">
            <header><span>05</span><div><b>交通运行脉搏</b><em>TRAFFIC MOBILITY</em></div><i>畅通</i></header>
            <button type="button" className="traffic-number" onClick={() => openInsight("traffic-index", "全路网交通指数", "交通运行脉搏", "全路网交通指数 1.42，整体处于畅通等级，重点道路信号协调运行正常。", "指数 1.42 · 畅通")}>
              <span>全路网交通指数</span><strong><AniNum to={1.42} decimals={2} /></strong><em>畅通</em>
            </button>
            <button type="button" className="traffic-flow" aria-label="调整并查看交通流量趋势" onClick={() => {
              const next = trafficDensity === 18 ? 36 : trafficDensity === 36 ? 54 : 18;
              setTrafficDensity(next);
              openInsight("traffic-flow", "近八小时交通流量", "交通运行脉搏", `已将三维城市动态车流调整为 ${next} 辆，可在中央地图观察道路车流变化。`, `点击循环调节 · 当前密度 ${next}`);
            }}>
              {[31, 43, 52, 47, 68, 76, 64, 83, 71, 62, 54, 59, 46, 39].map((height, index) => (
                <i key={index} style={{ height: barsReady ? `${height}%` : "0%", transitionDelay: `${index * 55}ms` }} />
              ))}
            </button>
            <div className="traffic-meta">
              <button type="button" onClick={() => openInsight("speed", "道路平均车速", "交通运行脉搏", "全市重点道路平均车速 41.8 km/h，当前车速变化处于模型预测范围内。", "41.8 km/h · 实时计算")}><span>平均车速</span><b>41.8 km/h</b></button>
              <button type="button" onClick={() => openInsight("congestion", "拥堵道路里程", "交通运行脉搏", "当前拥堵道路总里程 28.6 km，拥堵主要集中于晚高峰重点走廊。", "28.6 km · 动态监测")}><span>拥堵里程</span><b>28.6 km</b></button>
              <button type="button" onClick={() => openInsight("signals", "信号协调率", "交通运行脉搏", "城市信号控制协调率达到 92.7%，重点路口绿波方案处于自动优化状态。", "92.7% · AI 信号控制")}><span>信号协调率</span><b>92.7%</b></button>
            </div>
          </section>

          <section className="future-panel district-rank">
            <header><span>06</span><div><b>城区运行排行</b><em>DISTRICT RANKING</em></div><i>16 区</i></header>
            <div>
              {districtData.map((district, index) => (
                <button key={district.name} onClick={() => focusDistrict(district)}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <span>{district.name}区<em><b style={{ width: barsReady ? `${district.score}%` : "0%", transitionDelay: `${index * 120}ms` }} /></em></span>
                  <strong>{district.score}</strong>
                  <small>{district.value}</small>
                </button>
              ))}
            </div>
          </section>

          <button className="future-demo-card" onClick={onOpenDemo}>
            <div><span>FEATURED AI DEMO</span><em>01</em></div>
            <strong>灵境哨兵</strong>
            <p>危化品运输事故全链路智能处置</p>
            <b>事故识别 · 扩散计算 · 路径重规划</b>
            <i>立即进入演示项目 <span>→</span></i>
          </button>
        </aside>
      </section>

      {selectedAsset && <DataDetailDialog data={selectedAsset} onClose={() => setSelectedAsset(null)} />}

      <footer className="future-footer">
        <div><i />CITY DATA STREAM</div>
        <section><span>{ticker.join("　　◇　　")}</span></section>
        <em>DATA LATENCY <b>128 ms</b></em>
        <strong><i />AI ENGINE ONLINE</strong>
      </footer>
    </main>
  );
}
