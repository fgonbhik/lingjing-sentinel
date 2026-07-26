"use client";

import { useEffect, useMemo, useState } from "react";
import SmartCityScene, { type SmartAsset } from "./SmartCityScene";

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

  useEffect(() => {
    const clock = window.setInterval(() => setNow(new Date()), 1000);
    const heartbeat = window.setInterval(() => setPulse((value) => (value + 1) % 8), 2400);
    return () => {
      window.clearInterval(clock);
      window.clearInterval(heartbeat);
    };
  }, []);

  const time = now.toLocaleTimeString("zh-CN", { hour12: false });
  const date = now.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
  const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][now.getDay()];
  const sceneLabel = useMemo(() => {
    if (sceneStatus === "loading") return "正在构建北京三维建筑群";
    if (sceneStatus === "degraded") return "城市基础模型已启用";
    return "5,200 栋建筑在线 · 城市光网运行中";
  }, [sceneStatus]);

  const focusDistrict = (district: typeof districtData[number], index: number) => {
    setSelectedAsset({
      id: `district-${district.name}`,
      label: `${district.name}区`,
      category: "城区运行态势",
      details: `${district.value}，当前城区综合运行指数 ${district.score}，城市感知、交通与公共服务状态正常。`,
      meta: `AI 评分 ${district.score} · 数据刷新 128ms`,
    });
    window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: index % 2 ? "zoomIn" : "reset" }));
  };

  return (
    <main className={`future-city ${nightMode ? "night" : "day"}`}>
      <div className="future-grid" aria-hidden="true" />
      <div className="future-aurora future-aurora-a" aria-hidden="true" />
      <div className="future-aurora future-aurora-b" aria-hidden="true" />

      <header className="future-header">
        <div className="future-brand">
          <div className="future-brand-symbol"><i /><i /><i /><b /></div>
          <div><strong>京域智城</strong><span>BEIJING URBAN INTELLIGENCE CENTER</span></div>
        </div>

        <div className="future-heading">
          <span><i /> BEIJING DIGITAL TWIN · 2026</span>
          <h1>北京市智慧城市运行指挥中心</h1>
          <div><i /><i /><b>全域感知</b><i /><i /></div>
        </div>

        <div className="future-account">
          <div className="future-time"><strong>{time}</strong><span>{date} · {week}</span></div>
          <div className="future-user"><i />{displayName}<button onClick={onLogout}>退出</button></div>
        </div>
      </header>

      <nav className="future-nav" aria-label="智慧城市功能导航">
        {navItems.map((item, index) => (
          <button key={item} className={activeNav === item ? "active" : ""} onClick={() => setActiveNav(item)}>
            <i>0{index + 1}</i><span>{item}</span>
          </button>
        ))}
        <button className="future-demo-nav" onClick={onOpenDemo}><i>AI</i><span>演示项目</span><em>ENTER</em></button>
      </nav>

      <section className="future-stage">
        <aside className="future-column left">
          <section className="future-panel city-vitals">
            <header><span>01</span><div><b>城市生命体征</b><em>URBAN VITAL SIGNS</em></div><i>LIVE</i></header>
            <div className="vital-primary">
              <div><span>常住人口</span><strong>2,183.2</strong><em>万人</em></div>
              <div className="vital-wave" aria-hidden="true">{[34, 52, 41, 68, 48, 76, 57, 82, 61, 72, 55, 88].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
            </div>
            <div className="vital-grid">
              <div><span>城市面积</span><b>16,410<small> km²</small></b><em>全域覆盖</em></div>
              <div><span>地区生产总值</span><b>4.98<small> 万亿元</small></b><em>同比 +5.2%</em></div>
              <div><span>轨道交通</span><b>879<small> km</small></b><em>在途 1,284 列</em></div>
              <div><span>公园绿地</span><b>1,064<small> 处</small></b><em>绿色空间 49.8%</em></div>
            </div>
          </section>

          <section className="future-panel event-center">
            <header><span>02</span><div><b>城市事件中枢</b><em>AI EVENT STREAM</em></div><i>04</i></header>
            <div className="event-list">
              {eventFeed.map((event, index) => (
                <article key={event.time} className={pulse === index ? "pulse" : ""}>
                  <time>{event.time}</time><i>{event.level}</i><p>{event.text}<span>{event.state}</span></p>
                </article>
              ))}
            </div>
            <button className="event-action" onClick={onOpenDemo}><span>突发事件智能处置演示</span><b>启动灵境哨兵</b><i>→</i></button>
          </section>

          <section className="future-panel eco-panel">
            <header><span>03</span><div><b>生态环境监测</b><em>ECOLOGICAL MONITORING</em></div><i>优</i></header>
            <div className="eco-content">
              <div className="air-orbit"><i /><b>28</b><span>PM2.5</span></div>
              <div className="eco-stats">
                <p><span>空气优良率</span><b>94.6%</b></p>
                <p><span>平均温度</span><b>26.3°C</b></p>
                <p><span>碳排强度</span><b>-4.8%</b></p>
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
              onSelect={setSelectedAsset}
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
              {districtData.map((district, index) => (
                <button key={district.name} onClick={() => focusDistrict(district, index)}>
                  <i className={district.tone} /><span>{district.name}</span><b>{district.score}</b>
                </button>
              ))}
            </div>

            <div className="scene-controls">
              <button className={topView ? "on" : ""} onClick={() => setTopView((value) => !value)}><i>◇</i>{topView ? "自由视角" : "垂直俯视"}</button>
              <button className={autoTour ? "on" : ""} onClick={() => setAutoTour((value) => !value)}><i>{autoTour ? "■" : "▶"}</i>{autoTour ? "停止巡航" : "自动巡航"}</button>
              <button className={buildingLights ? "on" : ""} onClick={() => setBuildingLights((value) => !value)}><i>✦</i>建筑光网</button>
              <button onClick={() => setNightMode((value) => !value)}><i>{nightMode ? "☀" : "☾"}</i>{nightMode ? "日间模式" : "夜间模式"}</button>
              <button onClick={() => setTrafficDensity((value) => value === 18 ? 36 : value === 36 ? 54 : 18)}><i>⇄</i>车流 {trafficDensity}</button>
              <button aria-label="复位三维视角" onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "reset" }))}><i>⌖</i>视角复位</button>
            </div>

            <div className="scene-zoom">
              <button aria-label="放大城市模型" onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "zoomIn" }))}>＋</button>
              <i />
              <button aria-label="缩小城市模型" onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "zoomOut" }))}>−</button>
            </div>

            {selectedAsset && (
              <article className="future-asset-card">
                <button aria-label="关闭详情" onClick={() => setSelectedAsset(null)}>×</button>
                <span>{selectedAsset.category}</span>
                <strong>{selectedAsset.label}</strong>
                <p>{selectedAsset.details}</p>
                <em>{selectedAsset.meta}</em>
              </article>
            )}
          </div>
        </section>

        <aside className="future-column right">
          <section className="future-panel ai-index">
            <header><span>04</span><div><b>城市智能指数</b><em>CITY AI INDEX</em></div><i>TOP 1</i></header>
            <div className="ai-score">
              <div className="score-rings"><i /><i /><i /><strong>96.4</strong><span>综合评分</span></div>
              <div className="score-copy"><span>AI 城市大脑</span><b>运行卓越</b><em>较昨日 +1.8%</em><p>城市治理模型实时计算中</p></div>
            </div>
            <div className="ai-dimensions">
              {[
                ["感知覆盖", 98],
                ["协同效率", 94],
                ["预测准确", 96],
                ["处置闭环", 97],
              ].map(([name, value]) => (
                <div key={name as string}><span>{name}</span><i><b style={{ width: `${value}%` }} /></i><em>{value}%</em></div>
              ))}
            </div>
          </section>

          <section className="future-panel traffic-panel">
            <header><span>05</span><div><b>交通运行脉搏</b><em>TRAFFIC MOBILITY</em></div><i>畅通</i></header>
            <div className="traffic-number"><span>全路网交通指数</span><strong>1.42</strong><em>畅通</em></div>
            <div className="traffic-flow" aria-label="近八小时交通流量趋势">
              {[31, 43, 52, 47, 68, 76, 64, 83, 71, 62, 54, 59, 46, 39].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
            </div>
            <div className="traffic-meta"><span>平均车速<b>41.8 km/h</b></span><span>拥堵里程<b>28.6 km</b></span><span>信号协调率<b>92.7%</b></span></div>
          </section>

          <section className="future-panel district-rank">
            <header><span>06</span><div><b>城区运行排行</b><em>DISTRICT RANKING</em></div><i>16 区</i></header>
            <div>
              {districtData.map((district, index) => (
                <button key={district.name} onClick={() => focusDistrict(district, index)}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <span>{district.name}区<em><b style={{ width: `${district.score}%` }} /></em></span>
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

      <footer className="future-footer">
        <div><i />CITY DATA STREAM</div>
        <section><span>{ticker.join("　　◇　　")}</span></section>
        <em>DATA LATENCY <b>128 ms</b></em>
        <strong><i />AI ENGINE ONLINE</strong>
      </footer>
    </main>
  );
}
