
"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { itemVariants } from "./animation-variants"

interface CenterImageProps {
  y1: any
  y2: any
}

export function CenterImage({ y1, y2 }: CenterImageProps) {
  return (
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
  )
}
