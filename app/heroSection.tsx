"use client";

import { SkipLink } from "@/components/accessibility";
import { Button } from "@/components/button";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("@/components/lottie-animation"), {
  ssr: false,
});
import { FadeIn, ScaleIn } from "@/components/motion";
import { useMotionPreferences } from "@/components/motion-preferences";
import { Section } from "@/components/section";
import { useNavContext } from "@/contexts/nav-context";
import { useAnalytics } from "@/hooks/use-analytics";
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
  const [animationData, setAnimationData] = React.useState<Record<
    string,
    any
  > | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("/coffee.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load animation");
        }
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading animation:", error);
        setError("Failed to load animation");
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (activeSection !== prevSectionRef.current) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 500);
      return () => clearTimeout(timer);
    }
    prevSectionRef.current = activeSection;
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      trackEvent("section_scroll", { sectionId });
    }
  };

  return (
    <Section id="hero" fullHeight className="relative overflow-hidden">
      <SkipLink />

      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
        {/* Left column - Text content */}
        <div className="relative z-10 text-left lg:pl-8">
          <FadeIn className="max-w-xl">
            <ScaleIn className="mb-6 inline-block">
              <div className="relative inline-block">
                <span className="font-mono text-sm tracking-wider text-[#00E5FF] md:text-base">
                  Hello, I&#39;m
                </span>
              </div>
            </ScaleIn>

            <h1 className="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
              Travis
              <br />
              Worthing
            </h1>

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

        {/* Right column - Animation */}
        <div className="relative z-0 flex h-full items-center justify-center lg:z-10 lg:-mr-24">
          {isLoading && (
            <div className="absolute inset-0 h-full w-full animate-pulse bg-transparent" />
          )}
          {error && (
            <div className="absolute inset-0 h-full w-full bg-transparent" />
          )}
          {animationData && !isLoading && !error && (
            <LottieAnimation
              animationData={animationData}
              className="h-[300%] w-[300%] max-w-none opacity-90"
            />
          )}
        </div>
      </div>
    </Section>
  );
};
