
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Car, Shield, Droplets, Sun, Palette, Star } from "lucide-react";

const Automotive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const products = [
    {
      title: "Premium Car Seat Covers",
      description: "Transform your vehicle's interior with our premium artificial leather seat covers designed for ultimate comfort and durability",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        { icon: <Droplets className="w-5 h-5" />, text: "Water Resistant Technology" },
        { icon: <Shield className="w-5 h-5" />, text: "Easy Installation Process" },
        { icon: <Car className="w-5 h-5" />, text: "Perfect Custom Fit" },
        { icon: <Sun className="w-5 h-5" />, text: "UV Protection Shield" }
      ],
      benefits: [
        "Enhanced driving comfort",
        "Long-lasting durability",
        "Easy maintenance",
        "Professional appearance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Car className="w-5 h-5" />
              <span className="text-sm font-medium">Automotive Excellence</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Automotive Solutions
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium car seat covers and automotive interior solutions that combine style, comfort, and durability for the modern driver
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
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Instant Quote
              </Button>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Trusted by 1000+ Customers</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Products Section */}
        <section className="py-24" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Premium Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our range of high-quality automotive leather solutions designed to elevate your driving experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-12 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-80 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 lg:p-12">
                      <div className="flex items-center gap-2 mb-4">
                        <Palette className="w-6 h-6 text-red-600" />
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Premium Quality</span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-lg text-gray-900 dark:text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <div className="text-red-600">{feature.icon}</div>
                              <span className="font-medium">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-lg text-gray-900 dark:text-white">Benefits:</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button
                        onClick={() => navigate('/contact-us')}
                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                      >
                        Request Sample & Quote
                      </Button>
                    </div>
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

export default Automotive;
