"use client";

import React, { useCallback, useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

type ConfigKey =
  | "startWidth"
  | "startHeight"
  | "startRadius"
  | "endRadius"
  | "mediaZoom"
  | "scrollDistance"
  | "holdDistance"
  | "smoothing"
  | "overlayScrim"
  | "useWindowScroll"
  | "enabled";

export interface ScrollExpandProps {
  src?: string;
  mediaType?: "image" | "video";
  poster?: string;
  alt?: string;
  title?: string;
  scrollHint?: string;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
  useWindowScroll?: boolean;
  enabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

export function ScrollExpand({
  src = "",
  mediaType = "image",
  poster = "",
  alt = "",
  title = "",
  scrollHint = "SCROLL TO EXPLORE",
  startWidth = 56,
  startHeight = 64,
  startRadius = 28,
  endRadius = 0,
  mediaZoom = 1.22,
  scrollDistance = 0.7,
  holdDistance = 0.06,
  smoothing = 0.07,
  overlayScrim = 0.55,
  useWindowScroll = true,
  enabled = true,
  children,
  className = "",
  style,
  ...rest
}: ScrollExpandProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement & HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const propsRef = useRef<Required<Pick<ScrollExpandProps, ConfigKey>>>(
    {} as Required<Pick<ScrollExpandProps, ConfigKey>>
  );
  propsRef.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled,
  };

  const applyProgress = useCallback((p: number) => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;
    const c = propsRef.current;

    const e = smoothstep(0, 1, p);

    // Dynamic width/height on mobile vs desktop
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const activeStartWidth = isMobile ? Math.max(c.startWidth, 84) : c.startWidth;
    const activeStartHeight = isMobile ? Math.max(c.startHeight, 52) : c.startHeight;

    const w = activeStartWidth + (100 - activeStartWidth) * e;
    const h = activeStartHeight + (100 - activeStartHeight) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = c.startRadius + (c.endRadius - c.startRadius) * e;
    frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    const currentZoom = c.mediaZoom + (1 - c.mediaZoom) * e;
    media.style.transform = `scale(${currentZoom})`;

    if (scrimRef.current) {
      scrimRef.current.style.opacity = `${c.overlayScrim * e}`;
    }

    if (titleRef.current) {
      const out = smoothstep(0.3, 0.82, p);
      titleRef.current.style.opacity = `${1 - out}`;
      titleRef.current.style.transform = `translate3d(0, ${-32 * out}px, 0) scale(${1 + 0.05 * out})`;
    }

    if (hintRef.current) {
      const gone = smoothstep(0, 0.15, p);
      hintRef.current.style.opacity = `${1 - gone}`;
      hintRef.current.style.transform = `translate3d(0, ${10 * gone}px, 0)`;
    }

    if (overlayRef.current) {
      const inn = smoothstep(0.65, 1, p);
      overlayRef.current.style.opacity = `${inn}`;
      overlayRef.current.style.transform = `translate3d(0, ${22 * (1 - inn)}px, 0)`;
      overlayRef.current.style.pointerEvents = inn > 0.85 ? "auto" : "none";
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!root || !track || !stage) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let current = 0;
    let target = 0;
    let stageH = 0;
    let running = false;

    const measure = () => {
      const c = propsRef.current;
      const isMobile = window.innerWidth < 768;
      stageH = c.useWindowScroll ? window.innerHeight : root.clientHeight;
      if (stageH <= 0) return;

      stage.style.height = `${stageH}px`;
      
      // Adapt scroll distance on mobile and reduced motion
      const activeDistance = reduceMotion
        ? 0.2
        : isMobile
        ? c.scrollDistance * 0.75
        : c.scrollDistance;
      const activeHold = reduceMotion
        ? 0
        : isMobile
        ? c.holdDistance * 0.75
        : c.holdDistance;
      track.style.height = `${stageH * (1 + Math.max(0, activeDistance) + Math.max(0, activeHold))}px`;

      const w = root.clientWidth || stageH;
      stage.style.setProperty("--se-title-size", `${clamp(w * 0.065, 24, 76)}px`);
    };

    const readProgress = () => {
      const c = propsRef.current;
      if (!c.enabled) return 1;
      const isMobile = window.innerWidth < 768;
      const activeDistance = reduceMotion
        ? 0.2
        : isMobile
        ? c.scrollDistance * 0.75
        : c.scrollDistance;
      const span = stageH * Math.max(0.01, activeDistance);

      if (c.useWindowScroll) {
        const top = track.getBoundingClientRect().top;
        return clamp(-top / span, 0, 1);
      }
      return clamp(root.scrollTop / span, 0, 1);
    };

    const tick = () => {
      const c = propsRef.current;
      const k = c.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * c.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      applyProgress(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (propsRef.current.smoothing <= 0 || reduceMotion) {
        current = target;
        applyProgress(current);
        return;
      }
      kick();
    };

    const onResize = () => {
      measure();
      target = readProgress();
      current = target;
      applyProgress(current);
    };

    measure();
    target = readProgress();
    current = target;
    applyProgress(current);

    const scroller = useWindowScroll ? window : root;
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(root);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [applyProgress, useWindowScroll]);

  // Initial SSR-safe clip-path calculation
  const initialIx = Math.max(0, (100 - startWidth) / 2);
  const initialIy = Math.max(0, (100 - startHeight) / 2);
  const initialClipPath = `inset(${initialIy}% ${initialIx}% ${initialIy}% ${initialIx}% round ${startRadius}px)`;

  const media =
    mediaType === "video" ? (
      <video
        ref={mediaRef}
        className="absolute inset-0 w-full h-full object-cover origin-center select-none [will-change:transform]"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img
        ref={mediaRef}
        className="absolute inset-0 w-full h-full object-cover origin-center select-none [will-change:transform]"
        src={src}
        alt={alt}
        draggable={false}
        loading="eager"
        decoding="async"
      />
    );

  return (
    <div
      ref={rootRef}
      className={`relative w-full ${useWindowScroll ? "" : "overflow-y-auto overflow-x-hidden overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"} ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div ref={trackRef} className="relative w-full">
        <div ref={stageRef} className="sticky top-0 w-full overflow-hidden [--se-title-size:4rem]">
          {/* Expanding Media Frame */}
          <div
            ref={frameRef}
            style={{ clipPath: initialClipPath }}
            className="absolute inset-0 shadow-2xl [will-change:clip-path]"
          >
            {media}

            {/* Industrial Scrim with Navy Undertones */}
            <div
              ref={scrimRef}
              className="absolute inset-0 opacity-0 pointer-events-none bg-gradient-to-t from-[#0a1a2f]/95 via-[#0a1a2f]/50 to-[#0a1a2f]/25"
            />

            {/* Full-Bleed Overlay Content (Reveals after expansion) */}
            {children ? (
              <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-[6%] opacity-0 pointer-events-none [will-change:opacity,transform]"
              >
                {children}
              </div>
            ) : null}
          </div>

          {/* Resting Title over Contained Media */}
          {title ? (
            <div
              ref={titleRef}
              className="absolute inset-0 flex items-center justify-center m-0 px-[6%] text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:var(--se-title-size)] [text-shadow:0_4px_30px_rgba(0,0,0,0.7)] pointer-events-none [will-change:opacity,transform]"
            >
              {title}
            </div>
          ) : null}

          {/* Scroll Cue Hint */}
          {scrollHint ? (
            <div
              ref={hintRef}
              className="absolute inset-x-0 bottom-7 flex flex-col items-center justify-center gap-1.5 text-center text-[0.75rem] font-mono font-medium tracking-[0.2em] text-white/75 uppercase pointer-events-none [will-change:opacity,transform]"
            >
              <span>{scrollHint}</span>
              <div className="h-4 w-0.5 animate-pulse bg-cyan-bright" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ScrollExpand;
