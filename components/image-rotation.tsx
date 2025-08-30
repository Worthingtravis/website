"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface ImageRotationProps {
  frontImage: {
    src: string;
    alt: string;
  };
  backImage: {
    src: string;
    alt: string;
  };
  className?: string;
  rotationFactor?: number;
  transitionDuration?: number;
  gradientColor?: string;
}

export const ImageRotation = ({
  frontImage,
  backImage,
  className = "",
  rotationFactor = 1,
  transitionDuration = 500,
  gradientColor = "ring-cyan-500/20",
}: ImageRotationProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.7, once: false });

  const variants = {
    hidden: { rotateY: 0 },
    visible: { rotateY: 180 },
    exit: { rotateY: 0 }
  };

  return (
    <div 
      ref={ref}
      className={`relative aspect-square w-full max-w-md mx-auto ${className}`}
    >
      <motion.div 
        className="relative w-full h-full cursor-pointer"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        transition={{ duration: transitionDuration / 1000, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        style={{ 
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front (Spill) */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src={backImage.src}
            alt={backImage.alt}
            width={500}
            height={500}
            className={`w-full h-full object-cover rounded-2xl shadow-2xl ring-4 ${gradientColor}`}
            priority
          />
        </div>
        {/* Back (Clean) */}
        <div 
          className="absolute inset-0"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <Image
            src={frontImage.src}
            alt={frontImage.alt}
            width={500}
            height={500}
            className={`w-full h-full object-cover rounded-2xl shadow-2xl ring-4 ${gradientColor}`}
          />
        </div>
      </motion.div>
    </div>
  );
}; 