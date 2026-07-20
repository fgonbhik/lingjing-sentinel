import type { Metadata } from "next";
import "./globals.css";
import "./map-enhancements.css";
import "./algorithm.css";
import "./modules.css";

export const metadata: Metadata = {
  title: "灵境哨兵｜城市应急智能决策平台",
  description: "多模态感知、风险推演与多智能体协同一体化的城市应急智能决策平台。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
