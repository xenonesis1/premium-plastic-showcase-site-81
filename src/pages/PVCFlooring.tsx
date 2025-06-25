
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Zap } from "lucide-react";

const PVCFlooring = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const flooringProducts = [
    {
      title: "Bus Transport Flooring",
      description: "Heavy-duty PVC flooring designed specifically for public bus transport systems",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Anti-slip surface", "Fire retardant", "Easy maintenance", "High durability"],
      applications: ["City buses", "Tourist coaches", "School buses", "Airport shuttles"]
    },
    {
      title: "Metro & Rail Flooring",
      description: "Premium flooring solutions for metro trains and railway applications",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Sound dampening", "Vibration resistant", "Chemical resistant", "Low maintenance"],
      applications: ["Metro trains", "High-speed rails", "Suburban trains", "Tram systems"]
    },
    {
      title: "Automotive Flooring",
      description: "Specialized PVC flooring for automotive manufacturing and service industries",
      image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Oil resistant", "Heat resistant", "Anti-static", "Easy installation"],
      applications: ["Car manufacturing", "Service centers", "Showrooms", "Parts warehouses"]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fire Retardant",
      description: "Meets international safety standards for public transport"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Anti-Slip Technology",
      description: "Enhanced grip for passenger safety in all conditions"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "ISO Certified Quality",
      description: "Manufactured under strict quality control processes"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Long Lasting",
      description: "Designed to withstand heavy traffic and harsh conditions"
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
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="PVC Flooring"
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
              Premium <span className="text-green-400">PVC Flooring</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Superior Flooring Solutions for Bus Transport, Metro, Rail & Automotive Applications
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base">
                Get Quote Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Our PVC Flooring?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-green-600 dark:text-green-400 mb-3 sm:mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
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
                Our PVC Flooring Range
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Engineered for durability and performance in high-traffic environments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {flooringProducts.map((product, index) => (
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
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Features:</h4>
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
                      Request Details
                    </Button>
                  </div>
                </motion.div>
              ))}
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
              Ready to Upgrade Your Flooring?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact our experts for customized PVC flooring solutions that meet your specific requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold">
                Get Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PVCFlooring;
