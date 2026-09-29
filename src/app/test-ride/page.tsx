import { ComingSoonPage } from "@/components/layout/ComingSoonPage";

export const metadata = {
  title: "Book a Test Ride",
  description: "Book an exclusive test ride for upcoming AERRO EV vehicles.",
};

export default function TestRidePage() {
  return (
    <ComingSoonPage
      title="Book a Test Ride"
      description="Be among the first in your city to feel the instantaneous electric torque and razor-sharp handling of AERRO vehicles. Test ride booking opens shortly."
      category="Priority Booking"
    />
  );
}
