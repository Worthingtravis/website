"use client";

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

interface ScrollContextType {
  scrollY: number;
  isScrolling: boolean;
  scrollDirection: 'up' | 'down' | null;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  isScrolling: false,
  scrollDirection: null,
});

export const useScrollContext = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: React.ReactNode;
  debounceMs?: number;
}

export function ScrollProvider({ children, debounceMs = 150 }: ScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    const currentScrollY = window.scrollY;

    // Update scroll position
    setScrollY(currentScrollY);

    // Determine scroll direction
    if (currentScrollY > lastScrollYRef.current) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollYRef.current) {
      setScrollDirection('up');
    }

    // Set scrolling state
    setIsScrolling(true);

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set timeout to detect when scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      setScrollDirection(null);
    }, debounceMs);

    lastScrollYRef.current = currentScrollY;
  }, [debounceMs]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set initial scroll position
    lastScrollYRef.current = window.scrollY;
    setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY, isScrolling, scrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
}
