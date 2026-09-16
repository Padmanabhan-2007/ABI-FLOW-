"use client";

import Image from "next/image";
import { ArrowUpRight, Wind, ShieldAlert, Cpu, Sparkles, Layers, Check, Activity, Compass, Gauge } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Parallax } from "@/components/ui/Parallax";
import {
  oilAndGasProducts,
  windGenerationData,
  materialCapabilities,
  type ProductCategory,
} from "@/data/products";

// Asymmetric bento grid span styling for Oil & Gas valve cards
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-12",
];

// Telemetry badges derived from Stitch design system for valve classes
const valveTelemetry: Record<string, { spec: string; tag: string }> = {
  "plug-valve-nordstrom": {
    spec: "API-6A / API-16A",
    tag: "15,000 - 20,000 PSI · NACE MR0175",
  },
  "slab-gate-valve": {
    spec: "API-6D / ISO 14313",
    tag: "ASME 150 - 2500 · Through-Conduit",
  },
  "butterfly-valve": {
    spec: "ASME B16.34 / API 609",
    tag: "Triple Offset · Zero-Leakage Seat",
  },
  "gate-globe-check-valve": {
    spec: "API 600 / API 602",
    tag: "High Pressure Steam & Severe Service",
  },
  "trunnion-ball-valve": {
    spec: "API 6D / ISO 5208",
    tag: "Double Block & Bleed (DBB) · Subsea",
  },
};

