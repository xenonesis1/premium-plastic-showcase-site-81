
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsSection from "@/components/ui/about-us-section";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
