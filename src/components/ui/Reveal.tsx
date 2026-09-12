"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger offset in seconds */
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "ul";
};

/**
 * Single source of truth for scroll-triggered reveals across every section.
 * Uses a native IntersectionObserver (see useReveal) so it's reliable and can
 * never leave content stuck invisible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${shown ? "reveal-in" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
