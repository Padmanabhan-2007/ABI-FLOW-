"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type CardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  tone?: "light" | "dark";
};

const tones = {
  light:
    "border-line bg-white shadow-[0_2px_24px_-14px_rgba(10,26,47,0.25)] hover:shadow-[0_28px_50px_-24px_rgba(10,26,47,0.35)]",
  dark: "border-white/10 bg-navy text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]",
};

export function Card({
  children,
  className,
  delay = 0,
  tone = "light",
}: CardProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`reveal ${shown ? "reveal-in" : ""} group relative overflow-hidden rounded-2xl border hover:-translate-y-1.5 ${
        tones[tone]
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
