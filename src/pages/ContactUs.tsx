
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { EnhancedContactForm } from "@/components/contact/EnhancedContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
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
      <WhatsAppButton phoneNumber="919810765284" />
    </div>
  );
};

export default ContactUs;
