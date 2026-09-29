"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Sparkles, Handshake } from "lucide-react";

export function Hero({ onOpenDealerModal }: { onOpenDealerModal?: () => void }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-10 sm:pt-36 sm:pb-12 overflow-hidden flex flex-col items-center bg-gradient-to-b from-[#0F172A] via-[#080e22] to-[#050816]"
    >
      {/* Background layer 1: Aerospace technical grid */}
      <div className="aerospace-grid absolute inset-0 pointer-events-none opacity-60" />

      {/* Background layer 2: Ambient neon light streaks in Electric Green → Cyan */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-streak absolute -top-1/4 left-0 h-[2.5px] w-[550px] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-60 blur-[1px]" />
        <div
          className="animate-streak absolute top-1/2 -left-20 h-[2px] w-[750px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-60 blur-[1px]"
          style={{ animationDelay: "2s" }}
        />

        {/* Ambient radial energy glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-b from-[#39FF14]/15 via-[#22D3EE]/10 to-transparent blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[380px] w-[450px] rounded-full bg-[#22D3EE]/10 blur-[110px]" />
      </div>

      {/* Floating electric particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { top: "18%", left: "15%", delay: 0 },
          { top: "32%", left: "82%", delay: 1.2 },
          { top: "62%", left: "12%", delay: 2.4 },
          { top: "78%", left: "86%", delay: 0.8 },
          { top: "42%", left: "50%", delay: 3.1 },
        ].map((p, idx) => (
          <span
            key={idx}
            className="animate-particle absolute h-1.5 w-1.5 rounded-full bg-[#39FF14] opacity-80 shadow-[0_0_12px_#39FF14]"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge with #39FF14 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-gradient-to-r from-[#39FF14]/15 via-[#22D3EE]/15 to-[#39FF14]/15 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.25)] mb-6 sm:mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#39FF14]" />
          <span>India&apos;s Next Generation EV Lineup</span>
        </motion.div>

        {/* Official AERRO Wordmark Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <Logo variant="wordmark" size="hero" priority href="#home" />
        </motion.div>

        {/* Main Headline with Electric Green → Cyan Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground text-balance max-w-4xl"
        >
          India&apos;s Next Generation{" "}
          <span className="bg-gradient-to-r from-[#39FF14] via-[#00f782] to-[#22D3EE] bg-clip-text text-transparent">
            Electric Mobility
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-muted font-light tracking-wide max-w-2xl text-balance"
        >
          Smart. Sustainable. Designed for Tomorrow.
        </motion.p>

        {/* Hero Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => scrollToSection("models")}
            icon={<ArrowUpRight className="h-4 w-4" />}
            className="w-full sm:w-auto"
          >
            Explore Current Models
          </Button>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              if (onOpenDealerModal) {
                onOpenDealerModal();
              } else {
                scrollToSection("dealership");
              }
            }}
            icon={<Handshake className="h-4 w-4 text-[#39FF14]" />}
            className="w-full sm:w-auto"
          >
            Become a Dealer
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
