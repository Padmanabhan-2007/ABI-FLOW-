"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  Calendar,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CertificateItem {
  id: string;
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  subtitle: string;
  orgLabel: string;
  orgName: string;
  authorityLabel: string;
  details: { icon: LucideIcon; text: string }[];
  scope?: string;
  bulletPoints: string[];
  imageSrc: string;
  alt: string;
  aspectRatio: string;
  captionTitle: string;
  captionDate: string;
  modalTitle: string;
  modalSubtitle: string;
  modalFooter: string;
}

const certificates: CertificateItem[] = [
  {
    id: "flowserve-15-years",
    badge: "Authentic Supplier Citation",
    badgeIcon: Award,
    title: "15 YEARS OF PARTNERSHIP",
    subtitle:
      "A long-standing partnership with Flowserve, recognized for supplier performance and excellence.",
    orgLabel: "Presented To",
    orgName: "ABI FLOW PRODUCTS PVT. LTD.",
    authorityLabel: "By Flowserve",
    details: [
      { icon: Calendar, text: "Supplier Summit – May 2014" },
      { icon: ShieldCheck, text: "Growth through Performance Excellence" },
    ],
    bulletPoints: ["Authentic Plaque", "15 Years of Partnership"],
    imageSrc: "/images/certificates/flowserve-15-years-partnership.jpg",
    alt: "Flowserve 15 Years of Partnership certificate presented to ABI Flow Products Pvt. Ltd. in May 2014.",
    aspectRatio: "aspect-[628/1024]",
    captionTitle: "Flowserve Partnership",
    captionDate: "May 2014",
    modalTitle: "15 YEARS OF PARTNERSHIP · FLOWSERVE",
    modalSubtitle: "Presented to ABI Flow Products Pvt. Ltd. — May 2014",
    modalFooter: "Supplier Summit – May 2014 · Flowserve Corporation",
  },
  {
    id: "tuv-nord-iso-9001",
    badge: "Management System Certification",
    badgeIcon: ShieldCheck,
    title: "ISO 9001 : 2015 CERTIFICATE",
    subtitle:
      "Certified management system by TÜV INDIA / TÜV NORD for precision component manufacturing.",
    orgLabel: "Certified Organization",
    orgName: "ABI FLOW PRODUCTS PVT. LTD.",
    authorityLabel: "Certification Body: TÜV INDIA / TÜV NORD",
    details: [
      { icon: Calendar, text: "Valid until 20.07.2026" },
      { icon: ShieldCheck, text: "Certificate Reg. No. QM 07 01067" },
    ],
    scope: "Manufacture and Supply of Machined Metal Components",
    bulletPoints: ["TÜV NORD Certified", "ISO 9001:2015 Standard"],
    imageSrc: "/images/certificates/tuv-nord-iso-9001-2015.jpg",
    alt: "TÜV NORD ISO 9001:2015 Certificate for ABI Flow Products Pvt. Ltd. - Manufacture and Supply of Machined Metal Components.",
    aspectRatio: "aspect-[922/1280]",
    captionTitle: "TÜV NORD Certification",
    captionDate: "ISO 9001:2015",
    modalTitle: "MANAGEMENT SYSTEM CERTIFICATE · ISO 9001 : 2015",
    modalSubtitle: "ABI FLOW PRODUCTS PVT. LTD. — TÜV INDIA / TÜV NORD",
    modalFooter: "Certificate Reg. No. QM 07 01067 · Audit Report No. Q 10236/2020",
  },
];

