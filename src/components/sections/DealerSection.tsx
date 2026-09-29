"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input, Select, Textarea } from "@/components/ui/Input";
import {
  Handshake,
  CheckCircle2,
  AlertCircle,
  Building2,
  TrendingUp,
  MapPin,
  Loader2,
  Send,
} from "lucide-react";

interface DealerSectionProps {
  modalOpen?: boolean;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
}

export function DealerSection({
  modalOpen: externalModalOpen,
  onOpenModal: externalOnOpen,
  onCloseModal: externalOnClose,
}: DealerSectionProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  // Controlled or uncontrolled modal state
  const isModalOpen =
    externalModalOpen !== undefined ? externalModalOpen : internalModalOpen;
  const handleOpenModal = () => {
    if (externalOnOpen) externalOnOpen();
    else setInternalModalOpen(true);
  };
  const handleCloseModal = () => {
    if (externalOnClose) externalOnClose();
    else setInternalModalOpen(false);
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    businessType: "Automobile Dealership",
    email: "",
    investmentBudget: "25L - 50L",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || formData.name.length < 2) {
      setErrorMessage("Please enter your full name.");
      setStatus("error");
      return;
    }

    if (!formData.city.trim()) {
      setErrorMessage("Please specify your City and State.");
      setStatus("error");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-()+]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch("/api/dealer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setReferenceId(data.referenceId || "AERRO-DLR-SUBMISSION");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      city: "",
      phone: "",
      businessType: "Automobile Dealership",
      email: "",
      investmentBudget: "25L - 50L",
      message: "",
    });
    setStatus("idle");
    handleCloseModal();
  };

  return (
    <section id="dealership" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#050816] via-[#080f24] to-[#050816]">
      {/* Ambient background glows in Electric Green → Cyan */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[450px] w-[600px] rounded-full bg-gradient-to-r from-[#00E676]/10 to-[#22D3EE]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-[#0F172A] via-[#091126] to-[#050816] p-8 sm:p-14 lg:p-16 shadow-[0_25px_65px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
          {/* Top laser streak */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[#00E676] via-[#22D3EE] to-[#00E676]" />

          {/* Aerospace grid subtle pattern inside */}
          <div className="aerospace-grid absolute inset-0 opacity-30 pointer-events-none rounded-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
                <Handshake className="h-3.5 w-3.5 text-[#22D3EE]" />
                <span>Commercial Partnership</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Partner With{" "}
                <span className="bg-gradient-to-r from-[#00E676] via-[#10ec87] to-[#22D3EE] bg-clip-text text-transparent">
                  AERRO
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                Become part of India&apos;s EV revolution.
              </p>

              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                We are actively appointing authorized dealership partners, regional distributors, and fleet service franchisees across Tier-1, Tier-2, and Tier-3 commercial clusters throughout India.
              </p>

              {/* Value pillars with Dark Navy → Black gradient */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0F172A]/80 to-[#050816]/90 p-4 shadow-sm hover:border-[#00E676]/40 transition-colors">
                  <TrendingUp className="h-5 w-5 text-[#00E676] mb-2" />
                  <h4 className="font-display text-sm font-bold text-foreground">High ROI Margins</h4>
                  <p className="text-xs text-muted mt-1">Attractive dealer margins on vehicle sales and high-frequency OEM parts.</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0F172A]/80 to-[#050816]/90 p-4 shadow-sm hover:border-[#22D3EE]/40 transition-colors">
                  <Building2 className="h-5 w-5 text-[#22D3EE] mb-2" />
                  <h4 className="font-display text-sm font-bold text-foreground">Turnkey Showroom</h4>
                  <p className="text-xs text-muted mt-1">Standardized corporate visual identity, tooling support, and technician training.</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0F172A]/80 to-[#050816]/90 p-4 shadow-sm hover:border-[#00E676]/40 transition-colors">
                  <MapPin className="h-5 w-5 text-[#00E676] mb-2" />
                  <h4 className="font-display text-sm font-bold text-foreground">Exclusive Territory</h4>
                  <p className="text-xs text-muted mt-1">Territorial franchise rights with localized digital lead generation support.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleOpenModal}
                  icon={<Handshake className="h-4 w-4" />}
                  className="shadow-[0_0_25px_rgba(0,230,118,0.4)]"
                >
                  Apply for Dealership
                </Button>

                <Link
                  href="/dealers"
                  className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/40 bg-gradient-to-r from-[#22D3EE]/10 to-[#39FF14]/10 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#22D3EE] hover:border-[#39FF14] hover:text-[#39FF14] hover:bg-[#39FF14]/15 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <MapPin className="h-4 w-4 text-[#39FF14]" />
                  <span>Locate Showrooms (6 Active)</span>
                </Link>
              </div>
            </div>

            {/* Right Stat / Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#0F172A] via-[#0a1126] to-[#050816] p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#22D3EE] font-semibold">
                      Expansion Roadmap
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                      Showroom Network
                    </h3>
                  </div>
                  <span className="rounded-full border border-[#39FF14]/40 bg-[#39FF14]/15 px-3 py-1 font-mono text-[11px] font-bold uppercase text-[#39FF14]">
                    6 Live in MP
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-muted">Active Showrooms (MP)</span>
                    <span className="text-[#39FF14] font-bold">6 Dealerships</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-muted">Phase 1 Target Cities</span>
                    <span className="text-[#00E676] font-bold">50+ Hubs</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-muted">Target Product Segments</span>
                    <span className="text-foreground font-bold">2-Wheelers & Cargo</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-muted">Technical R&D HQ</span>
                    <span className="text-foreground font-bold">Indore, MP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Onboarding Window</span>
                    <span className="text-[#22D3EE] font-bold">Open for Q4 2026</span>
                  </div>
                </div>

                <Link
                  href="/dealers"
                  className="block w-full rounded-xl bg-gradient-to-r from-[#00E676]/10 via-[#22D3EE]/10 to-[#00E676]/10 border border-[#00E676]/30 p-3.5 text-center text-xs font-mono font-bold text-[#39FF14] hover:border-[#39FF14] hover:bg-[#39FF14]/20 transition-all cursor-pointer"
                >
                  Explore All 6 Showrooms on Map →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Dealership Enquiry"
        subtitle="Submit your business details to receive our comprehensive partner prospectus."
      >
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-6 space-y-4"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00E676]/20 text-[#00E676]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="font-display text-xl font-bold text-foreground">
                Enquiry Submitted Successfully
              </h4>
              <p className="text-sm text-muted max-w-md mx-auto">
                Thank you for your interest in partnering with AERRO EV. Our franchise team will review your credentials and contact you within 48 business hours.
              </p>
              <div className="rounded-lg bg-black/50 border border-white/10 p-3 font-mono text-xs text-[#22D3EE]">
                Reference ID: <span className="font-bold text-foreground">{referenceId}</span>
              </div>
              <div className="pt-4">
                <Button variant="secondary" onClick={resetForm}>
                  Close Window
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <Input
                  label="City & State *"
                  placeholder="e.g. Indore, Madhya Pradesh"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone Number *"
                  type="tel"
                  placeholder="e.g. 9109106615"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />

                <Select
                  label="Business Type *"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  options={[
                    { value: "Automobile Dealership", label: "Existing Automobile Dealer" },
                    { value: "Commercial Logistics / Fleet Operator", label: "Logistics / Fleet Operator" },
                    { value: "Auto Components / Spare Parts", label: "Auto Parts Distributor" },
                    { value: "New Entrepreneur / Investor", label: "New Entrepreneur / Investor" },
                    { value: "Other Commercial Enterprise", label: "Other Commercial Business" },
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address (Optional)"
                  type="email"
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <Select
                  label="Planned Investment Capacity"
                  value={formData.investmentBudget}
                  onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                  options={[
                    { value: "15L - 25L", label: "₹15 Lakhs - ₹25 Lakhs" },
                    { value: "25L - 50L", label: "₹25 Lakhs - ₹50 Lakhs" },
                    { value: "50L - 1 Cr", label: "₹50 Lakhs - ₹1 Crore" },
                    { value: "1 Cr+", label: "Above ₹1 Crore" },
                  ]}
                />
              </div>

              <Textarea
                label="Commercial Premises & Experience (Optional)"
                placeholder="Briefly describe your existing showroom/workshop space or background in the automotive sector."
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors"
                >
                  Cancel
                </button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "submitting"}
                  icon={
                    status === "submitting" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )
                  }
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? "Submitting Application..." : "Submit Application"}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </Modal>
    </section>
  );
}
