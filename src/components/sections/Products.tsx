"use client";

import Image from "next/image";
import { ArrowUpRight, Wind, ShieldAlert, Cpu, Sparkles, Layers, Check } from "lucide-react";
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

function ValveSpecList({ cat }: { cat: ProductCategory }) {
  return (
    <ul className="mt-5 space-y-1.5 border-t border-line/70 pt-5">
      {cat.components.map((comp) => (
        <li
          key={comp.name}
          className="-mx-2 flex flex-col justify-between gap-1 rounded-lg px-2.5 py-1.5 text-sm transition-colors hover:bg-light/80 sm:flex-row sm:items-baseline"
        >
          <span className="font-medium text-ink">{comp.name}</span>
          <span className="font-mono text-xs text-steel">
            {comp.size} · <span className="text-ink-soft">{comp.material}</span>
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
      {/* SECTION A: OIL & GAS / FLOW CONTROL                                       */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-light to-[#f1f6fa] py-24 text-ink sm:py-28">
        {/* Subtle ambient cyan glow and industrial flow streamlines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-cyan/[0.05] blur-[120px]" />
          <div className="absolute -left-20 bottom-24 h-72 w-72 rounded-full bg-cyan-bright/[0.03] blur-[100px]" />
          {/* Subtle industrial flow vector streamlines */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.25]"
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
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1 text-eyebrow text-cyan-deep shadow-xs">
                Vertical 01 · Severe-Service Manufacturing
              </span>
            </Reveal>
            <Reveal delay={0.08} className="mt-4">
              <h2 className="text-display text-ink">
                Oil &amp; Gas / Flow Control
              </h2>
            </Reveal>
            <Reveal delay={0.16} className="mt-4 text-lead text-ink-soft">
              Precision-machined valve internals, severe-service trims, stems, and heavy-wall
              pressure boundary parts. Built to strict customer drawings for Nordstrom plug valves,
              high-performance butterfly valves, slab gate valves, and trunnion ball assemblies.
            </Reveal>
          </div>

          {/* Oil & Gas Bento Grid */}
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {oilAndGasProducts.map((cat, i) => (
              <Card
                key={cat.id}
                delay={(i % 3) * 0.07}
                tone="light"
                className={`flex flex-col p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${spans[i]}`}
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan-bright to-magenta transition-transform duration-300 group-hover:scale-x-100" />

                {/* 1. Category & Number */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-steel">
                      0{i + 1}
                    </span>
                    <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-deep">
                      {cat.sector}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-line transition-all duration-300 group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="mt-5 flex-1 flex flex-col">
                  {/* 2. Product Name */}
                  <h3 className="text-h3 text-ink transition-colors duration-200 group-hover:text-cyan-deep">
                    {cat.title}
                  </h3>

                  {/* 3. Product Image */}
                  {cat.image && (
                    <div className="relative mt-4 aspect-[16/10] w-full max-h-64 sm:max-h-72 overflow-hidden rounded-xl border border-line/60 bg-white/70">
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
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-magenta">
                    {cat.customer}
                  </p>
                </div>

                {/* 6. Technical Specifications List */}
                <ValveSpecList cat={cat} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MATERIAL CAPABILITY SHOWCASE: HIGH-NICKEL ALLOYS                          */}
      {/* ========================================================================= */}
      <Section tone="cloud" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-eyebrow text-cyan-deep">
                <Sparkles className="h-4 w-4" />
                Metallurgical Capability
              </span>
              <h3 className="mt-3 text-h2 text-ink">
                {materialCapabilities.headline}
              </h3>
              <p className="mt-4 text-lead text-ink-soft">
                {materialCapabilities.lead}
              </p>
              <div className="mt-6 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-steel">
                  Surface Enhancements &amp; Coatings
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
                  className="rounded-2xl border border-line bg-white p-6 transition-all hover:border-cyan hover:shadow-md"
                >
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-deep">
                    Grade Family 0{i + 1}
                  </span>
                  <h4 className="mt-2 font-display text-base font-bold text-ink">
                    {alloy.name}
                  </h4>
                  <p className="mt-1 font-mono text-xs text-magenta font-medium">
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
      {/* SECTION B: RENEWABLE ENERGY / WIND GENERATION                             */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-navy text-white py-24 sm:py-28">
        {/* Subtle Aerodynamic Wind Streamlines Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-lime/[0.04] blur-[120px]" />
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
                <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-eyebrow text-lime">
                  <Wind className="h-3.5 w-3.5 text-lime" />
                  Vertical 02 · Renewable Energy
                </span>
              </Reveal>
              <Reveal delay={0.08} className="mt-4">
                <h2 className="text-display text-white">
                  Wind Generation
                </h2>
              </Reveal>
              <Reveal delay={0.16} className="mt-3 max-w-2xl text-lead text-mist/75">
                {windGenerationData.blurb}
              </Reveal>
            </div>

            {/* Wind Power Capacity Range Display: 0.5 MW -> 2 MW -> 3 MW */}
            <Reveal delay={0.2} className="shrink-0">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-lime/40">
                <div className="flex items-center justify-between gap-6 text-xs text-mist/60 font-mono uppercase tracking-wider">
                  <span>{windGenerationData.applicationLabel}</span>
                  <span className="text-lime font-bold">{windGenerationData.capacityRange}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {windGenerationData.capacities.map((cap, idx) => (
                    <div key={cap} className="flex items-center gap-3">
                      <span className="font-display text-lg font-bold text-white px-3 py-1 rounded-xl bg-white/10 border border-white/10 transition-all duration-300 hover:border-lime/50 hover:bg-lime/10">
                        {cap}
                      </span>
                      {idx < windGenerationData.capacities.length - 1 && (
                        <span className="text-lime font-bold text-sm">→</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-mist/50">
                  Precision drivetrain components engineered for utility turbines
                </p>
              </div>
            </Reveal>
          </div>

          {/* Wind Vertical Presentation: Large Left Visual + 3 Parts Categories */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 items-stretch">
            {/* Left: Visible High-Resolution Wind Turbine & Drivetrain Visual with Parallax Depth */}
            <Reveal className="lg:col-span-5 flex flex-col">
              <Parallax distance={35} className="flex-1 flex flex-col">
                <div className="group relative flex-1 min-h-[380px] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                  <Image
                    src="/images/wind-energy.jpg"
                    alt="Wind turbine nacelle and mechanical drivetrain components"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="rounded-full bg-lime/20 border border-lime/40 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-lime">
                      OEM Partner: {windGenerationData.customer}
                    </span>
                    <h4 className="mt-3 font-display text-xl font-bold text-white">
                      Wind Turbine Mechanical Drivetrains
                    </h4>
                    <p className="mt-1 text-xs text-mist/75">
                      Critical concentric rings, bearing supports, and adapter interfaces for 0.5 MW to 3 MW platforms.
                    </p>
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-lime/40 hover:bg-white/[0.08]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime font-mono text-sm font-bold">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="font-display text-xl font-bold text-white tracking-tight">
                          {subcat.title}
                        </h4>
                        <p className="text-xs text-mist/60 mt-0.5">
                          {subcat.description}
                        </p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto rounded-full bg-white/10 px-3 py-0.5 font-mono text-[11px] text-lime">
                      {subcat.components.length} Components
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {subcat.components.map((c) => (
                      <div
                        key={c.name}
                        className="rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3 text-xs"
                      >
                        <p className="font-medium text-white">{c.name}</p>
                        <p className="mt-1 font-mono text-[11px] text-mist/60">
                          {c.size} · <span className="text-lime">{c.material}</span>
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
