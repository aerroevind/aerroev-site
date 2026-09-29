"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessMessage(data.message || "Thank you for subscribing to AERRO EV updates.");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again later.");
    }
  };

  return (
    <section id="newsletter" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#050816] via-[#091024] to-[#050816]">
      {/* Background ambient lighting in Electric Green → Cyan */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[650px] rounded-full bg-gradient-to-r from-[#00E676]/10 via-[#22D3EE]/10 to-transparent blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0F172A] via-[#0a1126] to-[#050816] p-8 sm:p-14 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl text-center overflow-hidden">
          {/* Top neon laser streak: Electric Green → Cyan */}
          <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#00E676] via-[#22D3EE] to-[#00E676]" />

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE] mb-4">
            <Mail className="h-3.5 w-3.5 text-[#00E676]" />
            <span>Priority Access List</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground text-balance">
            Stay Charged.{" "}
            <span className="bg-gradient-to-r from-[#00E676] via-[#10ec87] to-[#22D3EE] bg-clip-text text-transparent">
              Stay Updated.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-muted max-w-lg mx-auto text-balance">
            Receive exclusive technical previews, city rollout schedules, and early invite credentials before public booking opens.
          </p>

          {/* Interactive Form or Animated Success State */}
          <div className="mt-8 max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-2xl border border-[#00E676]/40 bg-gradient-to-b from-[#0F172A] to-[#050816] p-6 text-center shadow-lg"
                >
                  <CheckCircle2 className="mx-auto h-10 w-10 text-[#00E676] mb-2" />
                  <h3 className="font-display text-lg font-bold text-foreground">
                    You&apos;re on the AERRO Priority List
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {successMessage}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 font-mono text-xs text-[#00E676] underline hover:text-[#22D3EE] transition-colors"
                  >
                    Register another email
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <div className="relative flex flex-col sm:flex-row items-center gap-2">
                    <div className="relative w-full">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
                        <Mail className="h-4 w-4 text-[#22D3EE]" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="Enter your email address"
                        disabled={status === "loading"}
                        className="w-full rounded-full border border-white/15 bg-black/60 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-all duration-200 focus:border-[#22D3EE] focus:bg-black/80 focus:outline-none focus:ring-1 focus:ring-[#22D3EE]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === "loading"}
                      icon={
                        status === "loading" ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )
                      }
                      className="w-full sm:w-auto shrink-0 shadow-[0_0_25px_rgba(0,230,118,0.4)]"
                    >
                      {status === "loading" ? "Submitting..." : "Notify Me"}
                    </Button>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-1.5 text-xs text-red-400 mt-2"
                    >
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <p className="text-[11px] text-muted/60 pt-2 font-mono">
                    Zero spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
