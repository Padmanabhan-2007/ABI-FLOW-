"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Gauge } from "lucide-react";
import { FlowBackground } from "@/components/visuals/FlowBackground";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";

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
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy text-white"
    >
      <FlowBackground />

      <div className="container-x relative z-10 py-32">
        <div className="grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          {/* LEFT — message */}
          <div className="lg:col-span-7">
            <Reveal
              as="span"
              className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-eyebrow text-cyan-bright"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              Est. 1980 · 44 Years of Precision
            </Reveal>

            <Reveal delay={0.08} className="mt-7">
              <h1 className="text-display text-white">
                Precision components for{" "}
                <span className="text-gradient">Oil &amp; Gas</span>
                <br className="hidden sm:block" /> &amp; Renewable Energy
              </h1>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-7 max-w-xl text-lead text-mist/75"
            >
              Precision-machined components engineered for demanding flow-control and
              renewable-energy applications. Strong capability in high-nickel alloys,
              severe-service valve internals, and utility-scale wind generation parts.
              Trusted by Flowserve, Flender Drives, Bray Controls, and MOGAS.
            </Reveal>

            <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#products" variant="primary" size="lg" withArrow magnetic>
                Explore Products
              </Button>
              <Button href="#contact" variant="outline-light" size="lg" magnetic>
                Request a Quote
              </Button>
            </Reveal>
          </div>

          {/* RIGHT — glass spec panel */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <Parallax distance={80}>
            <div className="glass relative overflow-hidden rounded-[1.75rem] p-8 shadow-2xl">
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

                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-mist/55">Inspected &amp; tested</span>
                    <span className="font-medium text-white">100% Pre-Dispatch</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan via-magenta to-lime" />
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
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist/80">
                    <Award className="h-3 w-3 text-cyan" />
                    15 Yrs · Partnership Certificate
                  </span>
                </div>
              </div>
            </div>
            </Parallax>
          </Reveal>
        </div>
      </div>

      {/* scroll cue (decorative) */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
