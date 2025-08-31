import React from "react";
import { motion, Variants, useReducedMotion, HTMLMotionProps } from "framer-motion";

interface BaseMotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewport?: boolean;
  duration?: number;
  staggerChildren?: number;
}

// Centralized animation variants for consistency
export const motionVariants = {
  fadeIn: {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  },
  slideIn: {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  },
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }
} as const satisfies Record<string, Variants>;

// Enhanced motion props interface
interface MotionProps extends BaseMotionProps {
  as?: keyof JSX.IntrinsicElements;
  motionProps?: Omit<HTMLMotionProps<"div">, "children" | "variants" | "initial" | "animate" | "whileInView">;
}

// Enhanced FadeIn component with better performance and flexibility
export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0, 
  viewport = true, 
  duration = 0.6,
  as = "div",
  motionProps = {}
}: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  // Use reduced motion variants when requested
  const variants = prefersReducedMotion 
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : motionVariants.fadeIn;

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  // Apply custom transition timing
  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any).transition,
        duration: prefersReducedMotion ? 0.2 : duration,
        delay
      }
    }
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      variants={customVariants}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-50px", amount: 0.1 },
      })}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
};

export const SlideIn = ({ 
  children, 
  className = "", 
  delay = 0, 
  viewport = true, 
  duration = 0.6,
  as = "div",
  motionProps = {}
}: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion 
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : motionVariants.slideIn;

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any).transition,
        duration: prefersReducedMotion ? 0.2 : duration,
        delay
      }
    }
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      variants={customVariants}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-50px", amount: 0.1 },
      })}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
};

export const ScaleIn = ({ 
  children, 
  className = "", 
  delay = 0, 
  viewport = true, 
  duration = 0.5,
  as = "div",
  motionProps = {}
}: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion 
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }
    : motionVariants.scaleIn;

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any).transition,
        duration: prefersReducedMotion ? 0.2 : duration,
        delay
      }
    }
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      variants={customVariants}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-50px", amount: 0.1 },
      })}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
};

// New stagger container component for coordinated animations
export const StaggerContainer = ({ 
  children, 
  className = "", 
  delay = 0, 
  staggerChildren = 0.1,
  viewport = true,
  as = "div",
  motionProps = {}
}: MotionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
        delayChildren: delay
      }
    }
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      variants={variants}
      {...(viewport && {
        whileInView: "visible",
        viewport: { once: true, margin: "-50px", amount: 0.1 },
      })}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
}; 