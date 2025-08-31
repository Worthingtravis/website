"use client";

import { HeroSection } from "../heroSection";
import { AboutSection } from "../aboutSection";
import { ProjectsSection } from "../projectsSection";
import { ExperienceSection } from "@/experienceSection";
import { ContactSection } from "../contactSection";
import { ScrollableNavigationButton } from "./scrollable-navigation-button";
import { Suspense } from "react";

export function HomePageClient() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <Suspense fallback={<></>}>
        <ScrollableNavigationButton />
      </Suspense>

      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
