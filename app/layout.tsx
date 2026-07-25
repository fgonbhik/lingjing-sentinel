import type { Metadata } from "next";
import "./globals.css";
import "./map-enhancements.css";
import "./algorithm.css";
import "./modules.css";
import "./demo-entry.css";

export const metadata: Metadata = {
  title: "京域智城｜智慧城市 3D 大屏与灵境哨兵演示项目",
  description: "融合北京真实三维城市、实时数据大屏与灵境哨兵应急智能决策演示的一体化智慧城市平台。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
