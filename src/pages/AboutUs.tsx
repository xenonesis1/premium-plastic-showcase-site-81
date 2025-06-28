
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/ui/about-us-section";
import { AuroraBackground } from "@/components/ui/aurora-background";

const AboutUs = () => {
  return (
    <AuroraBackground className="min-h-screen" showRadialGradient={false}>
      <div className="relative z-10 w-full">
        <Header />
        <main className="w-full">
          <AboutUsSection />
        </main>
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default AboutUs;
