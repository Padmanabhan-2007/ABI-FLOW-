import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type Ratio = "square" | "video" | "photo" | "portrait" | "wide";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  photo: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

type MediaProps = {
  /** real image path (under /public). Omit to render the editorial placeholder. */
  src?: string;
  alt: string;
  ratio?: Ratio;
  /** caption shown in the placeholder + as a corner tag when an image is set */
  label?: string;
  icon?: LucideIcon;
  tone?: "steel" | "navy";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Premium image frame: fixed aspect ratio, rounded mask, subtle ring + overlay,
 * lazy-loaded next/image. When no `src` is supplied it renders a tasteful
 * editorial placeholder (gradient + blueprint grid + icon + label) so the
 * layout is fully designed before real photography arrives.
 *
 * Drop real photos into /public and pass `src` — nothing else changes.
 */
export function Media({
  src,
  alt,
  ratio = "photo",
  label,
  icon: Icon,
  tone = "steel",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: MediaProps) {
  const toneBg =
    tone === "navy"
      ? "bg-gradient-to-br from-navy-600 to-navy"
      : "bg-gradient-to-br from-cloud to-mist";
  const toneFg = tone === "navy" ? "text-cyan-bright" : "text-cyan-deep";
  const toneLabel = tone === "navy" ? "text-mist/70" : "text-steel";

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-line/80 ${ratioClass[ratio]} ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
          {label && (
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-navy/55 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur">
              {label}
            </figcaption>
          )}
        </>
      ) : (
        // Editorial placeholder (no real image yet)
        <div className={`absolute inset-0 ${toneBg}`} role="img" aria-label={alt}>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              color:
                tone === "navy" ? "rgba(255,255,255,0.06)" : "rgba(10,26,47,0.06)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            {Icon && (
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  tone === "navy" ? "bg-white/10" : "bg-white/70"
                } ${toneFg} ring-1 ring-current/10`}
              >
                <Icon className="h-6 w-6" />
              </span>
            )}
            {label && (
              <span className={`text-eyebrow ${toneLabel}`}>{label}</span>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
