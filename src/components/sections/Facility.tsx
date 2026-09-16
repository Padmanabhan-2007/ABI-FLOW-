"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Gauge,
  Factory,
  Cog,
  ScanLine,
  X,
  Maximize2,
  CheckCircle2,
  Layers,
  Ruler,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Parallax } from "@/components/ui/Parallax";
import { Media } from "@/components/ui/Media";
import { machineHighlights, machinery, type Machine, type Highlight } from "@/data/machinery";
import { instruments, type Instrument } from "@/data/instruments";

const gallery = [
  { label: "CNC Shop Floor", icon: Factory, ratio: "photo" as const },
  { label: "Turning Cell", icon: Cog, ratio: "photo" as const },
  { label: "Inspection Lab", icon: ScanLine, ratio: "photo" as const },
];

const process = [
  { title: "Certified Stock", note: "Traceable raw material to ASTM / AISI grades." },
  { title: "Multi-Axis CNC", note: "Turning, milling & grinding to tight tolerances." },
  { title: "Inspection", note: "CMM-verified and checked at every stage." },
  { title: "100% Tested", note: "Validated to international standards before dispatch." },
];

type SelectedDetail = {
  id: string;
  name: string;
  model: string;
  type: string;
  category?: string;
  specs: { label: string; value: string }[];
  description?: string;
  capacity?: string;
  image?: string;
};

