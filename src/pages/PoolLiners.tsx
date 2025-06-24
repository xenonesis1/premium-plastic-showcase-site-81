
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PoolLiners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const poolProducts = [
    {
      title: "Swimming Pool Liners",
      description: "Premium PVC liners for residential and commercial swimming pools",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["UV resistant", "Chemical resistant", "Leak proof", "Easy installation"]
    },
    {
      title: "Pond Liners",
      description: "Heavy-duty liners for artificial ponds and water features",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Fish safe", "Flexible", "Puncture resistant", "Long lasting"]
    },
    {
      title: "Custom Pool Solutions",
      description: "Tailored pool lining solutions for unique requirements",
      image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Custom sizes", "Color options", "Thickness variety", "Professional fitting"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Pool Liners"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Swimming <span className="text-green-400">Pool Liners</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium Pool Liners and Water Feature Solutions
            </motion.p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-white dark:bg-gray-800" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Pool Liner Solutions
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {poolProducts.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoolLiners;
