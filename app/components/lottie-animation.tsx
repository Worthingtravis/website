"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { LottieAnimationProps } from "types/lottie";

export default function LottieAnimation({ animationData, className = "" }: LottieAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full"
      />
    </motion.div>
  );
}
