"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  /** how far the element drifts toward the cursor (0–1) */
  strength?: number;
  className?: string;
};

/**
 * Playful magnetic hover — the wrapped element is pulled toward the cursor and
 * scales up slightly while hovered, then springs back. Mouse-only (touch fires
 * no mousemove) and fully disabled under prefers-reduced-motion.
 */
export function Magnetic({ children, strength = 0.5, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const config = { stiffness: 260, damping: 14, mass: 0.35 };
  const sx = useSpring(x, config);
  const sy = useSpring(y, config);

  function handleMove(e: React.MouseEvent<HTMLSpanElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileHover={reduce ? undefined : { scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`inline-flex ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}
