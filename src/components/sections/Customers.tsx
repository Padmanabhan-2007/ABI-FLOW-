import { Award, ShieldCheck, CheckCircle2, Factory } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { customers, clientCredentials } from "@/data/customers";

export function Customers() {
  return (
    <section
      id="customers"
      className="relative border-y border-line bg-cloud py-20 sm:py-24"
    >
      <div className="container-x">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Global OEM Clients &amp; Industry Associations</Eyebrow>
          </Reveal>
          <Reveal delay={0.08} className="mt-3">
            <h2 className="text-h2 text-ink">
              Trusted by global flow-control &amp; renewable energy leaders
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="mt-4 text-lead text-ink-soft">
            Delivering high-integrity machined metal components for mission-critical
            valves, severe-service piping networks, and utility wind drivetrains.
          </Reveal>
        </div>

        {/* Credibility & Trust Statements: 25 Years Association + 15 Years Partnership Certificate */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* 25 Years of Association with Flowserve */}
          <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-white p-8 shadow-sm transition-all hover:border-cyan/40 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/10 blur-2xl" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-cyan ring-1 ring-white/15">
                    <Factory className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-deep">
                    1999 – Present
                  </span>
                </div>

                <div className="mt-6">
                  <div className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                    25 YEARS
                  </div>
                  <div className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-cyan-deep sm:text-2xl">
                    OF ASSOCIATION WITH FLOWSERVE
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {clientCredentials.flowserveAssociation.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-5 text-xs text-steel">
                <span className="inline-flex items-center gap-1 font-medium text-ink">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-deep" />
                  Severe-Service Valve Trims
                </span>
                <span className="text-line">•</span>
                <span className="inline-flex items-center gap-1 font-medium text-ink">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-deep" />
                  Nordstrom Plug &amp; Gate Components
                </span>
              </div>
            </div>
          </Reveal>

          {/* 15 Years Partnership Certificate */}
          <Reveal delay={0.1} className="relative overflow-hidden rounded-2xl border border-line bg-navy p-8 text-white shadow-sm sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-magenta/15 blur-2xl" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-bright ring-1 ring-white/20">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-bright">
                    Verified Credential
                  </span>
                </div>

                <div className="mt-6">
                  <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    15 YEARS
                  </div>
                  <div className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-cyan-bright sm:text-2xl">
                    PARTNERSHIP CERTIFICATE
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-mist/75">
                  {clientCredentials.partnershipCertificate.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5 text-xs text-mist/60">
                <span className="inline-flex items-center gap-1 font-medium text-white">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan" />
                  100% Quality Conformance
                </span>
                <span className="text-white/20">•</span>
                <span className="inline-flex items-center gap-1 font-medium text-white">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan" />
                  ISO 9001:2015 Manufacturing System
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Prominent Full OEM Client Corporate Names Showcase */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-steel">
                Verified Original Equipment Manufacturers
              </h3>
              <span className="text-xs font-mono text-steel">
                5 Major OEM Partners
              </span>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customers.map((c, i) => (
              <Reveal
                key={c.fullName}
                delay={i * 0.06}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-lg"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-deep">
                    {c.sector}
                  </span>
                  {/* Full legal company name is primary display */}
                  <h4 className="mt-2.5 font-display text-lg font-bold tracking-tight text-ink group-hover:text-cyan-deep transition-colors">
                    {c.fullName}
                  </h4>
                  <p className="mt-2 text-xs text-steel">
                    {c.location}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium text-ink-soft">
                  <span>{c.relationship}</span>
                  <span className="h-2 w-2 rounded-full bg-cyan transition-transform group-hover:scale-125" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Marquee of Full OEM Names */}
      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-cloud to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-cloud to-transparent" />

        <Marquee>
          {customers.map((c) => (
            <div
              key={`marquee-${c.fullName}`}
              className="flex items-center gap-3 rounded-full border border-line bg-white px-6 py-2.5 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-deep" />
              <span className="font-display text-sm font-semibold tracking-tight text-ink">
                {c.fullName}
              </span>
              <span className="text-xs text-steel">({c.location})</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
