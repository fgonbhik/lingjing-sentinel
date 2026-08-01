"use client";

import { useEffect, useState, type CSSProperties } from "react";

type DetailData = {
  id: string;
  label: string;
  category: string;
  details: string;
  meta: string;
  photo?: {
    src: string;
    alt: string;
    caption: string;
    matchLabel: string;
    credit: string;
    sourceUrl?: string;
    kind: "real";
    assetId: string;
    provider: "verified-local" | "kartaview";
    configured: boolean;
    lookupUrl?: string;
    position?: {
      longitude: number;
      latitude: number;
      heading: number;
      roadName: string;
      distanceMeters: number;
    };
  };
};

type DetailMetric = {
  label: string;
  value: string;
  percent: number;
};

type DetailVariant = "ai" | "vital" | "event" | "eco" | "traffic" | "district" | "platform" | "asset";

type DetailProfile = {
  variant: DetailVariant;
  code: string;
  eyebrow: string;
  status: string;
  accent: string;
  secondary: string;
  primary: string;
  primaryLabel: string;
  metrics: DetailMetric[];
  selectedMetric?: number;
};

type Props = {
  data: DetailData;
  onClose: () => void;
  tone?: "cyan" | "blue";
};

type ResolvedStreetPhoto = {
  src: string;
  distanceMeters?: number;
  heading?: number;
  shotDate?: string;
  imageId?: string;
};

type PhotoStatus = "idle" | "loading" | "ready" | "empty" | "error";

const kartaViewPhotoCache = new Map<string, ResolvedStreetPhoto | null>();

function firstString(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.startsWith("https://")) return value;
  }
  return "";
}

function parseKartaViewPhoto(payload: unknown): ResolvedStreetPhoto | null {
  if (!payload || typeof payload !== "object") return null;
  const result = (payload as { result?: unknown }).result;
  if (!result || typeof result !== "object") return null;
  const data = (result as { data?: unknown }).data;
  if (!Array.isArray(data)) return null;

  for (const candidate of data) {
    if (!candidate || typeof candidate !== "object") continue;
    const record = candidate as Record<string, unknown>;
    const src = firstString(record, ["imageProcUrl", "fileurlProc", "imageLthUrl", "fileurlLTh", "imageThUrl", "fileurlTh"]);
    if (!src) continue;
    const distance = Number(record.distance);
    const heading = Number(record.heading ?? record.headers);
    return {
      src,
      distanceMeters: Number.isFinite(distance) ? Math.round(distance) : undefined,
      heading: Number.isFinite(heading) ? heading : undefined,
      shotDate: typeof record.shotDate === "string" ? record.shotDate : undefined,
      imageId: typeof record.id === "string" ? record.id : undefined,
    };
  }
  return null;
}

const aiMetrics: DetailMetric[] = [
  { label: "感知覆盖", value: "98%", percent: 98 },
  { label: "协同效率", value: "94%", percent: 94 },
  { label: "预测准确", value: "96%", percent: 96 },
  { label: "处置闭环", value: "97%", percent: 97 },
];

const vitalMetrics: DetailMetric[] = [
  { label: "数字孪生覆盖", value: "100%", percent: 100 },
  { label: "数据完整率", value: "99.8%", percent: 99.8 },
  { label: "分钟级同步", value: "128ms", percent: 88 },
  { label: "趋势稳定度", value: "96.2%", percent: 96.2 },
];

const eventMetrics: DetailMetric[] = [
  { label: "感知可信度", value: "97.8%", percent: 97.8 },
  { label: "自动派单", value: "已完成", percent: 100 },
  { label: "处置进度", value: "92%", percent: 92 },
  { label: "闭环审计", value: "可追溯", percent: 100 },
];

const ecoMetrics: DetailMetric[] = [
  { label: "空气优良率", value: "94.6%", percent: 94.6 },
  { label: "监测站在线", value: "99.4%", percent: 99.4 },
  { label: "碳排强度", value: "-4.8%", percent: 84 },
  { label: "绿色空间", value: "49.8%", percent: 49.8 },
];

