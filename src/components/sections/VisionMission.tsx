import { Lightbulb, Target, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const vision = [
  "Trend-setting innovation in process and technology",
  "High-performance products without quality compromise",
  "Outstanding service to every customer",
];

const mission = [
  "Deliver quality products at the right price",
  "Retain our customers",
  "Retain our employees",
  "Relentless process innovation",
];

export function VisionMission() {
  return (
    <Section tone="cloud">
      <div className="grid gap-5 lg:grid-cols-12">
        {/* Vision — featured dark panel */}
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-navy p-9 text-white sm:p-11 lg:col-span-7">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 text-cyan-bright ring-1 ring-white/10">
              <Lightbulb className="h-6 w-6" />
            </span>
            <p className="mt-6 text-eyebrow text-cyan-bright">
              Perfection is our passion
            </p>
            <h3 className="mt-2 text-h3 text-white">Our Vision</h3>
            <ul className="mt-7 space-y-3.5">
              {vision.map((v) => (
                <li key={v} className="flex items-start gap-3 text-mist/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  <span className="text-lead">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Mission — light panel */}
        <Reveal
          delay={0.1}
          className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-9 sm:p-11 lg:col-span-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
            <Target className="h-6 w-6" />
          </span>
          <p className="mt-6 text-eyebrow text-magenta">What drives us</p>
          <h3 className="mt-2 text-h3 text-ink">Our Mission</h3>
          <ul className="mt-7 space-y-3.5">
            {mission.map((m) => (
              <li key={m} className="flex items-start gap-3 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
