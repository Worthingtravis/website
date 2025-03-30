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
  gradientColor = "from-coffee-500/20",
}: ImageRotationProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 1 });

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
        className="relative w-full h-full"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        transition={{ duration: transitionDuration / 1000, ease: "easeOut" }}
        style={{ 
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front (Spill) */}
        <div 
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${gradientColor} to-transparent rounded-2xl`} />
          <Image
            src={backImage.src}
            alt={backImage.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl"
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
          <div className={`absolute inset-0 bg-gradient-to-b ${gradientColor} to-transparent rounded-2xl`} />
          <Image
            src={frontImage.src}
            alt={frontImage.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
}; 