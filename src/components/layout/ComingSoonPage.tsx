import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ArrowLeft, Sparkles } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
  description: string;
  category?: string;
}

export function ComingSoonPage({
  title,
  description,
  category = "Future Feature",
}: ComingSoonPageProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-6 sm:p-12 overflow-hidden bg-background">
      {/* Background grid and glow effects */}
      <div className="aerospace-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-tr from-primary/15 via-accent/15 to-transparent blur-[120px]" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-6xl flex items-center justify-between">
        <Logo variant="compact" href="/" priority />
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/80 px-4 py-2 text-xs font-mono tracking-wider text-muted hover:text-foreground hover:border-primary/40 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Center Hero Card */}
      <main className="relative z-10 max-w-2xl text-center my-16 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{category} · In Development</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#newsletter"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-secondary hover:shadow-[0_0_25px_rgba(0,230,118,0.4)] transition-all"
          >
            Get Launch Alerts
          </Link>
          <Link
            href="/#dealership"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground hover:border-white/20 transition-all"
          >
            Partner Inquiries
          </Link>
        </div>
      </main>

      {/* Footer minimal notice */}
      <footer className="relative z-10 text-center font-mono text-xs text-muted/60">
        © 2026 AERRO EV · India&apos;s Next Generation Electric Mobility
      </footer>
    </div>
  );
}
