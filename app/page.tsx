"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import CityScene, { type SceneAsset } from "./CityScene";
import InteractiveModules, { type ModuleId } from "./InteractiveModules";
import { analyzeAccidentImage, computeAStarRoute, computeGaussianPlume, type VisionResult } from "./decision-engine";

const departments = [
  { icon: "焰", name: "消防智能体", text: "2 辆泡沫消防车已从青岚站出发", tone: "orange" },
  { icon: "十", name: "医疗智能体", text: "三级医院开放绿色救援通道", tone: "cyan" },
  { icon: "路", name: "交通智能体", text: "已建立 3.2 km 应急绿波带", tone: "blue" },
  { icon: "盾", name: "指挥智能体", text: "建议启动学校二级疏散预案", tone: "purple" },
];

const navigation:Array<{id:ModuleId;label:string}>=[{id:"overview",label:"态势总览"},{id:"events",label:"事件中心"},{id:"resources",label:"资源调度"},{id:"archives",label:"推演档案"}];

const scenarioStages=[
  {id:0,start:0,end:0,clock:"14:32:00",icon:"待",title:"全流程演示就绪",subtitle:"化学废料车辆事故联合处置",detail:"一键播放车辆行驶、突发故障、AI 告警、消防出警、医疗救援与警力疏散完整链路。",metric:"72 秒 · 9 阶段"},
  {id:1,start:0,end:7,clock:"14:32:00",icon:"运",title:"正常运输",subtitle:"化学废料运输车沿北京真实道路行驶",detail:"京A·WH2576 · 车速 32 km/h · 罐体压力与尾阀状态正常",metric:"OSM 实时轨迹"},
  {id:2,start:7,end:13,clock:"14:32:07",icon:"故",title:"突发故障",subtitle:"车辆动力系统失效并紧急制动",detail:"罐体尾阀受冲击松动 · 双闪开启 · 检测到黄绿色挥发气体",metric:"自动停车 · 遥测异常"},
  {id:3,start:13,end:20,clock:"14:32:13",icon:"AI",title:"AI 告警",subtitle:"识别为含氯化学废料泄漏",detail:"事故图片识别置信度 96.8% · 高斯烟羽模型开始风险扩散计算",metric:"Ⅰ级联合响应"},
  {id:4,start:20,end:27,clock:"14:32:20",icon:"调",title:"联合调度",subtitle:"消防、医疗和交警同步接收指令",detail:"基于 OSM 真实路网生成三条应急路线 · 自动建立救援优先通行权",metric:"A* 路径已生成"},
  {id:5,start:27,end:40,clock:"14:32:27",icon:"驰",title:"力量赶赴",subtitle:"三支队伍沿真实道路接近现场",detail:"警车先期抵达 · 消防车携带泡沫与洗消设备 · 医疗组开放绿色通道",metric:"动态 ETA 更新"},
  {id:6,start:40,end:49,clock:"14:32:40",icon:"警",title:"交通疏散",subtitle:"警车到场并建立 500 米封控区",detail:"3 个路口完成管制 · 社会车流主动避让 · 186 人向侧上风向疏散",metric:"应急通道畅通"},
  {id:7,start:49,end:59,clock:"14:32:49",icon:"消",title:"消防处置",subtitle:"泡沫消防车到场建立水幕并堵漏",detail:"消防员从上风向压制挥发气体 · 泄漏速率下降 68% · 核心区浓度回落",metric:"风险持续下降"},
  {id:8,start:59,end:67,clock:"14:32:59",icon:"医",title:"医疗救援",subtitle:"救护车抵达并完成现场检伤分类",detail:"2 名轻度吸入人员接受吸氧 · 三级医院绿色通道保持开启",metric:"检伤与转运完成"},
  {id:9,start:67,end:72,clock:"14:33:07",icon:"联",title:"响应完成",subtitle:"风险受控，联合处置闭环形成",detail:"重点区域疏散 186 人 · 2 人完成转运 · 事故处置报告可立即生成",metric:"全链路可追溯"},
] as const;
const SCENARIO_TOTAL=72;
type ScenarioStatus="idle"|"playing"|"paused"|"complete";

type LocalUser={username:string;displayName:string;department:string;passwordHash:string};
type AuthSession={username:string;displayName:string};

const hashPassword=async(value:string)=>{
  const bytes=new TextEncoder().encode(value),digest=await crypto.subtle.digest("SHA-256",bytes);
  return Array.from(new Uint8Array(digest)).map(byte=>byte.toString(16).padStart(2,"0")).join("");
};

