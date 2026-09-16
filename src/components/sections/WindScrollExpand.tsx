"use client";

import React from "react";
import { ScrollExpand } from "@/components/ui/ScrollExpand";
import { Wind } from "lucide-react";

export function WindScrollExpand() {
  return (
    <section className="relative w-full bg-[#0a1a2f]" aria-label="Renewable Energy Visual Transition">
      {/* Subtle background ambient wind/lime glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
        <div className="absolute top-1/3 left-16 h-72 w-72 rounded-full bg-lime/15 blur-[120px]" />
        <div className="absolute bottom-1/3 right-16 h-80 w-80 rounded-full bg-cyan/15 blur-[130px]" />
      </div>

      <ScrollExpand
        src="/images/wind-energy.jpg"
        alt="Offshore wind turbine nacelle and mechanical drivetrain mechanical assembly"
        title="RENEWABLE ENERGY"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/15 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-widest text-lime backdrop-blur-md shadow-lg">
            <Wind className="h-3.5 w-3.5 text-lime" />
            Vertical 02 · Clean Energy Infrastructure
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-2xl">
            Renewable Energy / Wind Generation
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-mist/95 leading-relaxed drop-shadow font-normal">
            Precision drivetrain components, concentric bearing adapters, and torque rings engineered for 0.5 MW to 3 MW utility wind turbine platforms.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono tracking-wider text-mist/80">
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              0.5 MW → 2 MW → 3 MW Platforms
            </span>
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Wind Parts
            </span>
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Generator Parts
            </span>
            <span className="rounded-md border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
              Coupling Parts
            </span>
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}

export default WindScrollExpand;
