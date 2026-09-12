"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated hero backdrop — flowing SVG streamlines + drifting gradient blobs,
 * evoking the "flow" in ABI Flow. Pure SVG/CSS so it stays crisp and light.
 */
export function FlowBackground() {
  const reduce = useReducedMotion();

  const lines = Array.from({ length: 6 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* drifting gradient blobs */}
      <motion.div
        className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(22,181,224,0.35), transparent 65%)",
        }}
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(229,0,125,0.28), transparent 65%)",
        }}
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* flowing streamlines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {lines.map((_, i) => {
          const y = 120 + i * 70;
          const d = `M-100 ${y} C 250 ${y - 80}, 450 ${y + 80}, 700 ${y} S 1150 ${y - 60}, 1400 ${y}`;
          return (
            <motion.path
              key={i}
              d={d}
              stroke={i % 2 === 0 ? "rgba(56,208,245,0.5)" : "rgba(155,203,60,0.35)"}
              strokeWidth="1.5"
              strokeDasharray="6 14"
              initial={{ strokeDashoffset: 0 }}
              animate={reduce ? undefined : { strokeDashoffset: [0, -200] }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </svg>

      {/* subtle vignette to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/40 to-navy/80" />
    </div>
  );
}
