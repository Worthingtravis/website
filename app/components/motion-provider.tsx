"use client";

import { MotionConfig } from "framer-motion";
import { useMotionPreferences } from "./motion-preferences";

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const { prefersReducedMotion } = useMotionPreferences();

  return (
    <MotionConfig
      reducedMotion={prefersReducedMotion ? "always" : "never"}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: prefersReducedMotion ? 0.2 : 0.6,
      }}
    >
      {children}
    </MotionConfig>
  );
}
