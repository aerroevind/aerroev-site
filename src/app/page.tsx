"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CurrentModels } from "@/components/sections/CurrentModels";
import { MadeInIndia } from "@/components/sections/MadeInIndia";
import { Newsletter } from "@/components/sections/Newsletter";
import { DealerSection } from "@/components/sections/DealerSection";
import { SocialLinks } from "@/components/sections/SocialLinks";

export default function Home() {
  const [dealerModalOpen, setDealerModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-[#39FF14]/25 selection:text-white">
      {/* Top Fixed Navigation with Electric Green Glow Effect */}
      <Navbar />

      {/* Main Landing Sections */}
      <main className="relative flex flex-col">
        {/* 1. Fullscreen Hero (#home) */}
        <Hero onOpenDealerModal={() => setDealerModalOpen(true)} />

        {/* 2. Current Models Section (#models) displaying available scooter models */}
        <CurrentModels onOpenDealerModal={() => setDealerModalOpen(true)} />

        {/* 3. Made in India (#about) */}
        <MadeInIndia />

        {/* 4. Newsletter Priority Access (#newsletter) */}
        <Newsletter />

        {/* 5. Dealer Enquiry (#dealership) */}
        <DealerSection
          modalOpen={dealerModalOpen}
          onOpenModal={() => setDealerModalOpen(true)}
          onCloseModal={() => setDealerModalOpen(false)}
        />

        {/* 6. Social Links & Community (#contact) */}
        <SocialLinks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