const trafficMetrics: DetailMetric[] = [
  { label: "平均车速", value: "41.8 km/h", percent: 78 },
  { label: "信号协调率", value: "92.7%", percent: 92.7 },
  { label: "拥堵里程", value: "28.6 km", percent: 36 },
  { label: "路网在线率", value: "99.2%", percent: 99.2 },
];

const districtMetrics: DetailMetric[] = [
  { label: "城市感知", value: "97.8", percent: 97.8 },
  { label: "交通运行", value: "94.2", percent: 94.2 },
  { label: "公共服务", value: "96.5", percent: 96.5 },
  { label: "治理闭环", value: "95.6", percent: 95.6 },
];

const platformMetrics: DetailMetric[] = [
  { label: "设备在线率", value: "99.97%", percent: 99.97 },
  { label: "模型服务", value: "24 / 24", percent: 100 },
  { label: "数据延迟", value: "128ms", percent: 91 },
  { label: "安全状态", value: "正常", percent: 100 },
];

const detailOverrides: Record<string, Partial<DetailProfile>> = {
  "brand-overview": { accent: "#4ce8ff", secondary: "#4f8fff", code: "P-01", primary: "5,275", primaryLabel: "地图内建筑" },
  "command-center": { accent: "#718fff", secondary: "#aa91ff", code: "P-02", primary: "24 / 24", primaryLabel: "城市模型服务" },
  "system-health": { accent: "#5ce8ae", secondary: "#45cfff", code: "P-03", primary: "99.97%", primaryLabel: "系统健康度" },
  "city-clock": { accent: "#ffbd67", secondary: "#ff855c", code: "P-04", primary: "1s", primaryLabel: "时间同步周期" },
  operator: { accent: "#b091ff", secondary: "#668dff", code: "P-05", primary: "ADMIN", primaryLabel: "演示权限" },
  "navigation-0": { accent: "#4ce8ff", secondary: "#5f8fff", code: "N-01", primary: "全域", primaryLabel: "城市态势总览" },
  "navigation-1": { accent: "#6e9aff", secondary: "#b08fff", code: "N-02", primary: "96.8%", primaryLabel: "事件闭环率" },
  "navigation-2": { accent: "#ffc769", secondary: "#ff885c", code: "N-03", primary: "41.8", primaryLabel: "平均车速 km/h" },
  "navigation-3": { accent: "#58eab0", secondary: "#4fd9ff", code: "N-04", primary: "94.6%", primaryLabel: "空气优良率" },
  "navigation-4": { accent: "#ff7866", secondary: "#ffb65e", code: "N-05", primary: "99.3%", primaryLabel: "应急资源在线" },
  area: { accent: "#4ce8ff", secondary: "#4b8fff", code: "V-01", primary: "16,410", primaryLabel: "平方公里" },
  gdp: { accent: "#b48bff", secondary: "#657cff", code: "V-02", primary: "4.98", primaryLabel: "万亿元" },
  rail: { accent: "#4f9dff", secondary: "#45dcff", code: "V-03", primary: "879", primaryLabel: "运营公里" },
  parks: { accent: "#55e9ad", secondary: "#35bfcf", code: "V-04", primary: "1,064", primaryLabel: "公园绿地" },
  pm25: { accent: "#68edaf", secondary: "#42dce8", code: "E-01", primary: "28", primaryLabel: "μg/m³" },
  air: { accent: "#54efc0", secondary: "#48bcff", code: "E-02", primary: "94.6%", primaryLabel: "空气优良率" },
  temperature: { accent: "#ffbd69", secondary: "#ff7f5e", code: "E-03", primary: "26.3°C", primaryLabel: "城市平均温度" },
  carbon: { accent: "#65e789", secondary: "#39c7bd", code: "E-04", primary: "-4.8%", primaryLabel: "同比变化" },
  "traffic-index": { accent: "#ffc769", secondary: "#ff885c", code: "T-01", primary: "1.42", primaryLabel: "全路网指数" },
  "traffic-flow": { accent: "#ff9f5d", secondary: "#ffd266", code: "T-02", primary: "54", primaryLabel: "动态车辆" },
  speed: { accent: "#54d9ff", secondary: "#5f8fff", code: "T-03", primary: "41.8", primaryLabel: "km/h" },
  congestion: { accent: "#ff7768", secondary: "#ffad5d", code: "T-04", primary: "28.6", primaryLabel: "拥堵公里" },
  signals: { accent: "#5ce8ae", secondary: "#49cfff", code: "T-05", primary: "92.7%", primaryLabel: "信号协调率" },
};

