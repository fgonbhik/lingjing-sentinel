"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type ModuleId="overview"|"events"|"resources"|"archives";

type Props={
  active:ModuleId;
  onClose:()=>void;
  onStartScenario:()=>void;
  onFocusIncident:()=>void;
  onGenerateReport:()=>void;
  onNotice:(message:string)=>void;
  onTrackResource:(resourceId:string)=>void;
  scenarioPhase:number;
  scenarioTime:number;
  scenarioStatus:"idle"|"playing"|"paused"|"complete";
};

type ResourceStatus="available"|"enroute"|"onsite";
type DispatchResource={id:string;category:string;icon:string;name:string;station:string;eta:number;people:number;status:ResourceStatus;progress:number;capability:string;plate:string};

const events=[
  {id:"EV-20260720-001",level:"Ⅰ级",tone:"danger",status:"待响应",title:"国贸桥西侧化学废料运输车泄漏",location:"北京市朝阳区建国门外大街国贸桥西侧",time:"14:32:07",source:"AI 视觉 + 车辆遥测",summary:"化学废料运输车动力系统失效，尾阀受冲击松动。含氯挥发气体向西北方向扩散，系统将联动消防、医疗与交通力量。",people:"影响 186 人",progress:0},
  {id:"EV-20260720-002",level:"Ⅱ级",tone:"warning",status:"已控制",title:"朝阳区物流仓储点火情",location:"东四环南路辅路 18 号",time:"12:18:42",source:"热成像 + 烟感网络",summary:"仓库外包装区出现明火，自动喷淋与园区消防队已控制火势，无人员伤亡。",people:"疏散 42 人",progress:94},
  {id:"EV-20260720-003",level:"Ⅲ级",tone:"cyan",status:"监测中",title:"通惠河局部油膜异常",location:"大望路桥下游 320 米",time:"10:46:15",source:"无人机巡检",summary:"水面发现约 35 平方米不明油膜，环境监测车已完成取样，溯源模型正在计算。",people:"无人员风险",progress:47},
  {id:"EV-20260719-014",level:"Ⅳ级",tone:"muted",status:"已归档",title:"CBD 地铁站瞬时客流拥堵",location:"国贸站换乘大厅",time:"昨日 18:07",source:"客流感知网络",summary:"晚高峰瞬时客流超过阈值，通过单向导流和临时限流于 12 分钟内恢复正常。",people:"分流 1,260 人",progress:100},
];

const initialResources:DispatchResource[]=[
  {id:"FIRE-01",category:"消防",icon:"消",name:"泡沫消防车 01",station:"青岚消防站",eta:7,people:6,status:"available",progress:0,capability:"A 类泡沫 4.2t · 水幕炮 · 堵漏工具组",plate:"京消·A017"},
  {id:"FIRE-02",category:"消防",icon:"洗",name:"危化洗消车 02",station:"青岚消防站",eta:9,people:5,status:"available",progress:0,capability:"洗消液 2.8t · 防化服 12 套 · 检测仪",plate:"京消·A026"},
  {id:"ROBOT-01",category:"消防",icon:"机",name:"防爆消防机器人",station:"青岚消防站",eta:8,people:0,status:"available",progress:0,capability:"耐高温侦察 · 遥控水炮 · 气体检测",plate:"ROBOT-X1"},
  {id:"MED-03",category:"医疗",icon:"医",name:"急救车 03",station:"市第三人民医院",eta:11,people:4,status:"available",progress:0,capability:"呼吸支持 · 检伤分类 · 4 人转运",plate:"京急·M103"},
  {id:"MED-06",category:"医疗",icon:"负",name:"负压救护车 06",station:"朝阳医疗中心",eta:14,people:4,status:"available",progress:0,capability:"负压隔离舱 · 中毒洗消 · 2 人转运",plate:"京急·M206"},
  {id:"POLICE-07",category:"交警",icon:"警",name:"疏散警车 07",station:"建外派出所",eta:5,people:4,status:"available",progress:0,capability:"路口封控 · 人员疏散 · 应急车道清空",plate:"京A·P707"},
  {id:"BIKE-02",category:"交警",icon:"骑",name:"交通铁骑 02 组",station:"国贸交通队",eta:4,people:2,status:"available",progress:0,capability:"快速抵达 · 先期侦察 · 绿波引导",plate:"京警·R02"},
  {id:"DRONE-04",category:"监测",icon:"无",name:"多光谱无人机 04",station:"CBD 无人机巢",eta:3,people:1,status:"available",progress:0,capability:"热成像 · 气体云图 · 4K 实时回传",plate:"UAV-04"},
  {id:"ENV-01",category:"监测",icon:"测",name:"移动环境监测站",station:"朝阳生态环境局",eta:13,people:3,status:"available",progress:0,capability:"氯气/氨气/挥发物连续监测",plate:"京环·E011"},
  {id:"BUS-12",category:"疏散",icon:"疏",name:"应急疏散大巴 12",station:"北京站调度场",eta:16,people:2,status:"available",progress:0,capability:"核载 52 人 · 空调正压 · 应急物资",plate:"京A·E512"},
];

