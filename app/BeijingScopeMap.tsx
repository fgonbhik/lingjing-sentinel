"use client";

import { useEffect, useRef, useState } from "react";

export type BeijingWeatherLayer = "temperature" | "terrain" | "rainfall";

type Props = {
  layer?: BeijingWeatherLayer;
  weatherData?: Record<string, { temperature: number; rainfall: number; elevation: number }>;
  onDistrictInteraction?: (district: string) => void;
};

export default function BeijingScopeMap({ layer = "temperature", weatherData, onDistrictInteraction }: Props) {
  const [ready, setReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendLayer = () => {
    iframeRef.current?.contentWindow?.postMessage({ type: "beijing-weather-data", values: weatherData }, "*");
    iframeRef.current?.contentWindow?.postMessage({ type: "beijing-weather-layer", layer }, "*");
  };

  useEffect(() => {
    sendLayer();
  }, [layer, ready, weatherData]);

  useEffect(() => {
    const receiveMapEvent = (event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.type !== "beijing-weather-select" && event.data?.type !== "beijing-weather-hover") return;
      if (typeof event.data.featureName === "string" && event.data.featureName) onDistrictInteraction?.(event.data.featureName);
    };
    window.addEventListener("message", receiveMapEvent);
    return () => window.removeEventListener("message", receiveMapEvent);
  }, [onDistrictInteraction]);

  return (
    <div className={`beijing-scope-map ${ready ? "is-ready" : "is-loading"}`}>
      <iframe
        ref={iframeRef}
        title="北京市区县级 Three.js 三维地图"
        src="./three-scope-map/index.html"
        loading="eager"
        onLoad={() => { setReady(true); sendLayer(); }}
        allow="fullscreen"
      />
      {!ready && <div className="beijing-scope-loader" role="status"><i />正在装载北京区县 GeoJSON 与三维材质</div>}
    </div>
  );
}
