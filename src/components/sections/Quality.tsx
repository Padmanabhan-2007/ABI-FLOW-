import { BadgeCheck, RefreshCcw, Users, HeartHandshake, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

const principles = [
  { label: "Customer Satisfaction", icon: HeartHandshake },
  { label: "Continuous Improvement", icon: RefreshCcw },
  { label: "Total Participation", icon: Users },
];

export function Quality() {
  return (
    <Section id="quality" tone="white" className="relative">
      {/* Subtle Metrology Grid Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-25" />

      <div className="relative z-10 grid gap-x-12 gap-y-12 lg:grid-cols-12">
        {/* credential column */}
        <div className="lg:col-span-5">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Quality &amp; Certifications</Eyebrow>
            <h2 className="text-h2 text-ink">Quality is built into every cut</h2>
            <p className="text-lead text-ink-soft">
              Our management system is certified to ISO 9001:2015 by TÜV NORD,
              covering the manufacture and supply of machined metal components.
            </p>

            <div className="mt-2 flex items-center gap-4 rounded-2xl border border-line bg-light px-6 py-5 shadow-xs transition-all duration-300 hover:border-cyan/40 hover:shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-cyan">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-ink">
                  ISO 9001:2015
                </p>
                <p className="text-sm text-steel">Certified by TÜV NORD</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* pull-quote + principles */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-navy p-9 text-white shadow-xl sm:p-11">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan/15 blur-2xl" />
            <Quote
              className="absolute right-8 top-8 h-16 w-16 text-white/5"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="text-eyebrow text-cyan-bright">Our Quality Policy</p>
              <blockquote className="mt-5 font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                “Committed to satisfy our customers through effective
                implementation of the Quality Management System, continual
                improvement, resource management, and compliance with statutory
                and regulatory requirements.”
              </blockquote>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.label}
                  delay={i * 0.08}
                  className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-xs transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan-deep transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {p.label}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
