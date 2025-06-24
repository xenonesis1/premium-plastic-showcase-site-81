
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import QualitySection from "@/components/QualitySection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsComponent from "@/components/TestimonialsSection";
import ScrollAnimationSection from "@/components/ScrollAnimationSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ScrollAnimationSection />
        <ProductsSection />
        <QualitySection />
        <IndustriesSection />
        <TestimonialsComponent />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