export function Facility() {
  const [selectedMachine, setSelectedMachine] = useState<SelectedDetail | null>(null);
  const [machineryOpen, setMachineryOpen] = useState(false);
  const [instrumentsOpen, setInstrumentsOpen] = useState(false);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedMachine(null);
    }
  }, []);

  // Modal keydown & scroll lock — only runs when a modal is actively open
  useEffect(() => {
    if (!selectedMachine) return;

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedMachine, handleKeyDown]);

  const openHighlightModal = (m: Highlight) => {
    setSelectedMachine({
      id: m.id,
      name: m.name,
      model: m.model,
      type: m.type,
      specs: [
        { label: "Machine Name", value: m.name },
        { label: "Machine Type", value: m.type },
        ...(m.manufacturer ? [{ label: "Manufacturer", value: m.manufacturer }] : []),
        { label: "Model", value: m.model },
        ...m.specs,
      ],
      description: m.description,
      image: m.image,
    });
  };

  const openMachineModal = (m: Machine) => {
    setSelectedMachine({
      id: m.id,
      name: m.make,
      model: m.model || m.make,
      type: m.machine,
      category: m.category,
      capacity: m.capacity,
      specs: [
        { label: "Capacity / Working Envelope", value: m.capacity },
        { label: "Fleet Quantity", value: `${m.qty} unit(s)` },
        ...(m.specs || []),
      ],
      description: m.description,
      image: m.image,
    });
  };

  const openInstrumentModal = (ins: Instrument) => {
    setSelectedMachine({
      id: `instrument-${ins.description}`,
      name: ins.make,
      model: ins.description,
      type: "Precision Metrology & Quality Assurance Instrument",
      category: "Metrology & CMM",
      specs: [
        { label: "Instrument Description", value: ins.description },
        { label: "Manufacturer / Make", value: ins.make },
        { label: "Measuring Range", value: ins.range },
        { label: "Least Count (L.C.)", value: ins.lc },
      ],
      description: `In-house calibrated ${ins.description} from ${ins.make}, used for 100% stage inspection and dimensional verification.`,
    });
  };

  return (
    <Section id="facility" tone="light">
      {/* Parallax Depth Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Parallax distance={240} aria-hidden className="absolute -right-24 top-24">
          <div className="h-72 w-72 rounded-full bg-cyan/12 blur-[120px]" />
        </Parallax>
        <Parallax distance={-190} aria-hidden className="absolute -left-20 bottom-40">
          <div className="h-64 w-64 rounded-full bg-magenta/[0.08] blur-[120px]" />
        </Parallax>
      </div>

      <div className="relative">
        <SectionHeading
          eyebrow="Facility & Infrastructure"
          title="A 24,000 sq.ft precision machining plant"
          description="Multi-axis CNC turning and machining centres, grinding, and full in-house metrology — engineered around a zero-defect quality flow."
        />

        {/* Plant Gallery */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.08}>
              <Media
                ratio={g.ratio}
                icon={g.icon}
                label={g.label}
                tone="steel"
                alt={`ABI Flow facility — ${g.label}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>

        {/* STITCH PANORAMIC TECHNICAL INFRASTRUCTURE FRAME */}
        <Reveal delay={0.12} className="mt-10">
          <div className="relative rounded-3xl overflow-hidden bg-navy-deep border border-line shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/machinery/mazak-hmc.jpg"
                alt="Multi-axis CNC machining bays and metrology facility at ABI Flow"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/40 to-transparent pointer-events-none" />

              {/* Top Plant Telemetry Marker */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <div className="bg-navy-deep/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 shadow-md">
                  <span className="font-mono text-[10px] font-bold text-cyan-bright uppercase tracking-wider">
                    PLANT TELEMETRY · 24,000 SQ.FT PRECISION FACILITY
                  </span>
                  <span className="font-mono text-xs text-white block mt-0.5 font-medium">
                    MAZAK HORIZONTAL &amp; MULTI-TASKING CELLS ACTIVE
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="bg-navy-deep/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono text-[11px] text-cyan-bright">
                    FLEET: <strong>28+ UNITS</strong>
                  </span>
                  <span className="bg-navy-deep/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono text-[11px] text-lime">
                    CMM VOLUME: <strong>1200 × 2400 MM</strong>
                  </span>
                </div>
              </div>

              {/* Optical Reticle Center Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 hidden sm:block">
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-cyan" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-cyan" />
                  <div className="w-12 h-12 rounded-full border border-cyan/60" />
                </div>
              </div>

              {/* Bottom Climate & Environmental Regulation Info */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <div className="bg-navy-deep/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 max-w-lg shadow-lg">
                  <div className="font-mono text-[10px] uppercase font-bold text-cyan-bright mb-0.5 tracking-wider">
                    Temperature &amp; Humidity Regulated Metrology
                  </div>
                  <p className="text-xs text-mist/80">
                    Inspection bay thermally stabilized at 20°C ±0.5°C with volumetric error compensation for sub-micron scanning fidelity.
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-navy-deep/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 font-mono text-xs text-mist/70">
                  <span>LINEAR RESOLUTION:</span>
                  <strong className="text-cyan-bright">0.0001 MM</strong>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Process Flow Timeline */}
        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-line lg:block"
            aria-hidden
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white font-mono text-sm font-medium text-cyan-deep">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {step.note}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Interactive Machine Showcase Header */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-line pb-4">
          <div>
            <span className="text-eyebrow text-cyan-deep font-mono">
              ENGINEERING FLEET TELEMETRY
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink uppercase">
              Core Machinery &amp; Metrology Units
            </h3>
          </div>
          <span className="text-xs font-mono text-steel">
            Click any machine or CMM to inspect full technical specifications
          </span>
        </div>

        {/* Featured Machines & CMM Bento Grid (Clickable) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {machineHighlights.map((m, i) => {
            const featured = i === 0;
            return (
              <div
                key={m.id}
                className={`flex flex-col ${featured ? "lg:col-span-6" : "lg:col-span-3"}`}
              >
                <Reveal delay={i * 0.08} className="h-full">
                  <button
                    type="button"
                    onClick={() => openHighlightModal(m)}
                    aria-label={`View detailed specifications for ${m.name} ${m.model}`}
                    className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-xl focus-visible:ring-2 focus-visible:ring-cyan"
                  >
                    {/* Interactive Accent Line */}
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan-bright to-magenta transition-transform duration-300 group-hover:scale-x-100 z-10" />

                    {/* Visual Preview Frame */}
                    {m.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cloud">
                        <Image
                          src={m.image}
                          alt={`${m.name} ${m.model} precision machinery`}
                          fill
                          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 rounded-full bg-navy/70 p-1.5 text-white backdrop-blur transition-transform group-hover:scale-110">
                          <Maximize2 className="h-4 w-4" />
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <span className="rounded-md bg-navy/80 px-2.5 py-1 text-[11px] font-mono font-medium text-cyan-bright backdrop-blur">
                            {m.type}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-cyan-deep">
                        <Gauge className="h-4 w-4 shrink-0" />
                        <span className="text-eyebrow">{m.name}</span>
                      </div>
                      <p className="mt-1 font-display text-xl font-bold text-ink group-hover:text-cyan-deep transition-colors">
                        {m.id === "mazak-hmc-hcn6800l" ? m.name : m.model}
                      </p>
                      {m.id === "mazak-hmc-hcn6800l" && (
                        <p className="mt-0.5 text-xs font-semibold text-cyan-deep">
                          Horizontal Machining Centre
                        </p>
                      )}
                      {m.description && (
                        <p className="mt-2 text-xs text-ink-soft line-clamp-2">
                          {m.description}
                        </p>
                      )}

                      <dl className="mt-4 grid gap-2 border-t border-line/70 pt-4 text-xs">
                        {m.specs.slice(0, 3).map((s) => (
                          <div key={s.label} className="flex justify-between gap-2">
                            <dt className="text-steel">{s.label}</dt>
                            <dd className="font-mono font-medium text-ink">{s.value}</dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-5 flex items-center justify-between border-t border-line/50 pt-3 text-[11px] font-semibold uppercase tracking-wider text-cyan-deep">
                        <span>Inspect Specifications</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Complete Machinery & Instrument Lists (Collapsible with Clickable Detail Triggers) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* List of Machinery */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setMachineryOpen((v) => !v)}
                aria-expanded={machineryOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-light/60"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-cyan text-xs font-bold">
                    {machinery.length}
                  </span>
                  <div>
                    <span className="font-display text-base font-bold text-ink">
                      Complete Machinery Fleet
                    </span>
                    <p className="text-xs text-steel">CNC turning, 4th-axis VMCs, and surface/rotary grinders</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ${
                    machineryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {machineryOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-t border-line"
                  >
                    <div className="px-6 py-4">
                      <p className="text-xs text-steel mb-3">
                        Click on any machine row to open full technical capabilities and envelope details.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr className="border-b border-line text-eyebrow text-steel">
                              <th className="py-2 pr-3">Make / Model</th>
                              <th className="py-2 pr-3">Machine Type</th>
                              <th className="py-2 pr-3">Capacity</th>
                              <th className="py-2 pr-3">Qty</th>
                              <th className="py-2 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {machinery.map((m) => (
                              <tr
                                key={m.id}
                                onClick={() => openMachineModal(m)}
                                className="group cursor-pointer border-b border-line/60 transition-colors hover:bg-light/80"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openMachineModal(m);
                                  }
                                }}
                              >
                                <td className="py-3 pr-3 font-medium text-ink group-hover:text-cyan-deep">
                                  {m.make}
                                </td>
                                <td className="py-3 pr-3 text-ink-soft">{m.machine}</td>
                                <td className="py-3 pr-3 font-mono text-xs text-steel">
                                  {m.capacity}
                                </td>
                                <td className="py-3 pr-3 font-mono text-ink">{m.qty}</td>
                                <td className="py-3 text-right">
                                  <span className="text-xs font-semibold text-cyan-deep opacity-0 transition-opacity group-hover:opacity-100">
                                    View →
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* List of Instruments & Metrology */}
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setInstrumentsOpen((v) => !v)}
                aria-expanded={instrumentsOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-light/60"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-cyan text-xs font-bold">
                    {instruments.length}
                  </span>
                  <div>
                    <span className="font-display text-base font-bold text-ink">
                      Metrology &amp; Inspection Instruments
                    </span>
                    <p className="text-xs text-steel">CMM, Trimos Height Master, and Mitutoyo digital gauges</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-300 ${
                    instrumentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {instrumentsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-t border-line"
                  >
                    <div className="px-6 py-4">
                      <p className="text-xs text-steel mb-3">
                        Click on any instrument row to inspect precision resolution and measuring range.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr className="border-b border-line text-eyebrow text-steel">
                              <th className="py-2 pr-3">Description</th>
                              <th className="py-2 pr-3">Make</th>
                              <th className="py-2 pr-3">Range</th>
                              <th className="py-2 pr-3">L.C.</th>
                              <th className="py-2 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {instruments.map((ins, i) => (
                              <tr
                                key={i}
                                onClick={() => openInstrumentModal(ins)}
                                className="group cursor-pointer border-b border-line/60 transition-colors hover:bg-light/80"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openInstrumentModal(ins);
                                  }
                                }}
                              >
                                <td className="py-3 pr-3 font-medium text-ink group-hover:text-cyan-deep">
                                  {ins.description}
                                </td>
                                <td className="py-3 pr-3 text-ink-soft">{ins.make}</td>
                                <td className="py-3 pr-3 font-mono text-xs text-steel">
                                  {ins.range}
                                </td>
                                <td className="py-3 pr-3 font-mono text-xs font-semibold text-ink">
                                  {ins.lc}
                                </td>
                                <td className="py-3 text-right">
                                  <span className="text-xs font-semibold text-cyan-deep opacity-0 transition-opacity group-hover:opacity-100">
                                    View →
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE MACHINERY & CMM MODAL (ACCESSIBLE + FRAMER MOTION)            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedMachine && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="machine-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMachine(null)}
              className="fixed inset-0 bg-navy/80 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-line bg-white shadow-2xl"
            >
              {/* Optional Header Image for Highlights & CMM */}
              {selectedMachine.image && (
                <div className="relative aspect-[16/9] w-full bg-navy">
                  <Image
                    src={selectedMachine.image}
                    alt={`${selectedMachine.name} ${selectedMachine.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="rounded-full bg-navy/80 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-bright backdrop-blur border border-white/10">
                      {selectedMachine.type}
                    </span>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMachine(null)}
                aria-label="Close machine details dialog"
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-navy/70 text-white transition-transform hover:scale-110 hover:bg-navy focus-visible:ring-2 focus-visible:ring-cyan backdrop-blur"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 sm:p-8">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-deep">
                    Verified Technical Specifications
                  </span>
                  <h3
                    id="machine-modal-title"
                    className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink"
                  >
                    {selectedMachine.name}
                  </h3>
                  <p className="mt-0.5 font-display text-lg font-medium text-steel">
                    {selectedMachine.model}
                  </p>
                </div>

                {selectedMachine.description && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft border-t border-line/70 pt-4">
                    {selectedMachine.description}
                  </p>
                )}

                {/* Specifications List */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-steel mb-3">
                    Machine Capabilities &amp; Envelope
                  </h4>
                  <dl className="grid gap-2.5 sm:grid-cols-2 rounded-2xl border border-line bg-light/60 p-4">
                    {selectedMachine.specs.map((spec) => (
                      <div key={spec.label} className="flex flex-col gap-0.5">
                        <dt className="text-[11px] uppercase tracking-wider text-steel font-medium">
                          {spec.label}
                        </dt>
                        <dd className="font-mono text-sm font-semibold text-ink">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-line pt-5">
                  <span className="flex items-center gap-1.5 text-xs text-steel">
                    <CheckCircle2 className="h-4 w-4 text-cyan-deep" />
                    100% In-house Machining &amp; Metrology Adherence
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedMachine(null)}
                    className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy/85"
                  >
                    Close Specifications
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
