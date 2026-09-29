"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-3 sm:space-y-4",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn("inline-flex items-center gap-2", isCenter && "justify-center")}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/30 bg-gradient-to-r from-[#00E676]/15 via-[#22D3EE]/10 to-[#00E676]/15 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00E676] shadow-[0_0_15px_rgba(0,230,118,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E676] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E676]" />
            </span>
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance"
      >
        {title}{" "}
        {titleHighlight && (
          <span className="bg-gradient-to-r from-[#00E676] via-[#10ec87] to-[#22D3EE] bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-muted text-balance max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
