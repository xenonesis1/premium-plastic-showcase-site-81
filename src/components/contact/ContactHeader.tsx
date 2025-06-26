
import { motion } from "framer-motion";

interface ContactHeaderProps {
  isInView: boolean;
}

export const ContactHeader = ({ isInView }: ContactHeaderProps) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Contact <span className="text-blue-600">Us</span>
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Ready to discuss your artificial leather requirements? Get in touch with our team 
        for expert consultation and competitive quotes.
      </p>
    </motion.div>
  );
};
