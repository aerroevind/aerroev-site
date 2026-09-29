import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata = {
  title: "EV News & Engineering Insights",
  description: "Read updates, engineering stories, and sustainable mobility articles from AERRO EV.",
};

export default function BlogPage() {
  return (
    <ComingSoonPage
      title="AERRO Journal"
      description="Deep-dives into EV engineering, battery longevity science, clean energy infrastructure, and policy updates shaping India's electric revolution."
      category="Journal & Insights"
    />
  );
}
