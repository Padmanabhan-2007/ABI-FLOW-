"use client";

import React from "react";
import { ScrollExpand } from "@/components/ui/ScrollExpand";
import { ArrowDown, Flame, ShieldAlert } from "lucide-react";

export function HeroScrollExpand() {
  return (
    <section className="relative w-full bg-[#0a1a2f]" aria-label="Industrial Visual Transition">
      {/* Subtle background ambient flow lines to bridge from Hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-cyan/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-magenta/10 blur-[140px]" />
      </div>

      <ScrollExpand
        src="/images/oil-gas-machining.jpg"
        alt="ABI Flow precision-machined valve internals and severe-service components on shop floor"
        title="PRECISION ENGINEERING"
        scrollHint="SCROLL TO EXPLORE"
        startWidth={56}
        startHeight={64}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.22}
        scrollDistance={0.65}
        holdDistance={0.04}
        smoothing={0.07}
        overlayScrim={0.55}
        useWindowScroll={true}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/15 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-cyan-bright backdrop-blur-md shadow-lg">
            <Flame className="h-3.5 w-3.5 text-cyan-bright" />
            Vertical 01 · Severe-Service Manufacturing
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-2xl">
            Oil &amp; Gas / Flow Control
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-mist/95 leading-relaxed drop-shadow font-normal">
            Precision-machined valve internals, severe-service trims, stems, and heavy-wall pressure-boundary components engineered to strict customer drawings.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono tracking-wider text-mist/80">
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Nordstrom Plug Valves
            </span>
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Slab Gate Valves
            </span>
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Butterfly Valves
            </span>
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Trunnion Ball Assemblies
            </span>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}

export default HeroScrollExpand;