function cleanId(id: string) {
  return id.replace(/^insight-/, "");
}

function getProfile(data: DetailData): DetailProfile {
  const key = cleanId(data.id);
  const aiDimension = /^ai-(\d)$/.exec(key);
  const event = /^event-(\d)$/.exec(key);
  const district = /^district-(.+)$/.exec(key);

  let base: DetailProfile;

  if (key === "ai-score" || aiDimension) {
    const selectedMetric = aiDimension ? Number(aiDimension[1]) : undefined;
    const primary = selectedMetric === undefined ? "96.4" : aiMetrics[selectedMetric]?.value.replace("%", "") ?? "96.4";
    base = {
      variant: "ai",
      code: selectedMetric === undefined ? "AI-00" : `AI-0${selectedMetric + 1}`,
      eyebrow: "CITY AI INDEX · 智能指数详情",
      status: selectedMetric === undefined ? "TOP 1" : `维度 ${selectedMetric + 1}/4`,
      accent: selectedMetric === 3 ? "#59e6b1" : selectedMetric === 2 ? "#55d9ff" : selectedMetric === 1 ? "#7892ff" : "#aa91ff",
      secondary: "#52e0ff",
      primary,
      primaryLabel: selectedMetric === undefined ? "综合智能指数" : aiMetrics[selectedMetric]?.label ?? "能力得分",
      metrics: aiMetrics,
      selectedMetric,
    };
  } else if (["area", "gdp", "rail", "parks"].includes(key)) {
    base = {
      variant: "vital",
      code: "V-00",
      eyebrow: "URBAN VITAL SIGNS · 城市生命体征",
      status: "LIVE",
      accent: "#4ce8ff",
      secondary: "#5f8fff",
      primary: "99.8%",
      primaryLabel: "数据完整率",
      metrics: vitalMetrics,
    };
  } else if (event) {
    const index = Number(event[1]);
    const accents = ["#ff7666", "#ffb65e", "#56d8ff", "#62e5ae"];
    const states = ["已闭环", "运行正常", "负荷稳定", "空气优良"];
    base = {
      variant: "event",
      code: `EV-0${index + 1}`,
      eyebrow: "AI EVENT STREAM · 城市事件中枢",
      status: states[index] ?? "处理中",
      accent: accents[index] ?? "#ff8d68",
      secondary: index > 1 ? "#56d8ff" : "#ffbd68",
      primary: data.meta.match(/BJ-(\d+)/)?.[1] ?? `0${index + 1}`,
      primaryLabel: "事件追踪编号",
      metrics: eventMetrics,
      selectedMetric: index,
    };
  } else if (["pm25", "air", "temperature", "carbon"].includes(key) || data.category.includes("生态")) {
    base = {
      variant: "eco",
      code: "E-00",
      eyebrow: "ECOLOGICAL MONITORING · 生态环境",
      status: "优",
      accent: "#58ebb0",
      secondary: "#4fd9ff",
      primary: "94.6%",
      primaryLabel: "空气优良率",
      metrics: ecoMetrics,
    };
  } else if (["traffic-index", "traffic-flow", "speed", "congestion", "signals"].includes(key) || data.category.includes("交通")) {
    base = {
      variant: "traffic",
      code: "T-00",
      eyebrow: "TRAFFIC MOBILITY · 交通运行脉搏",
      status: "畅通",
      accent: "#ffc46b",
      secondary: "#ff8b5b",
      primary: "1.42",
      primaryLabel: "全路网指数",
      metrics: trafficMetrics,
    };
  } else if (district) {
    const districtName = district[1];
    const districtAccent: Record<string, string> = { 朝阳: "#4bdcff", 海淀: "#788fff", 东城: "#5be6ad", 丰台: "#ffad5b" };
    const score = data.meta.match(/(\d{2}\.\d)/)?.[1] ?? "95.6";
    base = {
      variant: "district",
      code: `D-${districtName.slice(0, 1)}`,
      eyebrow: "DISTRICT OPERATIONS · 城区运行态势",
      status: "16 区联动",
      accent: districtAccent[districtName] ?? "#58b7ff",
      secondary: "#6f8fff",
      primary: score,
      primaryLabel: "城区综合评分",
      metrics: districtMetrics,
    };
  } else if (data.photo) {
    base = {
      variant: "asset",
      code: "3D-ASSET",
      eyebrow: "DIGITAL TWIN ASSET · 三维城市资产",
      status: "已定位",
      accent: "#4ce8ff",
      secondary: "#4f8fff",
      primary: data.meta.match(/(\d+)\s*m/)?.[1] ?? "ONLINE",
      primaryLabel: data.meta.includes(" m") ? "建筑高度 / m" : "实时资产",
      metrics: platformMetrics,
    };
  } else {
    base = {
      variant: "platform",
      code: "CITY-OPS",
      eyebrow: "BEIJING CITY OPERATIONS · 城市运行详情",
      status: "ONLINE",
      accent: "#54e2f2",
      secondary: "#718fff",
      primary: data.meta.match(/(\d+(?:\.\d+)?%?)/)?.[1] ?? "99.97%",
      primaryLabel: "系统运行值",
      metrics: platformMetrics,
    };
  }

  return { ...base, ...detailOverrides[key] };
}

