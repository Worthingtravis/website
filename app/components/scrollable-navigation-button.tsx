"use client";

import { Suspense, useState, useEffect } from "react";
import { useAstronautLottie } from "@/hooks/use-lottie-data";
import { ScrollTriggeredLottie } from "./scroll-triggered-lottie";
import { ClientOnlyWrapper } from "./client-only-wrapper";
import { useScrollContext } from "@/contexts/scroll-context";

interface ScrollableNavigationButtonProps {
  /** CSS classes to apply to the button container */
  className?: string;
  /** Size variant for the astronaut animation */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A floating navigation button with scroll-triggered astronaut animation.
 * Always shows both up and down arrows for navigation.
 */
export function ScrollableNavigationButton({ 
  className = "",
  size = "md"
}: ScrollableNavigationButtonProps) {
  // Use the astronaut animation data
  const { data: astronautAnimation, isLoading, error } = useAstronautLottie();
  
  // Use the centralized scroll context
  const { scrollY } = useScrollContext();

  // Available sections in order
  const sections = ['hero', 'about', 'projects', 'experience', 'contact'];

  // Get current section index based on scroll position
  const getCurrentSectionIndex = () => {
    if (typeof window === "undefined") return 0;
    
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    const scrollPosition = scrollY + 100; // Offset for header
    
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const section = sectionElements[i];
      if (section && scrollPosition >= section.offsetTop) {
        return i;
      }
    }
    return 0;
  };

  const currentSectionIndex = getCurrentSectionIndex();

  const handleUpClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownClick = () => {
    if (typeof window === "undefined") return;
    
    const nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    const nextSectionId = sections[nextSectionIndex];
    const nextSection = document.getElementById(nextSectionId);
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Size variants for the astronaut animation
  const sizeClasses = {
    sm: "w-12 h-12 md:w-16 md:h-16",
    md: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    lg: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
  };

  // Don't render if has error or no data
  if (error || !astronautAnimation || isLoading) {
    return null;
  }

  // Check if we're at the last section (disable down button)
  const isAtLastSection = currentSectionIndex >= sections.length - 1;

  return (
    <ClientOnlyWrapper>
      <div className={`fixed bottom-4 right-4 z-50 flex flex-col items-center ${className}`}>
        {/* Up arrow button - always visible, goes to top */}
        <button
          onClick={handleUpClick}
          className="flex justify-center mb-1 transition-all duration-300 ease-in-out opacity-60 hover:opacity-90 cursor-pointer group p-2"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm group-hover:scale-110 transition-transform"
          >
            <path 
              d="M6 0L11 6H1L6 0Z" 
              fill="white" 
              fillOpacity="0.8"
            />
          </svg>
        </button>
        
        {/* Astronaut animation */}
        <div className={sizeClasses[size]}>
          <Suspense fallback={null}>
            <ScrollTriggeredLottie
              animationData={astronautAnimation}
              className="w-full h-full"
            />
          </Suspense>
        </div>

        {/* Down arrow button - always visible, goes to next section */}
        <button
          onClick={handleDownClick}
          disabled={isAtLastSection}
          className={`flex justify-center -mt-1 transition-all duration-300 ease-in-out cursor-pointer group p-2 ${
            isAtLastSection 
              ? "opacity-30 cursor-not-allowed" 
              : "opacity-60 hover:opacity-90"
          }`}
          title={isAtLastSection ? "Already at last section" : "Scroll to next section"}
          aria-label={isAtLastSection ? "Already at last section" : "Scroll to next section"}
        >
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`drop-shadow-sm transition-transform ${
              !isAtLastSection ? "group-hover:scale-110" : ""
            }`}
          >
            <path 
              d="M6 8L1 2H11L6 8Z" 
              fill="white" 
              fillOpacity="0.8"
            />
          </svg>
        </button>
      </div>
    </ClientOnlyWrapper>
  );
}
