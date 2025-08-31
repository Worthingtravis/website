"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useScrollContext } from "@/contexts/scroll-context";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-gray-200/20 rounded" />
});

interface ScrollTriggeredLottieProps {
  animationData: Record<string, any>; // JSON animation data
  className?: string;
  triggerOffset?: number; // Offset from top of viewport to trigger animation
}

export function ScrollTriggeredLottie({ 
  animationData, 
  className = "",
  triggerOffset = 100 
}: ScrollTriggeredLottieProps) {
  const lottieRef = useRef<any>(null);
  const { isScrolling } = useScrollContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!lottieRef.current || !isClient) return;

    if (isScrolling) {
      // Start playing when scrolling
      lottieRef.current.play();
    } else {
      // Stop playing when scrolling stops
      lottieRef.current.stop();
    }
  }, [isScrolling, isClient]);

  if (!isClient) {
    return (
      <div className={`w-full h-full animate-pulse bg-gray-200/20 rounded ${className}`} />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isScrolling ? 0.9 : 0.85, // More opaque when idle (85%)
        scale: 1 
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={isScrolling} // Only loop while scrolling
        autoplay={false} // We control playback manually
        className="w-full h-full"
      />
    </motion.div>
  );
}
