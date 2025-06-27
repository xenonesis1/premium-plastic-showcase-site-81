
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, Shield, Palette, Award, CheckCircle, Star } from "lucide-react";

const Belts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "High Tensile Strength", description: "Built to withstand daily wear and tear" },
    { icon: <Palette className="w-6 h-6" />, title: "Scratch Resistant", description: "Maintains pristine appearance over time" },
    { icon: <Award className="w-6 h-6" />, title: "Multiple Textures", description: "Various finishes for different style preferences" },
    { icon: <Zap className="w-6 h-6" />, title: "Color Variety", description: "Extensive range of colors and patterns" }
  ];

  const beltTypes = [
    { icon: <CheckCircle className="w-5 h-5" />, name: "Formal Belts", description: "Professional grade for business attire" },
    { icon: <CheckCircle className="w-5 h-5" />, name: "Casual Belts", description: "Comfortable everyday wear options" },
    { icon: <CheckCircle className="w-5 h-5" />, name: "Designer Belts", description: "Premium fashion-forward designs" },
    { icon: <CheckCircle className="w-5 h-5" />, name: "Industrial Belts", description: "Heavy-duty applications and machinery" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-green-600 via-green-700 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Premium Quality</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Belt Manufacturing
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium quality synthetic leather specifically engineered for belt manufacturing with superior durability and style
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => navigate('/contact-us')}
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Sample Kit
              </Button>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Industry Leading Quality</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Product Section */}
        <section className="py-24" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Premium Belt Leather
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Engineered for excellence, our synthetic leather delivers unmatched performance for all belt manufacturing needs
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden max-w-7xl mx-auto hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Premium Belt Leather"
                    className="w-full h-80 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-6 h-6 text-green-600" />
                    <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Industry Standard</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                    Superior Synthetic Leather
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                    Our high-quality artificial leather is specifically designed for belt manufacturing, offering excellent durability, flexibility, and aesthetic appeal for both casual and formal applications.
                  </p>

                  <div className="grid gap-6 mb-8">
                    <div>
                      <h4 className="font-bold mb-4 text-xl text-gray-900 dark:text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                            <div className="text-green-600 mt-1">{feature.icon}</div>
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-4 text-xl text-gray-900 dark:text-white flex items-center gap-2">
                        <Palette className="w-5 h-5 text-blue-600" />
                        Belt Applications
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {beltTypes.map((type, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
                            <div className="text-blue-600 mt-1">{type.icon}</div>
                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-white">{type.name}</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300">{type.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => navigate('/contact-us')}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Request Samples & Detailed Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Belts;
