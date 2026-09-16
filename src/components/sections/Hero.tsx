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
import { ShieldCheck, Award, Gauge, X } from "lucide-react";
import { FlowBackground } from "@/components/visuals/FlowBackground";
import { CountUp } from "@/components/ui/CountUp";
import { Button } from "@/components/ui/Button";

function SpecStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-display text-lg font-semibold text-white sm:text-xl">
        {value}
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-mist/50">
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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.7, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const bgScrollY = useTransform(scrollYProgress, [0, 1], [0, 75]);

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

  // Right engineering spec card layer (~18px for tangible depth)
  const cardParallaxX = useTransform(smoothMouseX, [-1, 1], [18, -18]);
  const cardParallaxY = useTransform(smoothMouseY, [-1, 1], [14, -14]);

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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy text-white"
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
        className="container-x relative z-10 py-32"
      >
        <div className="grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          {/* ========================================================================= */}
          {/* LEFT — MESSAGE & CALL TO ACTION                                           */}
          {/* ========================================================================= */}
          <motion.div
            style={reduce ? undefined : { x: textParallaxX, y: textParallaxY }}
            className="lg:col-span-7"
          >
            {/* PHASE 3: ABI Flow Branding / Eyebrow Badge */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: industrialEase }}
            >
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-eyebrow text-cyan-bright">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                Est. 1980 · 44 Years of Precision
              </span>
            </motion.div>

            {/* PHASE 4: Main Headline Progressively Revealed */}
            <motion.h1
              initial={reduce ? undefined : { opacity: 0, y: 28 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: industrialEase }}
              className="mt-7 text-display text-white"
            >
              Precision components for{" "}
              <span className="text-gradient">Oil &amp; Gas</span>
              <br className="hidden sm:block" /> &amp; Renewable Energy
            </motion.h1>

            {/* PHASE 5: Supporting Text */}
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75, ease: industrialEase }}
              className="mt-7 max-w-xl text-lead text-mist/75"
            >
              Precision-machined components engineered for demanding flow-control and
              renewable-energy applications. Strong capability in high-nickel alloys,
              severe-service valve internals, and utility-scale wind generation parts.
              Trusted by Flowserve, Flender Drives, Bray Controls, and MOGAS.
            </motion.p>

            {/* PHASE 6: CTA Elements */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.95, ease: industrialEase }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="#products" variant="primary" size="lg" withArrow magnetic>
                Explore Products
              </Button>
              <Button href="#contact" variant="outline-light" size="lg" magnetic>
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT — PHASE 7: GLASS ENGINEERING SPEC PANEL                             */}
          {/* ========================================================================= */}
          <motion.div
            style={reduce ? undefined : { x: cardParallaxX, y: cardParallaxY }}
            className="lg:col-span-5"
          >
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 32 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.85, ease: industrialEase }}
              className="glass relative overflow-hidden rounded-[1.75rem] p-8 shadow-2xl transition-shadow duration-500 hover:shadow-cyan/10"
            >
              {/* Cyan Accent Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-cyan/20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan/15 text-cyan-bright ring-1 ring-white/15">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-semibold tracking-tight text-white">
                      <CountUp to={44} suffix="+" />
                    </div>
                    <div className="text-sm text-mist/55">
                      Years of manufacturing excellence
                    </div>
                  </div>
                </div>

                {/* Pre-Dispatch Inspection Metric with Bootup Progress Bar */}
                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-mist/55">Inspected &amp; tested</span>
                    <span className="font-medium text-white">100% Pre-Dispatch</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={reduce ? { width: "100%" } : { width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 1.15, ease: industrialEase }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan via-magenta to-lime"
                    />
                  </div>
                </div>

                <div className="my-7 h-px w-full bg-white/10" />

                <div className="grid grid-cols-3 gap-2">
                  <SpecStat value="24K" label="Sq.ft Plant" />
                  <SpecStat value="5+" label="OEM Clients" />
                  <SpecStat value="ISO" label="9001:2015" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
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
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80 transition-all hover:border-cyan/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer"
                  >
                    <Award className="h-3 w-3 text-cyan" />
                    15 Yrs · Partnership Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Industrial Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={reduce ? undefined : { opacity: 0, y: 10 }}
        animate={reduce ? undefined : { opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.4 },
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-cyan-bright"
            animate={reduce ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Authentic Certificate Modal Lightbox */}
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
