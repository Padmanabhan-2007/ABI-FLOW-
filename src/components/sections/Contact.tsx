import { MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Facility", href: "#facility" },
  { label: "Quality", href: "#quality" },
];

const contactRows = [
  {
    icon: MapPin,
    label: "Address",
    value: "NP-64/2, 9th Street, Sidco, Ambattur Industrial Estate, Chennai – 600098, Tamil Nadu, India",
    href: "https://maps.google.com/?q=Ambattur+Industrial+Estate+Chennai+600098",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "afppur@gmail.com",
    href: "mailto:afppur@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-98409 99101",
    href: "tel:+919840999101",
    external: false,
  },
];

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      <div className="h-1 w-full bg-gradient-to-r from-cyan via-magenta to-lime" />

      <Parallax
        distance={180}
        aria-hidden
        className="pointer-events-none absolute right-0 top-20"
      >
        <div className="h-80 w-80 rounded-full bg-cyan/10 blur-[130px]" />
      </Parallax>

      {/* CTA band */}
      <div className="container-x section-y relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-bright mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              FAST-TRACK RFQ &amp; TECHNICAL COLLABORATION
            </div>
            <h2 className="mt-3 text-h2 text-white">
              Let&apos;s machine your next
              <br className="hidden sm:block" /> critical component.
            </h2>
            <p className="mt-4 max-w-xl text-lead text-mist/70">
              Send us your CAD drawings (STEP, IGES, DXF) and engineering requirements — our tooling engineers respond with comprehensive DFM review and technical quotation.
            </p>

            {/* Stitch OEM Assurance Badges */}
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-mist/80">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Strict NDA Assurance
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-mist/80">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim" /> 48-Hr DFM Turnaround
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-mist/80">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Direct Tooling Support
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
            <Button href="mailto:afppur@gmail.com" variant="primary" size="lg" withArrow magnetic>
              Request a Quote
            </Button>
            <Button href="tel:+919840999101" variant="outline-light" size="lg" magnetic>
              Call Us
            </Button>
          </Reveal>
        </div>

        <div className="my-14 h-px w-full bg-white/10" />

        {/* footer columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist/60">
              Precision component manufacturer for Oil &amp; Gas and Renewable
              Energy. ISO 9001:2015 certified · Made in India.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h3 className="text-eyebrow text-cyan-bright">Explore</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-mist/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic lg:col-span-4">
            <h3 className="text-eyebrow text-cyan-bright">Contact</h3>
            <ul className="mt-5 space-y-4">
              {contactRows.map((row) => {
                const Icon = row.icon;
                return (
                  <li key={row.label} className="flex gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noreferrer" : undefined}
                      className="text-sm leading-relaxed text-mist/70 transition-colors hover:text-white"
                    >
                      {row.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-mist/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ABI Flow Products Pvt. Ltd.</p>
          <p>Designed &amp; engineered in Chennai, India.</p>
        </div>
      </div>
    </footer>
  );
}
