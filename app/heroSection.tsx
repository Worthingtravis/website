"use client";

import React from "react";
import { IconBrandReact, IconBrandNextjs, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SlideIn } from "@/components/motion";
import { Section } from "@/components/section";
import { FadeIn, ScaleIn } from "@/components/motion";
import { Button } from "@/components/button";
import { SkipLink } from "@/components/accessibility";
import { useMotionPreferences } from "@/components/motion-preferences";
import { useAnalytics } from "@/hooks/use-analytics";

export const HeroSection = () => {
  const { prefersReducedMotion } = useMotionPreferences();
  const { trackEvent } = useAnalytics();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      trackEvent("section_scroll", { sectionId });
    }
  };

  return (
    <Section id="hero" fullHeight className="relative overflow-hidden">
      <SkipLink />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-xl"
          role="presentation"
          aria-hidden="true"
        />
        <div
          className="absolute right-1/3 bottom-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-xl"
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10">
        <FadeIn className="mx-auto max-w-4xl px-4 text-center">
          <ScaleIn className="mb-4 inline-block">
            <div className="relative inline-block">
              <span className="font-mono text-sm tracking-wider text-cyan-400 md:text-base">
                Hello, I&#39;m
              </span>
            </div>
          </ScaleIn>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Travis Worthing
          </h1>

          <h2 className="mb-8 text-2xl font-light text-cyan-400 md:text-3xl">
            Senior Full-Stack Developer
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            I build exceptional digital experiences with a focus on modern React applications
            and web3 integrations. Specializing in fast-paced startup environments where
            quality and speed are essential.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              aria-label="View my work"
              className="focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              aria-label="Get in touch"
              className="focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get In Touch
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Tech stack icons - subtle in background */}
      <div
        className="absolute right-0 bottom-20 left-0 flex justify-center gap-6 opacity-50"
        role="presentation"
        aria-hidden="true"
      >
        <div className="flex gap-6 rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-3xl text-cyan-500 cursor-help" aria-hidden="true">
                  <IconBrandReact />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>React</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-3xl text-gray-300 cursor-help" aria-hidden="true">
                  <IconBrandNextjs />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next.js</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-3xl text-blue-400 cursor-help" aria-hidden="true">
                  <IconBrandTailwind />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-3xl text-blue-600 cursor-help" aria-hidden="true">
                  <IconBrandTypescript />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        role="presentation"
        aria-hidden="true"
      >
        <button
          onClick={() => scrollToSection("#about")}
          className="text-gray-400 transition-colors duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </Section>
  );
};
