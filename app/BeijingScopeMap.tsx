"use client";

import { useState } from "react";

export default function BeijingScopeMap() {
  const [ready, setReady] = useState(false);

  return (
    <div className={`beijing-scope-map ${ready ? "is-ready" : "is-loading"}`}>
      <iframe
        title="北京市区县级 Three.js 三维地图"
        src="./three-scope-map/index.html"
        loading="eager"
        onLoad={() => setReady(true)}
        allow="fullscreen"
      />
      {!ready && <div className="beijing-scope-loader" role="status"><i />正在装载北京区县 GeoJSON 与三维材质</div>}
    </div>
  );
}
