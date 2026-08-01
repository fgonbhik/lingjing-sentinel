"use client";

import { useState } from "react";

export default function ScDataVBeijingMap() {
  const [ready, setReady] = useState(false);
  return <div className={`sc-datav-map-frame ${ready ? "is-ready" : ""}`}>
    {!ready && <div className="sc-datav-map-loading"><i />正在启动 SC-DATAV 北京地图引擎</div>}
    <iframe src="./beijing-sc-datav/index.html" title="SC-DATAV 北京三维地图" onLoad={() => setReady(true)} />
  </div>;
}
