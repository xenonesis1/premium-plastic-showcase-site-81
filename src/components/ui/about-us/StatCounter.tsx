
"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

export function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
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
          transition: { duration: 0.6, delay },
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
