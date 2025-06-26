
import { motion } from "framer-motion";

interface ContactMapProps {
  isInView: boolean;
}

export const ContactMap = ({ isInView }: ContactMapProps) => {
  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9511989544!2d76.76356251956677!3d28.64369750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sDelhi%20NCR!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </motion.div>
  );
};
