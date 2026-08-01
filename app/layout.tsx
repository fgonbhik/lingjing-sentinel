import type { Metadata } from "next";
import "./globals.css";
import "./map-enhancements.css";
import "./algorithm.css";
import "./modules.css";
import "./demo-entry.css";
import "./smart-city.css";
import "./panel-polish.css";
import "./ai-evidence.css";
import "./design-refresh.css";
import "./card-frames.css";
import "./detail-dialogs.css";
import "./reference-operations.css";
import "./frontend-design-pass.css";
import "./beijing-datav.css";

export const metadata: Metadata = {
  title: "京域智城｜北京市智慧城市运行指挥中心",
  description: "科幻风北京智慧城市 3D 数字孪生大屏，融合城市建筑、交通、环境、感知网络与 AI 运行指标。",
  icons: {
    icon: [{ url: "./favicon.svg", type: "image/svg+xml" }],
    shortcut: "./favicon.svg",
  },
  openGraph: {
    title: "京域智城｜北京市智慧城市运行指挥中心",
    description: "在未来北京三维数字孪生中感知城市运行，并进入灵境哨兵 AI 应急处置演示。",
    images: ["https://fgonbhik.github.io/lingjing-sentinel/og-future-city.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "京域智城｜北京市智慧城市运行指挥中心",
    description: "北京智慧城市 3D 数字孪生与灵境哨兵 AI 应急演示项目。",
    images: ["https://fgonbhik.github.io/lingjing-sentinel/og-future-city.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
