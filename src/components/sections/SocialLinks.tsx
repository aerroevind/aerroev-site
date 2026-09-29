"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function SocialLinks() {
  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return <InstagramIcon className="h-6 w-6 text-pink-400" />;
      case "facebook":
        return <FacebookIcon className="h-6 w-6 text-[#22D3EE]" />;
      case "linkedin":
        return <LinkedinIcon className="h-6 w-6 text-[#00E676]" />;
      case "youtube":
        return <YoutubeIcon className="h-6 w-6 text-red-400" />;
      default:
        return <InstagramIcon className="h-6 w-6 text-[#00E676]" />;
    }
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#050816] via-[#091024] to-[#040612] border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Community & Updates"
          title="Join the"
          titleHighlight="AERRO Movement"
          subtitle="Follow our journey on social media for exclusive factory updates, vehicle road tests, and sustainable mobility insights."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOCIAL_LINKS.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full focus:outline-none"
              >
                <GlassCard
                  variant="gradient-border"
                  className="h-full p-6 bg-gradient-to-b from-[#0F172A] via-[#0b1228] to-[#050816] transition-all duration-300 group-hover:scale-[1.02] shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00E676]/40 group-hover:bg-[#00E676]/10 transition-colors">
                      {renderSocialIcon(link.name)}
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted group-hover:bg-gradient-to-r group-hover:from-[#00E676] group-hover:to-[#22D3EE] group-hover:text-[#050816] transition-all">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-[#00E676] transition-colors">
                    {link.name}
                  </h3>
                  <p className="font-mono text-xs text-[#22D3EE] mt-0.5 font-semibold">
                    {link.handle}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    Official announcements, design reels & stories.
                  </p>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
