"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

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
  const [isScrolling, setIsScrolling] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      
      // Only trigger if we're actually scrolling (not just at the same position)
      if (isScrollingDown || isScrollingUp) {
        setIsScrolling(true);
        setShouldPlay(true);

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Set a timeout to detect when scrolling stops
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
          setShouldPlay(false); // Stop playing when scrolling stops
        }, 150); // 150ms of no scroll activity = stopped scrolling
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!lottieRef.current) return;

    if (shouldPlay && isScrolling) {
      // Start playing when scrolling
      lottieRef.current.play();
    } else if (!shouldPlay) {
      // Stop playing when should not play
      lottieRef.current.stop();
    }
  }, [isScrolling, shouldPlay]);

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
