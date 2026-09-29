import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata = {
  title: "Compare Models",
  description: "Compare AERRO EV models side by side.",
};

export default function ComparePage() {
  return (
    <ComingSoonPage
      title="Vehicle Comparison"
      description="Compare performance figures, certified range, payload ratings, and tech packages across all AERRO EV models."
      category="Specification Matrix"
    />
  );
}
