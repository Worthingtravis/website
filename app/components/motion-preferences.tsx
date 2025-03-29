import React, { createContext, useContext, useEffect, useState } from "react";

interface MotionPreferencesContextType {
  prefersReducedMotion: boolean;
}

const MotionPreferencesContext = createContext<MotionPreferencesContextType>({
  prefersReducedMotion: false,
});

export const useMotionPreferences = () => useContext(MotionPreferencesContext);

export const MotionPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <MotionPreferencesContext.Provider value={{ prefersReducedMotion }}>
      {children}
    </MotionPreferencesContext.Provider>
  );
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 }
  },
  scaleIn: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3 }
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.3 }
  }
}; 