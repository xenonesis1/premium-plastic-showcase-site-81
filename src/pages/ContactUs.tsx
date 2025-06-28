
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { EnhancedContactForm } from "@/components/contact/EnhancedContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AuroraBackground className="min-h-screen" showRadialGradient={false}>
      <div className="relative z-10 w-full">
        <Header />
        <main>
          <section className="py-20 bg-transparent" ref={ref}>
            <div className="container mx-auto px-4">
              <ContactHeader isInView={isInView} />

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <ContactInfo isInView={isInView} />
                <EnhancedContactForm isInView={isInView} />
              </div>

              <ContactMap isInView={isInView} />
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="8585850739" />
      </div>
    </AuroraBackground>
  );
};

export default ContactUs;
