"use client";

import AniNum from "./AniNum";

type Props = {
  ready: boolean;
  onClose: () => void;
  onStart: () => void;
};

const flow = [
  { id: "01", title: "事故图片识别", text: "本地视觉模型识别危化运输车、泄漏烟羽与现场人员，输出可解释置信度。" },
  { id: "02", title: "风险扩散计算", text: "高斯烟羽模型结合实时风向，动态生成致命区、高风险区与警戒区。" },
  { id: "03", title: "真实道路重规划", text: "封路后在北京 OSM 路网执行 A* 搜索，消防、医疗和警车同步调整路线。" },
  { id: "04", title: "多智能体联合处置", text: "消防、医疗、交通与指挥智能体完成出警、救援、疏散和报告闭环。" },
];

export default function DemoProjectEntry({ ready, onClose, onStart }: Props) {
  return (
    <div className="demo-entry-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="demo-entry" role="dialog" aria-modal="true" aria-label="灵境哨兵演示项目">
        <button className="demo-entry-close" onClick={onClose} aria-label="关闭">×</button>
        <header>
          <div>
            <span>SMART CITY · FEATURED DEMO 01</span>
            <h2>灵境哨兵：危化品运输事故<br />全链路智能处置</h2>
            <p>智慧城市 3D 大屏中的核心演示项目。72 秒完整呈现车辆故障、AI 告警、消防出警、救护车到场、警车疏散与应急报告生成。</p>
          </div>
          <div className="demo-entry-score"><span>演示完成度</span><strong><AniNum to={96.4} decimals={1} /></strong><em>READY TO PRESENT</em></div>
        </header>

        <div className="demo-entry-kpis">
          <div><strong><AniNum to={6016} /></strong><span>北京真实建筑</span></div>
          <div><strong><AniNum to={674} /></strong><span>真实道路路段</span></div>
          <div><strong><AniNum to={72} suffix="s" /></strong><span>全流程导演脚本</span></div>
          <div><strong><AniNum to={4} /></strong><span>协同智能体</span></div>
        </div>

        <div className="demo-entry-body">
          <section>
            <h3>AI 决策链 <b>REAL-TIME PIPELINE</b></h3>
            <div className="demo-flow">{flow.map((item) => <article key={item.id}><i>{item.id}</i><div><strong>{item.title}</strong><p>{item.text}</p></div><em>✓</em></article>)}</div>
          </section>
          <aside>
            <span>场景简介</span>
            <h3>北京 CBD · 建国门外大街</h3>
            <p>一辆化学废料运输车在真实道路行驶中突发动力故障并发生含氯气体泄漏。平台自动调度消防、医疗与警力，完成封控、疏散、堵漏和转运。</p>
            <ul>
              <li>可旋转、缩放、俯视与自动巡航</li>
              <li>建筑、车辆、道路均可点击交互</li>
              <li>支持暂停、倍速和逐阶段讲解</li>
              <li>可生成并下载完整处置报告</li>
            </ul>
          </aside>
        </div>

        <footer>
          <div><i className={ready ? "ready" : ""} /><span>{ready ? "真实地图与演示资源已加载完成" : "正在加载北京真实地图与三维资源…"}</span></div>
          <button onClick={onClose}>返回智慧城市大屏</button>
          <button className="primary" disabled={!ready} onClick={onStart}>{ready ? "▶ 进入并启动完整演示" : "资源加载中…"}</button>
        </footer>
      </section>
    </div>
  );
}
