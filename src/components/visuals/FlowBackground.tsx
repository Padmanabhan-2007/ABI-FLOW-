"use client";

import { motion, useReducedMotion, type MotionValue } from "framer-motion";

type FlowBackgroundProps = {
  mouseParallaxX?: MotionValue<number>;
  mouseParallaxY?: MotionValue<number>;
};

/**
 * Animated hero backdrop — engineered industrial flow visual with multi-layered
 * fluid streamlines, precision metrology grid coordinates, and drifting atmospheric
 * pressure fields. Built with pure SVG and GPU-accelerated motion.
 */
export function FlowBackground({ mouseParallaxX, mouseParallaxY }: FlowBackgroundProps) {
  const reduce = useReducedMotion();

  // 7 precision engineering streamline paths across the 1400x700 coordinate space
  const streamlines = [
    {
      d: "M -100 140 C 220 50, 480 230, 780 140 S 1180 70, 1500 150",
      stroke: "url(#cyanStream)",
      strokeWidth: 1.75,
      dash: "8 16",
      speed: 12,
    },
    {
      d: "M -100 220 C 260 120, 520 310, 840 210 S 1220 130, 1500 230",
      stroke: "url(#limeStream)",
      strokeWidth: 1.25,
      dash: "6 18",
      speed: 16,
    },
    {
      d: "M -100 300 C 200 240, 460 380, 740 290 S 1140 210, 1500 310",
      stroke: "rgba(56, 208, 245, 0.4)",
      strokeWidth: 1.5,
      dash: "10 20",
      speed: 14,
    },
    {
      d: "M -100 380 C 280 300, 540 460, 860 370 S 1240 280, 1500 390",
      stroke: "url(#cyanStream)",
      strokeWidth: 1.25,
      dash: "5 15",
      speed: 18,
    },
    {
      d: "M -100 460 C 240 380, 500 530, 800 440 S 1180 370, 1500 470",
      stroke: "rgba(155, 203, 60, 0.3)",
      strokeWidth: 1.0,
      dash: "6 22",
      speed: 20,
    },
    {
      d: "M -100 540 C 220 470, 480 610, 760 520 S 1160 450, 1500 550",
      stroke: "rgba(229, 0, 125, 0.25)",
      strokeWidth: 1.0,
      dash: "4 24",
      speed: 22,
    },
  ];

  // Precision metrology datum marks (crosshairs) representing calibrated measurement points
  const datumPoints = [
    { x: 180, y: 160 },
    { x: 420, y: 280 },
    { x: 680, y: 190 },
    { x: 920, y: 340 },
    { x: 1160, y: 220 },
    { x: 300, y: 480 },
    { x: 800, y: 520 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 1. Drifting Atmospheric Pressure Glows */}
      <motion.div
        className="absolute -left-32 top-8 h-[34rem] w-[34rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(22,181,224,0.32), rgba(14,143,180,0.12) 50%, transparent 70%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, 45, 0],
                y: [0, 35, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-28 bottom-4 h-[30rem] w-[30rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(229,0,125,0.22), rgba(22,181,224,0.08) 50%, transparent 70%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, -35, 0],
                y: [0, -25, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Precision CAD Metrology Coordinate Grid */}
      <motion.div
        style={
          reduce || !mouseParallaxX || !mouseParallaxY
            ? undefined
            : { x: mouseParallaxX, y: mouseParallaxY }
        }
        className="absolute inset-0 opacity-[0.45]"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1400 700"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            {/* Gradients for streamlines */}
            <linearGradient id="cyanStream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16b5e0" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#45d2f7" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#16b5e0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0e8fb4" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="limeStream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9bcb3c" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#9bcb3c" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#45d2f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#16b5e0" stopOpacity="0.1" />
            </linearGradient>

            {/* Metrology Grid Pattern */}
            <pattern
              id="metrologyGrid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(255, 255, 255, 0.03)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="100%" height="100%" fill="url(#metrologyGrid)" />

          {/* Metrology Crosshair Datum Points */}
          {datumPoints.map((pt, idx) => (
            <g key={idx} opacity={0.35}>
              <line
                x1={pt.x - 7}
                y1={pt.y}
                x2={pt.x + 7}
                y2={pt.y}
                stroke="#45d2f7"
                strokeWidth="1"
              />
              <line
                x1={pt.x}
                y1={pt.y - 7}
                x2={pt.x}
                y2={pt.y + 7}
                stroke="#45d2f7"
                strokeWidth="1"
              />
              <circle
                cx={pt.x}
                cy={pt.y}
                r="1.5"
                fill="#45d2f7"
              />
            </g>
          ))}

          {/* 3. Multi-Velocity Streamlines */}
          {streamlines.map((line, i) => (
            <motion.path
              key={i}
              d={line.d}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth}
              strokeDasharray={line.dash}
              initial={{ strokeDashoffset: 0 }}
              animate={reduce ? undefined : { strokeDashoffset: [0, -320] }}
              transition={{
                duration: line.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* 4. Fluid / Energy Process Pulse Nodes */}
          {!reduce && (
            <>
              <motion.circle
                r="3.5"
                fill="#45d2f7"
                filter="drop-shadow(0 0 6px #16b5e0)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.9, 0.9, 0],
                  cx: [0, 480, 880, 1400],
                  cy: [140, 230, 140, 150],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
              <motion.circle
                r="2.5"
                fill="#9bcb3c"
                filter="drop-shadow(0 0 5px #9bcb3c)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.85, 0.85, 0],
                  cx: [0, 520, 940, 1400],
                  cy: [220, 310, 210, 230],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3.5,
                }}
              />
            </>
          )}
        </svg>
      </motion.div>

      {/* 5. Calibrated Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/55 to-navy/90" />
    </motion.div>
  );
}
