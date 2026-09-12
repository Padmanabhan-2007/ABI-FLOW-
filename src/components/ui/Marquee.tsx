import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Infinite horizontal scroller. The content is duplicated and the track is
 * translated -50% via CSS, producing a seamless loop. Pauses on hover and
 * disables under reduced-motion (handled in globals.css).
 */
export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div
      className={`marquee-paused relative flex overflow-hidden ${className ?? ""}`}
    >
      <div className="animate-marquee flex shrink-0 items-center gap-6 pr-6">
        {children}
      </div>
      <div
        className="animate-marquee flex shrink-0 items-center gap-6 pr-6"
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
