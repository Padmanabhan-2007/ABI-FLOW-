import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Parallax } from "@/components/ui/Parallax";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <Section tone="navy" className="overflow-hidden">
      <Parallax
        distance={200}
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3"
      >
        <div className="h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      </Parallax>
      <div className="relative grid gap-x-10 gap-y-12 lg:grid-cols-12">
        {/* Sticky heading */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Industries We Supply"
              title="Built for the world's most demanding sectors"
              description="Where reliability is non-negotiable, our machined components hold the line across global energy and fluid networks."
              light
            />
          </div>
        </div>

        {/* Index list */}
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="flex flex-col">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal
                  as="li"
                  key={ind.name}
                  delay={i * 0.06}
                  className="border-t border-white/10 first:border-t-0"
                >
                  <a
                    href={ind.link}
                    className="group flex items-center gap-5 py-6 transition-all hover:bg-white/[0.04] sm:gap-7 rounded-xl px-2 -mx-2"
                  >
                    <span className="font-mono text-sm text-cyan-bright/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-bright ring-1 ring-white/10 transition-colors group-hover:bg-cyan/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-bright transition-colors">
                          {ind.name}
                        </h3>
                        <span className="hidden sm:inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-mist/70">
                          {ind.vertical}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-mist/65 line-clamp-2">
                        {ind.blurb}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