function MetricRows({ profile }: { profile: DetailProfile }) {
  return (
    <div className="detail-metric-list">
      {profile.metrics.map((metric, index) => (
        <div
          className={profile.selectedMetric === index ? "selected" : ""}
          key={metric.label}
          style={{ "--metric-progress": `${metric.percent}%` } as CSSProperties}
        >
          <span>{metric.label}</span>
          <meter min="0" max="100" value={metric.percent} aria-label={`${metric.label} ${metric.value}`} />
          <strong>{metric.value}</strong>
        </div>
      ))}
    </div>
  );
}

function DetailVisualization({ profile }: { profile: DetailProfile }) {
  if (profile.variant === "ai") {
    return (
      <section className="detail-visual detail-ai-visual" aria-label="城市智能指数能力结构">
        <div className="detail-ai-summary">
          <div className="score-rings detail-score-rings"><i /><i /><i /><strong>{profile.primary}</strong><span>综合评分</span></div>
          <div><span>AI 城市大脑</span><b>{profile.primaryLabel}</b><em>{profile.status}</em><p>城市治理模型实时计算中</p></div>
        </div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  if (profile.variant === "event") {
    return (
      <section className="detail-visual detail-event-visual" aria-label="城市事件处置链">
        <div className="detail-event-sequence">
          <div><span>01</span><b>感知发现</b><em>完成</em></div>
          <div><span>02</span><b>模型研判</b><em>可信</em></div>
          <div><span>03</span><b>联动派单</b><em>执行</em></div>
          <div><span>04</span><b>闭环审计</b><em>{profile.status}</em></div>
        </div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  if (profile.variant === "traffic") {
    return (
      <section className="detail-visual detail-traffic-visual" aria-label="交通运行指标">
        <div className="detail-primary-number"><span>{profile.primaryLabel}</span><strong>{profile.primary}</strong><em>{profile.status}</em></div>
        <div className="detail-traffic-flow" aria-label="近八小时车流趋势">
          {[38, 54, 46, 67, 83, 72, 91, 64, 76, 58, 69, 43].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  if (profile.variant === "eco") {
    return (
      <section className="detail-visual detail-eco-visual" aria-label="生态环境指标">
        <div className="detail-eco-primary"><span>{profile.primaryLabel}</span><strong>{profile.primary}</strong><em>{profile.status}</em></div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  if (profile.variant === "district") {
    return (
      <section className="detail-visual detail-district-visual" aria-label="城区运行评分">
        <div className="detail-district-rank"><span>{profile.code}</span><strong>{profile.primary}</strong><em>{profile.primaryLabel}</em></div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  if (profile.variant === "vital") {
    return (
      <section className="detail-visual detail-vital-visual" aria-label="城市生命体征指标">
        <div className="detail-primary-number"><span>{profile.primaryLabel}</span><strong>{profile.primary}</strong><em>{profile.status}</em></div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  if (profile.variant === "platform") {
    return (
      <section className="detail-visual detail-platform-visual" aria-label="城市平台运行状态">
        <div className="detail-platform-status"><span>核心服务</span><strong>{profile.primary}</strong><em>{profile.status}</em></div>
        <MetricRows profile={profile} />
      </section>
    );
  }

  return null;
}

function BuildingPhoto({ photo }: { photo: NonNullable<DetailData["photo"]> }) {
  const cachedAtMount = photo.lookupUrl && kartaViewPhotoCache.has(photo.lookupUrl)
    ? kartaViewPhotoCache.get(photo.lookupUrl) ?? null
    : null;
  const [failedPhotoSrc, setFailedPhotoSrc] = useState("");
  const [resolvedStreetPhoto, setResolvedStreetPhoto] = useState<ResolvedStreetPhoto | null>(() =>
    photo.provider === "verified-local" ? (photo.src ? { src: photo.src } : null) : cachedAtMount,
  );
  const [photoStatus, setPhotoStatus] = useState<PhotoStatus>(() => {
    if (photo.provider === "verified-local") return photo.src ? "ready" : "empty";
    if (!photo.lookupUrl) return "error";
    if (kartaViewPhotoCache.has(photo.lookupUrl)) return cachedAtMount ? "ready" : "empty";
    return "loading";
  });
  const photoFailed = Boolean(resolvedStreetPhoto?.src) && failedPhotoSrc === resolvedStreetPhoto?.src;

  useEffect(() => {
    if (photo.provider !== "kartaview" || !photo.lookupUrl || kartaViewPhotoCache.has(photo.lookupUrl)) return;
    const lookupUrl = photo.lookupUrl;
    const controller = new AbortController();
    fetch(lookupUrl, { signal: controller.signal, headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) throw new Error(`KartaView HTTP ${response.status}`);
        return await response.json() as unknown;
      })
      .then((payload) => {
        const resolved = parseKartaViewPhoto(payload);
        kartaViewPhotoCache.set(lookupUrl, resolved);
        setResolvedStreetPhoto(resolved);
        setPhotoStatus(resolved ? "ready" : "empty");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setPhotoStatus("error");
      });
    return () => controller.abort();
  }, [photo.lookupUrl, photo.provider]);

  return (
    <figure className="data-detail-photo" data-photo-kind={photo.kind} data-photo-provider={photo.provider} data-asset-id={photo.assetId}>
      {photoStatus === "ready" && resolvedStreetPhoto?.src && !photoFailed ? (
        <a href={resolvedStreetPhoto.src} target="_blank" rel="noreferrer" aria-label={`查看${photo.caption}大图`}>
          {/* External street imagery cannot use the framework image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={resolvedStreetPhoto.src} alt={photo.alt} onError={() => setFailedPhotoSrc(resolvedStreetPhoto.src)} />
          <span>点击查看真实街景 ↗</span>
        </a>
      ) : (
        <div className="data-detail-photo-empty" role="status">
          <i>{photoStatus === "loading" ? "LOOKING UP" : photoStatus === "error" ? "OFFLINE" : photoFailed ? "IMAGE ERROR" : "NO COVERAGE"}</i>
          <strong>
            {photoStatus === "loading"
              ? "正在按建筑坐标检索 KartaView 街景"
              : photoStatus === "error"
                ? "KartaView 在线查询暂不可用"
                : photoFailed
                  ? "实景图片加载失败"
                  : "该建筑附近暂无 KartaView 街景覆盖"}
          </strong>
          <span>{photoStatus === "loading" ? "仅在打开详情时发起一次查询" : "系统不会使用其他建筑照片替代"}</span>
        </div>
      )}
      <figcaption>
        <b>{photo.matchLabel}</b>
        <strong>{photo.caption}</strong>
        <small>{photo.credit}</small>
        {photo.provider === "kartaview" && resolvedStreetPhoto && (
          <small className="data-detail-photo-position">
            KartaView 图片 {resolvedStreetPhoto.imageId || "未编号"}
            {resolvedStreetPhoto.shotDate ? ` · 拍摄 ${resolvedStreetPhoto.shotDate.slice(0, 10)}` : ""}
            {resolvedStreetPhoto.distanceMeters !== undefined ? ` · 距查询点 ${resolvedStreetPhoto.distanceMeters} m` : ""}
          </small>
        )}
        {photo.position && (
          <small className="data-detail-photo-position">
            WGS84 {photo.position.longitude.toFixed(6)}, {photo.position.latitude.toFixed(6)} · 查询视点距建筑 {photo.position.distanceMeters} m
          </small>
        )}
        {photo.sourceUrl ? (
          <a href={photo.sourceUrl} target="_blank" rel="noreferrer">
            {photo.provider === "kartaview" ? "KartaView 数据与服务说明 ↗" : "图片授权与原始来源 ↗"}
          </a>
        ) : (
          <span className="data-detail-photo-source">已核验本地实景素材</span>
        )}
      </figcaption>
    </figure>
  );
}

export default function DataDetailDialog({ data, onClose, tone = "cyan" }: Props) {
  const profile = getProfile(data);
  const style = {
    "--detail-accent": profile.accent,
    "--detail-secondary": profile.secondary,
  } as CSSProperties;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={`data-detail-layer ${tone} variant-${profile.variant}`} role="presentation" style={style}>
      <button className="data-detail-backdrop" aria-label="关闭数据详情" onClick={onClose} />
      <section
        className={`data-detail-dialog detail-${profile.variant} ${data.photo ? "has-photo" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${data.label}数据详情`}
        data-detail-variant={profile.variant}
      >
        <header>
          <div className="detail-header-title"><i /><span>{profile.eyebrow}</span></div>
          <div className="detail-header-actions"><b>{profile.code}</b><em>{profile.status}</em><button aria-label="关闭数据详情" onClick={onClose}>×</button></div>
        </header>
        <div className={`data-detail-body ${data.photo ? "with-photo" : ""}`}>
          <div className="data-detail-copy">
            <div className="detail-category"><span>{data.category}</span><em>{profile.status}</em></div>
            <h2>{data.label}</h2>
            <DetailVisualization profile={profile} />
            <p>{data.details}</p>
            <div className="data-detail-meta">
              <div><span>数据状态</span><b><i />实时更新</b></div>
              <div><span>研判结果</span><b>{data.meta}</b></div>
            </div>
          </div>
          {data.photo && <BuildingPhoto key={data.photo.assetId} photo={data.photo} />}
        </div>
        <footer>
          <span>{profile.eyebrow}</span>
          <button onClick={onClose}>关闭详情</button>
        </footer>
      </section>
    </div>
  );
}
