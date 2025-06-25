
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Droplets, Building, CheckCircle } from "lucide-react";

const PVCGeomembrane = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const geomembraneProducts = [
    {
      title: "Foundation Waterproofing",
      description: "Heavy-duty PVC geomembrane for basement and foundation protection",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Root resistant", "Chemical resistant", "Flexible installation", "Long-term durability"],
      applications: ["Building foundations", "Basement walls", "Underground structures", "Parking garages"]
    },
    {
      title: "Tunnel Waterproofing",
      description: "Specialized membranes for tunnel construction and underground infrastructure",
      image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["High tensile strength", "Puncture resistant", "UV stabilized", "Weldable seams"],
      applications: ["Road tunnels", "Railway tunnels", "Metro systems", "Underground passages"]
    },
    {
      title: "Industrial Containment",
      description: "Heavy-duty containment solutions for industrial and environmental applications",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Chemical compatibility", "Leak-proof design", "Custom fabrication", "Environmental safe"],
      applications: ["Waste containment", "Water treatment", "Chemical storage", "Landfill liners"]
    }
  ];

  const benefits = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Complete Waterproofing",
      description: "100% waterproof barrier for underground structures"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Chemical Resistance", 
      description: "Resistant to acids, alkalis, and harsh chemicals"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Structural Protection",
      description: "Protects concrete and steel from water damage"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Long-term Solution",
      description: "Designed for 50+ years of reliable performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="PVC Geomembrane"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-green-400">PVC Geomembrane</span> Solutions
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Underground Structure Waterproofing & Environmental Protection Systems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base">
                Explore Solutions
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Advanced Waterproofing Technology
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-green-600 dark:text-green-400 mb-3 sm:mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Geomembrane Applications
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive waterproofing solutions for critical infrastructure projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {geomembraneProducts.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Applications:</h4>
                      <ul className="space-y-1">
                        {product.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                      Get Technical Data
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Specifications
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our PVC geomembranes meet and exceed international standards for waterproofing performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Thickness Range</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• 1.0mm - 2.5mm standard</li>
                  <li>• Custom thickness available</li>
                  <li>• Reinforced options</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Tensile strength: 15-25 N/mm</li>
                  <li>• Elongation: 200-300%</li>
                  <li>• Temperature: -30°C to +60°C</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Standards</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• EN 13361 compliant</li>
                  <li>• ASTM D6392 tested</li>
                  <li>• CE marked products</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Protect Your Infrastructure Investment
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get expert consultation on waterproofing solutions tailored to your project requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold">
                Contact Engineering Team
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PVCGeomembrane;
