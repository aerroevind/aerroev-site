import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scooter Gallery",
  description:
    "Explore the complete visual catalog of AERRO electric scooters from Model 1 to Model 18. Browse all design variants in our interactive gallery.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