export function Certificate() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Accessible Escape key handling
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedCert(null);
    }
  }, []);

  useEffect(() => {
    if (!selectedCert) return;
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedCert, handleKeyDown]);

  return (
    <section
      id="certificate"
      className="relative scroll-mt-24 border-b border-line bg-light py-12 sm:py-16"
    >
      <div className="container-x">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 text-eyebrow text-cyan-deep shadow-xs">
              <Award className="h-3.5 w-3.5 text-cyan-deep" />
              Certifications &amp; Partnerships
            </div>
          </Reveal>

          <Reveal delay={0.06} className="mt-3">
            <h2 className="text-h2 text-ink">
              Verified Quality Accreditations &amp; OEM Honors
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-2.5 text-lead text-ink-soft">
            Authentic ISO 9001:2015 management system certification and recognized OEM supplier citations.
          </Reveal>
        </div>

        {/* 2 Balanced Certificate Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8 items-stretch">
          {certificates.map((cert, idx) => {
            const BadgeIcon = cert.badgeIcon;
            return (
              <Reveal key={cert.id} delay={idx * 0.1} className="h-full">
                <div className="flex flex-col justify-between h-full rounded-3xl border border-line bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div>
                    {/* Eyebrow Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-light px-3 py-1 text-[11px] font-semibold text-cyan-deep">
                      <BadgeIcon className="h-3.5 w-3.5 text-cyan-deep" />
                      {cert.badge}
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                      {cert.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {cert.subtitle}
                    </p>

                    {/* Metadata Card */}
                    <div className="mt-5 rounded-2xl border border-line bg-light/50 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy text-cyan ring-1 ring-line">
                          <Building2 className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-steel">
                            {cert.orgLabel}
                          </span>
                          <p className="font-display text-sm font-bold text-ink truncate">
                            {cert.orgName}
                          </p>
                          <p className="text-xs text-ink-soft mt-0.5">
                            {cert.authorityLabel}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3.5 grid gap-2 border-t border-line/70 pt-3 sm:grid-cols-2 text-xs">
                        {cert.details.map((d, i) => {
                          const DetailIcon = d.icon;
                          return (
                            <div key={i} className="flex items-center gap-2 text-ink-soft">
                              <DetailIcon className="h-3.5 w-3.5 text-cyan-deep shrink-0" />
                              <span className="truncate">{d.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {cert.scope && (
                        <div className="mt-2.5 pt-2.5 border-t border-line/50 text-[11px] text-steel">
                          <span className="font-semibold text-ink">Scope: </span>
                          <span>{cert.scope}</span>
                        </div>
                      )}
                    </div>

                    {/* Highlight Pills */}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-steel">
                      {cert.bulletPoints.map((bp, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 font-medium text-ink"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-deep" />
                          {bp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Authentic Framed Certificate Photograph with Click-to-Enlarge */}
                  <div className="mt-6 pt-5 border-t border-line/70 flex flex-col items-center">
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="group w-full max-w-[240px] sm:max-w-[260px] cursor-pointer overflow-hidden rounded-2xl border border-line bg-light/40 p-3 shadow-xs transition-all duration-300 hover:border-cyan hover:shadow-lg focus-within:ring-2 focus-within:ring-cyan"
                      role="button"
                      tabIndex={0}
                      aria-label={`Click to enlarge ${cert.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedCert(cert);
                        }
                      }}
                    >
                      {/* Contained image frame ensuring zero clipping of text, emblem, or signatures */}
                      <div
                        className={`relative ${cert.aspectRatio} w-full overflow-hidden rounded-xl bg-navy/5`}
                      >
                        <Image
                          src={cert.imageSrc}
                          alt={cert.alt}
                          fill
                          sizes="(max-width: 640px) 80vw, 260px"
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />

                        {/* Zoom hint overlay */}
                        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur transition-all group-hover:bg-navy group-hover:scale-105">
                          <Maximize2 className="h-3 w-3" />
                          <span>Enlarge</span>
                        </div>
                      </div>

                      {/* Caption bar */}
                      <div className="mt-2.5 flex items-center justify-between px-1 text-xs text-steel">
                        <span className="font-medium text-ink truncate">
                          {cert.captionTitle}
                        </span>
                        <span className="font-mono text-[11px] text-cyan-deep shrink-0 ml-2">
                          {cert.captionDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR FULL-SCALE INSPECTION */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-lightbox-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-navy/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex flex-col items-center max-w-xl w-full rounded-3xl border border-white/20 bg-navy p-5 sm:p-6 shadow-2xl text-white max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate lightbox"
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full text-center pb-3 border-b border-white/10 pr-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-bright font-semibold">
                  {selectedCert.badge}
                </span>
                <h3
                  id="certificate-lightbox-title"
                  className="mt-1 font-display text-lg sm:text-xl font-bold tracking-tight"
                >
                  {selectedCert.modalTitle}
                </h3>
                <p className="mt-1 text-xs text-mist/70">
                  {selectedCert.modalSubtitle}
                </p>
              </div>

              {/* Large Upright Certificate Display */}
              <div
                className={`relative mt-4 ${selectedCert.aspectRatio} w-full max-h-[64vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner`}
              >
                <Image
                  src={selectedCert.imageSrc}
                  alt={selectedCert.alt}
                  fill
                  sizes="(max-width: 768px) 95vw, 600px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              <div className="mt-4 flex items-center justify-between w-full pt-3 border-t border-white/10 text-xs text-mist/60">
                <span className="truncate pr-2">{selectedCert.modalFooter}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors shrink-0 cursor-pointer"
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

