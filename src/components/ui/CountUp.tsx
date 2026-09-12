"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const { ref, shown } = useReveal<HTMLSpanElement>({ threshold: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shown) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Reduced motion: jump straight to the final value (intentional).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
