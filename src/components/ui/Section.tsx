import type { ReactNode } from "react";

type Tone = "light" | "cloud" | "white" | "navy";

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-ink",
  light: "bg-light text-ink",
  cloud: "bg-cloud text-ink",
  navy: "bg-navy text-white",
};

type SectionProps = {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
  /** wrap children in the standard max-width container */
  container?: boolean;
  /** render as <footer> instead of <section> */
  as?: "section" | "footer";
};

/**
 * Consistent section shell — owns vertical rhythm (section-y) and surface tone
 * so spacing/colour stay uniform across the whole page.
 */
export function Section({
  id,
  children,
  tone = "white",
  className = "",
  container = true,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`section-y relative ${toneClasses[tone]} ${className}`}
    >
      {container ? <div className="container-x">{children}</div> : children}
    </Tag>
  );
}
