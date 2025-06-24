
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "30+", label: "Years of Experience" },
    { number: "5000+", label: "Clients Served" },
    { number: "Manufacturing", label: "Excellence" },
    { number: "Our Capabilities", label: "Diverse Applications" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-green-600 text-white px-4 py-2 rounded-md inline-block mb-4">
              Since 1992
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Premier LeatherCom Ltd.
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              India's Leading Manufacturer Of Artificial Leather
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              An ISO: 9001-2015 Certified Company
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Premier LeatherCom Ltd. Incorporated in 1992 by Shri A.N. GOENKA, a veteran in the industry.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Premier LeatherCom Ltd. #1 manufacturer of Specialty Calendered Films and Sheets. Our Products Include:
            </p>

            <div className="space-y-3">
              {[
                "Artificial Leather for the transport industry",
                "PVC Films & Printed sheeting for the automotive, interiors, Healthcare and general household applications",
                "PVC floorings for Transport, Rail and Commercial Applications",
                "Self Adhesive Films- Car Wrapping, Exterior and Interior Decoration Wallpapers",
                "PVC Geomembranes - Underground Structure Water Proofing",
                "Swimming Pool Liners and Roofing Sheets"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
