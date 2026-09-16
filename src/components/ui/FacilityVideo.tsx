"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";

interface FacilityVideoProps {
  videoId?: string;
  title?: string;
  label?: string;
  className?: string;
}

export function FacilityVideo({
  videoId = "P_LOWSv3X5A",
  title = "ABI Flow manufacturing facility video",
  label = "ABI Flow — Ambattur, Chennai",
  className = "",
}: FacilityVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Standard privacy-enhanced YouTube embed URL configured for background loop
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1&rel=0&modestbranding=1`;

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-line/80 shadow-md aspect-video bg-navy ${className}`.trim()}
      aria-label={title}
    >
      {/* Background Poster / Fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy" aria-hidden="true">
        {/* Blueprint Grid Texture */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            color: "rgba(255,255,255,0.06)",
          }}
        />

        {/* High-Resolution Video Poster Fallback */}
        <Image
          src={posterUrl}
          alt="ABI Flow manufacturing facility"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={`object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          priority={false}
          unoptimized
        />

        {/* Loading / Fallback Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-bright ring-1 ring-white/15 backdrop-blur-sm">
              <Building2 className="h-6 w-6" />
            </span>
          </div>
        )}
      </div>

      {/* Official YouTube Embed */}
      <iframe
        src={embedUrl}
        title={title}
        className={`absolute inset-0 h-full w-full border-0 object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Subtle Cinematic Vignette Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent z-[1]"
        aria-hidden="true"
      />

      {/* Caption Tag (Exact Match to ABI Flow Design System) */}
      {label && (
        <figcaption className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full bg-navy/75 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur border border-white/10 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-bright animate-pulse" />
          {label}
        </figcaption>
      )}
    </figure>
  );
}

export default FacilityVideo;
