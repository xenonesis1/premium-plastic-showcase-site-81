
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
      title: "Upholstery",
      description: "Premium artificial leather for sofas, chairs, and furniture upholstery applications",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/upholstery"
    },
    {
      title: "Automotive",
      description: "High-quality car seat covers and automotive interior solutions",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/automotive"
    },
    {
      title: "Shoes",
      description: "Durable and stylish artificial leather for footwear manufacturing",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/shoes"
    },
    {
      title: "Belts",
      description: "Premium quality synthetic leather for belt manufacturing",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/belts"
    },
    {
      title: "Jackets",
      description: "High-grade artificial leather for fashion jackets and outerwear",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/jackets"
    },
    {
      title: "Office Chairs",
      description: "Professional grade synthetic leather for office and executive chairs",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/office-chairs"
    },
    {
      title: "Diary Covers",
      description: "Elegant artificial leather for diary covers and stationery applications",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/diary-covers"
    },
    {
      title: "Bean Bag Chairs",
      description: "Comfortable and durable synthetic leather for bean bag furniture",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/bean-bag-chairs"
    },
    {
      title: "Sports Equipment",
      description: "Specialized artificial leather for cricket pads, gloves, footballs, and sports gear",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      buttonText: "View All",
      href: "/sports-equipment"
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
            Our Products
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
