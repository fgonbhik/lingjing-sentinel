"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  useGrouping?: boolean;
  className?: string;
};

export default function AniNum({
  to,
  decimals = 0,
  duration = 1500,
  prefix = "",
  suffix = "",
  useGrouping = true,
  className = "",
}: Props) {
  const [display, setDisplay] = useState(0);
  const current = useRef(0);

  useEffect(() => {
    const from = current.current;
    const startedAt = performance.now();
    let frame = 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || duration <= 0) {
      current.current = to;
      setDisplay(to);
      return;
    }

    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = from + (to - from) * eased;
      current.current = value;
      setDisplay(value);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [duration, to]);

  const value = display.toLocaleString("zh-CN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  });

  return <span className={`ani-num ${className}`.trim()}>{prefix}{value}{suffix}</span>;
}
