"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Robust scroll-reveal using the native IntersectionObserver.
 *
 * Why not framer-motion's `whileInView`? In this Next 16 / React 19 / Turbopack
 * setup it could leave SSR content stuck at opacity:0 if the observer never
 * fired. This hook is self-contained and fails OPEN:
 *   - no IntersectionObserver support -> show immediately
 *   - a safety timer reveals everything after `fallbackMs` no matter what
 * so content can never be permanently invisible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; fallbackMs?: number }
) {
  const { threshold = 0.15, fallbackMs = 900 } = options ?? {};
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    if (typeof IntersectionObserver === "undefined") {
      // Fail open: no observer support -> show immediately (intentional).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Safety net: reveal regardless after a short delay.
    const timer = window.setTimeout(() => setShown(true), fallbackMs);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [shown, threshold, fallbackMs]);

  return { ref, shown };
}
