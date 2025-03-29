import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewport?: boolean;
}

export const FadeIn = ({ children, className = "", delay = 0, viewport = true }: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    delay,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      })}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, className = "", delay = 0, viewport = true }: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 0.7,
    delay,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      })}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className = "", delay = 0, viewport = true }: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const transition = {
    duration: 0.5,
    delay,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      })}
    >
      {children}
    </motion.div>
  );
}; 