const archives=[
  {id:"ARC-0720-01",date:"2026-07-20",type:"危化品泄漏",title:"化学废料运输车故障联合处置",duration:"01:12",score:"96.4",status:"最新推演",summary:"完整记录危废车辆行驶、突发故障、AI 识别、真实路网调度、人员疏散、堵漏与医疗转运。",tags:["9 阶段","OSM A*","186 人疏散"],replay:true},
  {id:"ARC-0718-03",date:"2026-07-18",type:"仓储火灾",title:"物流园锂电池仓库热失控推演",duration:"02:36",score:"91.8",status:"已评审",summary:"对比泡沫覆盖、干粉隔离和容器转移三种方案，最终选择分区冷却与隔离控制。",tags:["热失控","方案对比","无人机"],replay:false},
  {id:"ARC-0715-08",date:"2026-07-15",type:"城市内涝",title:"CBD 暴雨积水与交通疏导推演",duration:"03:18",score:"93.2",status:"已归档",summary:"模拟 50 年一遇降雨下的积水扩散、地铁口封控、公交绕行与泵站联动。",tags:["积水模型","交通重规划","地铁保护"],replay:false},
  {id:"ARC-0711-02",date:"2026-07-11",type:"大型活动",title:"体育中心万人活动应急疏散",duration:"04:05",score:"89.7",status:"待复盘",summary:"根据闸机客流、道路容量和医疗点位，推演 18,600 人分区分批疏散。",tags:["人群仿真","分区疏散","医疗布点"],replay:false},
];

const statusText:Record<ResourceStatus,string>={available:"可调度",enroute:"赶赴中",onsite:"已到场"};

const coreResourceIds=new Set(["FIRE-01","MED-03","POLICE-07"]);

