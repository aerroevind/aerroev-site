import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { SITE, CONTACT, SOCIAL_LINKS, FUTURE_PAGES } from "@/lib/constants";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-[#060a16] via-[#040712] to-[#02040a] pt-16 pb-12 overflow-hidden">
      {/* Background glow streak with Electric Green → Cyan */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-3/4 rounded-full bg-gradient-to-r from-[#00E676]/15 via-[#22D3EE]/15 to-transparent blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="wordmark" size="footer" href="#home" />
            <p className="font-display text-lg font-bold tracking-wide text-foreground">
              {SITE.tagline}
            </p>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              India&apos;s next-generation electric mobility brand, pioneering intelligent, sustainable, and high-performance two-wheeler and commercial EV platforms.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-sm text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#00E676] shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#22D3EE] shrink-0" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#00E676] transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#00E676] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#22D3EE] transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E676]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a href="#home" className="hover:text-foreground hover:text-[#39FF14] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-foreground hover:text-[#39FF14] transition-colors">
                  Current Models
                </a>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-foreground hover:text-[#39FF14] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground hover:text-[#39FF14] transition-colors">
                  Made in India
                </a>
              </li>
              <li>
                <Link href="/dealers" className="hover:text-foreground hover:text-[#39FF14] transition-colors">
                  Dealer Locator (6 Showrooms)
                </Link>
              </li>
              <li>
                <a href="/#dealership" className="hover:text-foreground hover:text-[#00E676] transition-colors">
                  Franchise Opportunities
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-foreground hover:text-[#22D3EE] transition-colors">
                  Priority Access
                </a>
              </li>
            </ul>
          </div>

          {/* Exploration & Stubs */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#22D3EE]">
              Explore Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {FUTURE_PAGES.slice(0, 5).map((p) => (
                <li key={p.path}>
                  <Link
                    href={p.path}
                    className="group inline-flex items-center gap-1 hover:text-[#00E676] transition-colors"
                  >
                    <span>{p.title}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 text-[#22D3EE]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E676]">
              Connect With Us
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#00E676] to-[#22D3EE] transition-transform group-hover:scale-150" />
                    <span>{s.name}</span>
                    <span className="font-mono text-xs text-muted/60">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#00E676]/30 bg-gradient-to-r from-[#00E676]/10 to-[#22D3EE]/10 px-3 py-1.5 text-xs text-[#00E676] font-medium">
                <span>🇮🇳 Proudly Made in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 AERRO EV. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#00E676] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="hover:text-[#22D3EE] transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">·</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-[#00E676] transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
