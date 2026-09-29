import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata = {
  title: "Products & Lineup",
  description: "Explore the upcoming AERRO electric vehicles lineup.",
};

export default function ProductsPage() {
  return (
    <ComingSoonPage
      title="AERRO Vehicle Lineup"
      description="Detailed vehicle engineering specifications, modular battery configurations, and custom accessory selections will be unveiled at our official launch."
      category="Vehicle Lineup"
    />
  );
}
