
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import TestimonialsComponent from "@/components/TestimonialsSection";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ScrollAnimationSection />
        <QualitySection />
        <TestimonialsComponent />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