function AuthPortal({onAuthenticated}:{onAuthenticated:(session:AuthSession,remember:boolean)=>void}){
  const [mode,setMode]=useState<"login"|"register">("login");
  const [showPassword,setShowPassword]=useState(false);
  const [remember,setRemember]=useState(true);
  const [submitting,setSubmitting]=useState(false);
  const [message,setMessage]=useState("");
  const [login,setLogin]=useState({username:"",password:""});
  const [register,setRegister]=useState({displayName:"",department:"北京市应急指挥中心",username:"",password:"",confirm:"",agreement:true});

  const switchMode=(next:"login"|"register")=>{setMode(next);setMessage("");setShowPassword(false)};
  const readUsers=():LocalUser[]=>{try{return JSON.parse(localStorage.getItem("lingjing-users")||"[]")}catch{return[]}};

  const submitLogin=async(event:FormEvent)=>{
    event.preventDefault();setMessage("");
    if(!login.username.trim()||!login.password){setMessage("请输入账号和密码");return}
    setSubmitting(true);
    try{
      const normalized=login.username.trim().toLowerCase();
      if(normalized==="admin"&&login.password==="123456"){onAuthenticated({username:"admin",displayName:"应急指挥员"},remember);return}
      const passwordHash=await hashPassword(login.password),user=readUsers().find(item=>item.username.toLowerCase()===normalized&&item.passwordHash===passwordHash);
      if(!user){setMessage("账号或密码不正确，可使用演示账号登录");return}
      onAuthenticated({username:user.username,displayName:user.displayName},remember);
    }finally{setSubmitting(false)}
  };

  const submitRegister=async(event:FormEvent)=>{
    event.preventDefault();setMessage("");
    const displayName=register.displayName.trim(),username=register.username.trim();
    if(!displayName||!username||!register.password||!register.confirm){setMessage("请完整填写注册信息");return}
    if(!/^[a-zA-Z0-9_-]{3,20}$/.test(username)){setMessage("账号需为 3–20 位字母、数字、下划线或短横线");return}
    if(register.password.length<6){setMessage("密码至少需要 6 位");return}
    if(register.password!==register.confirm){setMessage("两次输入的密码不一致");return}
    if(!register.agreement){setMessage("请先同意演示环境使用说明");return}
    const users=readUsers();
    if(username.toLowerCase()==="admin"||users.some(user=>user.username.toLowerCase()===username.toLowerCase())){setMessage("该账号已存在，请更换账号");return}
    setSubmitting(true);
    try{
      users.push({username,displayName,department:register.department,passwordHash:await hashPassword(register.password)});
      localStorage.setItem("lingjing-users",JSON.stringify(users));
      setLogin({username,password:""});switchMode("login");setMessage("注册成功，请使用新账号登录");
    }finally{setSubmitting(false)}
  };

  return <main className="auth-shell">
    <div className="auth-grid"/><div className="auth-glow auth-glow-a"/><div className="auth-glow auth-glow-b"/>
    <header className="auth-topbar"><div className="auth-brand-mark"><i/><i/><i/></div><div><b>灵境哨兵</b><span>LINGJING SENTINEL</span></div><em><i/>城市安全智能决策系统</em></header>
    <section className="auth-layout">
      <div className="auth-hero">
        <div className="auth-kicker"><i/>国家级城市安全数字底座</div>
        <h1>让每一次应急决策<br/><span>先于风险抵达</span></h1>
        <p>融合人工智能、真实城市数字孪生与多智能体协同，构建可感知、可推演、可决策的城市应急指挥中枢。</p>
        <div className="auth-metrics"><div><strong>6,016</strong><span>真实建筑模型</span></div><div><strong>674</strong><span>OSM 道路数据</span></div><div><strong>4</strong><span>协同智能体</span></div></div>
        <div className="auth-radar" aria-hidden="true"><i/><i/><i/><span/><b>AI</b><em>REAL-TIME<br/>SITUATION</em></div>
      </div>
      <section className="auth-card" aria-label={mode==="login"?"登录":"注册"}>
        <div className="auth-card-line"/>
        <div className="auth-tabs"><button className={mode==="login"?"active":""} onClick={()=>switchMode("login")}>账号登录</button><button className={mode==="register"?"active":""} onClick={()=>switchMode("register")}>用户注册</button></div>
        <div className="auth-heading"><span>{mode==="login"?"SECURE ACCESS":"CREATE ACCOUNT"}</span><h2>{mode==="login"?"欢迎进入指挥中心":"申请系统访问权限"}</h2><p>{mode==="login"?"请输入您的指挥系统账号":"注册信息仅保存在当前设备，用于离线演示"}</p></div>
        {mode==="login"?<form onSubmit={submitLogin}>
          <label><span>登录账号</span><div className="auth-input"><i>指</i><input autoFocus autoComplete="username" value={login.username} onChange={e=>setLogin({...login,username:e.target.value})} placeholder="请输入账号"/></div></label>
          <label><span>登录密码</span><div className="auth-input"><i>密</i><input type={showPassword?"text":"password"} autoComplete="current-password" value={login.password} onChange={e=>setLogin({...login,password:e.target.value})} placeholder="请输入密码"/><button type="button" onClick={()=>setShowPassword(value=>!value)}>{showPassword?"隐藏":"显示"}</button></div></label>
          <div className="auth-options"><label><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)}/><i/>保持登录</label><button type="button" onClick={()=>setMessage("演示账号：admin　密码：123456")}>忘记密码？</button></div>
          {message&&<div className={`auth-message ${message.includes("成功")?"success":""}`}>{message}</div>}
          <button className="auth-submit" disabled={submitting}>{submitting?"身份校验中…":"进入指挥系统"}<span>→</span></button>
          <button className="auth-demo" type="button" onClick={()=>{setLogin({username:"admin",password:"123456"});setMessage("已填入演示账号，点击上方按钮进入系统")}}>一键填入演示账号 <b>admin / 123456</b></button>
        </form>:<form onSubmit={submitRegister}>
          <div className="auth-form-grid"><label><span>姓名</span><div className="auth-input"><i>名</i><input autoFocus value={register.displayName} onChange={e=>setRegister({...register,displayName:e.target.value})} placeholder="请输入真实姓名"/></div></label><label><span>所属单位</span><div className="auth-input"><i>部</i><select value={register.department} onChange={e=>setRegister({...register,department:e.target.value})}><option>北京市应急指挥中心</option><option>消防救援部门</option><option>交通协调部门</option><option>医疗保障部门</option><option>教育疏散部门</option></select></div></label></div>
          <label><span>登录账号</span><div className="auth-input"><i>指</i><input autoComplete="username" value={register.username} onChange={e=>setRegister({...register,username:e.target.value})} placeholder="3–20 位字母或数字"/></div></label>
          <div className="auth-form-grid"><label><span>设置密码</span><div className="auth-input"><i>密</i><input type={showPassword?"text":"password"} autoComplete="new-password" value={register.password} onChange={e=>setRegister({...register,password:e.target.value})} placeholder="至少 6 位"/></div></label><label><span>确认密码</span><div className="auth-input"><i>验</i><input type={showPassword?"text":"password"} autoComplete="new-password" value={register.confirm} onChange={e=>setRegister({...register,confirm:e.target.value})} placeholder="再次输入"/></div></label></div>
          <div className="auth-options register"><label><input type="checkbox" checked={register.agreement} onChange={e=>setRegister({...register,agreement:e.target.checked})}/><i/>同意本地演示环境使用说明</label><button type="button" onClick={()=>setShowPassword(value=>!value)}>{showPassword?"隐藏密码":"显示密码"}</button></div>
          {message&&<div className={`auth-message ${message.includes("成功")?"success":""}`}>{message}</div>}
          <button className="auth-submit" disabled={submitting}>{submitting?"正在创建账号…":"完成注册"}<span>→</span></button>
        </form>}
        <footer className="auth-card-footer"><span><i/>SHA-256 LOCAL HASH</span><em>演示环境 · 数据仅存本机</em></footer>
      </section>
    </section>
    <footer className="auth-footer"><span>© 2026 灵境哨兵城市安全实验室</span><span>系统状态 <i/> 正常　|　决赛终版 v3.0.0</span></footer>
  </main>;
}

