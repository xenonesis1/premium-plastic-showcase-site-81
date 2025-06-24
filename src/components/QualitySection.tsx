
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const QualitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality standards",
      icon: "🏆"
    },
    {
      title: "ISO 14001",
      description: "Environmental Management System certification for sustainable practices",
      icon: "🌱"
    },
    {
      title: "Food Grade",
      description: "FDA approved materials for food contact applications",
      icon: "🍽️"
    },
    {
      title: "Export Quality",
      description: "International quality standards compliance for global markets",
      icon: "🌍"
    }
  ];

  const qualityPoints = [
    "Advanced injection molding technology",
    "Rigorous quality control processes",
    "Premium grade raw materials",
    "Sustainable manufacturing practices",
    "Comprehensive testing procedures",
    "Customer satisfaction guarantee"
  ];

  return (
    <section id="quality" className="py-20 bg-blue-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Quality & <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our certifications and quality assurance processes 
            that ensure every product meets the highest industry standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Quality Commitment
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At Premium LeatherCom, quality isn't just a goal—it's our foundation. We employ cutting-edge 
              technology and stringent quality control measures to ensure every product exceeds expectations.
            </p>
            
            <div className="space-y-4">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Quality Control"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Quality Tested</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
