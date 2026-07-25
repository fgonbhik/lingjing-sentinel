"use client";

import { useState } from "react";
import SmartCityScene, { type SmartAsset } from "./SmartCityScene";

type Props = {
  displayName: string;
  onOpenDemo: () => void;
  onLogout: () => void;
};

const districts = [
  ["朝阳区", "96.8", "+2.4%"],
  ["海淀区", "94.2", "+1.8%"],
  ["东城区", "92.7", "+1.2%"],
  ["西城区", "91.9", "+0.9%"],
  ["丰台区", "89.6", "+1.6%"],
];

const ticker = [
  "全市重点道路平均车速 41.8 km/h",
  "北京核心区空气质量优良率 94.6%",
  "城市感知设备在线率 99.97%",
  "新能源公交运行 12,486 辆",
  "今日城市事件智能闭环率 96.8%",
];

export default function SmartCityDashboard({ displayName, onOpenDemo, onLogout }: Props) {
  const [section, setSection] = useState("城市总览");
  const [nightMode, setNightMode] = useState(false);
  const [buildingLights, setBuildingLights] = useState(true);
  const [autoTour, setAutoTour] = useState(false);
  const [topView, setTopView] = useState(false);
  const [trafficDensity, setTrafficDensity] = useState(36);
  const [selectedAsset, setSelectedAsset] = useState<SmartAsset | null>(null);
  const [sceneStatus, setSceneStatus] = useState<"loading" | "ready" | "degraded">("loading");

  const switchSection = (next: string) => {
    if (next === "演示项目") {
      onOpenDemo();
      return;
    }
    setSection(next);
  };

  return (
    <main className={`smart-shell ${nightMode ? "is-night" : "is-day"}`}>
      <header className="smart-topbar">
        <div className="smart-brand-mark"><i /><i /><i /></div>
        <div className="smart-brand"><b>京域智城</b><span>BEIJING SMART CITY DIGITAL TWIN</span></div>
        <nav>{["城市总览", "交通运行", "能源环保", "公共安全", "演示项目"].map((item) =>
          <button key={item} className={`${section === item ? "active" : ""} ${item === "演示项目" ? "demo" : ""}`} onClick={() => switchSection(item)}>{item}</button>
        )}</nav>
        <div className="smart-user"><i />系统在线 <span>{displayName}</span><button onClick={onLogout}>退出</button></div>
      </header>

      <section className="smart-titlebar">
        <div><span>城市数字孪生运行中心</span><h1>北京智慧城市综合态势大屏</h1></div>
        <div className="smart-clock"><strong>2026-07-25</strong><span>星期六　21:26:48</span></div>
        <button className="smart-demo-cta" onClick={onOpenDemo}><i>▶</i><span><b>灵境哨兵</b>进入应急处置演示项目</span><em>DEMO 01</em></button>
      </section>

      <section className="smart-kpis">
        <article><i>城</i><div><span>常住人口</span><strong>2,183.2<small> 万人</small></strong><em>实时人口热力稳定</em></div></article>
        <article><i>产</i><div><span>城市生产总值</span><strong>4.98<small> 万亿元</small></strong><em>数字经济占比 44.3%</em></div></article>
        <article><i>路</i><div><span>实时交通指数</span><strong>1.42<small> 畅通</small></strong><em>平均车速 41.8 km/h</em></div></article>
        <article><i>感</i><div><span>城市感知节点</span><strong>86.4<small> 万个</small></strong><em>设备在线率 99.97%</em></div></article>
      </section>

      <section className="smart-workspace">
        <aside className="smart-side left">
          <div className="smart-panel">
            <header><span>01</span><b>城市运行概览</b><em>CITY OVERVIEW</em></header>
            <div className="smart-gauge-row">
              <div className="smart-gauge"><i style={{ "--value": "94%" } as React.CSSProperties}><b>94.6</b></i><span>城市健康度</span></div>
              <div className="smart-gauge green"><i style={{ "--value": "88%" } as React.CSSProperties}><b>88.2</b></i><span>绿色发展</span></div>
            </div>
            <div className="smart-mini-grid"><div><span>城市面积</span><b>16,410 km²</b></div><div><span>建成区面积</span><b>1,469 km²</b></div><div><span>轨道交通</span><b>879 km</b></div><div><span>公园绿地</span><b>1,064 处</b></div></div>
          </div>
          <div className="smart-panel traffic">
            <header><span>02</span><b>交通与环境</b><em>TRAFFIC & ENV</em></header>
            <div className="smart-bars">{[["道路畅通率", 86], ["公共交通准点率", 94], ["充电设施可用率", 91], ["空气质量优良率", 95]].map(([name, value]) => <div key={name as string}><span>{name}</span><b>{value}%</b><i><em style={{ width: `${value}%` }} /></i></div>)}</div>
            <div className="smart-weather"><strong>26°</strong><div><b>晴 · 东南风 3级</b><span>PM2.5　28 μg/m³</span><span>湿度 54%　能见度 18 km</span></div></div>
          </div>
        </aside>

        <section className="smart-map-panel">
          <header><div><i />{section} · 北京核心区三维数字孪生</div><span>{sceneStatus === "loading" ? "正在加载城市模型" : sceneStatus === "degraded" ? "降级数据模式" : "6,016 栋建筑 · 674 段道路 · LIVE"}</span></header>
          <div className="smart-map">
            <SmartCityScene topView={topView} nightMode={nightMode} buildingLights={buildingLights} autoTour={autoTour} trafficDensity={trafficDensity} onSelect={setSelectedAsset} onSceneStatus={setSceneStatus} />
            <div className="smart-map-tools">
              <button onClick={() => setTopView((value) => !value)}>◈ {topView ? "自由三维" : "垂直俯视"}</button>
              <button onClick={() => setNightMode((value) => !value)}>{nightMode ? "☀ 白天" : "☾ 夜间"}</button>
              <button className={buildingLights ? "on" : ""} onClick={() => setBuildingLights((value) => !value)}>✦ 楼宇灯光</button>
              <button className={autoTour ? "on" : ""} onClick={() => setAutoTour((value) => !value)}>{autoTour ? "■ 停止巡航" : "▶ 自动巡航"}</button>
              <button onClick={() => setTrafficDensity((value) => value === 18 ? 36 : value === 36 ? 54 : 18)}>车流 {trafficDensity}</button>
            </div>
            <div className="smart-map-zoom"><button onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "zoomIn" }))}>＋</button><button onClick={() => window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: "zoomOut" }))}>−</button></div>
            <div className="smart-compass">N<i /></div>
            <div className="smart-map-caption"><span>39°54′27″N　116°27′07″E</span><b>BEIJING · REAL-WORLD DIGITAL TWIN</b></div>
            {selectedAsset && <article className="smart-asset"><button onClick={() => setSelectedAsset(null)}>×</button><span>{selectedAsset.category}</span><strong>{selectedAsset.label}</strong><p>{selectedAsset.details}</p><em>{selectedAsset.meta}</em></article>}
          </div>
        </section>

        <aside className="smart-side right">
          <div className="smart-panel">
            <header><span>03</span><b>智慧城市指标</b><em>SMART METRICS</em></header>
            <div className="smart-score"><div><span>城市智慧指数</span><strong>96.4</strong><em>全国领先</em></div><i><b>AI</b><span>实时计算</span></i></div>
            <div className="smart-metric-list">{[["政务服务在线办结率", "98.7%", "green"], ["城市事件自动发现率", "96.8%", "cyan"], ["能源综合利用效率", "89.5%", "blue"], ["公共安全响应速度", "2.8 min", "orange"]].map(([name, value, tone]) => <div key={name}><i className={tone} /><span>{name}</span><b>{value}</b></div>)}</div>
          </div>
          <div className="smart-panel district">
            <header><span>04</span><b>城区发展指数</b><em>DISTRICT DATA</em></header>
            {districts.map(([name, score,delta], index) => <button key={name} onClick={() => { setSection(name); window.dispatchEvent(new CustomEvent("smart-city-camera", { detail: index % 2 ? "zoomIn" : "reset" })); }}><i>{String(index + 1).padStart(2, "0")}</i><span>{name}<em><b style={{ width: `${Number(score)}%` }} /></em></span><strong>{score}</strong><small>{delta}</small></button>)}
          </div>
          <button className="smart-demo-card" onClick={onOpenDemo}><span>FEATURED AI DEMO</span><strong>危化品运输事故<br />全链路智能处置</strong><p>图片识别 · 风险扩散 · 路径重规划 · 多智能体协同</p><em>进入演示项目 →</em></button>
        </aside>
      </section>

      <footer className="smart-ticker"><b>城市实时数据</b><div><span>{ticker.join("　　◆　　")}</span></div><em>数据更新 128 ms</em></footer>
    </main>
  );
}
