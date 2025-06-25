
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <Pen className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
      title: "PVC Flooring",
      description:
        "Superior flooring solutions for bus transport, metros, auto and rail applications. Heavy-duty, anti-slip, and fire-resistant materials designed for high-traffic environments.",
      position: "left",
    },
    {
      icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
      title: "PVC Leather",
      description:
        "Premium artificial leather for automotive and transport industries. UV resistant, easy to clean, and available in various textures and colors for seating solutions.",
      position: "left",
    },
    {
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
      title: "PVC Film & Sheeting",
      description:
        "Specialized films for automotive, interiors, and healthcare applications. Medical grade, flexible, and chemical resistant materials for various industrial uses.",
      position: "left",
    },
    {
      icon: <PaintBucket className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
      title: "Wallpaper Solutions",
      description:
        "Self-adhesive films for car wrapping, exterior and interior decoration. Weather-resistant, bubble-free application, and removable adhesive options.",
      position: "right",
    },
    {
      icon: <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
      title: "Pool Liners",
      description:
        "Premium pool liners and water feature solutions. UV resistant, chemical resistant, leak-proof materials for residential and commercial swimming pools.",
      position: "right",
    },
    {
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      secondaryIcon: <Star className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-green-400 dark:text-green-300" />,
      title: "PVC Geomembrane",
      description:
        "Underground structure waterproofing solutions. Heavy-duty membranes for foundation protection, root resistant, and puncture-proof materials.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, value: 500, label: "Products Manufactured", suffix: "+" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, value: 2500, label: "Global Clients", suffix: "+" },
    { icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />, value: 32, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, value: 99, label: "Quality Assurance", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-green-500/5 dark:bg-green-400/5 blur-2xl sm:blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 rounded-full bg-blue-500/5 dark:bg-blue-400/5 blur-2xl sm:blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 rounded-full bg-green-500/30 dark:bg-green-400/30"
        animate={{
          y: [0, -10, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 rounded-full bg-blue-500/30 dark:bg-blue-400/30"
        animate={{
          y: [0, 15, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

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
            ABOUT PREMIER LEATHERCOM
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-center text-gray-900 dark:text-white">
            PVC Manufacturing Excellence
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
          Since 1992, Premier LeatherCom has been a leading manufacturer of high-quality PVC products serving automotive, transport, construction, and industrial sectors. Our ISO-certified facility delivers innovative solutions with uncompromising quality standards.
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
          <div className="flex justify-center items-center order-first lg:order-none mb-12 lg:mb-0">
            <motion.div className="relative w-full max-w-sm lg:max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Premier LeatherCom Manufacturing"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end justify-center p-4 sm:p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Products <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-2 sm:border-4 border-green-500/20 dark:border-green-400/20 rounded-lg -m-2 sm:-m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-2 sm:-top-4 -right-4 sm:-right-8 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 rounded-full bg-green-500/10 dark:bg-green-400/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-3 sm:-bottom-6 -left-5 sm:-left-10 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 rounded-full bg-blue-500/15 dark:bg-blue-400/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-600 dark:bg-green-400"
                animate={{
                  y: [0, -8, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                animate={{
                  y: [0, 8, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

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
            <h3 className="text-xl sm:text-2xl font-medium mb-2">Ready to explore our PVC solutions?</h3>
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

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-green-600 dark:text-green-400 bg-green-500/10 dark:bg-green-400/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-green-500/20 dark:group-hover:bg-green-400/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed pl-12 sm:pl-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 sm:pl-16 flex items-center text-green-600 dark:text-green-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-200/20 dark:border-gray-700/20"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-full bg-gray-900/5 dark:bg-gray-100/5 flex items-center justify-center mb-3 sm:mb-4 text-green-600 dark:text-green-400 group-hover:bg-green-500/10 dark:group-hover:bg-green-400/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
      <motion.div className="w-8 sm:w-10 h-0.5 bg-green-600 dark:bg-green-400 mt-2 sm:mt-3 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}
