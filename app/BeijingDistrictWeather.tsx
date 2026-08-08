"use client";

import { useEffect, useMemo, useState } from "react";
import AniNum from "./AniNum";
import BeijingScopeMap from "./BeijingScopeMap";
import { createFallbackWeather, loadBeijingWeather, type DistrictWeather } from "./weather-api";

type Props = {
  onOpenInsight: (district: string, details: string, meta: string) => void;
};

const initialWeather = createFallbackWeather();

export default function BeijingDistrictWeather({ onOpenInsight }: Props) {
  const [districts, setDistricts] = useState(initialWeather.districts);
  const [selectedName, setSelectedName] = useState("朝阳区");
  const [weatherSource, setWeatherSource] = useState<"loading" | "live" | "cache" | "fallback">("loading");
  const [updatedAt, setUpdatedAt] = useState(initialWeather.updatedAt);
  const [metric, setMetric] = useState<"temperature" | "terrain" | "rainfall">("temperature");
  const [playing, setPlaying] = useState(true);
  const [chartTick, setChartTick] = useState(0);
  const selected = useMemo(() => districts.find((district) => district.name === selectedName) ?? districts[0], [districts, selectedName]);
  const liveTemperature = useMemo(() => selected.hourlyTemperature.map((value, index) => value + Math.sin(chartTick * 0.62 + index * 0.48) * 0.03), [chartTick, selected]);
  const liveRain = useMemo(() => selected.weeklyRain.map((value, index) => Math.max(0, value + Math.sin(chartTick * 0.54 + index * 0.72) * 0.03)), [chartTick, selected]);
  const temperatureRange = useMemo(() => ({ min: Math.min(...liveTemperature), max: Math.max(...liveTemperature) }), [liveTemperature]);
  const temperatureSpread = Math.max(temperatureRange.max - temperatureRange.min, 1);
  const rainPeak = Math.max(...liveRain, 1);
  const cityAverageTemp = useMemo(() => districts.reduce((sum, item) => sum + item.temp, 0) / districts.length, [districts]);
  const cityAverageRain = useMemo(() => districts.reduce((sum, item) => sum + item.rain, 0) / districts.length, [districts]);
  const highRiskCount = useMemo(() => districts.filter((item) => item.risk === "高").length, [districts]);
  const rainfallTotal = useMemo(() => liveRain.reduce((sum, value) => sum + value, 0), [liveRain]);
  const mapWeatherData = useMemo(() => Object.fromEntries(districts.map((item) => [item.name, {
    temperature: item.temp, rainfall: item.rain, elevation: item.elevation,
  }])), [districts]);

  useEffect(() => {
    if (!playing) return;
    const controller = new AbortController();
    const refresh = async () => {
      try {
        const snapshot = await loadBeijingWeather(controller.signal);
        setDistricts(snapshot.districts);
        setUpdatedAt(snapshot.updatedAt);
        setWeatherSource(snapshot.source);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) setWeatherSource("fallback");
      }
    };
    void refresh();
    const timer = window.setInterval(refresh, 10 * 60 * 1000);
    return () => { controller.abort(); window.clearInterval(timer); };
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setChartTick((value) => value + 1);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [playing]);

  const selectDistrict = (district: DistrictWeather) => {
    setSelectedName(district.name);
    onOpenInsight(
      district.name,
      `${district.name}当前气温 ${district.temp.toFixed(1)}°C，今日累计降水 ${district.rain.toFixed(1)} mm，相对湿度 ${district.humidity}%。`,
      `气象风险 ${district.risk} · 区县自动站分钟级更新`,
    );
  };

  return (
    <section className="district-weather" aria-label="北京区县气温与降水监测">
      <header className="weather-titlebar">
        <div><span>BEIJING DISTRICT WEATHER · 16 DISTRICTS</span><h2>北京区县气象运行图</h2><small className={`weather-source source-${weatherSource}`}><i />{weatherSource === "live" ? "OPEN-METEO 实时数据" : weatherSource === "cache" ? "本地缓存数据" : weatherSource === "fallback" ? "离线演示数据" : "正在连接气象数据"}{weatherSource !== "loading" && ` · ${new Date(updatedAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`}</small></div>
        <div className="weather-mode" aria-label="气象图层">
          <button className={metric === "temperature" ? "active temperature" : "temperature"} onClick={() => setMetric("temperature")}>气温图层</button>
          <button className={metric === "terrain" ? "active terrain-layer" : "terrain-layer"} onClick={() => setMetric("terrain")}>地势图层</button>
          <button className={metric === "rainfall" ? "active rainfall" : "rainfall"} onClick={() => setMetric("rainfall")}>降水图层</button>
          <button className={playing ? "playing" : ""} onClick={() => setPlaying((value) => !value)}>{playing ? "暂停刷新" : "继续刷新"}</button>
        </div>
      </header>

      <div className="weather-kpis">
        <button onClick={() => onOpenInsight("全市", `北京市 16 个区当前平均气温为 ${cityAverageTemp.toFixed(1)}°C。`, `Open-Meteo · ${weatherSource === "live" ? "实时更新" : "缓存/离线兜底"}`)}><span>全市平均气温</span><strong><AniNum to={cityAverageTemp} decimals={1} /><small>°C</small></strong><em>16 区经纬度采样</em></button>
        <button onClick={() => onOpenInsight("全市", `今日全市平均累计降水 ${cityAverageRain.toFixed(1)} mm。`, `最大雨量 ${Math.max(...districts.map((item) => item.rain)).toFixed(1)} mm`)}><span>今日平均降水</span><strong><AniNum to={cityAverageRain} decimals={1} /><small>mm</small></strong><em>逐小时降水累计</em></button>
        <button onClick={() => onOpenInsight("全市", `全市共 ${highRiskCount} 个区处于较高气象风险状态。`, "根据降水与湿度自动分级")}><span>重点关注区县</span><strong><AniNum to={highRiskCount} /><small>区</small></strong><em>风险动态研判</em></button>
        <button onClick={() => onOpenInsight("数据源", "当前气象数据来自 Open-Meteo Forecast API；断网时自动使用 30 分钟缓存或本地演示数据。", `最近更新 ${new Date(updatedAt).toLocaleString("zh-CN")}`)}><span>实时数据接口</span><strong>{weatherSource === "live" ? "ONLINE" : "SAFE"}</strong><em>{weatherSource === "live" ? "接口连接正常" : "缓存兜底运行"}</em></button>
      </div>

      <div className="weather-grid">
        <aside className="weather-panel district-selector">
          <header><span>DISTRICT MATRIX</span><h3>区县实况</h3><b>{metric === "temperature" ? "°C" : metric === "rainfall" ? "mm" : "m"}</b></header>
          <div>
            {districts.map((district) => (
              <button key={district.name} className={selected.name === district.name ? "active" : ""} onClick={() => selectDistrict(district)}>
                <span>{district.name}</span>
                <strong>{metric === "temperature" ? `${district.temp.toFixed(1)}°` : metric === "rainfall" ? district.rain.toFixed(1) : district.elevation}</strong>
                <i className={`risk-${district.risk}`}>{district.risk}</i>
              </button>
            ))}
          </div>
        </aside>

        <main className={`weather-map weather-${metric}`}>
          <div className="weather-map-head"><span><i />{selected.name}</span><b>{metric === "temperature" ? "温差空间变化" : metric === "terrain" ? "地势高程差异" : "降水量空间变化"}</b><em>REAL-TIME · INTERACTIVE</em></div>
          <BeijingScopeMap layer={metric} weatherData={mapWeatherData} onDistrictInteraction={(name) => { const next = districts.find((district) => district.name === name); if (next) setSelectedName(next.name); }} />
          <div className={`weather-map-legend legend-${metric}`}><span>{metric === "temperature" ? "22°C" : metric === "rainfall" ? "0 mm" : "20 m"}</span><i /><span>{metric === "temperature" ? "30°C" : metric === "rainfall" ? "25 mm" : "800 m"}</span></div>
          <div className="selected-weather-card">
            <span>{selected.name} · 当前实况</span>
            <strong>{selected.temp.toFixed(1)}<i>°C</i></strong>
            <dl><div><dt>累计降水</dt><dd>{selected.rain.toFixed(1)} mm</dd></div><div><dt>平均高程</dt><dd>{selected.elevation} m</dd></div><div><dt>风险等级</dt><dd className={`risk-${selected.risk}`}>{selected.risk}</dd></div></dl>
          </div>
        </main>

        <aside className="weather-side">
          <section className="weather-panel temperature-chart">
            <header><span>TEMPERATURE CURVE</span><h3>逐时气温</h3><b>{temperatureRange.min.toFixed(1)}—{temperatureRange.max.toFixed(1)}°C</b></header>
            <div className={`temperature-line ${playing ? "is-live" : ""}`}>
              {liveTemperature.map((value, index) => <i key={index} style={{ height: `${18 + ((value - temperatureRange.min) / temperatureSpread) * 68}%`, transitionDelay: `${index * 28}ms` }}><b>{value.toFixed(0)}°</b><span>{String(index * 2).padStart(2, "0")}:00</span></i>)}
            </div>
          </section>
          <section className="weather-panel rain-chart">
            <header><span>PRECIPITATION</span><h3>未来 7 日降水</h3><b>累计 {rainfallTotal.toFixed(1)} mm</b></header>
            <div className={`rain-bars ${playing ? "is-live" : ""}`}>
              {liveRain.map((value, index) => <i key={index} style={{ height: `${12 + (value / rainPeak) * 72}%`, transitionDelay: `${index * 36}ms` }}><b>{value.toFixed(1)}</b><span>{index === 0 ? "今天" : `+${index}日`}</span></i>)}
            </div>
          </section>
          <button className="weather-alert" onClick={() => onOpenInsight(selected.name, `${selected.name}气象风险等级为${selected.risk}，系统已结合累计降水、湿度与地形特征完成研判。`, `重点关注短时强降水 · 自动站持续监测`)}>
            <i />
            <span>气象风险研判</span>
            <strong>{selected.risk === "高" ? "建议加强巡查" : "监测状态稳定"}</strong>
            <em>点击查看研判依据 →</em>
          </button>
        </aside>
      </div>
    </section>
  );
}
