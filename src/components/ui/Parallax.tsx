"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  /** total vertical drift in px across the scroll-through (can be negative) */
  distance?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

/**
 * Scroll-linked vertical parallax. The element drifts by `distance` as it
 * travels through the viewport. Transform-only (cheap) and disabled under
 * prefers-reduced-motion.
 */
export function Parallax({
  children,
  distance = 60,
  className,
  "aria-hidden": ariaHidden,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { y }}
      className={className}
      aria-hidden={ariaHidden}
    >
      {children}
    </motion.div>
  );
}
