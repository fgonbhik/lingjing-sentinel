"use client";

import { useEffect, useState } from "react";

const departments = [
  { icon: "焰", name: "消防智能体", text: "2 辆泡沫消防车已从青岚站出发", tone: "orange" },
  { icon: "十", name: "医疗智能体", text: "三级医院开放绿色救援通道", tone: "cyan" },
  { icon: "路", name: "交通智能体", text: "已建立 3.2 km 应急绿波带", tone: "blue" },
  { icon: "盾", name: "指挥智能体", text: "建议启动学校二级疏散预案", tone: "purple" },
];

const timeline = [
  ["14:32:08", "视觉模型发现罐体破损与淡黄色烟雾"],
  ["14:32:11", "判定为氯气泄漏，置信度 96.8%"],
  ["14:32:14", "风险扩散模型开始 30 分钟推演"],
  ["14:32:18", "四部门智能体完成首轮协商"],
];

export default function Home() {
  const [running, setRunning] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [minute, setMinute] = useState(15);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setPulse((p) => (p + 1) % 4), 900);
    return () => clearInterval(timer);
  }, [running]);

  const start = () => {
    setRunning(true);
    setBlocked(false);
    setMinute(15);
  };

  const reroute = () => {
    setBlocked(true);
    setRunning(true);
  };

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand-mark"><i /><i /><i /></div>
        <div className="brand"><b>灵境哨兵</b><span>城市应急智能决策平台 · LINGJING SENTINEL</span></div>
        <nav><button className="active">态势总览</button><button>事件中心</button><button>资源调度</button><button>推演档案</button></nav>
        <div className="status"><span className="live-dot" />系统在线 <em>14:32:26</em><button className="avatar">指</button></div>
      </header>

      <section className="command-strip">
        <div className="alert-tag">重大事件 · Ⅰ级响应</div>
        <div><strong>城北实验学校附近危化品运输车泄漏</strong><span>青岚大道与科创路交汇处 · 距学校 480m</span></div>
        <div className="command-actions"><span>AI 已接管推演</span><button onClick={start}>{running ? "重新推演" : "启动智能推演"}</button></div>
      </section>

      <section className="workspace">
        <aside className="left-panel panel">
          <div className="panel-title"><span>01</span>事件智能识别 <b>AI VISION</b></div>
          <div className="scene">
            <div className="sky" />
            <div className="road-lines" />
            <div className="truck"><span>危化品</span></div>
            <div className="smoke s1" /><div className="smoke s2" /><div className="smoke s3" />
            <div className="detect-box"><label>危险品运输车 98.2%</label></div>
            <div className="detect-smoke"><label>有毒气体 96.8%</label></div>
            <div className="camera">CAM-07 · LIVE</div>
          </div>
          <div className="recognition">
            <div><span>事故类型</span><strong>氯气泄漏</strong></div><div><span>识别置信度</span><strong>96.8%</strong></div>
            <div><span>受损罐体</span><strong>1 个</strong></div><div><span>现场人员</span><strong>约 23 人</strong></div>
          </div>
          <div className="ai-note"><b>AI 研判</b><p>东南风 3.4 m/s，毒气将向学校方向扩散。预计 <em>12 分钟</em>后进入校园边界。</p></div>
          <div className="panel-title compact"><span>02</span>智能体协同 <b>MULTI-AGENT</b></div>
          <div className="agents">{departments.map((d, i) => <div className={`agent ${d.tone}`} key={d.name}><i>{d.icon}</i><p><b>{d.name}</b><span>{running && pulse === i ? "正在协商最优方案…" : d.text}</span></p><em>●</em></div>)}</div>
        </aside>

        <section className="map-panel panel">
          <div className="panel-title"><span>03</span>风险态势推演 <b>DIGITAL TWIN</b><div className="map-tools"><button>−</button><button>＋</button></div></div>
          <div className="map">
            <div className="grid" />
            <div className="river" />
            {[...Array(22)].map((_,i)=><div key={i} className="building" style={{left:`${7+(i*17)%82}%`,top:`${8+(i*23)%75}%`,width:`${30+(i%4)*12}px`,height:`${20+(i%3)*9}px`}} />)}
            <div className="road main-road" /><div className="road cross-road" />
            <div className={`risk r3 ${running ? "animate" : ""}`} /><div className={`risk r2 ${running ? "animate" : ""}`} /><div className={`risk r1 ${running ? "animate" : ""}`} />
            <div className="incident"><span>!</span><b>泄漏源</b></div>
            <div className="school"><span>校</span><b>城北实验学校<small>2,146 人</small></b></div>
            <div className="hospital"><span>十</span><b>市三院</b></div>
            <div className={`route route-a ${blocked ? "disabled" : ""}`} /><div className={`route route-b ${blocked ? "visible" : ""}`} />
            <div className="firetruck">▰<span>消防 01</span></div><div className="ambulance">✚<span>救护 03</span></div>
            {blocked && <div className="roadblock">×<span>道路封闭</span></div>}
            <div className="wind">↘<span>东南风 3.4m/s</span></div>
            <div className="legend"><div><i className="lg-red" />致命区</div><div><i className="lg-orange" />高风险</div><div><i className="lg-yellow" />警戒区</div></div>
          </div>
          <div className="time-control"><button>Ⅱ</button><input aria-label="推演时间" type="range" min="0" max="30" value={minute} onChange={(e)=>setMinute(Number(e.target.value))}/><div><span>现在</span><span>+5min</span><span>+15min</span><span>+30min</span></div><strong>推演至 +{minute} 分钟</strong></div>
        </section>

        <aside className="right-panel panel">
          <div className="panel-title"><span>04</span>决策方案 <b>AI COMMAND</b></div>
          <div className="score-card"><span>当前最优方案</span><strong>{blocked ? "方案 B · 动态重规划" : "方案 A · 东西分区疏散"}</strong><div><b>{blocked ? "94.6" : "91.8"}</b><small>综合评分</small></div></div>
          <div className="metrics"><div><span>预计响应</span><b className="green">11 min</b><small>↓ 38.9%</small></div><div><span>风险暴露</span><b>786 人</b><small>↓ 63.2%</small></div><div><span>调度资源</span><b>18 组</b><small>已匹配</small></div></div>
          <div className="plan-steps">
            {["封锁泄漏点周边 500m 道路","学校师生向西北侧分批疏散","消防车由青岚站沿科创路抵达","救护组在体育中心建立分诊点"].map((x,i)=><div key={x}><i>{i+1}</i><p>{x}<span>{["交警 · 2分钟内","教育 · 8分钟完成","消防 · 预计7分钟","医疗 · 12分钟启用"][i]}</span></p><em>✓</em></div>)}
          </div>
          <button className="block-button" onClick={reroute}>{blocked ? "✓ 已完成替代路线重规划" : "模拟突发：封闭科创路"}</button>
          <div className="panel-title compact"><span>05</span>决策时间线 <b>TRACE</b></div>
          <div className="timeline">{timeline.map((t,i)=><div className={running ? "done" : ""} key={t[0]}><time>{t[0]}</time><i /><p>{t[1]}</p></div>)}</div>
          <button className="report">生成应急处置报告 <span>↗</span></button>
        </aside>
      </section>

      <footer><span>数据源：城市感知网络 · 气象局 · 应急资源库</span><strong><i /> AI 决策引擎运行正常 · 处理延迟 128ms</strong><span>灵境哨兵 v1.0 · 演示环境</span></footer>
    </main>
  );
}
