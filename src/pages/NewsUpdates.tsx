
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NewsUpdates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const newsItems = [
    {
      title: "New PVC Leather Production Line Inaugurated",
      date: "December 15, 2024",
      excerpt: "Premier LeatherCom has launched its latest state-of-the-art production line for automotive-grade PVC leather, increasing capacity by 40%.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Manufacturing"
    },
    {
      title: "ISO 14001 Environmental Certification Achieved",
      date: "November 28, 2024",
      excerpt: "We are proud to announce our ISO 14001 certification, demonstrating our commitment to environmental management and sustainability.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Certification"
    },
    {
      title: "Expansion into European Markets",
      date: "October 20, 2024",
      excerpt: "Premier LeatherCom announces strategic expansion into European markets with new partnerships for PVC flooring solutions.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Business"
    },
    {
      title: "New Eco-Friendly Product Line Launch",
      date: "September 15, 2024",
      excerpt: "Introducing our new range of eco-friendly PVC products made from recycled materials, supporting circular economy principles.",
      image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Innovation"
    },
    {
      title: "Partnership with Leading Automotive Manufacturer",
      date: "August 10, 2024",
      excerpt: "Premier LeatherCom signs major supply agreement with leading automotive manufacturer for premium interior leather solutions.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Partnership"
    },
    {
      title: "Research & Development Center Expansion",
      date: "July 25, 2024",
      excerpt: "Investment in R&D capabilities with new testing equipment and expanded research facility to drive innovation in PVC technology.",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Innovation"
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
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="News & Updates"
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
              News & <span className="text-green-400">Updates</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay Updated with Latest Developments at Premier LeatherCom
            </motion.p>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-white dark:bg-gray-800" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Latest News
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <motion.article
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Read More
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsUpdates;
