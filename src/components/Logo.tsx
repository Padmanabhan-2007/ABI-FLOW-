type LogoProps = {
  className?: string;
  light?: boolean;
};

/**
 * Recreated "AF flow" wordmark as inline SVG — a stylised flow swoosh over the
 * monogram, echoing the ABI Flow brand mark. TODO: replace with the official
 * vector logo file when supplied.
 */
export function Logo({ className, light = false }: LogoProps) {
  const text = light ? "#ffffff" : "#0a1a2f";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M2 18C8 8 14 4 22 5c6 .8 10 4 16 1"
          stroke="#16b5e0"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M5 23C11 14 17 11 24 12c5 .7 8 3 11 1.5"
          stroke="#38d0f5"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M9 27l6-13 5 13M11.4 22.5h6.4"
          stroke={text}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 27V14h8M25 21h6"
          stroke={text}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-base font-bold tracking-tight"
          style={{ color: text }}
        >
          ABI FLOW
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan">
          Products
        </span>
      </span>
    </span>
  );
}
