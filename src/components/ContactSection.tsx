
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";
import { ContactMap } from "./contact/ContactMap";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <ContactHeader isInView={isInView} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ContactInfo isInView={isInView} />
          <ContactForm isInView={isInView} />
        </div>

        <ContactMap isInView={isInView} />
      </div>
    </section>
  );
};

export default ContactSection;
