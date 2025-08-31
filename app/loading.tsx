"use client";

import { motion } from "framer-motion";
import { useMotionPreferences } from "@/components/motion-preferences";

export default function Loading() {
  const { prefersReducedMotion } = useMotionPreferences();

  const curtainVariants = {
    initial: { 
      scaleY: 1,
      opacity: 1
    },
    animate: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.12, 0, 0.39, 0],
        delay: prefersReducedMotion ? 0 : 0.5, // Brief delay to show content
      },
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 origin-top z-[9999] flex items-center justify-center"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
    >
      {/* Loading Content */}
      <motion.div
        className="text-center"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Travis
            <br />
            <span className="text-[#00E5FF]">Worthing</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-light">
            Senior Full-Stack Developer
          </p>
        </div>

        {/* Loading Animation */}
        {!prefersReducedMotion && (
          <div className="flex items-center justify-center space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-[#00E5FF] rounded-full"
                animate={{
                  y: [-10, 0, -10],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-600 to-gray-700" />
      <div className="absolute top-0 left-4 w-2 h-6 bg-gray-600 rounded-b" />
      <div className="absolute top-0 right-4 w-2 h-6 bg-gray-600 rounded-b" />
    </motion.div>
  );
}
