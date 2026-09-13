import Image from "next/image";

type LogoProps = {
  className?: string;
  light?: boolean;
};

/**
 * Official ABI Flow Products (P) Ltd Logo.
 * Displays the authentic brand mark: AF fluid flow curves and ABI FLOW wordmark with gear symbol.
 */
export function Logo({ className = "", light = false }: LogoProps) {
  if (light) {
    return (
      <span
        className={`inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-xs transition-opacity hover:opacity-95 ${className}`}
      >
        <Image
          src="/images/abi-flow-logo.png"
          alt="ABI Flow Products (P) Ltd"
          width={152}
          height={108}
          className="h-10 w-auto object-contain sm:h-11"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center transition-opacity hover:opacity-95 ${className}`}
    >
      <Image
        src="/images/abi-flow-logo.png"
        alt="ABI Flow Products (P) Ltd"
        width={152}
        height={108}
        className="h-10 w-auto object-contain sm:h-11"
        priority
      />
    </span>
  );
}
