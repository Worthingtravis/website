"use client";

import React from "react";
import { SlideIn } from "@/components/motion";
import { Section } from "@/components/section";
import { FadeIn, ScaleIn } from "@/components/motion";
import { Button } from "@/components/button";
import { SkipLink } from "@/components/accessibility";
import { useMotionPreferences } from "@/components/motion-preferences";
import { useAnalytics } from "@/hooks/use-analytics";
import { motion } from "framer-motion";

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
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/20 flex items-center justify-center blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="h-32 w-32 rounded-full bg-cyan-500/5 blur-lg" />
        </motion.div>
        <motion.div
          className="absolute right-1/3 bottom-1/3 h-72 w-72 rounded-full bg-indigo-500/20 flex items-center justify-center blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          role="presentation"
          aria-hidden="true"
        >
          <div className="h-36 w-36 rounded-full bg-indigo-500/5 blur-lg" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <FadeIn className="mx-auto max-w-4xl px-0 md:px-4 text-center">
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

          <div className="mt-12 mb-16 md:mb-0 flex flex-wrap justify-center gap-4 relative z-20">
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
    </Section>
  );
};