export default function Home() {
  const [authChecked,setAuthChecked]=useState(false);
  const [currentUser,setCurrentUser]=useState<AuthSession|null>(null);
  const [activeModule,setActiveModule]=useState<ModuleId>("overview");
  const [accountMenuOpen,setAccountMenuOpen]=useState(false);
  const [systemNotice,setSystemNotice]=useState("");
  const [sceneStatus,setSceneStatus]=useState<"loading"|"ready"|"degraded">("loading");
  const [running, setRunning] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [blockedRoadId, setBlockedRoadId] = useState<number | null>(null);
  const [realRoute, setRealRoute] = useState<{distance:number;eta:number;visited:number;roads:string[];blockedRoadId:number|null}|null>(null);
  const [minute, setMinute] = useState(15);
  const [riskPlayback,setRiskPlayback]=useState(false);
  const [pulse, setPulse] = useState(0);
  const [tilt, setTilt] = useState(true);
  const [showRisk, setShowRisk] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [buildingLights, setBuildingLights] = useState(true);
  const [autoTour, setAutoTour] = useState(false);
  const [followingId, setFollowingId] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<SceneAsset | null>(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportGenerating, setReportGenerating] = useState(false);
  const [reportGeneratedAt, setReportGeneratedAt] = useState("2026-07-20 14:32:26");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [vision, setVision] = useState<VisionResult>({type:"氯气泄漏",confidence:.968,smokeRatio:.214,flameRatio:.008,edgeDensity:.182,persons:23,summary:"检测到淡黄色烟羽和危化品运输车辆，建议启动危化品二级响应。"});
  const [scenarioStatus,setScenarioStatus]=useState<ScenarioStatus>("idle");
  const [scenarioTime,setScenarioTime]=useState(0);
  const [scenarioSpeed,setScenarioSpeed]=useState(1);
  const [directorMode,setDirectorMode]=useState(true);
  const [trafficDensity,setTrafficDensity]=useState(36);
  const scenarioPhase=scenarioStatus==="idle"?0:(scenarioStages.find(stage=>stage.id>0&&scenarioTime>=stage.start&&scenarioTime<stage.end)?.id??9);
  const currentScenario=scenarioStages[scenarioPhase];
  const scenarioProgress=scenarioStatus==="idle"?0:Math.min(100,scenarioTime/SCENARIO_TOTAL*100);
  const directorTarget=scenarioPhase<=2&&scenarioPhase>0?"chemical-truck":scenarioPhase===5?(scenarioTime<31?"police-car":scenarioTime<36?"firetruck":"ambulance"):scenarioPhase===6?"police-car":scenarioPhase===7?"firetruck":scenarioPhase===8?"ambulance":null;
  const plume = useMemo(()=>computeGaussianPlume(minute,3.4),[minute]);
  const route = useMemo(()=>computeAStarRoute(blocked),[blocked]);
  const reportText = useMemo(()=>{
    const routeDistance=realRoute?.distance??route.distance,routeEta=realRoute?.eta??route.eta,routeRoads=realRoute?.roads.join(" → ")||"OSM 真实道路网络加载中";
    return `灵境哨兵｜危化品泄漏应急处置报告\n报告编号：LJ-BJ-20260720-001\n生成时间：${reportGeneratedAt}\n响应等级：Ⅰ级应急响应\n\n一、事件概况\n事件地点：北京市朝阳区建国门外大街国贸桥西侧（演示坐标 39°54′27″N，116°27′07″E）\n事件类型：${vision.type}\nAI 识别置信度：${(vision.confidence*100).toFixed(1)}%\n现场人员估计：约 ${vision.persons} 人\n研判摘要：${vision.summary}\n\n二、风险扩散计算\n气象条件：东南风 3.4 m/s，污染羽流吹向西北，Pasquill-D 稳定度\n致命区纵深：${plume.lethal} m\n高风险区纵深：${plume.high} m\n警戒区纵深：${plume.warning} m\n预计风险暴露人口：${plume.affectedPeople} 人\n模型：${plume.model}\n\n三、消防救援路线\n算法：OSM 真实路网 A*（欧氏距离启发）\n道路序列：${routeRoads}\n路线距离：${routeDistance} m\n预计到达：${routeEta} min\n搜索道路节点：${realRoute?.visited??route.visited} 个\n封路状态：${blocked?`已封锁 OSM 道路 ${realRoute?.blockedRoadId??blockedRoadId??"自动选择路段"}，完成动态重规划`:"当前道路正常通行"}\n\n四、联合处置指令\n1. 交通智能体：立即封锁泄漏点周边 500 m 道路，建立 3.2 km 应急绿波带。\n2. 教育智能体：城北实验学校师生经东南侧上风向安全通道分批疏散，8 分钟内完成重点人员转移。\n3. 消防智能体：2 辆泡沫消防车沿 OSM 规划路线抵达，在上风向布置水幕并实施堵漏。\n4. 医疗智能体：市第三人民医院开放绿色通道，在体育中心设置临时分诊点。\n5. 环境监测组：在下风向 200 m、500 m、1000 m 设置连续监测点，每 2 分钟回传浓度。\n\n五、处置结论\n建议立即启动危化品泄漏Ⅰ级联合响应，优先完成学校疏散、道路管制和泄漏源控制。AI 决策结果仅用于竞赛演示，正式行动应由现场指挥员复核确认。\n\n生成系统：灵境哨兵城市应急智能决策平台`;
  },[blocked,blockedRoadId,plume,realRoute,reportGeneratedAt,route,vision]);

  useEffect(() => {
    try{
      const stored=localStorage.getItem("lingjing-session")||sessionStorage.getItem("lingjing-session");
      if(stored)setCurrentUser(JSON.parse(stored));
    }catch{localStorage.removeItem("lingjing-session");sessionStorage.removeItem("lingjing-session")}
    setAuthChecked(true);
  }, []);

  useEffect(()=>{if(!systemNotice)return;const timer=window.setTimeout(()=>setSystemNotice(""),2800);return()=>window.clearTimeout(timer)},[systemNotice]);

  useEffect(()=>{if(!riskPlayback||scenarioStatus==="playing"||scenarioStatus==="paused")return;const timer=window.setInterval(()=>setMinute(value=>value>=30?1:value+1),520);return()=>window.clearInterval(timer)},[riskPlayback,scenarioStatus]);

  useEffect(()=>{
    if(scenarioStatus!=="playing")return;
    let previous=performance.now();
    const timer=window.setInterval(()=>{const now=performance.now(),delta=(now-previous)/1000*scenarioSpeed;previous=now;setScenarioTime(value=>Math.min(SCENARIO_TOTAL,value+delta))},100);
    return()=>window.clearInterval(timer);
  },[scenarioSpeed,scenarioStatus]);

  useEffect(()=>{if(scenarioStatus==="playing"&&scenarioTime>=SCENARIO_TOTAL)setScenarioStatus("complete")},[scenarioStatus,scenarioTime]);

  useEffect(()=>{
    if(scenarioPhase===0)return;
    setRunning(scenarioPhase>=4);setShowRisk(scenarioPhase>=3);setMinute(scenarioPhase<3?1:scenarioPhase===3?5:scenarioPhase<7?15:scenarioPhase===9?8:22);
  },[scenarioPhase]);

  useEffect(()=>{
    if(!directorMode||scenarioPhase===0)return;
    setAutoTour(false);
    if(directorTarget){setFollowingId(directorTarget);window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"follow",assetId:directorTarget}}))}
    else{setFollowingId(null);window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"follow",assetId:null}}));window.dispatchEvent(new CustomEvent("city-camera",{detail:scenarioPhase===9?"reset":"incident"}))}
  },[directorMode,directorTarget,scenarioPhase]);

  useEffect(()=>{
    const keyboard=(event:KeyboardEvent)=>{const target=event.target as HTMLElement;if(["INPUT","TEXTAREA","SELECT"].includes(target.tagName))return;if(event.code==="Escape"){if(reportOpen){setReportOpen(false);return}if(accountMenuOpen){setAccountMenuOpen(false);return}if(activeModule!=="overview"){setActiveModule("overview");return}if(selectedAsset){setSelectedAsset(null);return}setDirectorMode(false);setFollowingId(null);window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"follow",assetId:null}}));return}const moduleIndex:{[key:string]:ModuleId}={Digit1:"overview",Digit2:"events",Digit3:"resources",Digit4:"archives"};if(moduleIndex[event.code]){event.preventDefault();setActiveModule(moduleIndex[event.code]);setAccountMenuOpen(false);return}if(scenarioPhase===0||activeModule!=="overview"||reportOpen)return;if(event.code==="Space"){event.preventDefault();setScenarioStatus(status=>status==="playing"?"paused":status==="paused"?"playing":status)}if(event.code==="ArrowRight"){event.preventDefault();const next=scenarioStages[Math.min(9,scenarioPhase+1)];setScenarioTime(next.start+.01);setScenarioStatus(next.id===9?"paused":"playing")}};window.addEventListener("keydown",keyboard);return()=>window.removeEventListener("keydown",keyboard)
  },[accountMenuOpen,activeModule,reportOpen,scenarioPhase,selectedAsset]);

  useEffect(()=>{if(!accountMenuOpen)return;const dismiss=(event:PointerEvent)=>{const target=event.target as Element;if(!target.closest(".status"))setAccountMenuOpen(false)};window.addEventListener("pointerdown",dismiss,true);return()=>window.removeEventListener("pointerdown",dismiss,true)},[accountMenuOpen]);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setPulse((p) => (p + 1) % 4), 900);
    return () => clearInterval(timer);
  }, [running]);

  const start = () => {
    if(sceneStatus==="loading"){setSystemNotice("真实北京路网仍在加载，请稍候一秒再启动");return}if(sceneStatus==="degraded")setSystemNotice("真实路网数据异常，已启用内置完整路线继续演示");
    setScenarioTime(0);setScenarioStatus("playing");setDirectorMode(true);setRunning(false);setBlocked(false);setBlockedRoadId(null);setMinute(1);setRiskPlayback(false);setShowRisk(false);setAutoTour(false);setFollowingId(null);
  };

  const toggleScenario=()=>setScenarioStatus(status=>status==="playing"?"paused":status==="paused"?"playing":status==="complete"?"playing":status);
  const nextScenarioStage=()=>{const next=scenarioStages[Math.min(9,scenarioPhase+1)];setScenarioTime(next.start+.01);setScenarioStatus(next.id===9?"paused":"playing")};
  const cycleScenarioSpeed=()=>setScenarioSpeed(speed=>speed===1?1.5:speed===1.5?2:1);
  const cycleTrafficDensity=()=>setTrafficDensity(density=>density===18?36:density===36?54:18);

  const reroute = (roadId?: number) => {
    setBlockedRoadId(typeof roadId==="number"?roadId:null);
    setBlocked(true);
    setRunning(true);
  };

  const stopFollowing = () => {
    setFollowingId(null);
    window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"follow",assetId:null}}));
  };

  const focusIncident=()=>{stopFollowing();setDirectorMode(false);setAutoTour(false);window.dispatchEvent(new CustomEvent("city-camera",{detail:"incident"}))};

  const trackResource=(resourceId:string)=>{if(sceneStatus==="loading"){setSystemNotice("真实地图仍在加载，资源位置暂不可追踪");return}const map:{[key:string]:string}={"FIRE-01":"firetruck","FIRE-02":"firetruck","ROBOT-01":"firetruck","MED-03":"ambulance","MED-06":"ambulance","POLICE-07":"police-car","BIKE-02":"police-car"},assetId=map[resourceId];setSelectedAsset(null);setAutoTour(false);setDirectorMode(false);if(scenarioPhase<4||scenarioStatus==="complete"){setScenarioTime(20.01);setScenarioStatus("playing");setRunning(true);setShowRisk(true)}if(assetId){setFollowingId(assetId);window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"follow",assetId}}));setSystemNotice("已同步到所属编队的真实道路跟随视角")}else{setFollowingId(null);window.dispatchEvent(new CustomEvent("city-camera",{detail:"incident"}));setSystemNotice("该资源已同步到事故现场任务区域")}};

  const toggleFollowing = (asset: SceneAsset) => {
    const next=followingId===asset.id?null:asset.id;
    setAutoTour(false);setFollowingId(next);
    window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"follow",assetId:next}}));
  };

  const generateReport = () => {
    setReportGeneratedAt(new Date().toLocaleString("zh-CN",{hour12:false}).replaceAll("/","-"));
    setReportOpen(true);setReportGenerating(true);
    window.setTimeout(()=>setReportGenerating(false),700);
  };

  const downloadReport = () => {
    const url=URL.createObjectURL(new Blob(["\ufeff",reportText],{type:"text/plain;charset=utf-8"})),link=document.createElement("a");
    link.href=url;link.download="灵境哨兵-危化品泄漏应急处置报告.txt";link.click();window.setTimeout(()=>URL.revokeObjectURL(url),1000);
  };

  const analyzeUpload = async (file?: File) => {
    if(!file)return; setAnalyzing(true);
    const preview=URL.createObjectURL(file); setImagePreview(old=>{if(old)URL.revokeObjectURL(old);return preview});
    try{setVision(await analyzeAccidentImage(file))}finally{setAnalyzing(false)}
  };

  const handleAuthenticated=(session:AuthSession,remember:boolean)=>{
    localStorage.removeItem("lingjing-session");sessionStorage.removeItem("lingjing-session");
    (remember?localStorage:sessionStorage).setItem("lingjing-session",JSON.stringify(session));setCurrentUser(session);
  };

  const toggleFullscreen=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();setSystemNotice(document.fullscreenElement?"已进入全屏演示":"已退出全屏演示")}catch{setSystemNotice("当前浏览器未允许全屏，请使用 F11")}};
  const logout=()=>{if((scenarioStatus==="playing"||scenarioStatus==="paused")&&!window.confirm("当前推演尚未结束，退出将中止本次演示。确定退出吗？"))return;localStorage.removeItem("lingjing-session");sessionStorage.removeItem("lingjing-session");setAccountMenuOpen(false);setActiveModule("overview");setSceneStatus("loading");setCurrentUser(null)};

  if(!authChecked)return <main className="auth-boot"><div className="auth-brand-mark"><i/><i/><i/></div><span>安全环境初始化中</span></main>;
  if(!currentUser)return <AuthPortal onAuthenticated={handleAuthenticated}/>;

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand-mark"><i /><i /><i /></div>
        <div className="brand"><b>灵境哨兵</b><span>城市应急智能决策平台 · LINGJING SENTINEL</span></div>
        <nav aria-label="主功能导航">{navigation.map(item=><button key={item.id} className={activeModule===item.id?"active":""} aria-current={activeModule===item.id?"page":undefined} onClick={()=>{setActiveModule(item.id);setAccountMenuOpen(false)}}>{item.label}</button>)}</nav>
        <div className="status"><span className="live-dot" />系统在线 <em>{currentUser.displayName}</em><button className={`avatar ${accountMenuOpen?"open":""}`} onClick={()=>setAccountMenuOpen(value=>!value)} title="打开账号菜单" aria-label="打开账号菜单" aria-expanded={accountMenuOpen} aria-haspopup="menu" aria-controls="account-menu">{currentUser.displayName.slice(0,1)}</button>{accountMenuOpen&&<div className="account-menu" id="account-menu" role="menu"><header><i>{currentUser.displayName.slice(0,1)}</i><div><strong>{currentUser.displayName}</strong><span>{currentUser.username} · 应急指挥中心</span></div></header><button onClick={toggleFullscreen}><span>⛶ 全屏演示</span><b>{typeof document!=="undefined"&&document.fullscreenElement?"退出":"进入"}</b></button><button onClick={()=>{setDirectorMode(value=>!value);setSystemNotice(directorMode?"导演视角已关闭":"导演视角已开启")}}><span>◉ 导演视角</span><b>{directorMode?"开启":"关闭"}</b></button><button onClick={()=>setSystemNotice("快捷键：1–4 切换模块　空格暂停/继续　→ 下一阶段　Esc 返回")}><span>? 演示快捷键</span><b>查看</b></button><button onClick={()=>setSystemNotice(sceneStatus==="ready"?"系统自检通过：真实地图、路网、AI 模型和调度模块均已就绪":sceneStatus==="loading"?"系统自检进行中：真实路网仍在加载":"系统自检警告：真实路网已启用内置降级路线")}><span>✓ 演示自检</span><b>{sceneStatus==="ready"?"通过":sceneStatus==="loading"?"检测中":"降级"}</b></button><button onClick={()=>{setNightMode(value=>!value);setSystemNotice(nightMode?"已切换为白天态势":"已切换为夜间态势")}}><span>◐ 显示模式</span><b>{nightMode?"夜间":"白天"}</b></button><button onClick={()=>{setBuildingLights(value=>!value);setSystemNotice(buildingLights?"已关闭楼宇灯光":"已开启楼宇灯光")}}><span>✦ 楼宇灯光</span><b>{buildingLights?"开启":"关闭"}</b></button><button onClick={()=>{setActiveModule("resources");setAccountMenuOpen(false)}}><span>⌘ 快速调度</span><b>进入</b></button><button className="logout" onClick={logout}><span>↪ 退出登录</span><b>EXIT</b></button></div>}</div>
      </header>

      <section className="command-strip">
        <div className={`alert-tag scenario-alert phase-${scenarioPhase}`}>{scenarioPhase===0?"完整演示 · READY":`${String(scenarioPhase).padStart(2,"0")}/09 · ${scenarioStatus==="playing"?"LIVE":scenarioStatus==="paused"?"PAUSED":"COMPLETE"}`}</div>
        <div><strong>{currentScenario.title}｜{currentScenario.subtitle}</strong><span>{currentScenario.clock} · {currentScenario.detail}</span></div>
        <div className="command-actions"><span>{sceneStatus==="loading"?"正在装载 6,016 栋建筑与 674 段道路":scenarioPhase===0?"全链路演示已就绪":`T+${scenarioTime.toFixed(1)}s · ${currentScenario.metric}`}</span><button disabled={sceneStatus==="loading"} onClick={start}>{sceneStatus==="loading"?"正在加载真实路网…":scenarioPhase===0?"▶ 一键完整演示":scenarioStatus==="complete"?"↻ 再演示一次":"↻ 从头重播"}</button></div>
      </section>

      <InteractiveModules active={activeModule} onClose={()=>setActiveModule("overview")} onStartScenario={start} onFocusIncident={focusIncident} onGenerateReport={generateReport} onNotice={setSystemNotice} onTrackResource={trackResource} scenarioPhase={scenarioPhase} scenarioTime={scenarioTime} scenarioStatus={scenarioStatus}/>
      {systemNotice&&<div className={`system-toast ${/失败|异常|未允许/.test(systemNotice)?"error":/召回|关闭|降级|加载/.test(systemNotice)?"warning":"success"}`} role="status" aria-live="polite"><i>{/失败|异常|未允许/.test(systemNotice)?"!":/召回|关闭|降级|加载/.test(systemNotice)?"i":"✓"}</i><span>{systemNotice}</span></div>}

      <section className="workspace">
        <aside className="left-panel panel">
          <div className="panel-title"><span>01</span>事件智能识别 <b>AI VISION</b></div>
          <div className="scene">
            {imagePreview && <img className="scene-upload-preview" src={imagePreview} alt="上传的事故现场" />}
            <div className="sky" />
            <div className="road-lines" />
            <div className={`truck ${scenarioPhase>=2?"failed":""}`}><span>化学废料</span></div>
            {scenarioPhase>=2&&<><div className="smoke s1" /><div className="smoke s2" /><div className="smoke s3" /></>}
            {scenarioPhase>=3&&<><div className="detect-box"><label>化学废料运输车 98.2%</label></div><div className="detect-smoke"><label>含氯挥发气体 96.8%</label></div></>}
            <div className="camera">CAM-07 · LIVE</div>
            <label className="upload-image">{analyzing?"分析中…":"上传事故图"}<input type="file" accept="image/*" onChange={e=>analyzeUpload(e.target.files?.[0])} /></label>
            <div className="local-cv">LOCAL CV · PIXEL FEATURE MODEL</div>
          </div>
          <div className="recognition">
            <div><span>车辆状态</span><strong>{scenarioPhase===0?"等待演示":scenarioPhase===1?"正常运输":scenarioPhase===2?"动力故障":"已停车处置"}</strong></div><div><span>AI 识别置信度</span><strong>{scenarioPhase>=3?`${(vision.confidence*100).toFixed(1)}%`:"—"}</strong></div>
            <div><span>烟羽像素占比</span><strong>{scenarioPhase>=3?`${(vision.smokeRatio*100).toFixed(1)}%`:"0.0%"}</strong></div><div><span>已疏散人员</span><strong>{scenarioPhase>=6?"186 人":"0 人"}</strong></div>
          </div>
          <div className="ai-note"><b>{scenarioPhase>=3?"本地视觉研判":"运输遥测状态"}</b><p>{scenarioPhase===0?"等待启动完整演示，车辆与应急力量已加载。":currentScenario.detail} {scenarioPhase>=3&&<>东南风 3.4 m/s（吹向西北），预计 <em>{Math.max(3,Math.round(480/3.4/60))} 分钟</em>进入重点警戒区域。</>}</p></div>
          <div className="panel-title compact"><span>02</span>智能体协同 <b>MULTI-AGENT</b></div>
          <div className="agents">{departments.map((d, i) => {const activation=[4,4,4,3][i],completion=[7,8,6,9][i],active=scenarioPhase>=activation,done=scenarioPhase>=completion;return <div className={`agent ${d.tone} ${active?"scenario-active":""} ${done?"scenario-done":""}`} key={d.name}><i>{done?"✓":d.icon}</i><p><b>{d.name}</b><span>{!active?"系统待命 · 等待联合调度":done?"阶段任务完成 · 状态已回传":running&&pulse===i?"正在执行当前处置任务…":d.text}</span></p><em>●</em></div>})}</div>
        </aside>

        <section className="map-panel panel">
          <div className="panel-title"><span>03</span>真实城市三维推演 <b>REAL-WORLD DIGITAL TWIN</b><div className="map-tools"><button aria-label="缩小" onClick={()=>window.dispatchEvent(new CustomEvent("city-camera",{detail:"zoomOut"}))}>−</button><button aria-label="放大" onClick={()=>window.dispatchEvent(new CustomEvent("city-camera",{detail:"zoomIn"}))}>＋</button></div></div>
          <div className="map" onClick={()=>setSelectedAsset(null)}>
            <CityScene running={running} blocked={blocked} blockedRoadId={blockedRoadId} showRisk={showRisk} topView={!tilt} nightMode={nightMode} buildingLights={buildingLights} autoTour={autoTour} suspended={activeModule!=="overview"||reportOpen} scenarioPhase={scenarioPhase} scenarioTime={scenarioTime} trafficDensity={trafficDensity} onSelect={setSelectedAsset} onRealRoute={setRealRoute} onSceneStatus={status=>{setSceneStatus(status);if(status==="degraded")setSystemNotice("真实路网数据异常，已自动启用内置完整路线")}} plume={plume} />
            <div className={`scenario-console phase-${scenarioPhase} ${scenarioStatus}`} onClick={event=>event.stopPropagation()}>
              <div className="scenario-now"><i>{currentScenario.icon}</i><div><span>SCENARIO DIRECTOR · {scenarioPhase===0?"READY":`${String(scenarioPhase).padStart(2,"0")}/09`}</span><strong>{currentScenario.title}</strong><p>{currentScenario.subtitle}</p></div><em>{scenarioPhase===0?"01:12":`${Math.floor(scenarioTime/60).toString().padStart(2,"0")}:${Math.floor(scenarioTime%60).toString().padStart(2,"0")}`}</em></div>
              <div className="scenario-progress"><span style={{width:`${scenarioProgress}%`}}/><i style={{left:`${scenarioProgress}%`}}/></div>
              <div className="scenario-stage-rail">{scenarioStages.slice(1).map(stage=><button key={stage.id} className={scenarioPhase===stage.id?"active":scenarioPhase>stage.id?"done":""} title={`${stage.clock} ${stage.title}`} onClick={()=>{setScenarioTime(stage.start+.01);setScenarioStatus("paused")}}><i>{stage.id}</i><span>{stage.title}</span></button>)}</div>
              <div className="scenario-controls"><button className="primary" disabled={sceneStatus==="loading"} onClick={scenarioPhase===0||scenarioStatus==="complete"?start:toggleScenario}>{sceneStatus==="loading"?"路网加载中…":scenarioPhase===0?"▶ 一键完整演示":scenarioStatus==="playing"?"Ⅱ 暂停":scenarioStatus==="complete"?"↻ 再演示":"▶ 继续"}</button><button disabled={scenarioPhase===0||scenarioPhase===9} onClick={nextScenarioStage}>下一阶段 →</button><button onClick={cycleScenarioSpeed}>{scenarioSpeed}× 倍速</button><button onClick={cycleTrafficDensity}>车流：{trafficDensity===18?"畅通":trafficDensity===36?"繁忙":"拥堵"} · {trafficDensity}</button><button className={directorMode?"on":""} aria-pressed={directorMode} onClick={()=>setDirectorMode(value=>!value)}>◉ 导演视角</button></div>
            </div>
            <div className="map-layer-tools"><button className={tilt?"on":""} onClick={()=>{stopFollowing();setDirectorMode(false);setTilt(v=>!v)}}>◈ {tilt?"自由三维":"垂直俯视"}</button><button className={showRisk?"on":""} onClick={()=>setShowRisk(v=>!v)}>◉ 风险热区</button><button className={nightMode?"on":""} onClick={()=>setNightMode(v=>!v)}>{nightMode?"☀ 白天":"☾ 夜间"}</button><button className={buildingLights?"on":""} onClick={()=>setBuildingLights(v=>!v)}>✦ 楼宇灯光</button><button className={autoTour?"on":""} onClick={()=>{stopFollowing();setDirectorMode(false);setAutoTour(v=>!v)}}>{autoTour?"■ 停止巡航":"▶ 自动巡航"}</button>{followingId&&<button className="on" onClick={stopFollowing}>■ 停止跟随</button>}<button onClick={()=>{stopFollowing();setDirectorMode(false);setAutoTour(false);window.dispatchEvent(new CustomEvent("city-camera",{detail:"incident"}))}}>◎ 聚焦事故</button><button onClick={()=>{stopFollowing();setDirectorMode(false);setAutoTour(false);window.dispatchEvent(new CustomEvent("city-camera",{detail:"reset"}))}}>⌖ 复位</button></div>
            <div className="coordinates">39°54′27″N&nbsp;&nbsp;116°27′07″E　|　北京 CBD</div>
            <div className="wind">↖<span>东南风 3.4m/s<br/>吹向西北</span></div>
            <div className="legend"><div><i className="lg-red" />致命区</div><div><i className="lg-orange" />高风险</div><div><i className="lg-yellow" />警戒区</div></div>
            <div className="map-attribution">© OpenStreetMap contributors · 北京核心区真实矢量数据</div>
            {selectedAsset && <div className="asset-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setSelectedAsset(null)}>×</button><span>{selectedAsset.category}</span><strong>{selectedAsset.label}</strong><p>{selectedAsset.details}</p><em>{selectedAsset.meta}</em><div className="asset-actions">{selectedAsset.position&&<button onClick={()=>{stopFollowing();setAutoTour(false);window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"focus",position:selectedAsset.position}}))}}>◎ 定位观察</button>}{selectedAsset.action==="follow-vehicle"&&<button className={followingId===selectedAsset.id?"tracking":""} onClick={()=>toggleFollowing(selectedAsset)}>{followingId===selectedAsset.id?"■ 停止跟随":"◉ 跟随车辆"}</button>}{selectedAsset.action==="toggle-building-lights"&&<button className="lights" onClick={()=>window.dispatchEvent(new CustomEvent("city-camera",{detail:{action:"toggle-building-lights",assetId:selectedAsset.id}}))}>✦ 切换楼层灯光</button>}{selectedAsset.action==="block-road"&&<button className="danger" onClick={()=>reroute(Number(selectedAsset.id.replace("road-","")))}>{blocked?"✓ 已封锁并完成真实路网重规划":"⊘ 封锁此路并按真实路网重规划"}</button>}</div></div>}
          </div>
          <div className="time-control"><button aria-label={scenarioStatus==="playing"?"暂停完整推演":scenarioStatus==="paused"?"继续完整推演":riskPlayback?"暂停风险扩散时间":"播放风险扩散时间"} onClick={()=>scenarioStatus==="playing"||scenarioStatus==="paused"?toggleScenario():setRiskPlayback(value=>!value)}>{scenarioStatus==="playing"||riskPlayback?"Ⅱ":"▶"}</button><input aria-label="风险扩散推演时间" type="range" min="1" max="30" value={minute} disabled={scenarioStatus==="playing"||scenarioStatus==="paused"} onChange={(e)=>{setRiskPlayback(false);setMinute(Number(e.target.value))}}/><div><span>现在</span><span>+5min</span><span>+15min</span><span>+30min</span></div><strong>{scenarioStatus==="playing"||scenarioStatus==="paused"?"导演脚本联动 · ":""}+{minute}min · 警戒纵深 {plume.warning}m</strong></div>
        </section>

        <aside className="right-panel panel">
          <div className="panel-title"><span>04</span>决策方案 <b>AI COMMAND</b></div>
          <div className="score-card"><span>当前最优方案 · 实时求解</span><strong>{blocked ? "方案 B · A* 动态重规划" : "方案 A · 最短响应路径"}</strong><div><b>{blocked ? "92.4" : "95.1"}</b><small>综合评分</small></div></div>
          <div className="metrics"><div><span>OSM A* 预计响应</span><b className="green">{realRoute?.eta??route.eta} min</b><small>搜索 {realRoute?.visited??route.visited} 个真实道路节点</small></div><div><span>模型风险暴露</span><b>{plume.affectedPeople} 人</b><small>{plume.model}</small></div><div><span>真实救援路径</span><b>{((realRoute?.distance??route.distance)/1000).toFixed(2)} km</b><small>{realRoute?.roads.slice(0,3).join(" → ")||"正在加载 OSM 路网"}</small></div></div>
          <div className="plan-steps">
            {["封锁泄漏点周边 500m 道路","学校师生向东南侧上风向分批疏散","消防车沿 OSM 真实道路抵达","救护组在体育中心建立分诊点"].map((x,i)=><div key={x}><i>{i+1}</i><p>{x}<span>{["交警 · 2分钟内","教育 · 8分钟完成",`消防 · 预计${realRoute?.eta??7}分钟`,"医疗 · 12分钟启用"][i]}</span></p><em>✓</em></div>)}
          </div>
          <button className="block-button" disabled={scenarioPhase>0&&scenarioStatus!=="complete"} onClick={()=>reroute()}>{scenarioPhase>0&&scenarioStatus!=="complete"?"完整演示进行中 · 道路决策已锁定":blocked ? `✓ OSM A* 已重规划：${realRoute?.roads.slice(0,4).join(" → ")||"已避开封闭道路"}` : "模拟突发：封闭东二环路段并按真实道路重规划"}</button>
          <div className="algorithm-proof"><div><span>扩散模型</span><b>高斯烟羽 / Pasquill-D</b><em>Q=80g/s · U=3.4m/s</em></div><div><span>路径算法</span><b>OSM 真实路网 A* · Euclidean</b><em>距离 {realRoute?.distance??route.distance}m · ETA {realRoute?.eta??route.eta}min</em></div></div>
          <div className="panel-title compact"><span>05</span>决策时间线 <b>TRACE</b></div>
          <div className="timeline scenario-timeline">{scenarioStages.slice(1).map(stage=><div className={scenarioPhase===stage.id?"active":scenarioPhase>stage.id?"done":""} key={stage.id}><time>{stage.clock}</time><i /><p><b>{stage.title}</b><span>{stage.subtitle}</span></p></div>)}</div>
          <button className="report" onClick={generateReport}>生成应急处置报告 <span>↗</span></button>
        </aside>
      </section>

      {reportOpen&&<div className="report-overlay" onClick={()=>setReportOpen(false)}><section className="report-dialog" role="dialog" aria-modal="true" aria-label="应急处置报告" onClick={e=>e.stopPropagation()}><button className="report-close" aria-label="关闭报告" onClick={()=>setReportOpen(false)}>×</button>{reportGenerating?<div className="report-generating"><i/><strong>AI 正在生成应急处置报告</strong><p>汇总视觉识别、风险扩散、OSM 路网与多智能体决策结果…</p><div><span/><span/><span/><span/></div></div>:<><header className="report-head"><div><span>LINGJING SENTINEL · AUTO REPORT</span><h2>危化品泄漏应急处置报告</h2><p>报告编号：LJ-BJ-20260720-001　生成时间：{reportGeneratedAt}</p></div><b>Ⅰ级响应</b></header><div className="report-paper"><div className="report-summary"><div><span>AI 事故判定</span><strong>{vision.type}</strong><em>置信度 {(vision.confidence*100).toFixed(1)}%</em></div><div><span>警戒纵深</span><strong>{plume.warning} m</strong><em>高斯烟羽 · Pasquill-D</em></div><div><span>风险暴露</span><strong>{plume.affectedPeople} 人</strong><em>现场估计 {vision.persons} 人</em></div><div><span>消防 ETA</span><strong>{realRoute?.eta??route.eta} min</strong><em>{realRoute?.distance??route.distance} m</em></div></div><article><h3>01　事件概况与智能研判</h3><p>北京市朝阳区建国门外大街国贸桥西侧发生危化品运输车泄漏。视觉模型识别为<strong>{vision.type}</strong>，烟羽像素占比 {(vision.smokeRatio*100).toFixed(1)}%，现场人员约 {vision.persons} 人。{vision.summary}</p><div className="report-callout danger"><b>核心风险</b><span>东南风 3.4 m/s，污染羽流向西北扩散；学校位于事故点 500 米重点保护范围内，应启动预防性疏散。</span></div></article><article><h3>02　风险扩散计算</h3><table><tbody><tr><th>风险等级</th><th>纵深</th><th>处置要求</th></tr><tr><td>致命区</td><td>{plume.lethal} m</td><td>仅允许专业防化力量进入</td></tr><tr><td>高风险区</td><td>{plume.high} m</td><td>立即疏散并设置硬隔离</td></tr><tr><td>警戒区</td><td>{plume.warning} m</td><td>持续监测并准备扩大疏散</td></tr></tbody></table></article><article><h3>03　消防救援真实道路路线</h3><p>系统使用 674 段北京 OSM 道路构图，并通过 A* 搜索 {realRoute?.visited??route.visited} 个道路节点。当前路线：</p><div className="report-route">{realRoute?.roads.join("　→　")||"正在载入真实道路名称"}</div><p>{blocked?`已封锁 OSM 道路 ${realRoute?.blockedRoadId??blockedRoadId??"自动选择路段"}，消防车已避开该路段并完成动态重规划。`:"当前道路正常通行，消防车沿最短真实路网路线行驶。"}</p></article><article><h3>04　联合处置指令</h3><ol><li><b>交通：</b>2 分钟内封锁事故点周边 500 m 道路，建立 3.2 km 应急绿波带。</li><li><b>教育：</b>城北实验学校师生经东南侧上风向安全通道分批疏散，8 分钟完成重点人员转移。</li><li><b>消防：</b>2 辆泡沫消防车沿 OSM 路线抵达，在上风向布置水幕并实施堵漏。</li><li><b>医疗：</b>开放三级医院绿色通道，在体育中心设置临时分诊点。</li><li><b>监测：</b>下风向 200 m、500 m、1000 m 设置监测点，每 2 分钟回传浓度。</li></ol></article><div className="report-conclusion"><b>AI 处置结论</b><p>立即启动危化品泄漏Ⅰ级联合响应，处置优先级为：学校疏散 → 道路封控 → 泄漏源控制 → 医疗救治 → 环境复测。</p><small>本报告由灵境哨兵自动生成，用于竞赛演示；正式行动须由现场指挥员复核。</small></div></div><footer className="report-actions"><button onClick={downloadReport}>↓ 下载完整报告</button><button onClick={()=>setReportOpen(false)}>关闭报告</button></footer></>}</section></div>}

      <footer><span>数据源：城市感知网络 · 气象局 · 应急资源库</span><strong><i /> AI 决策引擎运行正常 · 处理延迟 128ms</strong><span>灵境哨兵 v3.0 FINAL · 离线演示环境</span></footer>
    </main>
  );
}
