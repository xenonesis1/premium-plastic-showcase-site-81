
"use client"

import { motion, MotionValue } from "framer-motion"

interface DecorativeElementsProps {
  y1: MotionValue<number>
  y2: MotionValue<number>
  rotate1: MotionValue<number>
  rotate2: MotionValue<number>
}

export function DecorativeElements({ y1, y2, rotate1, rotate2 }: DecorativeElementsProps) {
  return (
    <>
      {/* Background elements */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-green-500/5 dark:bg-green-400/5 blur-2xl sm:blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 rounded-full bg-blue-500/5 dark:bg-blue-400/5 blur-2xl sm:blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      
      {/* Floating dots */}
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
    </>
  )
}
