"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Magnetic } from "@/components/ui/Magnetic";

const links = [
  { label: "About", href: "#about" },
  { label: "Customers", href: "#customers" },
  { label: "Products", href: "#products" },
  { label: "Facility", href: "#facility" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`motion-safe:animate-[nav-drop_0.6s_cubic-bezier(0.22,1,0.36,1)] border-b transition-colors duration-300 ${
          scrolled
            ? "border-line/80 bg-white/85 backdrop-blur-xl"
            : "border-transparent bg-white/0"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-x flex h-16 items-center justify-between"
        >
          <a
            href="#top"
            aria-label="ABI Flow Products — home"
            className="rounded-lg"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <Magnetic className="hidden md:inline-flex">
            <a
              href="#contact"
              className="inline-flex h-10 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
            >
              Get a Quote
            </a>
          </Magnetic>

          <button
            type="button"
            className="-mr-2 rounded-lg p-2 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {/* scroll progress bar */}
        <motion.div
          className="h-0.5 origin-left bg-gradient-to-r from-cyan via-cyan to-magenta"
          style={{ scaleX: progress }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-light hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-navy px-3 py-3 text-center text-sm font-semibold text-white"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
