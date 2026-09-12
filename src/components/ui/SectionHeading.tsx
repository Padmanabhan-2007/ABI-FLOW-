import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-5 ${
        isCenter ? "mx-auto items-center text-center" : "items-start"
      } ${className}`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`text-h2 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && (
        <p
          className={`text-lead max-w-xl ${
            light ? "text-mist/85" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
