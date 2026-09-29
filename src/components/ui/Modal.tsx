"use client";

import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050816]/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card — dark premium theme with electric green accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-[#39FF14]/20 bg-gradient-to-b from-[#0F172A] via-[#091128] to-[#050816] p-6 sm:p-8 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(57,255,20,0.08)] backdrop-blur-2xl my-8",
              className
            )}
            role="dialog"
            aria-modal="true"
          >
            {/* Top electric green accent bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#39FF14] via-[#22D3EE] to-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.6)]" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full border border-white/10 p-2 text-muted transition-all hover:border-[#39FF14]/40 hover:bg-[#39FF14]/10 hover:text-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] focus:outline-none cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            {(title || subtitle) && (
              <div className="mb-6 pr-8">
                {title && (
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="mt-1 text-sm text-muted">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Content */}
            <div className="relative">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
