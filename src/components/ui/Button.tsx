import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color] duration-200 will-change-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-navy hover:bg-cyan-bright shadow-[0_8px_24px_-10px_rgba(22,181,224,0.7)]",
  secondary: "bg-navy text-white hover:bg-navy-600",
  ghost: "text-ink hover:text-cyan-deep",
  "outline-light":
    "border border-white/20 text-white hover:bg-white/10 hover:border-white/35 backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  external?: boolean;
  magnetic?: boolean;
  className?: string;
};

/** Single source of truth for CTAs — consistent shape, weight, motion. */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  external = false,
  magnetic = false,
  className = "",
}: ButtonProps) {
  const link = (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );

  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
