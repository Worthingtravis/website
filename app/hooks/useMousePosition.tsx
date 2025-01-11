"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

// Cursor Configuration
const CURSOR_CONFIG = {
  defaultSize: 20,
  defaultSpotlightColor: "255, 255, 255",
  hoveredElementColor: "rgba(255, 255, 255, 0)",
  spotlightOuterGlowSize: "50px",
  spotlightOuterGlowSpread: "20px",
  spotlightOuterGlowOpacity: 0.15,
  springConfig: {
    mass: 0.4, // Slightly heavier for smoother easing
    stiffness: 500,
    damping: 30, // Higher damping for less bounce
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
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
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

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const target = (event.target as HTMLElement)?.closest(
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
      width: CURSOR_CONFIG.defaultSize,
      height: CURSOR_CONFIG.defaultSize,
      scale: 1,
      opacity: isVisible ? 1 : 0,
    },
    element: {
      x: x - width / 2,
      y: y - height / 2,
      width: width,
      height: height,
      scale: 1,
      opacity: isVisible ? 1 : 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div ref={ref}>
        <motion.div
          className={cn(
            "pointer-events-none fixed top-0 left-0 z-50 hidden origin-center justify-center md:flex ",
          )}
          initial={{ opacity: 0 }}
          animate={specialElement ? "element" : "default"}
          exit={{ opacity: 0, zIndex: -1 }}
          variants={variants}
          transition={{
            type: "spring",
            duration: 0.5, // Increased duration for a smoother effect
            ...CURSOR_CONFIG.springConfig,
          }}
          style={{
            boxShadow: `0 0 ${CURSOR_CONFIG.spotlightOuterGlowSize} ${CURSOR_CONFIG.spotlightOuterGlowSpread} rgba(${CURSOR_CONFIG.defaultSpotlightColor}, ${CURSOR_CONFIG.spotlightOuterGlowOpacity})`,
            backgroundColor: specialElement
              ? CURSOR_CONFIG.hoveredElementColor
              : `rgba(${CURSOR_CONFIG.defaultSpotlightColor}, 0.1)`,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomCursor;
