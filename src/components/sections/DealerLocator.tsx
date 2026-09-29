"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DEALER_LOCATIONS, type DealerLocation } from "@/lib/constants";
import {
  MapPin,
  Phone,
  Clock,
  Search,
  X,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Building2,
  Navigation,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// WhatsApp Logo SVG component
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      className={className}
    >
      <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.774-.219-.079-.379-.119-.538.12-.16.239-.617.774-.757.933-.139.16-.279.179-.517.06-.239-.12-1.008-.372-1.92-1.185-.709-.633-1.188-1.415-1.328-1.654-.139-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.16-.239.239-.399.08-.16.04-.299-.02-.418-.06-.12-.538-1.296-.738-1.774-.194-.467-.393-.404-.539-.412l-.46-.008c-.16 0-.418.06-.637.299-.219.239-.837.817-.837 1.993 0 1.176.857 2.311.976 2.471.12.16 1.687 2.576 4.088 3.612.571.247 1.017.394 1.365.505.574.183 1.096.157 1.509.095.46-.07 1.406-.575 1.605-1.131.199-.557.199-1.034.139-1.132-.059-.098-.219-.158-.458-.278zM12 2a9.93 9.93 0 0 0-8.56 14.93L2 22l5.22-1.37A9.94 9.94 0 1 0 12 2zm0 18.15c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.3.87.88-3.21-.21-.34A8.17 8.17 0 1 1 12 20.15z" />
    </svg>
  );
}

interface DealerLocatorProps {
  onOpenFranchiseModal?: () => void;
}

