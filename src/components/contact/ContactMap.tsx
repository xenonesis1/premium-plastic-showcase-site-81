
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
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us Here
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8972643147975!2d77.45559858548213!3d28.653067282407334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3d3d3d3d3d%3A0x3d3d3d3d3d3d3d3d!2s28%C2%B039'11.0%22N%2077%C2%B027'29.4%22E!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ToptexVinyl Location"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
