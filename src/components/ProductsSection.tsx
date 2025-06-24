
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const products = [
    {
      title: "Range of PVC Flooring",
      description: "Superior Flooring Solutions for Bus Transport, Metros, Our Premier, Auto and Rail Flooring - Full Sizes - Printing & Quality Flooring",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/pvc-flooring"
    },
    {
      title: "PVC Leather",
      description: "Serving the Automotive & Transport Industries PVC Artificial Leather - Seating & Interiors",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/pvc-leather"
    },
    {
      title: "PVC Film & Sheeting",
      description: "For the Automotive, Interiors, Healthcare and general household applications",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/pvc-film"
    },
    {
      title: "Wallpaper",
      description: "Self Adhesive Films- Car Wrapping, Exterior and Interior Decoration Wallpapers",
      image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/wallpaper"
    },
    {
      title: "Pool Liners",
      description: "Pool Liners and Many More",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/pool-liners"
    },
    {
      title: "PVC Geomembrane",
      description: "Underground Structure Water Proofing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/pvc-geomembrane"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Product Range
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => navigate(product.href)}
                >
                  {product.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
