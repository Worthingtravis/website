"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

// Cursor Configuration
const CURSOR_CONFIG = {
  // Dimensions
  defaultSize: 20,

  // Colors
  defaultSpotlightColor: "255, 255, 255",
  hoveredElementColor: "rgba(255, 255, 255, 0)",

  // Spotlight Effect
  spotlightOuterGlowSize: "50px",
  spotlightOuterGlowSpread: "20px",
  spotlightOuterGlowOpacity: 0.15,
  spotlightInnerGlowSize: "2px",
  spotlightInnerGlowSpread: "2px",
  spotlightInnerGlowOpacity: 0.3,

  // Animation
  springConfig: {
    mass: 0.1,
    stiffness: 1000,
    damping: 20,
  },
} as const;

interface MousePosition {
  x: number;
  y: number;
  width: number;
  height: number;
  specialElement: HTMLElement | null;
  isVisible: boolean;
}

const useMousePosition = (ref: MutableRefObject<HTMLElement | null>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    width: CURSOR_CONFIG.defaultSize,
    height: CURSOR_CONFIG.defaultSize,
    specialElement: null,
    isVisible: false,
  });

  useEffect(() => {
    if (!ref.current) return;

    const updatePosition = (
      clientX: number,
      clientY: number,
      target: HTMLElement | null,
    ) => {
      if (target) {
        const rect = target.getBoundingClientRect();
        setMousePosition({
          x: rect.left + rect.width / 2.5,
          y: rect.top + rect.height / 2.5,
          width: rect.width,
          height: rect.height,
          specialElement: target,
          isVisible: true,
        });
      } else {
        setMousePosition({
          x: clientX - CURSOR_CONFIG.defaultSize / 2,
          y: clientY - CURSOR_CONFIG.defaultSize / 2,
          width: CURSOR_CONFIG.defaultSize,
          height: CURSOR_CONFIG.defaultSize,
          specialElement: null,
          isVisible: true,
        });
      }
    };

    const onMouseMove = (
      event: MouseEvent & { clientX: number; clientY: number } & {
        target: HTMLElement | null;
      },
    ) => {
      const { clientX, clientY } = event;
      const target = event.target?.closest(
        "[data-cursor]",
      ) as HTMLElement | null;
      updatePosition(clientX, clientY, target);

    };

    const onMouseLeave = () => {
      setMousePosition((prev) => ({ ...prev, isVisible: false }));
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref]);

  return mousePosition;
};

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { x, y, width, height, specialElement, isVisible } =
    useMousePosition(ref);

  const variants = {
    default: {
      x,
      y,
      width: 20,
      height: 20,
      scale: 1,
      opacity: isVisible ? 1 : 0,
    },
    element: {
      x: x - width / 2,
      y: y - height / 2,
      width: width * 1.2,
      height: height * 1.2,
      scale: 1,
      opacity: isVisible ? 1 : 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "pointer-events-none fixed top-0 left-0 md:flex hidden origin-center justify-center transition-colors",
        specialElement
          ? "z-[51] rounded-xl bg-black mix-blend-screen blur"
          : "z-50 rounded-full",
      )}
      initial={{ opacity: 0 }}
      animate={specialElement ? "element" : "default"}
      variants={variants}
      transition={{
        type: "spring",
        ...CURSOR_CONFIG.springConfig,
      }}
      style={{
        boxShadow: `0 0 ${CURSOR_CONFIG.spotlightOuterGlowSize} ${CURSOR_CONFIG.spotlightOuterGlowSpread} rgba(${CURSOR_CONFIG.defaultSpotlightColor}, ${CURSOR_CONFIG.spotlightOuterGlowOpacity})`,
      }}
    />
  );
};

export default CustomCursor;
