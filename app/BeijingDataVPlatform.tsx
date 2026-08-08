"use client";

import { useEffect, useMemo, useState } from "react";
import AniNum from "./AniNum";
import ScDataVBeijingMap from "./ScDataVBeijingMap";

type Props = {
  embedded?: boolean;
  onBack: () => void;
  onOpenLegacyGovernance: () => void;
  onOpenDemo: () => void;
};

const districtRows = [
  ["朝阳区", 97.2, "+1.8"],
  ["海淀区", 95.8, "+1.2"],
  ["东城区", 94.6, "+0.9"],
  ["丰台区", 91.9, "+1.5"],
  ["通州区", 90.8, "+2.1"],
] as const;

const hourlyFlow = [32, 39, 47, 45, 58, 67, 73, 64, 81, 76, 62, 55];
const governance = [86, 92, 89, 96, 91, 94, 97];

export default function BeijingDataVPlatform({ embedded = false, onBack, onOpenLegacyGovernance, onOpenDemo }: Props) {
  const [pureMode, setPureMode] = useState(false);
  const [activeMetric, setActiveMetric] = useState("城市治理");
  const [activeDistrict, setActiveDistrict] = useState("朝阳区");
  const [streaming, setStreaming] = useState(true);
  const [chartTick, setChartTick] = useState(0);
  const selectedDistrict = useMemo(
    () => districtRows.find(([name]) => name === activeDistrict) ?? districtRows[0],
    [activeDistrict],
  );
  const liveFlow = useMemo(
    () => hourlyFlow.map((value, index) => Math.max(18, Math.min(92, value + Math.sin(chartTick * 0.78 + index * 0.61) * 5))),
    [chartTick],
  );
  const liveGovernance = useMemo(
    () => governance.map((value, index) => Math.max(84, Math.min(98, value + Math.sin(chartTick * 0.55 + index * 0.9) * 1.4))),
    [chartTick],
  );
  const governancePoints = useMemo(
    () => liveGovernance.map((value, index) => ({ x: 8 + index * 57, y: 138 - (value - 84) * 7.2 })),
    [liveGovernance],
  );
  const governancePath = governancePoints.map(({ x, y }) => `${x} ${y.toFixed(1)}`).join(" L");

  useEffect(() => {
    if (!streaming) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setChartTick((value) => value + 1);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [streaming]);

  return (
    <section className={`bj-datav ${pureMode ? "is-pure" : ""} ${embedded ? "is-embedded" : ""}`} aria-label="北京城市治理数据可视化">
      <div className="bj-datav-radial" aria-hidden="true" />
      {embedded ? (
        <header className="bj-datav-embedded-head">
          <div><span>URBAN GOVERNANCE · BEIJING</span><h2>城市治理运行态势</h2><p>真实区县边界 · 三维地图 · 事件闭环 · 多图表联动</p></div>
          <div className="bj-datav-actions">
            <button type="button" className={streaming ? "active" : ""} onClick={() => setStreaming((value) => !value)}>
              <i />{streaming ? "实时数据接入" : "数据流已暂停"}
            </button>
            <button type="button" onClick={() => setPureMode((value) => !value)}>{pureMode ? "恢复分析面板" : "纯净地图模式"}</button>
          </div>
        </header>
      ) : (
        <header className="bj-datav-header">
          <button type="button" className="bj-datav-back" onClick={onBack}>← 返回全域态势</button>
          <div>
            <span>SC-DATAV · BEIJING</span>
            <h2>北京城市数据可视化驾驶舱</h2>
            <p>真实区县边界 · 三维地图 · 多图表联动 · 城市治理专题</p>
          </div>
          <div className="bj-datav-actions">
            <button type="button" className="legacy" onClick={onOpenLegacyGovernance}>进入原城市治理</button>
            <button type="button" className={streaming ? "active" : ""} onClick={() => setStreaming((value) => !value)}>
              <i />{streaming ? "实时数据接入" : "数据流已暂停"}
            </button>
            <button type="button" onClick={() => setPureMode((value) => !value)}>{pureMode ? "恢复分析面板" : "纯净地图模式"}</button>
          </div>
        </header>
      )}

      <div className="bj-datav-kpis">
        {[
          ["城市事件闭环率", 96.8, "%"],
          ["感知设备在线率", 99.97, "%"],
          ["平均响应时间", 4.2, "分钟"],
          ["交通运行指数", 1.42, "畅通"],
          ["空气质量优良率", 94.6, "%"],
        ].map(([label, value, unit], index) => (
          <button type="button" key={label as string} className={activeMetric === label ? "active" : ""} onClick={() => setActiveMetric(label as string)}>
            <span>{label}</span><strong><AniNum to={value as number} decimals={index === 1 ? 2 : 1} /></strong><em>{unit}</em>
          </button>
        ))}
      </div>

      <div className="bj-datav-grid">
        <aside className="bj-datav-wing left">
          <article className="bj-datav-card flow-card">
            <header><span>ROAD FLOW</span><h3>重点道路小时流量</h3><b>实时</b></header>
            <div className="bj-flow-bars" aria-label="重点道路小时流量柱状图">
              {liveFlow.map((value, index) => <i key={index} style={{ height: `${value}%`, transitionDelay: `${index * 35}ms` }}><span>{index + 7}:00</span></i>)}
            </div>
            <footer><span>当前峰值</span><b>8,642 辆/小时</b><em>较昨日 +3.4%</em></footer>
          </article>

          <article className="bj-datav-card service-card">
            <header><span>PUBLIC SERVICE</span><h3>公共服务承载力</h3><b>16 区</b></header>
            <div className="bj-service-radar">
              <div><i /><i /><i /><b>93.6</b><span>综合承载指数</span></div>
              <ul>
                {["医疗资源", "教育资源", "应急资源", "政务服务"].map((name, index) => (
                  <li key={name}><span>{name}</span><i><b style={{ width: `${[91, 95, 88, 97][index]}%` }} /></i><em>{[91, 95, 88, 97][index]}%</em></li>
                ))}
              </ul>
            </div>
          </article>
        </aside>

        <main className="bj-datav-map">
          <div className="bj-datav-map-head">
            <div><i />北京市 · 16 区三维运行态势</div>
            <span>当前专题：<b>{activeMetric}</b></span>
          </div>
          <div className="bj-datav-map-canvas"><ScDataVBeijingMap /></div>
          <div className="bj-datav-map-status">
            <span><i />行政区划 16</span><span><i />监测节点 86.4 万</span><span><i />飞线链路 28</span><span><i />刷新延迟 128 ms</span>
          </div>
          <div className="bj-datav-map-actions">
            <button type="button" onClick={() => setActiveMetric("城市治理")}>治理态势</button>
            <button type="button" onClick={() => setActiveMetric("交通运行")}>交通运行</button>
            <button type="button" onClick={() => setActiveMetric("生态能源")}>生态能源</button>
            <button type="button" onClick={() => setActiveMetric("公共安全")}>公共安全</button>
            <button type="button" className="demo" onClick={onOpenDemo}>进入灵境哨兵演示 →</button>
          </div>
        </main>

        <aside className="bj-datav-wing right">
          <article className="bj-datav-card governance-card">
            <header><span>GOVERNANCE</span><h3>事件闭环趋势</h3><b>96.8%</b></header>
            <svg viewBox="0 0 360 150" role="img" aria-label="最近七日城市事件闭环趋势折线图">
              <defs><linearGradient id="bjArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#56e7ff" stopOpacity=".48"/><stop offset="1" stopColor="#56e7ff" stopOpacity="0"/></linearGradient></defs>
              <path className="area" d={`M${governancePath} L350 142 L8 142 Z`} />
              <path className="line" d={`M${governancePath}`} />
              {governancePoints.map(({ x, y }, index) => <circle key={index} cx={x} cy={y} r="4" />)}
            </svg>
            <footer><span>发现 1,286</span><span>已闭环 1,245</span><em>待处置 41</em></footer>
          </article>

          <article className="bj-datav-card district-card">
            <header><span>DISTRICT INDEX</span><h3>城区运行指数</h3><b>{selectedDistrict[1]}</b></header>
            <div className="bj-district-list">
              {districtRows.map(([name, score, change], index) => (
                <button type="button" key={name} className={activeDistrict === name ? "active" : ""} onClick={() => setActiveDistrict(name)}>
                  <i>{String(index + 1).padStart(2, "0")}</i><span>{name}<em><b style={{ width: `${score}%` }} /></em></span><strong>{score}</strong><small>{change}%</small>
                </button>
              ))}
            </div>
          </article>
        </aside>
      </div>

      <footer className="bj-datav-footer"><span>数据源：北京城市感知网 · 本地演示数据集</span><b>Apache-2.0 design reference: knight-L/sc-datav</b><em><i />BEIJING CITY ENGINE ONLINE</em></footer>
    </section>
  );
}
