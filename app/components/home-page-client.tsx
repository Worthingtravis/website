"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "../heroSection";
import { AboutSection } from "../aboutSection";
import { ProjectsSection } from "../projectsSection";
import { ExperienceSection } from "@/experienceSection";
import { ContactSection } from "../contactSection";
import dynamic from "next/dynamic";

const ScrollTriggeredLottie = dynamic(() => import("./scroll-triggered-lottie").then(mod => ({ default: mod.ScrollTriggeredLottie })), {
  ssr: false,
});

export function HomePageClient() {
  const [astronautAnimation, setAstronautAnimation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load the astronaut-coffee Lottie animation JSON
    setIsLoading(true);
    fetch("/astronaut-coffee.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load astronaut animation");
        }
        return response.json();
      })
      .then((data) => {
        setAstronautAnimation(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load astronaut animation:", error);
        setIsLoading(false);
      });
  }, []);

  return (
      <div className="flex min-h-screen flex-col">
        <HeroSection />
        
        {/* Scroll-triggered astronaut animation */}
        {astronautAnimation && !isLoading && (
          <div 
            className="fixed bottom-4 right-4 z-50 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Scroll to top"
          >
            {/* Up arrow indicator */}
            <div className="flex justify-center mb-1 opacity-60 group-hover:opacity-80 transition-opacity duration-200">
              <svg 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
              >
                <path 
                  d="M6 0L11 6H1L6 0Z" 
                  fill="white" 
                  fillOpacity="0.8"
                />
              </svg>
            </div>
            
            {/* Astronaut animation */}
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
              <ScrollTriggeredLottie
                animationData={astronautAnimation}
                className="w-full h-full"
              />
            </div>
          </div>
        )}
        
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
  );
} 