"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  // Determine active nav item based on pathname and scroll
  const isGalleryPage = pathname === "/gallery";
  const isDealersPage = pathname === "/dealers";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Scroll spy on homepage
  useEffect(() => {
    if (isGalleryPage || isDealersPage) return;

    const sections = ["home", "models", "about", "dealership", "contact"];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`/#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isGalleryPage, isDealersPage]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href === "/gallery") {
      router.push("/gallery");
      return;
    }

    if (href === "/dealers") {
      router.push("/dealers");
      return;
    }

    // Anchor link handling
    const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
    const sectionId = hash.replace("#", "");

    if (pathname === "/") {
      setActiveSection(href);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On /gallery, /dealers, or other route, navigate to homepage section
      router.push(href);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-gradient-to-b from-[#0F172A]/95 to-[#050816]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3 sm:py-3.5"
          : "bg-transparent py-4 sm:py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Compact Logo Lockup */}
        <Logo
          variant="compact"
          href="/#home"
          priority
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("/#home");
          }}
        />

        {/* Desktop Nav Links with Electric Green Glow Effect */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full border border-white/10 bg-gradient-to-b from-[#0F172A]/85 to-[#050816]/90 px-4 py-1.5 backdrop-blur-lg shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive =
              (link.href === "/gallery" && isGalleryPage) ||
              (link.href === "/dealers" && (isDealersPage || (!isGalleryPage && !isDealersPage && activeSection === "/#dealership"))) ||
              (!isGalleryPage && !isDealersPage && (activeSection === link.href || (activeSection === "#home" && link.href === "/#home")));

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    color: isActive ? "#39FF14" : undefined,
                    textShadow: isActive
                      ? "0 0 10px #39FF14, 0 0 20px rgba(57, 255, 20, 0.8), 0 0 30px rgba(57, 255, 20, 0.4)"
                      : undefined,
                  }}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out select-none cursor-pointer",
                    isActive
                      ? "bg-[#39FF14]/10 border border-[#39FF14]/40 shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                      : "text-muted hover:text-[#39FF14] hover:[text-shadow:0_0_8px_rgba(57,255,20,0.6),0_0_15px_rgba(57,255,20,0.3)] hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick("/#dealership")}
            className="text-xs lg:text-sm font-mono text-muted hover:text-[#39FF14] hover:[text-shadow:0_0_8px_rgba(57,255,20,0.6)] transition-all cursor-pointer"
          >
            Partner with Us
          </button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => {
              if (pathname === "/") {
                const el = document.getElementById("newsletter");
                el?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/#newsletter");
              }
            }}
            icon={<ArrowUpRight className="h-3.5 w-3.5" />}
          >
            Notify Me
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-[#0F172A] to-[#050816] text-foreground md:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-b border-white/10 bg-gradient-to-b from-[#0F172A]/98 to-[#050816]/98 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="space-y-4 px-6 py-6">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    (link.href === "/gallery" && isGalleryPage) ||
                    (link.href === "/dealers" && (isDealersPage || (!isGalleryPage && !isDealersPage && activeSection === "/#dealership"))) ||
                    (!isGalleryPage && !isDealersPage && (activeSection === link.href || (activeSection === "#home" && link.href === "/#home")));

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        style={{
                          color: isActive ? "#39FF14" : undefined,
                          textShadow: isActive
                            ? "0 0 10px #39FF14, 0 0 20px rgba(57, 255, 20, 0.8)"
                            : undefined,
                        }}
                        className={cn(
                          "block rounded-xl px-4 py-2.5 text-base font-semibold transition-all duration-300 ease-in-out cursor-pointer",
                          isActive
                            ? "bg-[#39FF14]/15 border border-[#39FF14]/40"
                            : "text-foreground/90 hover:bg-white/5 hover:text-[#39FF14] hover:[text-shadow:0_0_8px_rgba(57,255,20,0.6)]"
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button
                  fullWidth
                  variant="primary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (pathname === "/") {
                      const el = document.getElementById("newsletter");
                      el?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      router.push("/#newsletter");
                    }
                  }}
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Notify Me
                </Button>

                <Button
                  fullWidth
                  variant="secondary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (pathname === "/") {
                      const el = document.getElementById("dealership");
                      el?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      router.push("/#dealership");
                    }
                  }}
                >
                  Become a Dealer
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
