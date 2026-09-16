"use client";

import Image from "next/image";
import {
  BadgeCheck,
  RefreshCcw,
  Users,
  HeartHandshake,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Scan,
  Compass,
  Gauge,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const principles = [
  { label: "Customer Satisfaction", icon: HeartHandshake, note: "Zero-defect delivery and responsive engineering support." },
  { label: "Continuous Improvement", icon: RefreshCcw, note: "Kaizen tooling upgrades and automated CMM routines." },
  { label: "Total Participation", icon: Users, note: "Certified Level II inspectors and trained machinists at every bay." },
];

const accreditations = [
  { code: "ISO 9001:2015", body: "TÜV NORD Certified", desc: "Quality Management System" },
  { code: "AS9100 Rev D", body: "Aerospace Ready", desc: "Critical Tolerance Specs" },
  { code: "API Spec 6A", body: "Wellhead Standard", desc: "15,000 - 20,000 PSI Valving" },
  { code: "API Spec 16A", body: "Drill-Through Kit", desc: "Severe Choke Manifolds" },
  { code: "PED 2014/68/EU", body: "Pressure Directive", desc: "European CE Conformance" },
  { code: "EN 10204 3.1", body: "Full Traceability", desc: "Heat-Specific MTR Dossiers" },
];

export function Quality() {
  return (
    <Section id="quality" tone="white" className="relative">
      {/* Subtle Metrology Graticule Grid Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-20" />

      <div className="relative z-10">
        {/* Header & Statement */}
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12 items-end pb-12 border-b border-line">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-deep mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-deep" />
                METROLOGY &amp; ACCREDITATIONS · SPEC: ISO 9001:2015 TÜV NORD
              </div>
              <h2 className="text-display text-ink uppercase tracking-tight">
                Quality is built into every cut
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="text-lead text-ink-soft">
                Our management system is certified to ISO 9001:2015 by TÜV NORD,
                covering the manufacture and supply of machined metal components. Every batch
                undergoes 100% stage inspection and CMM validation before dispatch.
              </p>
            </Reveal>
          </div>
        </div>

        {/* STITCH METROLOGY PRECISION FRAME + CMM TELEMETRY */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left: Zeiss CMM Visual with Precision Telemetry HUD */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal className="flex-1 flex flex-col">
              <div className="group relative flex-1 min-h-[380px] overflow-hidden rounded-3xl border border-line bg-navy-deep shadow-xl">
                <Image
                  src="/images/machinery/cmm-metrology.jpg"
                  alt="Zeiss CMM coordinate measuring machine in temperature controlled cleanroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover contrast-105 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent pointer-events-none" />

                {/* Top Corner Metrology Telemetry Badge */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between text-[10px] font-mono">
                  <span className="bg-navy-deep/90 backdrop-blur-md px-3 py-1 rounded-md text-cyan-bright border border-white/10 flex items-center gap-1.5 shadow">
                    <Scan className="h-3 w-3" /> ZEISS CMM SCANNING BAY
                  </span>
                  <span className="bg-navy-deep/90 backdrop-blur-md px-3 py-1 rounded-md text-white border border-white/10 shadow">
                    ZEISS CALYPSO CAD ENGINE
                  </span>
                </div>

                {/* Optical Reticle Center Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <div className="w-14 h-14 relative flex items-center justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-cyan" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-cyan" />
                    <div className="w-10 h-10 rounded-full border border-cyan/60" />
                  </div>
                </div>

                {/* Bottom Telemetry Overlay Stats */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                  <div className="bg-navy-deep/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-lg flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-mist/60 block">Scanning Accuracy</span>
                      <strong className="text-cyan-bright">E0,MPE = 0.9 + L/350 µm</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-mist/60 block">Surface Roughness</span>
                      <strong className="text-lime">Ra down to 0.05 µm</strong>
                    </div>
                  </div>
                  <div className="bg-navy-deep/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-mono text-[11px] text-mist/70 flex items-center justify-between">
                    <span>Cleanroom Lab: 20°C ±0.5°C</span>
                    <span className="text-cyan-bright">100% STAGE INSPECTED</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Quality Policy Quote & Principles */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Pull Quote */}
            <Reveal className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-xl sm:p-9 border border-white/10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cyan/15 blur-2xl" />
              <Quote
                className="absolute right-8 top-8 h-16 w-16 text-white/5"
                aria-hidden
              />
              <div className="relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-bright font-semibold">
                  Our Quality Policy
                </span>
                <blockquote className="mt-4 font-display text-lg sm:text-xl font-medium leading-relaxed text-white">
                  “Committed to satisfy our customers through effective
                  implementation of the Quality Management System, continual
                  improvement, resource management, and compliance with statutory
                  and regulatory requirements.”
                </blockquote>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/10 font-mono text-xs text-mist/70">
                  <BadgeCheck className="h-4 w-4 text-cyan-bright" />
                  <span>ISO 9001:2015 TÜV NORD Registered Company</span>
                </div>
              </div>
            </Reveal>

            {/* Principles Cards */}
            <div className="grid gap-3 sm:grid-cols-3">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal
                    key={p.label}
                    delay={i * 0.08}
                    className="flex flex-col gap-2 rounded-2xl border border-line bg-white p-4 shadow-xs transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan-deep">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-xs font-bold text-ink">
                        {p.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-steel leading-normal mt-1">
                      {p.note}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* STITCH INTERNATIONAL ACCREDITATIONS & STATUTES MATRIX */}
        <div className="mt-14 rounded-3xl border border-line bg-light p-6 sm:p-8 shadow-sm">
          <div className="text-center font-mono text-[11px] font-semibold text-steel uppercase tracking-widest mb-6">
            INTERNATIONAL INDUSTRIAL CERTIFICATIONS &amp; MANUFACTURING STATUTES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {accreditations.map((acc, i) => (
              <div
                key={acc.code}
                className="rounded-xl border border-line/80 bg-white p-3.5 text-center shadow-xs transition-all duration-300 hover:border-cyan hover:shadow-sm"
              >
                <div className="flex justify-center mb-1.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-deep" />
                </div>
                <div className="font-mono text-xs font-bold text-ink">
                  {acc.code}
                </div>
                <div className="text-[10px] font-semibold text-cyan-deep mt-0.5">
                  {acc.body}
                </div>
                <div className="text-[10px] text-steel mt-0.5 line-clamp-1">
                  {acc.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

