
"use client"

import { useState, useEffect, useRef } from "react"
import { Zap, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ServiceItem } from "./about-us/ServiceItem"
import { StatCounter } from "./about-us/StatCounter"
import { DecorativeElements } from "./about-us/DecorativeElements"
import { CenterImage } from "./about-us/CenterImage"
import { services } from "./about-us/services-data"
import { stats } from "./about-us/stats-data"
import { containerVariants, itemVariants } from "./about-us/animation-variants"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden relative"
    >
      <DecorativeElements y1={y1} y2={y2} rotate1={rotate1} rotate2={rotate2} />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
          <motion.span
            className="text-green-600 dark:text-green-400 font-medium mb-2 flex items-center gap-2 text-sm sm:text-base"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            ABOUT TOPTEXVINYL
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-center text-gray-900 dark:text-white">
            Artificial Leather Excellence
          </h2>
          <motion.div
            className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-green-600 dark:bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p 
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed px-4" 
          variants={itemVariants}
        >
          ToptexVinyl is a trusted name in high-quality artificial leather, delivering unmatched quality for automotive, furniture, fashion, and sports industries. Our commitment to excellence and innovation has made us a preferred choice for businesses worldwide.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Left Column */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <CenterImage y1={y1} y2={y2} />

          {/* Right Column */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 sm:mt-20 bg-gray-900 dark:bg-gray-800 text-white p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-medium mb-2">Ready to explore our artificial leather solutions?</h3>
            <p className="text-white/80 text-sm sm:text-base">Let's discuss your manufacturing requirements.</p>
          </div>
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
