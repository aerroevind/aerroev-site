"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT, SITE } from "@/lib/constants";
import { MessageCircle, X } from "lucide-react";

const QUICK_REPLIES = [
  {
    label: "Explore Models",
    message: "Hi, I'd like to know more about AERRO EV scooter models.",
  },
  {
    label: "Book a Test Ride",
    message: "Hi, I want to book a test ride for an AERRO EV scooter.",
  },
  {
    label: "Dealership Enquiry",
    message: "Hi, I'm interested in becoming an AERRO EV dealer.",
  },
  {
    label: "General Support",
    message: "Hi, I need help with AERRO EV.",
  },
] as const;

function buildWhatsAppUrl(message: string) {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

export function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 320 }}
            className="w-[min(100vw-2.5rem,22rem)] overflow-hidden rounded-2xl border border-[#39FF14]/20 bg-gradient-to-b from-[#0F172A] via-[#091128] to-[#050816] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(57,255,20,0.12)]"
          >
            <div className="border-b border-white/10 bg-[#25D366]/10 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.5)]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">{SITE.name}</p>
                    <p className="text-xs text-[#25D366]">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-muted transition-colors hover:bg-white/10 hover:text-foreground cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4">
              <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-black/30 px-4 py-3 text-sm leading-relaxed text-slate-200">
                Hi there! 👋 Welcome to {SITE.name}. How can we help you today?
              </div>

              <div className="space-y-2">
                {QUICK_REPLIES.map((reply) => (
                  <a
                    key={reply.label}
                    href={buildWhatsAppUrl(reply.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-foreground transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-[#39FF14] cursor-pointer"
                  >
                    {reply.label}
                  </a>
                ))}
              </div>

              <a
                href={buildWhatsAppUrl(`Hi, I'd like to connect with ${SITE.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all hover:bg-[#1ebe5d] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-shadow hover:shadow-[0_8px_40px_rgba(37,211,102,0.65)] cursor-pointer"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={isOpen}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        {isOpen ? (
          <X className="relative h-6 w-6" />
        ) : (
          <MessageCircle className="relative h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
