
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      title: "Agriculture",
      description: "Crates for fruit & vegetable storage and transportation",
      icon: "🌾",
      color: "bg-green-100 dark:bg-green-900"
    },
    {
      title: "Pharmaceutical",
      description: "Clean room compliant storage solutions",
      icon: "💊",
      color: "bg-blue-100 dark:bg-blue-900"
    },
    {
      title: "Food & Beverage",
      description: "Food-grade containers and packaging solutions",
      icon: "🍎",
      color: "bg-orange-100 dark:bg-orange-900"
    },
    {
      title: "Logistics",
      description: "Heavy-duty pallets and transportation containers",
      icon: "🚛",
      color: "bg-purple-100 dark:bg-purple-900"
    },
    {
      title: "Retail",
      description: "Display containers and storage solutions",
      icon: "🏪",
      color: "bg-pink-100 dark:bg-pink-900"
    },
    {
      title: "Manufacturing",
      description: "Industrial bins and component storage systems",
      icon: "🏭",
      color: "bg-gray-100 dark:bg-gray-700"
    },
    {
      title: "Healthcare",
      description: "Medical grade storage and waste management",
      icon: "🏥",
      color: "bg-red-100 dark:bg-red-900"
    },
    {
      title: "Automotive",
      description: "Parts storage and assembly line containers",
      icon: "🚗",
      color: "bg-yellow-100 dark:bg-yellow-900"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our versatile plastic products cater to diverse industries, providing reliable solutions 
            that meet specific sector requirements and industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className={`${industry.color} p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-xl mb-6">
              We create custom solutions for unique industry requirements
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Discuss Your Needs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
