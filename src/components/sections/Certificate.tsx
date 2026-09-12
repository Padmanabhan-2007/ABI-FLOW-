"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Maximize2, X, Calendar, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Certificate() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Accessible Escape key handling
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setLightboxOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, handleKeyDown]);

  return (
    <section id="certificate" className="relative scroll-mt-24 border-b border-line bg-light py-12 sm:py-16">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: Credibility Narrative & Certificate Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 text-eyebrow text-cyan-deep shadow-xs">
                <Award className="h-3.5 w-3.5 text-cyan-deep" />
                Authentic Supplier Citation
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-3">
              <h2 className="text-h2 text-ink">
                15 YEARS OF PARTNERSHIP
              </h2>
            </Reveal>

            <Reveal delay={0.14} className="mt-3 text-lead text-ink-soft max-w-xl">
              A long-standing partnership with Flowserve, recognized for supplier performance and excellence.
            </Reveal>

            <Reveal delay={0.2} className="mt-6 space-y-4 max-w-xl">
              <div className="rounded-2xl border border-line bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-cyan ring-1 ring-line">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-steel">
                      Presented To
                    </span>
                    <p className="mt-0.5 font-display text-base font-bold text-ink">
                      ABI FLOW PRODUCTS PVT. LTD.
                    </p>
                    <p className="text-xs text-ink-soft mt-0.5">
                      By Flowserve
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2.5 border-t border-line/70 pt-3.5 sm:grid-cols-2 text-xs">
                  <div className="flex items-center gap-2 text-ink-soft">
                    <Calendar className="h-4 w-4 text-cyan-deep shrink-0" />
                    <span>Supplier Summit – May 2014</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-soft">
                    <ShieldCheck className="h-4 w-4 text-cyan-deep shrink-0" />
                    <span>Growth through Performance Excellence</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-steel">
                <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-cyan-deep" />
                  Authentic Plaque
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-cyan-deep" />
                  15 Years of Partnership
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Authentic Certificate Photograph (Upright, Object-Contain, Responsive) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Reveal delay={0.12} className="w-full max-w-[280px] sm:max-w-[300px]">
              <div className="relative group">
                {/* Outer certificate framing */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-md transition-all duration-300 hover:border-cyan hover:shadow-xl focus-within:ring-2 focus-within:ring-cyan"
                  role="button"
                  tabIndex={0}
                  aria-label="Click to enlarge the Flowserve 15 Years of Partnership certificate"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxOpen(true);
                    }
                  }}
                >
                  {/* Contained image frame ensuring zero clipping of text, emblem, or signatures */}
                  <div className="relative aspect-[628/1024] w-full overflow-hidden rounded-xl bg-navy/5">
                    <Image
                      src="/images/certificates/flowserve-15-years-partnership.jpg"
                      alt="Flowserve 15 Years of Partnership certificate presented to ABI Flow Products Pvt. Ltd. in May 2014."
                      fill
                      sizes="(max-width: 640px) 85vw, 300px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />

                    {/* Zoom hint overlay */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur transition-all group-hover:bg-navy group-hover:scale-105">
                      <Maximize2 className="h-3 w-3" />
                      <span>Enlarge</span>
                    </div>
                  </div>

                  {/* Caption bar */}
                  <div className="mt-2.5 flex items-center justify-between px-1 text-xs text-steel">
                    <span className="font-medium text-ink">Flowserve Partnership</span>
                    <span className="font-mono text-[11px] text-cyan-deep">May 2014</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR FULL-SCALE INSPECTION */}
      <AnimatePresence>
        {lightboxOpen && (
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
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 bg-navy/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center max-w-xl w-full rounded-3xl border border-white/20 bg-navy p-6 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close certificate lightbox"
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full text-center pb-4 border-b border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-bright font-semibold">
                  Flowserve Recognition
                </span>
                <h3 id="certificate-lightbox-title" className="mt-1 font-display text-xl font-bold">
                  15 YEARS OF PARTNERSHIP · FLOWSERVE
                </h3>
                <p className="mt-1 text-xs text-mist/70">
                  Presented to ABI Flow Products Pvt. Ltd. — May 2014
                </p>
              </div>

              {/* Large Upright Certificate Display */}
              <div className="relative mt-5 aspect-[628/1024] w-full max-h-[70vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <Image
                  src="/images/certificates/flowserve-15-years-partnership.jpg"
                  alt="Flowserve 15 Years of Partnership certificate presented to ABI Flow Products Pvt. Ltd. in May 2014."
                  fill
                  sizes="(max-width: 768px) 95vw, 600px"
                  className="object-contain p-2"
                />
              </div>

              <div className="mt-4 flex items-center justify-between w-full pt-3 border-t border-white/10 text-xs text-mist/60">
                <span>Supplier Summit – May 2014</span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
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
