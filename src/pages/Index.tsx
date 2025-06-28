
import HeroSection from "@/components/HeroSection";
import TestimonialsComponent from "@/components/TestimonialsSection";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  return (
    <AuroraBackground className="min-h-screen" showRadialGradient={false}>
      <div className="relative z-10 w-full">
        <Header />
        <main className="overflow-hidden">
          <HeroSection />
          <ScrollAnimationSection />
          <TestimonialsComponent />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </AuroraBackground>
  );
};

export default Index;
