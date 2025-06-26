
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BeanBagChairs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bean Bag Chairs
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comfortable and durable synthetic leather for bean bag furniture
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => navigate('/contact-us')}
                className="bg-white text-teal-600 hover:bg-gray-100"
              >
                Get Quote
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bean Bag Chair Leather"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-6">Bean Bag Chair Material</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  Specially designed artificial leather for bean bag chairs that combines comfort, durability, and easy maintenance. 
                  Perfect for creating modern and stylish casual seating solutions.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {["Ultra Soft Feel", "Easy to Clean", "Stretchable", "Child Safe"].map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Ideal For:</h4>
                    <ul className="space-y-2">
                      {["Home Furniture", "Gaming Chairs", "Kids Rooms", "Outdoor Use"].map((use, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button
                  onClick={() => navigate('/contact-us')}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                >
                  Request Samples & Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BeanBagChairs;
