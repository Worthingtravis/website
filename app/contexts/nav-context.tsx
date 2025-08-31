"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useScrollContext } from "./scroll-context";

interface NavContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const { scrollY } = useScrollContext();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = scrollY + 100;

    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(`#${section.id}`);
      }
    });
  }, [scrollY]);

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
} 