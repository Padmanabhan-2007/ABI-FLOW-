type EyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, light = false, className = "" }: EyebrowProps) {
  return (
    <span
      className={`text-eyebrow inline-flex items-center gap-2.5 ${
        light ? "text-cyan-bright" : "text-cyan-deep"
      } ${className}`}
    >
      <span className="h-px w-7 bg-magenta" aria-hidden />
      {children}
    </span>
  );
}