function ValveSpecList({ cat }: { cat: ProductCategory }) {
  return (
    <ul className="mt-5 space-y-2 border-t border-line/70 pt-5">
      {cat.components.map((comp) => (
        <li
          key={comp.name}
          className="-mx-2 flex flex-col justify-between gap-1 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white sm:flex-row sm:items-baseline border border-transparent hover:border-line/60"
        >
          <span className="font-medium text-ink flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-deep/70" />
            {comp.name}
          </span>
          <span className="font-mono text-xs text-steel">
            <span className="rounded bg-light px-2 py-0.5 font-semibold text-ink-soft border border-line/50">
              {comp.size}
            </span>{" "}
            · <span className="text-cyan-deep font-medium">{comp.material}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Products() {
  return (
    <div id="products" className="relative">
      {/* ========================================================================= */}
      {/* SECTION A: OIL & GAS / FLOW CONTROL (STITCH SECTOR CAPABILITIES)         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-light to-[#f1f6fa] py-24 text-ink sm:py-28">
        {/* Subtle ambient cyan glow and industrial flow streamlines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-cyan/[0.06] blur-[120px]" />
          <div className="absolute -left-20 bottom-24 h-72 w-72 rounded-full bg-cyan-bright/[0.04] blur-[100px]" />
          {/* Subtle industrial flow vector streamlines */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.22]"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M-50 180 C 300 240, 600 120, 950 200 S 1150 150, 1300 180"
              stroke="rgba(22, 181, 224, 0.4)"
              strokeWidth="1.25"
              strokeDasharray="6 14"
            />
            <path
              d="M-50 420 C 250 360, 680 480, 980 390 S 1180 440, 1300 410"
              stroke="rgba(14, 143, 180, 0.3)"
              strokeWidth="1.0"
              strokeDasharray="4 18"
            />
          </svg>
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-deep shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-deep animate-pulse" />
                Sector 01 · Severe-Service Flow Control · SPEC-API 6A
              </div>
            </Reveal>
            <Reveal delay={0.08} className="mt-4">
              <h2 className="text-display text-ink tracking-tight uppercase">
                Oil &amp; Gas / Flow Control
              </h2>
            </Reveal>
            <Reveal delay={0.16} className="mt-4 text-lead text-ink-soft">
              Precision-machined valve internals, severe-service trims, stems, and heavy-wall
              pressure boundary parts. Built to strict customer drawings for Nordstrom plug valves,
              high-performance butterfly valves, slab gate valves, and trunnion ball assemblies.
            </Reveal>
          </div>

          {/* Oil & Gas Bento Grid with Stitch Telemetry & Frame Styling */}
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {oilAndGasProducts.map((cat, i) => {
              const telemetry = valveTelemetry[cat.id] || {
                spec: "API-6A / SPEC-OEM",
                tag: "High-Tolerance Flow Component",
              };

              return (
                <Card
                  key={cat.id}
                  delay={(i % 3) * 0.07}
                  tone="light"
                  className={`flex flex-col p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-line/80 hover:border-cyan/50 ${spans[i]}`}
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan-bright to-magenta transition-transform duration-300 group-hover:scale-x-100" />

                  {/* 1. Category, Telemetry Badges & Number */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-steel bg-light px-2 py-0.5 rounded border border-line/60">
                        0{i + 1}
                      </span>
                      <span className="rounded-full bg-cyan/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-deep border border-cyan/20">
                        {cat.sector}
                      </span>
                      <span className="hidden sm:inline-block font-mono text-[10px] text-steel/80 bg-white px-2 py-0.5 rounded border border-line/60">
                        {telemetry.spec}
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-line transition-all duration-300 group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div className="mt-5 flex-1 flex flex-col">
                    {/* 2. Product Name */}
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-h3 text-ink transition-colors duration-200 group-hover:text-cyan-deep">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Operational Telemetry Tagline */}
                    <p className="font-mono text-[11px] text-cyan-deep/90 mt-1 font-medium flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-deep" />
                      {telemetry.tag}
                    </p>

                    {/* 3. Product Image in Stitch Precision Optical Frame */}
                    {cat.image && (
                      <div className="relative mt-4 aspect-[16/10] w-full max-h-64 sm:max-h-72 overflow-hidden rounded-2xl border border-line/70 bg-gradient-to-b from-white to-light/60 p-2 shadow-inner">
                        {/* Corner Reticle Marks */}
                        <div className="pointer-events-none absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan/40" />
                        <div className="pointer-events-none absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan/40" />
                        <div className="pointer-events-none absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan/40" />
                        <div className="pointer-events-none absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan/40" />

                        <Image
                          src={cat.image}
                          alt={cat.imageAlt || `${cat.title} precision-machined components`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                          className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* 4. Description */}
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {cat.blurb}
                    </p>

                    {/* 5. OEM / Customer Association */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-steel">OEM PROGRAM:</span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-magenta bg-magenta/5 px-2 py-0.5 rounded border border-magenta/20">
                        {cat.customer}
                      </span>
                    </div>
                  </div>

                  {/* 6. Technical Specifications List */}
                  <ValveSpecList cat={cat} />
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MATERIAL CAPABILITY SHOWCASE: METALLURGICAL REGISTRY                      */}
      {/* ========================================================================= */}
      <Section tone="cloud" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-deep">
                <Sparkles className="h-3.5 w-3.5 text-cyan-deep" />
                Metallurgical Registry · Severe Environment
              </div>
              <h3 className="mt-3 text-h2 text-ink uppercase tracking-tight">
                {materialCapabilities.headline}
              </h3>
              <p className="mt-4 text-lead text-ink-soft">
                {materialCapabilities.lead}
              </p>
              <div className="mt-6 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-steel">
                  Surface Enhancements &amp; Hardfacing
                </p>
                <ul className="mt-3 space-y-2">
                  {materialCapabilities.surfaceTreatments.map((treatment) => (
                    <li key={treatment} className="flex items-center gap-2.5 text-xs font-medium text-ink-soft">
                      <Check className="h-3.5 w-3.5 text-cyan-deep shrink-0" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {materialCapabilities.alloys.map((alloy, i) => (
                <Reveal
                  key={alloy.name}
                  delay={i * 0.08}
                  className="rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-cyan hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-deep bg-cyan/10 px-2 py-0.5 rounded">
                      ALLOY FAMILY 0{i + 1}
                    </span>
                    <span className="font-mono text-[10px] text-steel">
                      NACE MR0175
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-ink group-hover:text-cyan-deep transition-colors">
                    {alloy.name}
                  </h4>
                  <p className="mt-1 font-mono text-xs text-magenta font-semibold">
                    {alloy.grades}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-steel">
                    {alloy.note}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ========================================================================= */}
      {/* SECTION B: RENEWABLE ENERGY / WIND GENERATION (STITCH MAJOR VERTICAL)     */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-navy text-white py-24 sm:py-28">
        {/* Subtle Aerodynamic Wind Streamlines Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-lime/[0.05] blur-[120px]" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-cyan/[0.05] blur-[120px]" />
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M-50 120 C 300 180, 700 80, 1250 140"
              stroke="rgba(155, 203, 60, 0.45)"
              strokeWidth="1.25"
              strokeDasharray="8 20"
            />
            <path
              d="M-50 280 C 350 220, 800 320, 1250 260"
              stroke="rgba(56, 208, 245, 0.3)"
              strokeWidth="1.0"
              strokeDasharray="6 24"
            />
          </svg>
        </div>

        <div className="container-x relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-lime">
                  <Wind className="h-3.5 w-3.5 text-lime" />
                  Sector 02 · Renewable Energy · SPEC-IEC 61400 / DNV-GL
                </div>
              </Reveal>
              <Reveal delay={0.08} className="mt-4">
                <h2 className="text-display text-white tracking-tight uppercase">
                  Wind Power Generation
                </h2>
              </Reveal>
              <Reveal delay={0.16} className="mt-3 max-w-2xl text-lead text-mist/80">
                {windGenerationData.blurb}
              </Reveal>
            </div>

            {/* Wind Power Capacity Range Display: 0.5 MW -> 2 MW -> 3 MW */}
            <Reveal delay={0.2} className="shrink-0">
              <div className="rounded-2xl border border-white/15 bg-navy-deep/80 p-6 backdrop-blur transition-all duration-300 hover:border-lime/40 shadow-xl">
                <div className="flex items-center justify-between gap-6 text-xs text-mist/60 font-mono uppercase tracking-wider">
                  <span>{windGenerationData.applicationLabel}</span>
                  <span className="text-lime font-bold">{windGenerationData.capacityRange}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {windGenerationData.capacities.map((cap, idx) => (
                    <div key={cap} className="flex items-center gap-3">
                      <span className="font-mono text-base sm:text-lg font-bold text-white px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 transition-all duration-300 hover:border-lime/50 hover:bg-lime/10">
                        {cap}
                      </span>
                      {idx < windGenerationData.capacities.length - 1 && (
                        <span className="text-lime font-bold text-sm">→</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] font-mono text-mist/60">
                  Precision drivetrain components engineered for utility turbines
                </p>
              </div>
            </Reveal>
          </div>

          {/* Wind Vertical Presentation: Large Left Visual + 3 Parts Categories */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 items-stretch">
            {/* Left: Visible High-Resolution Wind Turbine & Drivetrain Visual with Stitch Telemetry HUD */}
            <Reveal className="lg:col-span-5 flex flex-col">
              <Parallax distance={35} className="flex-1 flex flex-col">
                <div className="group relative flex-1 min-h-[420px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl bg-navy-deep">
                  <Image
                    src="/images/wind-energy.jpg"
                    alt="Wind turbine nacelle and mechanical drivetrain components"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 contrast-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                  {/* Top Status HUD Marker */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between text-[10px] font-mono">
                    <span className="bg-navy-deep/90 backdrop-blur-md px-3 py-1 rounded-md text-lime border border-white/10 flex items-center gap-1.5 shadow">
                      <Compass className="h-3 w-3" /> DRIVETRAIN PLATFORM
                    </span>
                    <span className="bg-navy-deep/90 backdrop-blur-md px-3 py-1 rounded-md text-white border border-white/10 shadow">
                      IEC 61400 / DNV-GL
                    </span>
                  </div>

                  {/* Bottom Telemetry Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/15 bg-navy-deep/90 p-4 backdrop-blur-md shadow-lg">
                      <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                        <span className="text-lime font-semibold">OEM: {windGenerationData.customer}</span>
                        <span className="text-mist/70">Sub-zero: -46°C Charpy</span>
                      </div>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                        Wind Turbine Mechanical Drivetrains
                      </h4>
                      <p className="mt-1 text-xs text-mist/75">
                        Critical concentric rings, bearing supports, and adapter interfaces for 0.5 MW to 3 MW platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Reveal>

            {/* Right: Three Visually Identifiable Categories: Wind Parts, Generator Parts, Coupling Parts */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              {windGenerationData.categories.map((subcat, idx) => (
                <Reveal
                  key={subcat.id}
                  delay={idx * 0.08}
                  className="rounded-2xl border border-white/10 bg-navy-deep/70 p-6 backdrop-blur transition-all duration-300 hover:border-lime/40 hover:bg-navy-deep/90 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime font-mono text-sm font-bold border border-lime/30">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-display text-xl font-bold text-white tracking-tight uppercase">
                          {subcat.title}
                        </h4>
                        <p className="text-xs text-mist/65 mt-0.5">
                          {subcat.description}
                        </p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-lime border border-white/10">
                      {subcat.components.length} Components
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {subcat.components.map((c) => (
                      <div
                        key={c.name}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs transition-colors hover:border-lime/30 hover:bg-white/[0.06]"
                      >
                        <p className="font-medium text-white">{c.name}</p>
                        <p className="mt-1 font-mono text-[11px] text-mist/60">
                          {c.size} · <span className="text-lime font-medium">{c.material}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

