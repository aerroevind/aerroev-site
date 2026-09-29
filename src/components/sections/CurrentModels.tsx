"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CURRENT_TWO_MODELS, type CurrentModelDetail } from "@/lib/constants";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  BatteryCharging,
  Gauge,
  Zap,
  Disc,
  Cpu,
  Sparkles,
  ArrowRight,
  Eye,
  CircleDot,
  Images,
} from "lucide-react";

interface CurrentModelsProps {
  onOpenDealerModal?: () => void;
}

export function CurrentModels({ onOpenDealerModal }: CurrentModelsProps) {
  const [selectedModel, setSelectedModel] = useState<CurrentModelDetail | null>(null);

  return (
    <section
      id="models"
      className="relative pt-8 pb-20 sm:pt-12 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#050816] via-[#091128] to-[#050816]"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[750px] rounded-full bg-gradient-to-r from-[#39FF14]/10 via-[#22D3EE]/10 to-transparent blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[400px] w-[400px] rounded-full bg-[#39FF14]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-gradient-to-r from-[#39FF14]/15 via-[#22D3EE]/10 to-[#39FF14]/15 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Available Lineup</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground"
          >
            Current{" "}
            <span className="bg-gradient-to-r from-[#39FF14] via-[#00f782] to-[#22D3EE] bg-clip-text text-transparent">
              Models
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted text-balance max-w-2xl mx-auto"
          >
            Explore our flagship electric scooter models designed for peak urban efficiency, low maintenance, and trusted Indian road reliability.
          </motion.p>
        </div>

        {/* 2-Model Flagship Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CURRENT_TWO_MODELS.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0F172A] via-[#0a1126] to-[#050816] p-7 sm:p-9 shadow-2xl transition-all duration-300 hover:border-[#39FF14]/60 hover:shadow-[0_25px_50px_-10px_rgba(57,255,20,0.3)] flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedModel(model)}
            >
              {/* Top ambient glow line in Electric Green */}
              <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#39FF14] via-[#22D3EE] to-[#39FF14] opacity-80" />

              <div>
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-semibold">
                    {model.subtitle}
                  </span>
                  {model.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#39FF14]/40 bg-[#39FF14]/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.3)]">
                      ★ {model.badge}
                    </span>
                  )}
                </div>

                {/* Model Image Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl bg-gradient-to-b from-black/60 to-black/30 p-4 border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-[#39FF14]/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#39FF14]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={encodeURI(model.image)}
                    alt={model.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 500px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_25px_rgba(57,255,20,0.25)]"
                    priority
                  />
                </div>

                {/* Model Name */}
                <div className="mt-6">
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-[#39FF14] transition-colors">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {model.description}
                  </p>
                </div>

                {/* Quick Highlights Row */}
                <div className="mt-6 grid grid-cols-2 gap-3 py-3 border-y border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-muted">
                    <Gauge className="h-4 w-4 text-[#39FF14] shrink-0" />
                    <span>Max Speed: <strong className="text-foreground">{model.specs.maxSpeed}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Zap className="h-4 w-4 text-[#22D3EE] shrink-0" />
                    <span>Motor: <strong className="text-foreground">{model.specs.motor}</strong></span>
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedModel(model);
                  }}
                  className="w-full relative inline-flex items-center justify-center gap-2 rounded-full border border-[#39FF14]/50 bg-gradient-to-r from-[#0F172A] to-[#050816] px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-[#39FF14] font-bold shadow-md transition-all duration-300 hover:border-[#39FF14] hover:bg-gradient-to-r hover:from-[#39FF14]/20 hover:to-[#22D3EE]/20 hover:text-white hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Link Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[#0F172A] via-[#091128] to-[#050816] p-4 sm:px-8 sm:py-4 shadow-xl">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Images className="h-4 w-4 text-[#39FF14]" />
              <span>Looking to explore our complete 18-model design showcase?</span>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#39FF14] to-[#22D3EE] px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#050816] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all"
            >
              <span>Explore Gallery</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Model Specifications Modal */}
      <Modal
        isOpen={!!selectedModel}
        onClose={() => setSelectedModel(null)}
        title={selectedModel?.name}
        subtitle={selectedModel?.subtitle}
        className="max-w-2xl"
      >
        {selectedModel && (
          <div className="space-y-6">
            {/* Modal Image Display */}
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-b from-black/80 to-black/40 p-4 border border-white/10 overflow-hidden flex items-center justify-center">
              <Image
                src={encodeURI(selectedModel.image)}
                alt={selectedModel.name}
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-contain p-3 drop-shadow-[0_10px_30px_rgba(57,255,20,0.35)]"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedModel.description}
            </p>

            {/* Exact Technical Specifications Grid */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] animate-pulse" />
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#39FF14]">
                  Exact Specifications
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs">
                {/* Max Speed */}
                <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                    <Gauge className="h-3.5 w-3.5 text-[#39FF14]" />
                    <span>Max Speed</span>
                  </div>
                  <div className="font-display text-lg font-bold text-foreground mt-1">
                    {selectedModel.specs.maxSpeed}
                  </div>
                </div>

                {/* Motor */}
                <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                    <Zap className="h-3.5 w-3.5 text-[#22D3EE]" />
                    <span>Motor Power</span>
                  </div>
                  <div className="font-display text-lg font-bold text-foreground mt-1">
                    {selectedModel.specs.motor}
                  </div>
                </div>

                {/* Tyres */}
                <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                    <CircleDot className="h-3.5 w-3.5 text-[#39FF14]" />
                    <span>Tyres (Front / Rear)</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-foreground mt-1">
                    Front: {selectedModel.specs.frontTyre} · Rear: {selectedModel.specs.rearTyre}
                  </div>
                </div>

                {/* Brakes */}
                {selectedModel.specs.brakes ? (
                  <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                      <Disc className="h-3.5 w-3.5 text-[#22D3EE]" />
                      <span>Brakes</span>
                    </div>
                    <div className="font-mono text-sm font-bold text-foreground mt-1">
                      {selectedModel.specs.brakes}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10">
                      <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                        <Disc className="h-3.5 w-3.5 text-[#22D3EE]" />
                        <span>Front Brake</span>
                      </div>
                      <div className="font-mono text-sm font-bold text-foreground mt-1">
                        {selectedModel.specs.frontBrake}
                      </div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10">
                      <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                        <Disc className="h-3.5 w-3.5 text-[#39FF14]" />
                        <span>Rear Brake</span>
                      </div>
                      <div className="font-mono text-sm font-bold text-foreground mt-1">
                        {selectedModel.specs.rearBrake}
                      </div>
                    </div>
                  </>
                )}

                {/* Controller */}
                <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10 col-span-2">
                  <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                    <Cpu className="h-3.5 w-3.5 text-[#39FF14]" />
                    <span>Controller</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-foreground mt-1">
                    {selectedModel.specs.controller}
                  </div>
                </div>

                {/* Tyre Brands */}
                <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-white/10 col-span-2">
                  <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                    <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />
                    <span>Certified Tyre Brands</span>
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#39FF14] mt-1">
                    {selectedModel.specs.tyreBrands}
                  </div>
                </div>

                {/* Range (if available for City Power) */}
                {selectedModel.specs.range && (
                  <div className="rounded-xl bg-gradient-to-b from-[#0F172A] to-[#050816] p-3.5 border border-[#39FF14]/30 col-span-2 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
                    <div className="flex items-center gap-1.5 text-muted font-mono text-[10px] uppercase">
                      <BatteryCharging className="h-3.5 w-3.5 text-[#39FF14]" />
                      <span>Certified Range</span>
                    </div>
                    <div className="font-display text-xl font-black text-[#39FF14] mt-1">
                      {selectedModel.specs.range}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedModel(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors cursor-pointer"
              >
                Close
              </button>

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedModel(null);
                  if (onOpenDealerModal) {
                    onOpenDealerModal();
                  } else {
                    const el = document.getElementById("dealership");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto"
              >
                Book Test Ride / Enquire
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
