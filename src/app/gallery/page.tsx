"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ALL_GALLERY_MODELS, type GalleryModel } from "@/lib/constants";
import {
  Sparkles,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Images,
} from "lucide-react";

export default function GalleryPage() {
  const [activeModelIndex, setActiveModelIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeModel =
    activeModelIndex !== null ? ALL_GALLERY_MODELS[activeModelIndex] : null;

  const handleOpenLightbox = (index: number) => {
    setActiveModelIndex(index);
    setZoomLevel(1);
  };

  const handleCloseLightbox = () => {
    setActiveModelIndex(null);
    setZoomLevel(1);
  };

  const handleNext = () => {
    if (activeModelIndex === null) return;
    setActiveModelIndex((prev) =>
      prev !== null ? (prev + 1) % ALL_GALLERY_MODELS.length : 0
    );
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (activeModelIndex === null) return;
    setActiveModelIndex((prev) =>
      prev !== null
        ? (prev - 1 + ALL_GALLERY_MODELS.length) % ALL_GALLERY_MODELS.length
        : 0
    );
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.35, 0.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModelIndex === null) return;

      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModelIndex]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (activeModelIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeModelIndex]);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-[#39FF14]/25 selection:text-white">
      {/* Navbar with active Electric Green glow on Gallery */}
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 overflow-hidden">
        {/* Background grids and ambient lighting */}
        <div className="aerospace-grid absolute inset-0 opacity-40 pointer-events-none" />
        <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[450px] w-[700px] rounded-full bg-gradient-to-r from-[#39FF14]/12 via-[#22D3EE]/10 to-transparent blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb / Return Action */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/80 px-4 py-2 text-xs font-mono tracking-wider text-muted hover:text-[#39FF14] hover:border-[#39FF14]/40 transition-all shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-3.5 py-1 font-mono text-xs text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <Images className="h-3.5 w-3.5" />
              <span>{ALL_GALLERY_MODELS.length} Models in Catalog</span>
            </div>
          </div>

          {/* Page Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-gradient-to-r from-[#39FF14]/15 via-[#22D3EE]/10 to-[#39FF14]/15 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <Sparkles className="h-3.5 w-3.5 text-[#22D3EE]" />
              <span>Design Archive</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-foreground">
              Scooter{" "}
              <span className="bg-gradient-to-r from-[#39FF14] via-[#00f782] to-[#22D3EE] bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted text-balance max-w-2xl mx-auto">
              Explore the complete visual catalog of AERRO electric scooters from Model 1 to Model 18. Click on any model to open the interactive zoom lightbox.
            </p>
          </div>

          {/* Catalog Grid: All 18 Models */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
            {ALL_GALLERY_MODELS.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F172A] via-[#0a1126] to-[#050816] p-5 sm:p-6 shadow-xl transition-all duration-300 hover:border-[#39FF14]/50 hover:shadow-[0_20px_45px_-10px_rgba(57,255,20,0.3)] cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Top glow streak on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#39FF14]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Lockup */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-semibold">
                      Series {model.number}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-muted group-hover:text-[#39FF14] group-hover:border-[#39FF14]/30 transition-colors">
                      <Maximize2 className="h-3 w-3" />
                      <span>Preview</span>
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-b from-black/60 to-black/30 p-3 border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-[#39FF14]/25 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#39FF14]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={encodeURI(model.image)}
                      alt={model.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_20px_rgba(57,255,20,0.2)]"
                      priority={index < 6}
                    />
                  </div>

                  {/* Model Name */}
                  <div className="mt-4 text-center sm:text-left">
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-[#39FF14] transition-colors">
                      {model.name}
                    </h3>
                    <p className="font-mono text-xs text-muted mt-0.5">
                      AERRO Electric Two-Wheeler
                    </p>
                  </div>
                </div>

                {/* Micro Action */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted group-hover:text-[#39FF14] transition-colors">
                  <span>Click to expand</span>
                  <span className="font-bold">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* FULLSCREEN IMAGE LIGHTBOX WITH ZOOM */}
      <AnimatePresence>
        {activeModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLightbox}
              className="fixed inset-0 bg-[#050816]/90 backdrop-blur-xl"
              aria-hidden="true"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-b from-[#0F172A] via-[#091128] to-[#050816] p-4 sm:p-8 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col justify-between max-h-[92vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Top Bar: Title & Controls */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {activeModel.name}
                  </h3>
                  <p className="font-mono text-xs text-[#22D3EE]">
                    Model {activeModel.number} of {ALL_GALLERY_MODELS.length}
                  </p>
                </div>

                {/* Zoom Controls & Close Button */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1">
                    <button
                      onClick={handleZoomOut}
                      className="p-1.5 text-muted hover:text-[#39FF14] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
                      aria-label="Zoom out"
                      title="Zoom Out"
                    >
                      <ZoomOut className="h-4 w-4" />
                    </button>
                    <span className="font-mono text-xs px-1.5 text-slate-300">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-1.5 text-muted hover:text-[#39FF14] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
                      aria-label="Zoom in"
                      title="Zoom In"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 text-muted hover:text-[#22D3EE] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
                      aria-label="Reset zoom"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleCloseLightbox}
                    className="p-2 text-muted hover:text-foreground hover:bg-white/10 transition-colors rounded-full cursor-pointer"
                    aria-label="Close image preview"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[480px] rounded-2xl bg-black/60 border border-white/5 overflow-hidden flex items-center justify-center p-4">
                <div
                  className="relative w-full h-full max-h-[60vh] transition-transform duration-300 ease-out flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <Image
                    src={encodeURI(activeModel.image)}
                    alt={activeModel.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-contain p-4 drop-shadow-[0_15px_35px_rgba(57,255,20,0.35)]"
                    priority
                  />
                </div>

                {/* Floating Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/15 bg-black/70 backdrop-blur-md flex items-center justify-center text-foreground hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all cursor-pointer"
                  aria-label="Previous model"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Floating Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/15 bg-black/70 backdrop-blur-md flex items-center justify-center text-foreground hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all cursor-pointer"
                  aria-label="Next model"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Lightbox Footer Bar */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted">
                <div className="flex items-center gap-3">
                  <span>Use arrow keys (← / →) to browse</span>
                  <span className="text-white/20">·</span>
                  <span>Esc to exit</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/#dealership"
                    onClick={handleCloseLightbox}
                    className="text-[#39FF14] hover:underline"
                  >
                    Enquire about this model →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
