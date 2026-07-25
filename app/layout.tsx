import type { Metadata } from "next";
import "./globals.css";
import "./map-enhancements.css";
import "./algorithm.css";
import "./modules.css";
import "./demo-entry.css";
import "./smart-city.css";

export const metadata: Metadata = {
  title: "京域智城｜智慧城市 3D 大屏与灵境哨兵演示项目",
  description: "融合北京真实三维城市、实时数据大屏与灵境哨兵应急智能决策演示的一体化智慧城市平台。",
  openGraph: {
    title: "京域智城｜北京智慧城市 3D 大屏",
    description: "登录城市运行中心，在真实北京三维大屏中进入灵境哨兵应急处置演示。",
    images: ["https://fgonbhik.github.io/lingjing-sentinel/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "京域智城｜北京智慧城市 3D 大屏",
    description: "北京真实三维城市与灵境哨兵 AI 应急演示项目。",
    images: ["https://fgonbhik.github.io/lingjing-sentinel/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
