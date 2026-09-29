"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MADE_IN_INDIA_CARDS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export function MadeInIndia() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#050816] via-[#091024] to-[#050816]">
      {/* Background ambient lighting in Electric Green → Cyan */}
      <div className="pointer-events-none absolute top-1/2 -left-48 h-[400px] w-[400px] rounded-full bg-[#00E676]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[350px] w-[350px] rounded-full bg-[#22D3EE]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Indigenous Excellence"
          title="Proudly Built for"
          titleHighlight="India"
          subtitle="Engineered from the ground up for Indian roads, weather, and driving cycles — setting a new benchmark for dependability, range, and connected intelligence."
        />

        {/* 4 Glassmorphism Feature Cards Grid with Dark Navy → Black and Electric Green → Cyan */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MADE_IN_INDIA_CARDS.map((card) => (
            <motion.div key={card.id} variants={itemVariants}>
              <GlassCard
                variant="gradient-border"
                className="h-full p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#0F172A] via-[#0a1126] to-[#050816] shadow-xl hover:shadow-[0_20px_45px_-10px_rgba(0,230,118,0.25)]"
              >
                <div>
                  {/* Card Icon & Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl select-none" role="img" aria-label={card.title}>
                      {card.icon}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00E676]">
                      <ShieldCheck className="h-3 w-3" />
                      {card.highlight}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="font-mono text-xs text-[#22D3EE] mt-0.5 mb-3 uppercase tracking-wider font-semibold">
                    {card.subtitle}
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom edge indicator with Electric Green */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted/60">
                  <span>AERRO ADVANTAGE</span>
                  <span className="text-[#00E676] font-bold">0{MADE_IN_INDIA_CARDS.indexOf(card) + 1}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
