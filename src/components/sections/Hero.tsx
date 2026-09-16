"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  ShieldCheck,
  Award,
  Gauge,
  X,
  Activity,
  Crosshair,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { FlowBackground } from "@/components/visuals/FlowBackground";
import { CountUp } from "@/components/ui/CountUp";
import { Button } from "@/components/ui/Button";

function SpecStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-display text-lg font-semibold text-white sm:text-xl">
        {value}
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-mist/60 font-mono">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const [certificateOpen, setCertificateOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // ---------------------------------------------------------------------------
  // 1. SCROLL-DRIVEN HERO TRANSITION (Smooth exit as user scrolls toward Stats)
  // ---------------------------------------------------------------------------
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.75, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const bgScrollY = useTransform(scrollYProgress, [0, 1], [0, 65]);

  // ---------------------------------------------------------------------------
  // 2. LAYERED MOUSE PARALLAX (Desktop only, subtle micro-amplitude)
  // ---------------------------------------------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 32, stiffness: 180, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background layer (~6px)
  const bgParallaxX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const bgParallaxY = useTransform(smoothMouseY, [-1, 1], [-6, 6]);

  // Left text message layer (minimal ~3px to preserve crisp readability)
  const textParallaxX = useTransform(smoothMouseX, [-1, 1], [-4, 4]);
  const textParallaxY = useTransform(smoothMouseY, [-1, 1], [-3, 3]);

  // Right engineering spec card layer (~16px for tangible depth)
  const cardParallaxX = useTransform(smoothMouseX, [-1, 1], [16, -16]);
  const cardParallaxY = useTransform(smoothMouseY, [-1, 1], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ---------------------------------------------------------------------------
  // 3. ACCESSIBLE CERTIFICATE MODAL HANDLING
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!certificateOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCertificateOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [certificateOpen]);

  // Cubic bezier easing for industrial precision motion
  const industrialEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={heroRef}
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-navy text-white pt-16"
    >
      {/* Scroll-shifted flow background */}
      <motion.div
        style={reduce ? undefined : { y: bgScrollY }}
        className="absolute inset-0 pointer-events-none"
      >
        <FlowBackground
          mouseParallaxX={bgParallaxX}
          mouseParallaxY={bgParallaxY}
        />
      </motion.div>

      {/* STITCH DESIGN INSPIRATION: Top Industrial Telemetry Ribbon */}
      <div className="relative z-20 w-full border-b border-white/[0.08] bg-navy-deep/80 backdrop-blur-md px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-[11px] font-mono text-mist/60">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-bright font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span>FACILITY STATUS: OPERATIONAL [24/7 CNC BAYS]</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline text-mist/70">CALIBRATION STANDARD: ISO/IEC 17025 METROLOGY</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-mist/70">DEFECT INDEX: <strong className="text-white font-semibold">&lt;0.003 PPM</strong></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-cyan-bright font-medium">EN 10204 3.1 / 3.2 TRACEABLE</span>
          </div>
        </div>
      </div>

      {/* Main Hero Container with Scroll Transition */}
      <motion.div
        style={
          reduce
            ? undefined
            : {
                opacity: heroOpacity,
                scale: heroScale,
                y: contentY,
              }
        }
        className="container-x relative z-10 py-12 lg:py-16 my-auto"
      >
        <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          {/* ========================================================================= */}
          {/* LEFT — MESSAGE & CALL TO ACTION                                           */}
          {/* ========================================================================= */}
          <motion.div
            style={reduce ? undefined : { x: textParallaxX, y: textParallaxY }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* STITCH BADGE: Tier-1 Precision Partner / Est. 1980 */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: industrialEase }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-bright shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                Tier-1 Precision Partner · SPEC-AS9100D
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-mist/70">
                Est. 1980 · 44 Years Excellence
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 28 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: industrialEase }}
              className="mt-6 text-display text-white tracking-tight leading-[1.08]"
            >
              Precision components for{" "}
              <span className="text-gradient">Oil &amp; Gas</span>
              <br className="hidden sm:block" /> &amp; Renewable Energy
            </motion.h1>

            {/* Stitch-inspired Subtitle / Engineering Narrative */}
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.65, ease: industrialEase }}
              className="mt-6 max-w-xl text-lead text-mist/80"
            >
              Precision-machined components engineered for demanding flow-control and
              renewable-energy applications. Strong capability in high-nickel alloys,
              severe-service valve internals, and utility-scale wind generation parts.
              Trusted by Flowserve, Flender Drives, Bray Controls, and MOGAS.
            </motion.p>

            {/* CTAs with Stitch-enhanced primary glow */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.85, ease: industrialEase }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button href="#products" variant="primary" size="lg" withArrow magnetic>
                Explore Products
              </Button>
              <Button href="#contact" variant="outline-light" size="lg" magnetic>
                Request a Quote
              </Button>
            </motion.div>

            {/* STITCH DESIGN INSPIRATION: Live Engineering Spec Pointers */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.05, ease: industrialEase }}
              className="mt-10 grid grid-cols-3 gap-3 w-full max-w-xl pt-6 border-t border-white/10"
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-colors hover:border-cyan/40">
                <div className="font-mono text-[10px] uppercase tracking-wider text-mist/60">MAX PRESSURE</div>
                <div className="font-mono text-sm sm:text-base font-bold text-cyan-bright mt-0.5">20,000 PSI</div>
                <div className="text-[11px] text-mist/50">Hydro-verified</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-colors hover:border-cyan/40">
                <div className="font-mono text-[10px] uppercase tracking-wider text-mist/60">AXIS ENVELOPE</div>
                <div className="font-mono text-sm sm:text-base font-bold text-secondary-fixed-dim mt-0.5">5-AXIS SIMULT</div>
                <div className="text-[11px] text-mist/50">Mazak CNC bays</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-colors hover:border-cyan/40">
                <div className="font-mono text-[10px] uppercase tracking-wider text-mist/60">TRACEABILITY</div>
                <div className="font-mono text-sm sm:text-base font-bold text-lime mt-0.5">HEAT 100%</div>
                <div className="text-[11px] text-mist/50">EN 10204 3.1</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT — STITCH VISUAL COMPOSITION + GLASS SPEC HUD PANEL                   */}
          {/* ========================================================================= */}
          <motion.div
            style={reduce ? undefined : { x: cardParallaxX, y: cardParallaxY }}
            className="lg:col-span-5"
          >
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 32 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.75, ease: industrialEase }}
              className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-navy-deep/85 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]"
            >
              {/* Cyan Accent Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-magenta/15 blur-3xl" />

              {/* Integrated Visual Asset Frame with Stitch Telemetry HUD */}
              <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-inner">
                <Image
                  src="/images/oil-gas-machining.jpg"
                  alt="High precision heavy valve component machined from superalloy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover contrast-105 brightness-95 transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />

                {/* Top Status HUD Markers */}
                <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between text-[10px] font-mono">
                  <span className="bg-navy-deep/90 backdrop-blur-md px-2.5 py-1 rounded-md text-cyan-bright border border-white/10 flex items-center gap-1 shadow">
                    <Activity className="h-3 w-3" /> ASSET // FLOW-CONTROL
                  </span>
                  <span className="bg-navy-deep/90 backdrop-blur-md px-2.5 py-1 rounded-md text-white border border-white/10 shadow">
                    SPEC: <strong className="text-secondary-fixed-dim">API 6A 15K</strong>
                  </span>
                </div>

                {/* Stitch Precision Optical Crosshair Reticle Graphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <div className="w-14 h-14 relative flex items-center justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-cyan" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-cyan" />
                    <div className="w-10 h-10 rounded-full border border-cyan/60" />
                  </div>
                </div>

                {/* Bottom HUD Metrology Badge */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-[10px] font-mono bg-navy-deep/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-mist/70">Metrology: <strong className="text-cyan-bright">Ra 0.2 µm</strong></span>
                  <span className="text-mist/70">Hydro: <strong className="text-lime">15,000 PSI</strong></span>
                </div>
              </div>

              {/* ABI Flow Core Metric & Years of Excellence */}
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan-bright ring-1 ring-white/15">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-semibold tracking-tight text-white">
                      <CountUp to={44} suffix="+" />
                    </div>
                    <div className="text-xs text-mist/65">
                      Years of precision manufacturing excellence
                    </div>
                  </div>
                </div>

                {/* Pre-Dispatch Inspection Metric with Bootup Progress Bar */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-mist/70">Quality Assurance</span>
                    <span className="font-semibold text-white">100% Pre-Dispatch Tested</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={reduce ? { width: "100%" } : { width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.95, ease: industrialEase }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan via-magenta to-lime"
                    />
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-white/10" />

                {/* Spec Stat Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <SpecStat value="24K" label="Sq.ft Plant" />
                  <SpecStat value="5+" label="OEM Clients" />
                  <SpecStat value="ISO" label="9001:2015" />
                </div>

                {/* Authentic Credibility Badges & Certificate Click Trigger */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
                    <ShieldCheck className="h-3 w-3 text-cyan" />
                    ISO 9001:2015 TÜV NORD
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
                    <Award className="h-3 w-3 text-lime" />
                    25 Yrs · Flowserve Association
                  </span>
                  <button
                    type="button"
                    onClick={() => setCertificateOpen(true)}
                    aria-label="View 15 years Flowserve partnership certificate"
                    className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-bright transition-all hover:border-cyan hover:bg-cyan/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  >
                    <Award className="h-3 w-3 text-cyan-bright" />
                    15 Yrs · Partnership Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* STITCH DESIGN INSPIRATION: Live KPI Metric Ribbon */}
      <div className="relative z-10 w-full border-t border-white/10 bg-navy-deep/90 py-5">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-center">
              <div className="flex items-baseline gap-1 font-mono text-2xl sm:text-3xl font-bold text-cyan-bright">
                <span>±2</span>
                <span className="text-base text-cyan">µm</span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white mt-1">
                Precision Tolerance
              </div>
              <div className="text-[11px] text-mist/50 mt-0.5">Zeiss Metrology Validated</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-center">
              <div className="flex items-baseline gap-1 font-mono text-2xl sm:text-3xl font-bold text-secondary-fixed-dim">
                <span>45+</span>
                <span className="text-xs uppercase text-mist/70">Units</span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white mt-1">
                Multi-Axis CNC &amp; VMC
              </div>
              <div className="text-[11px] text-mist/50 mt-0.5">Simultaneous 5-Axis Bays</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-center">
              <div className="flex items-baseline gap-1 font-mono text-2xl sm:text-3xl font-bold text-lime">
                <span>99.8%</span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white mt-1">
                On-Time OEM Delivery
              </div>
              <div className="text-[11px] text-mist/50 mt-0.5">Kanban &amp; JIT Production Core</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-center">
              <div className="flex items-baseline gap-1 font-mono text-2xl sm:text-3xl font-bold text-tertiary-fixed-dim">
                <span>18+</span>
                <span className="text-xs uppercase text-mist/70">Nations</span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white mt-1">
                Global Export Footprint
              </div>
              <div className="text-[11px] text-mist/50 mt-0.5">North America, EU, Middle East</div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentic Certificate Modal Lightbox (Preserved 100% functionality) */}
      <AnimatePresence>
        {certificateOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hero-cert-modal-title"
          >
            {/* Backdrop — click backdrop to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCertificateOpen(false)}
              className="fixed inset-0 bg-navy/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: industrialEase }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex flex-col items-center max-w-lg w-full rounded-3xl border border-white/20 bg-navy/95 p-5 sm:p-6 shadow-2xl text-white backdrop-blur-xl max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setCertificateOpen(false)}
                aria-label="Close certificate modal"
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="w-full text-center pb-3 border-b border-white/10 pr-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-bright font-semibold">
                  Authentic Credential
                </span>
                <h3 id="hero-cert-modal-title" className="mt-1 font-display text-lg sm:text-xl font-bold tracking-tight">
                  15 YEARS OF PARTNERSHIP
                </h3>
                <p className="mt-0.5 text-xs text-mist/70">
                  Flowserve · Supplier Summit May 2014
                </p>
              </div>

              {/* Upright Contained Certificate Photograph */}
              <div className="relative mt-4 aspect-[628/1024] w-full max-h-[62vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner">
                <Image
                  src="/images/certificates/flowserve-15-years-partnership.jpg"
                  alt="Flowserve 15 Years of Partnership certificate presented to ABI Flow Products Pvt. Ltd. in May 2014."
                  fill
                  sizes="(max-width: 640px) 90vw, 480px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-3 flex items-center justify-between w-full pt-2.5 border-t border-white/10 text-xs text-mist/60">
                <span>ABI Flow Products Pvt. Ltd.</span>
                <button
                  type="button"
                  onClick={() => setCertificateOpen(false)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

