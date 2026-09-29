import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata = {
  title: "EV Finance & EMI Calculator",
  description: "Flexible financing, corporate fleet leasing, and subsidy assistance for AERRO electric vehicles.",
};

export default function FinancePage() {
  return (
    <ComingSoonPage
      title="Finance & Subsidies"
      description="Calculate low-interest EMIs, check central and state EV subsidies (FAME/PM E-DRIVE), and explore commercial lease packages tailored for businesses."
      category="Financial Solutions"
    />
  );
}
