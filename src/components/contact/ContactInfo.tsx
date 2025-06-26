
import { motion } from "framer-motion";

interface ContactInfoProps {
  isInView: boolean;
}

export const ContactInfo = ({ isInView }: ContactInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Get In Touch
      </h3>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
            📍
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Work Location</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Delhi NCR<br />
              (Work From Home based)<br />
              India
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
            📞
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
            <p className="text-gray-600 dark:text-gray-300">
              +91 9810765284
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
            ✉️
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
            <p className="text-gray-600 dark:text-gray-300">
              contact@toptexvinyl.com
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4 flex-shrink-0">
            🕒
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Monday - Saturday: 9:00 AM - 6:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
