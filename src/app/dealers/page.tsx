import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DealerLocator } from "@/components/sections/DealerLocator";

export const metadata = {
  title: "Authorized Dealers & Showroom Locator | AERRO EV",
  description:
    "Locate authorized AERRO EV electric scooter showrooms and dealerships in Indore, Rau, Pithampur, Shajapur, Pachore, and Betma. Book test rides, view Google Maps directions, and chat on WhatsApp.",
};

export default function DealersPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-[#39FF14] selection:text-black">
      {/* Header Navigation with Active Dealership Glow */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 sm:pt-20">
        <DealerLocator />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