export function DealerLocator({ onOpenFranchiseModal }: DealerLocatorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");

  // Extract unique cities list
  const cities = useMemo(() => {
    const list = Array.from(new Set(DEALER_LOCATIONS.map((d) => d.city)));
    return ["all", ...list];
  }, []);

  // Filter dealers based on search query and city filter
  const filteredDealers = useMemo(() => {
    return DEALER_LOCATIONS.filter((dealer) => {
      const matchesCity =
        selectedCity === "all" ||
        dealer.city.toLowerCase() === selectedCity.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        dealer.name.toLowerCase().includes(query) ||
        dealer.city.toLowerCase().includes(query) ||
        dealer.address.toLowerCase().includes(query);

      return matchesCity && matchesSearch;
    });
  }, [searchQuery, selectedCity]);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[550px] w-[800px] rounded-full bg-gradient-to-r from-[#39FF14]/10 via-[#22D3EE]/10 to-transparent blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[450px] w-[450px] rounded-full bg-[#39FF14]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-gradient-to-r from-[#39FF14]/15 via-[#22D3EE]/10 to-[#39FF14]/15 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Authorized Network · Madhya Pradesh</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground"
          >
            Dealer{" "}
            <span className="bg-gradient-to-r from-[#39FF14] via-[#00f782] to-[#22D3EE] bg-clip-text text-transparent">
              Locator
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted text-balance max-w-2xl mx-auto"
          >
            Locate authorized AERRO EV experience centers and dealerships near you.
            Visit us for test rides, vehicle inquiries, bookings, genuine parts, and certified EV service.
          </motion.p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {/* Search Box */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted">
              <Search className="h-5 w-5 text-[#39FF14]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dealer by name, city, or address (e.g., Indore, Rau, Pithampur)..."
              className="w-full rounded-2xl border border-white/15 bg-gradient-to-b from-[#0F172A]/90 to-[#050816]/95 pl-12 pr-12 py-4 text-sm sm:text-base text-foreground placeholder:text-muted/70 backdrop-blur-xl transition-all duration-300 focus:border-[#39FF14] focus:outline-none focus:ring-2 focus:ring-[#39FF14]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {cities.map((city) => {
              const isSelected = selectedCity === city;
              const count =
                city === "all"
                  ? DEALER_LOCATIONS.length
                  : DEALER_LOCATIONS.filter(
                      (d) => d.city.toLowerCase() === city.toLowerCase()
                    ).length;

              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#39FF14] to-[#22D3EE] text-black font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)] scale-105"
                      : "border border-white/10 bg-white/5 text-muted hover:border-[#39FF14]/40 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  {city === "all" ? "All Locations" : city} ({count})
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs font-mono text-muted px-2">
            <span>
              Showing{" "}
              <strong className="text-[#39FF14]">{filteredDealers.length}</strong> of{" "}
              {DEALER_LOCATIONS.length} authorized dealerships
            </span>
            {(searchQuery || selectedCity !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCity("all");
                }}
                className="text-[#22D3EE] hover:text-[#39FF14] underline underline-offset-4 cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Dealer Cards Grid */}
        <div className="mt-10">
          <AnimatePresence mode="popLayout">
            {filteredDealers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredDealers.map((dealer, index) => (
                  <motion.div
                    key={dealer.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="group relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0F172A] via-[#091128] to-[#050816] p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-[#39FF14]/60 hover:shadow-[0_20px_45px_-10px_rgba(57,255,20,0.25)] flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top ambient glow bar */}
                    <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#39FF14] via-[#22D3EE] to-[#39FF14] opacity-80" />

                    <div>
                      {/* Showroom Image Container */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden mb-5">
                        <Image
                          src={dealer.image}
                          alt={`${dealer.name} showroom`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index < 3}
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#39FF14]/50 bg-black/75 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#39FF14] backdrop-blur-md shadow-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                            {dealer.status}
                          </span>
                          <span className="rounded-full border border-white/20 bg-black/75 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#22D3EE] backdrop-blur-md">
                            {dealer.city}
                          </span>
                        </div>
                      </div>

                      {/* Dealer Name */}
                      <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-[#39FF14] transition-colors line-clamp-2">
                        {dealer.name}
                      </h2>

                      {/* Address */}
                      <div className="mt-3 flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                        <MapPin className="h-4 w-4 text-[#39FF14] shrink-0 mt-0.5" />
                        <span className="line-clamp-3">{dealer.address}</span>
                      </div>

                      {/* Working Hours & Timing */}
                      <div className="mt-3 flex items-center gap-2 text-xs font-mono text-muted/80 pt-2 border-t border-white/5">
                        <Clock className="h-3.5 w-3.5 text-[#22D3EE] shrink-0" />
                        <span>{dealer.timing}</span>
                      </div>

                      {/* Phone Inquiry */}
                      <div className="mt-2 flex items-center gap-2 text-xs font-mono text-muted/80">
                        <Phone className="h-3.5 w-3.5 text-[#39FF14] shrink-0" />
                        <span>Inquiries: <strong className="text-foreground">{dealer.phone}</strong></span>
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5">
                      {/* Google Maps Directions */}
                      <a
                        href={dealer.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-foreground hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#22D3EE] transition-all duration-200 cursor-pointer shadow-sm group/btn"
                        title="View location on Google Maps"
                      >
                        <Navigation className="h-3.5 w-3.5 text-[#22D3EE] group-hover/btn:translate-x-0.5 transition-transform" />
                        <span>Directions</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>

                      {/* WhatsApp Chat Button */}
                      <a
                        href={`https://wa.me/${dealer.whatsappRaw}?text=${encodeURIComponent(
                          dealer.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#25D366]/40 bg-gradient-to-r from-[#25D366]/20 to-[#39FF14]/20 px-3 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#39FF14] hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-200 cursor-pointer shadow-sm"
                        title="Chat with dealer on WhatsApp"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F172A]/70 to-[#050816]/70 p-12 text-center max-w-lg mx-auto backdrop-blur-xl"
              >
                <Building2 className="h-12 w-12 text-muted mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  No Dealerships Found
                </h3>
                <p className="mt-2 text-sm text-muted">
                  We could not find any dealerships matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset your filters.
                </p>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCity("all");
                    }}
                  >
                    Reset All Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Franchise Opportunity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-[#39FF14]/30 bg-gradient-to-r from-[#0F172A] via-[#091128] to-[#0F172A] p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Subtle glow effect */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#39FF14]/20 blur-3xl" />

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#39FF14] font-semibold flex items-center justify-center sm:justify-start gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" /> High Margin Franchise Network
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
              Want to Open an AERRO EV Dealership in Your City?
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              We are actively appointing franchise partners across Tier-1, Tier-2, and Tier-3 commercial hubs with complete OEM support, showroom setup guidance, and high ROI.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (onOpenFranchiseModal) {
                  onOpenFranchiseModal();
                } else {
                  window.location.href = "/#dealership";
                }
              }}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Apply for Dealership
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
