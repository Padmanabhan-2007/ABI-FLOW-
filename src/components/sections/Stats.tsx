import { Building2 } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";

const stats = [
  { value: 44, suffix: "", label: "Years of experience", note: "Manufacturing since 1980" },
  { value: 100, suffix: "%", label: "Inspected & tested", note: "To international standards, pre-dispatch" },
  { value: 24, suffix: "K", label: "Sq.ft facility", note: "Multi-axis CNC & in-house metrology" },
  { value: 5, suffix: "+", label: "Global OEM clients", note: "Across Oil & Gas and renewables" },
];

export function Stats() {
  return (
    <Section id="about" tone="white">
      <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
        {/* statement */}
        <div className="lg:col-span-5">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>About ABI Flow</Eyebrow>
            <h2 className="text-h2 text-ink">
              Four decades of machining the parts others can&apos;t.
            </h2>
            <p className="text-lead text-ink-soft">
              An ISO 9001:2015 company serving domestic and international
              business — delivering high-quality machined metal components at a
              competitive price, inspected at every stage and tested 100% before
              dispatch.
            </p>
            <div className="pt-2">
              <Button href="#facility" variant="ghost" withArrow magnetic>
                See our facility
              </Button>
            </div>
            <Media
              ratio="photo"
              icon={Building2}
              label="ABI Flow — Ambattur, Chennai"
              tone="navy"
              alt="ABI Flow Products manufacturing facility in Chennai"
              className="mt-4"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>

        {/* stat rows */}
        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="flex flex-col">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={`flex items-baseline justify-between gap-6 py-7 ${
                  i !== 0 ? "border-t border-line" : ""
                }`}
              >
                <div>
                  <dt className="text-base font-semibold text-ink">{s.label}</dt>
                  <dd className="mt-1 text-sm text-steel">{s.note}</dd>
                </div>
                <span className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </span>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