export default function InteractiveModules({active,onClose,onStartScenario,onFocusIncident,onGenerateReport,onNotice,onTrackResource,scenarioPhase,scenarioTime,scenarioStatus}:Props){
  const [eventFilter,setEventFilter]=useState("全部事件"),[eventQuery,setEventQuery]=useState(""),[selectedEventId,setSelectedEventId]=useState(events[0].id);
  const [category,setCategory]=useState("全部资源"),[resources,setResources]=useState(initialResources),[selectedResourceId,setSelectedResourceId]=useState(initialResources[0].id);
  const [dispatchLog,setDispatchLog]=useState(["14:32:20　AI 指挥智能体完成首轮资源匹配","14:32:21　3 条 OSM 真实道路路线已生成"]);
  const [selectedArchiveId,setSelectedArchiveId]=useState(archives[0].id),[archiveFilter,setArchiveFilter]=useState("全部档案");
  const closeRef=useRef<HTMLButtonElement>(null);

  useEffect(()=>{if(active==="overview")return;const frame=requestAnimationFrame(()=>closeRef.current?.focus());return()=>cancelAnimationFrame(frame)},[active]);
  useEffect(()=>{const timer=window.setInterval(()=>setResources(items=>items.map(item=>item.status!=="enroute"?item:item.progress>=94?{...item,status:"onsite",progress:100}:{...item,progress:item.progress+6})),900);return()=>window.clearInterval(timer)},[]);

  const liveEventStatus=scenarioStatus==="idle"?"待响应":scenarioStatus==="complete"?"已控制":scenarioPhase<2?"监测中":"处置中",liveEventProgress=scenarioStatus==="idle"?0:Math.round(Math.min(100,scenarioTime/72*100));
  const eventRows=useMemo(()=>events.map((item,index)=>index?item:{...item,status:liveEventStatus,progress:liveEventProgress,summary:scenarioStatus==="idle"?events[0].summary:"化学废料运输车发生泄漏，AI 已完成研判，消防、医疗与交通力量正沿真实道路执行联合处置。"}),[liveEventProgress,liveEventStatus,scenarioStatus]);
  const scenarioResources=useMemo(()=>resources.map(item=>{if(scenarioPhase<4||!coreResourceIds.has(item.id))return item;const windowById:{[key:string]:[number,number]}={"FIRE-01":[27,49],"MED-03":[27,59],"POLICE-07":[27,40]},[start,end]=windowById[item.id],progress=Math.max(6,Math.min(100,(scenarioTime-start)/(end-start)*100));return{...item,status:(progress>=100?"onsite":"enroute") as ResourceStatus,progress}}),[resources,scenarioPhase,scenarioTime]);
  const selectedEvent=eventRows.find(item=>item.id===selectedEventId)||eventRows[0],selectedResource=scenarioResources.find(item=>item.id===selectedResourceId)||scenarioResources[0],selectedArchive=archives.find(item=>item.id===selectedArchiveId)||archives[0];
  const normalizedQuery=eventQuery.trim().toLowerCase(),filteredEvents=eventRows.filter(item=>(eventFilter==="全部事件"||item.status===eventFilter)&&(!normalizedQuery||`${item.id} ${item.title} ${item.location}`.toLowerCase().includes(normalizedQuery))),filteredResources=scenarioResources.filter(item=>category==="全部资源"||item.category===category),filteredArchives=archives.filter(item=>archiveFilter==="全部档案"||item.type===archiveFilter);
  const counts=useMemo(()=>({available:scenarioResources.filter(item=>item.status==="available").length,enroute:scenarioResources.filter(item=>item.status==="enroute").length,onsite:scenarioResources.filter(item=>item.status==="onsite").length,people:scenarioResources.filter(item=>item.status!=="available").reduce((sum,item)=>sum+item.people,0)}),[scenarioResources]);
  useEffect(()=>{if(filteredEvents.length&&!filteredEvents.some(item=>item.id===selectedEventId))setSelectedEventId(filteredEvents[0].id)},[eventFilter,eventQuery,filteredEvents,selectedEventId]);

  const dispatch=(id:string)=>{const target=scenarioResources.find(item=>item.id===id);if(!target)return;if(scenarioPhase>=4&&coreResourceIds.has(id)){onNotice(`${target.name} 正由完整推演导演脚本接管，无法单独召回`);return}if(target.status==="available"){setResources(items=>items.map(item=>item.id===id?{...item,status:"enroute",progress:8}:item));setDispatchLog(log=>[`${new Date().toLocaleTimeString("zh-CN",{hour12:false})}　${target.name} 已接收出动指令`,...log].slice(0,6));onNotice(`${target.name} 已出动，预计 ${target.eta} 分钟到达`)}else{setResources(items=>items.map(item=>item.id===id?{...item,status:"available",progress:0}:item));setDispatchLog(log=>[`${new Date().toLocaleTimeString("zh-CN",{hour12:false})}　${target.name} 已结束任务并返站`,...log].slice(0,6));onNotice(`${target.name} 已召回`)}};
  const batchDispatch=()=>{const preferred=new Set(["FIRE-01","FIRE-02","MED-03","POLICE-07","BIKE-02","DRONE-04","ENV-01"]),changed=resources.filter(item=>preferred.has(item.id)&&item.status==="available").length;if(!changed){onNotice("联合编队已经全部出动，无需重复下达指令");return}setResources(items=>items.map(item=>preferred.has(item.id)&&item.status==="available"?{...item,status:"enroute",progress:8}:item));setDispatchLog(log=>[`${new Date().toLocaleTimeString("zh-CN",{hour12:false})}　联合编队新增 ${changed} 个单元出动`,...log].slice(0,6));onNotice(`联合编队新增 ${changed} 个单元出动，绿波通道同步开启`)};
  const recallAll=()=>{const recallable=resources.filter(item=>item.status!=="available"&&!(scenarioPhase>=4&&coreResourceIds.has(item.id)));if(!recallable.length){onNotice("当前没有可召回的非脚本资源");return}const ids=new Set(recallable.map(item=>item.id));setResources(items=>items.map(item=>ids.has(item.id)?{...item,status:"available",progress:0}:item));setDispatchLog(log=>[`${new Date().toLocaleTimeString("zh-CN",{hour12:false})}　${recallable.length} 个非脚本资源已结束任务`,...log].slice(0,6));onNotice(`已召回 ${recallable.length} 个资源单元`)};

  if(active==="overview")return null;
  const title={events:"事件中心",resources:"资源调度",archives:"推演档案"}[active],english={events:"INCIDENT CENTER",resources:"RESOURCE DISPATCH",archives:"SIMULATION ARCHIVE"}[active];
  return <div className="operations-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)onClose()}}><section className={`operations-module module-${active}`} role="dialog" aria-modal="true" aria-label={title}>
    <header className="module-header"><div><span>LINGJING SENTINEL · {english}</span><h2>{title}</h2><p>{active==="events"?"统一接入城市感知事件，支持筛选、研判、定位与启动联动处置。":active==="resources"?"面向消防、医疗、警力、监测和疏散力量的实时可视化调度。":"完整保存推演参数、算法结果、时间线与处置报告，支持复盘重播。"}</p></div><div className="module-live"><i/>主推演状态同步 <b>{scenarioStatus.toUpperCase()}</b></div><button ref={closeRef} className="module-close" onClick={onClose} aria-label="关闭">×</button></header>

    {active==="events"&&<div className="module-content events-content">
      <div className="module-kpis"><div><span>今日事件</span><strong>14</strong><em>较昨日 -12%</em></div><div><span>处置中</span><strong className="orange">1</strong><em>Ⅰ级响应</em></div><div><span>平均响应</span><strong>2.8<small> min</small></strong><em>目标 ≤ 5min</em></div><div><span>自动识别率</span><strong className="green">96.8<small>%</small></strong><em>多模态融合</em></div></div>
      <div className="module-toolbar"><div>{["全部事件","待响应","处置中","已控制","监测中","已归档"].map(filter=><button key={filter} className={eventFilter===filter?"active":""} aria-pressed={eventFilter===filter} onClick={()=>setEventFilter(filter)}>{filter}</button>)}</div><label>⌕<input aria-label="搜索事件编号、标题或地点" value={eventQuery} onChange={event=>setEventQuery(event.target.value)} placeholder="搜索事件编号、标题或地点"/></label></div>
      <div className="events-layout"><div className="event-list">{filteredEvents.length?filteredEvents.map(item=><button key={item.id} className={selectedEventId===item.id?"selected":""} onClick={()=>setSelectedEventId(item.id)}><i className={item.tone}>{item.level}</i><div><span>{item.id} · {item.time}</span><strong>{item.title}</strong><p>{item.location}</p></div><em>{item.status}</em></button>):<div className="module-empty"><i>⌕</i><strong>未找到匹配事件</strong><span>请调整筛选条件或搜索关键词</span></div>}</div><article className="event-detail"><div className="event-detail-head"><span>{selectedEvent.level} · {selectedEvent.status}</span><strong>{selectedEvent.title}</strong><p>⌖ {selectedEvent.location}</p></div><div className="event-summary"><p>{selectedEvent.summary}</p><div><span>事件来源<b>{selectedEvent.source}</b></span><span>人员影响<b>{selectedEvent.people}</b></span><span>处置进度<b>{selectedEvent.progress}%</b></span></div><i><span style={{width:`${selectedEvent.progress}%`}}/></i></div><div className="event-chain"><h3>智能处置链</h3>{["视觉与遥测完成交叉验证","风险扩散模型生成警戒区","消防医疗交警联合编队","真实路网计算三条救援路径"].map((text,index)=><div key={text}><i>{index+1}</i><span>{text}</span><em>{selectedEvent.id===events[0].id||index<2?"✓":"待确认"}</em></div>)}</div><footer>{selectedEvent.id===events[0].id?<><button onClick={()=>{onFocusIncident();onClose()}}>◎ 地图定位</button><button className="primary" onClick={()=>{onStartScenario();onClose()}}>▶ 启动联动处置</button></>:<button className="primary" onClick={()=>onNotice(`${selectedEvent.title}：处置进度 ${selectedEvent.progress}%，摘要已载入`)}>查看处置摘要</button>}</footer></article></div>
    </div>}

    {active==="resources"&&<div className="module-content resources-content">
      <div className="module-kpis"><div><span>可调度</span><strong>{counts.available}</strong><em>个资源单元</em></div><div><span>赶赴中</span><strong className="orange">{counts.enroute}</strong><em>实时轨迹回传</em></div><div><span>已到场</span><strong className="green">{counts.onsite}</strong><em>执行现场任务</em></div><div><span>已投入人员</span><strong>{counts.people}</strong><em>跨部门协同</em></div></div>
      <div className="module-toolbar resource-toolbar"><div>{["全部资源","消防","医疗","交警","监测","疏散"].map(filter=><button key={filter} className={category===filter?"active":""} aria-pressed={category===filter} onClick={()=>setCategory(filter)}>{filter}</button>)}</div><button className="recall-all" onClick={recallAll}>↩ 批量召回</button><button className="batch-dispatch" onClick={batchDispatch}>⚡ 一键联合出动</button></div>
      <div className="dispatch-layout"><div className="resource-list">{filteredResources.map(item=><button key={item.id} className={`${selectedResourceId===item.id?"selected":""} ${item.status}`} onClick={()=>setSelectedResourceId(item.id)}><i>{item.icon}</i><div><span>{item.category} · {item.station}</span><strong>{item.name}</strong><p>{item.plate} · {item.people} 人编组</p>{item.status!=="available"&&<em><span style={{width:`${item.progress}%`}}/></em>}</div><b>{statusText[item.status]}<small>{item.status==="enroute"?`ETA ${Math.max(1,Math.ceil(item.eta*(1-item.progress/110)))} min`:item.status==="onsite"?"任务执行中":`预计 ${item.eta} min`}</small></b></button>)}</div><section className="dispatch-board"><div className="dispatch-map" aria-label="资源编队态势示意图"><div className="map-road road-a"/><div className="map-road road-b"/><div className="map-road road-c"/><i className="dispatch-incident">危</i><i className="dispatch-station fire">消</i><i className="dispatch-station medical">医</i><i className="dispatch-station police">警</i>{scenarioResources.filter(item=>item.status!=="available").slice(0,7).map((item,index)=><span key={item.id} className={`moving-unit unit-${index}`}>{item.icon}</span>)}<em>RESOURCE FORMATION · SCHEMATIC</em></div><article className="resource-detail"><span>{selectedResource.category} · {selectedResource.id}</span><h3>{selectedResource.name}</h3><p>{selectedResource.capability}</p><div><span>所属站点<b>{selectedResource.station}</b></span><span>到场时间<b>{selectedResource.eta} 分钟</b></span><span>车辆编号<b>{selectedResource.plate}</b></span></div><section className="resource-actions"><button className={selectedResource.status==="available"?"primary":"recall"} onClick={()=>dispatch(selectedResource.id)}>{scenarioPhase>=4&&coreResourceIds.has(selectedResource.id)?"◉ 导演脚本接管中":selectedResource.status==="available"?"→ 下达出动指令":"↩ 结束任务并召回"}</button><button disabled={selectedResource.status==="available"} onClick={()=>{onTrackResource(selectedResource.id);onClose()}}>{selectedResource.status==="available"?"出动后可地图追踪":"◎ 同步到真实地图"}</button></section></article><div className="dispatch-log"><h3>调度指令流 <i>LIVE</i></h3>{dispatchLog.map((log,index)=><p key={`${log}-${index}`}>{log}</p>)}</div></section></div>
    </div>}

    {active==="archives"&&<div className="module-content archives-content">
      <div className="module-kpis"><div><span>累计推演</span><strong>128</strong><em>覆盖 9 类事件</em></div><div><span>形成报告</span><strong>116</strong><em>自动归档率 90.6%</em></div><div><span>平均评分</span><strong className="green">92.7</strong><em>专家复核结果</em></div><div><span>算法可追溯</span><strong>100<small>%</small></strong><em>参数与路径完整保存</em></div></div>
      <div className="module-toolbar"><div>{["全部档案","危化品泄漏","仓储火灾","城市内涝","大型活动"].map(filter=><button key={filter} className={archiveFilter===filter?"active":""} onClick={()=>setArchiveFilter(filter)}>{filter}</button>)}</div><button onClick={onGenerateReport}>＋ 生成当前报告</button></div>
      <div className="archives-layout"><div className="archive-grid">{filteredArchives.map(item=><button key={item.id} className={selectedArchiveId===item.id?"selected":""} onClick={()=>setSelectedArchiveId(item.id)}><div><span>{item.id}</span><em>{item.status}</em></div><i>{item.date}</i><strong>{item.title}</strong><p>{item.summary}</p><section>{item.tags.map(tag=><span key={tag}>{tag}</span>)}</section><footer><b>综合评分 {item.score}</b><em>时长 {item.duration}</em></footer></button>)}</div><article className="archive-detail"><span>{selectedArchive.type} · {selectedArchive.id}</span><h3>{selectedArchive.title}</h3><div className="archive-score"><strong>{selectedArchive.score}</strong><span>综合评分<em>响应速度 96　资源效率 94　风险控制 98</em></span></div><div className="archive-metrics"><span>关键决策节点<b>{selectedArchive.replay?"9":"12"} 个</b></span><span>算法调用<b>{selectedArchive.replay?"A* / 高斯烟羽":"多模型协同"}</b></span><span>报告状态<b>完整可追溯</b></span></div><p>{selectedArchive.summary}</p><footer><button onClick={()=>selectedArchive.replay?onGenerateReport():onNotice(`${selectedArchive.title}：归档评分 ${selectedArchive.score}，关键复盘摘要已显示`)}>{selectedArchive.replay?"查看处置报告":"查看归档摘要"}</button><button className="primary" onClick={()=>{if(selectedArchive.replay){onStartScenario();onClose()}else onNotice(`${selectedArchive.title}：${selectedArchive.summary}`)}}>{selectedArchive.replay?"▶ 重播完整推演":"查看复盘结论"}</button></footer></article></div>
    </div>}
  </section></div>;
}
