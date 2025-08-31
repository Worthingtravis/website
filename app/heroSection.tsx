"use client";

import { SkipLink } from "@/components/accessibility";
import { Button } from "@/components/button";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("@/components/lottie-animation"), {
  ssr: false,
  loading: () => null, // We'll handle loading state ourselves
});

import { FadeIn, ScaleIn } from "@/components/motion";
import { useMotionPreferences } from "@/components/motion-preferences";
import { Section } from "@/components/section";
import { useNavContext } from "@/contexts/nav-context";
import { useAnalytics } from "@/hooks/use-analytics";
import { useCoffeeLottie } from "@/hooks/use-lottie-data";
import { useInView, useScroll } from "framer-motion";
import React from "react";

export const HeroSection = () => {
  const { prefersReducedMotion } = useMotionPreferences();
  const { trackEvent } = useAnalytics();
  const { scrollY } = useScroll();
  const { activeSection } = useNavContext();
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  const prevSectionRef = React.useRef(activeSection);
  
  // Use the new data fetching hook
  const { data: animationData, isLoading, error } = useCoffeeLottie();

  React.useEffect(() => {
    if (activeSection !== prevSectionRef.current) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 500);
      return () => clearTimeout(timer);
    }
    prevSectionRef.current = activeSection;
  }, [activeSection]);

  const scrollToSection = React.useCallback(
    (sectionId: string) => {
      if (typeof document === "undefined") return;
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        trackEvent("section_scroll", { sectionId });
      }
    },
    [prefersReducedMotion, trackEvent]
  );

  return (
    <Section id="hero" fullHeight className="relative overflow-hidden lg:overflow-visible">
      <SkipLink />

      <div className="mx-auto flex h-full max-w-7xl items-center px-6">
        {/* Main content with floating animation */}
        <div className="relative z-10 text-left w-full max-w-4xl">
          <FadeIn className="max-w-xl">
            <ScaleIn className="mb-6 inline-block">
              <div className="relative inline-block">
                <span className="font-mono text-sm tracking-wider text-[#00E5FF] md:text-base">
                  Hello, I&#39;m
                </span>
              </div>
            </ScaleIn>

            <div className="relative mb-6">
              <h1 className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
                Travis
                <br />
                Worthing
              </h1>
              
              {/* Floating Lottie Animation */}
              <div className="absolute -top-4 -right-16 sm:-right-24 md:-right-32 lg:-right-48 xl:-right-152 2xl:-right-152 z-20 pointer-events-none">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-152 xl:h-152 2xl:w-152 2xl:h-152">
                  {error ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">☕</div>
                        <p className="text-gray-400 text-xs">Failed to load</p>
                      </div>
                    </div>
                  ) : animationData ? (
                    <LottieAnimation
                      animationData={animationData}
                      className="w-full h-full opacity-90"
                    />
                  ) : null}
                </div>
              </div>
            </div>

            <h2 className="mb-8 text-2xl font-light text-[#00E5FF] md:text-3xl">
              Senior Full-Stack Developer
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-gray-300/90 md:text-xl">
              I build exceptional digital experiences with a focus on modern
              React applications and web3 integrations. Specializing in
              fast-paced startup environments where quality and speed are
              essential.
            </p>

            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                aria-label="View my work"
                className="rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0066FF] px-8 py-3 font-medium text-black transition-all duration-300 hover:from-[#00E5FF] hover:to-[#0052CC] hover:shadow-lg hover:shadow-cyan-500/20"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                aria-label="Get in touch"
                className="rounded-full border-2 border-[#00E5FF] px-8 py-3 text-[#00E5FF] transition-all duration-300 hover:bg-[#00E5FF]/10"
              >
                Get In Touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
