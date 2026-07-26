"use client";

import type { PlumeResult, VisionResult } from "./decision-engine";

type RouteAudit = {
  distance: number;
  eta: number;
  visited: number;
  roads?: string[];
};

const digest = (value: string) => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0).toString(16).padStart(8, "0").toUpperCase();
};

export default function AgentAuditDialog({
  scenarioPhase,
  scenarioTime,
  vision,
  plume,
  route,
  blocked,
  onClose,
}: {
  scenarioPhase: number;
  scenarioTime: number;
  vision: VisionResult;
  plume: PlumeResult;
  route: RouteAudit;
  blocked: boolean;
  onClose: () => void;
}) {
  const messages = [
    {
      phase: 1, time: "14:32:00", from: "VehicleAgent", to: "EventAgent",
      task: "持续读取危化运输车遥测",
      message: "京A·WH2576 正沿北京 OSM 道路行驶，车速 32km/h，罐压 0.42MPa。",
      basis: "车辆 CAN 遥测 + GPS 路段匹配",
    },
    {
      phase: 2, time: "14:32:07", from: "EventAgent", to: "VisionAgent",
      task: "验证异常并请求视觉检测",
      message: "动力失效、尾阀冲击与挥发气体告警同时出现，提交现场帧进行本地推理。",
      basis: "三源异常规则：动力 / 阀门 / 气体传感器",
    },
    {
      phase: 3, time: "14:32:13", from: "VisionAgent", to: "PlumeAgent",
      task: "输出可解释视觉证据",
      message: `${vision.modelName} 判定“${vision.type}”，最高置信度 ${(vision.confidence * 100).toFixed(1)}%，目标数 ${vision.detections.length}。`,
      basis: `${vision.modelVersion} · 本机 ${vision.inferenceMs || "—"}ms · ${vision.modelMode}`,
    },
    {
      phase: 3, time: "14:32:15", from: "PlumeAgent", to: "CommandAgent",
      task: "计算污染羽流边界",
      message: `东南风 3.4m/s，警戒纵深 ${plume.warning}m，预计风险暴露 ${plume.affectedPeople} 人。`,
      basis: `${plume.model} · Q=80g/s · 风向西北`,
    },
    {
      phase: 4, time: "14:32:20", from: "RouteAgent", to: "FireAgent",
      task: blocked ? "避开封闭道路重新规划" : "生成消防最短响应路径",
      message: `${blocked ? "封路后重规划" : "初始规划"}完成，距离 ${route.distance}m，ETA ${route.eta}min，搜索 ${route.visited} 个节点。`,
      basis: `OSM 道路图 + A* 欧氏启发函数${route.roads?.length ? ` · ${route.roads.slice(0, 3).join(" → ")}` : ""}`,
    },
    {
      phase: 4, time: "14:32:22", from: "CommandAgent", to: "Fire / Medical / Police",
      task: "签发联合处置任务",
      message: "消防执行堵漏与水幕，医疗开启绿色通道，交警建立 500m 封控并组织侧上风向疏散。",
      basis: "优先级：人员安全 > 泄漏源控制 > 道路恢复",
    },
    {
      phase: 6, time: "14:32:40", from: "PoliceAgent", to: "CommandAgent",
      task: "执行道路封控与人群疏散",
      message: "3 个路口完成管制，186 人向东南侧上风向疏散，应急绿波带已启用。",
      basis: "风险区几何边界 + 路口容量 + 学校保护目标",
    },
    {
      phase: 7, time: "14:32:49", from: "FireAgent", to: "CommandAgent",
      task: "建立水幕并控制泄漏源",
      message: "泡沫消防车到场，挥发气体受控，泄漏速率下降 68%。",
      basis: "消防编组状态 + 现场处置阶段回执",
    },
    {
      phase: 8, time: "14:32:59", from: "MedicalAgent", to: "CommandAgent",
      task: "完成检伤与转运",
      message: "2 名轻度吸入人员完成检伤，三级医院绿色通道保持开启。",
      basis: "START 检伤规则 + 医疗资源容量",
    },
    {
      phase: 9, time: "14:33:07", from: "CommandAgent", to: "AuditLedger",
      task: "关闭事件并固化证据",
      message: "联合响应闭环完成，模型输出、物理计算、路径结果和部门回执写入审计日志。",
      basis: "全部强制任务完成 + 现场指挥员复核",
    },
  ].map((message, index) => ({
    ...message,
    id: `AUD-${String(index + 1).padStart(2, "0")}-${digest(`${message.time}${message.from}${message.task}`)}`,
    state: scenarioPhase > message.phase ? "done" : scenarioPhase === message.phase ? "active" : "pending",
  }));

  const exportAudit = () => {
    const payload = {
      incidentId: "LJ-BJ-20260720-001",
      generatedAt: new Date().toISOString(),
      orchestrator: "Deterministic multi-agent task graph v1.0",
      scenario: { phase: scenarioPhase, elapsedSeconds: Number(scenarioTime.toFixed(2)), blocked },
      inputs: {
        vision: {
          model: vision.modelName,
          mode: vision.modelMode,
          result: vision.type,
          confidence: vision.confidence,
          detections: vision.detections,
        },
        plume,
        route,
      },
      messages,
      disclaimer: "该编排为可审计确定性软件智能体，不宣称为大语言模型自主决策。",
    };
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    link.download = "灵境哨兵-多智能体审计日志.json";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  };

  return (
    <div className="audit-layer" role="presentation" onMouseDown={onClose}>
      <section className="audit-dialog" role="dialog" aria-modal="true" aria-label="多智能体协同审计" onMouseDown={(event) => event.stopPropagation()}>
        <header className="audit-head">
          <div>
            <span>MULTI-AGENT AUDIT LEDGER</span>
            <h2>多智能体任务与决策审计</h2>
            <p>每条任务都有输入、接收方、决策依据、执行状态和不可混淆的审计编号</p>
          </div>
          <button aria-label="关闭多智能体审计" onClick={onClose}>×</button>
        </header>
        <div className="audit-banner">
          <b>能力边界声明</b>
          <p>这是确定性、可审计的软件智能体任务图，不宣称为大语言模型自由推理。任何正式处置仍由现场指挥员批准。</p>
          <em>PHASE {String(scenarioPhase).padStart(2, "0")}/09 · T+{Math.floor(scenarioTime)}s</em>
        </div>
        <section className="task-inputs">
          <article><span>事件输入</span><b>危化车辆动力失效 + 尾阀泄漏</b><small>来源：车辆遥测 / 路侧摄像 / 气体传感器</small></article>
          <article><span>视觉证据</span><b>{vision.modelName}</b><small>{vision.type} · {(vision.confidence * 100).toFixed(1)}% · {vision.modelMode}</small></article>
          <article><span>环境约束</span><b>东南风 3.4m/s · Pasquill-D</b><small>警戒纵深 {plume.warning}m · 暴露 {plume.affectedPeople} 人</small></article>
          <article><span>道路约束</span><b>{blocked ? "存在封闭道路 · 已重规划" : "路网正常 · 最短响应"}</b><small>OSM A* · {route.distance}m · ETA {route.eta}min</small></article>
        </section>
        <div className="audit-content">
          <section className="agent-map">
            <header><span>AGENT GRAPH</span><h3>协作角色与消息方向</h3></header>
            <div className="agent-graph-row"><i>车辆</i><b>→</b><i>事件</i><b>→</b><i className="ai">视觉 AI</i><b>→</b><i>扩散</i></div>
            <div className="agent-graph-row second"><i>指挥</i><b>→</b><i>消防</i><b>·</b><i>医疗</i><b>·</b><i>交警</i><b>→</b><i>审计</i></div>
            <dl>
              <div><dt>消息总数</dt><dd>{messages.length}</dd></div>
              <div><dt>已完成</dt><dd>{messages.filter((item) => item.state === "done").length}</dd></div>
              <div><dt>执行中</dt><dd>{messages.filter((item) => item.state === "active").length}</dd></div>
              <div><dt>待执行</dt><dd>{messages.filter((item) => item.state === "pending").length}</dd></div>
            </dl>
            <button onClick={exportAudit}>↓ 导出 JSON 审计日志</button>
          </section>
          <section className="audit-stream">
            <header><span>MESSAGE TRACE</span><h3>任务消息与决策依据</h3></header>
            <div>
              {messages.map((message) => <article className={message.state} key={message.id}>
                <time>{message.time}</time>
                <i />
                <div>
                  <header><b>{message.from}</b><span>→</span><strong>{message.to}</strong><em>{message.state === "done" ? "已完成" : message.state === "active" ? "执行中" : "待执行"}</em></header>
                  <h4>{message.task}</h4>
                  <p>{message.message}</p>
                  <small>决策依据：{message.basis}</small>
                  <code>{message.id}</code>
                </div>
              </article>)}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
