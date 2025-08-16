import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PricingSection />
      <BookingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
