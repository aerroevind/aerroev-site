import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { MouseEvent } from "react";

type LogoProps = {
  className?: string;
  variant?: "wordmark" | "compact";
  size?: "nav" | "hero" | "footer";
  priority?: boolean;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const wordmarkDimensions = {
  nav: {
    width: 200,
    height: 48,
    className: "h-8 sm:h-9 w-auto object-contain",
  },
  hero: {
    width: 380,
    height: 86,
    className: "h-12 sm:h-16 md:h-20 w-auto object-contain",
  },
  footer: {
    width: 240,
    height: 54,
    className: "h-9 sm:h-11 w-auto object-contain",
  },
} as const;

/**
 * Official AERRO branding using repository assets:
 * - Wordmark: `/brand/logo.jpeg`
 * - Compact mark: `/favicon.jpeg`
 */
export function Logo({
  className,
  variant = "wordmark",
  size = "nav",
  priority = false,
  href = "#home",
  onClick,
}: LogoProps) {
  if (variant === "compact") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
          className
        )}
        aria-label="AERRO EV Home"
      >
        <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-secondary/80 p-1.5 shadow-[0_0_20px_rgba(57,255,20,0.25)] transition-transform group-hover:scale-105 group-hover:border-[#39FF14]/50 group-hover:shadow-[0_0_25px_rgba(57,255,20,0.45)]">
          <Image
            src={SITE.favicon}
            alt="AERRO emblem"
            width={40}
            height={40}
            priority={priority}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-display text-xl sm:text-2xl font-black italic tracking-[0.14em] text-foreground transition-colors group-hover:text-[#39FF14]">
            AERRO
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#22D3EE] -mt-1">
            EV MOBILITY
          </span>
        </div>
      </Link>
    );
  }

  const dims = wordmarkDimensions[size];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-95",
        className
      )}
      aria-label="AERRO EV — Electrify the Future"
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={SITE.logo}
          alt="AERRO — India's Next Generation Electric Mobility"
          width={dims.width}
          height={dims.height}
          priority={priority}
          className={cn(
            "mix-blend-screen transition-transform hover:scale-[1.02]",
            dims.className
          )}
        />
      </div>
    </Link>
  );
}
