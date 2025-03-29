"use client";

import { HeroSection } from "../heroSection";
import { AboutSection } from "../aboutSection";
import { ProjectsSection } from "../projectsSection";
import { ExperienceSection } from "@/experienceSection";
import { ContactSection } from "../contactSection";

export function HomePageClient() {
  return (
      <div className="flex min-h-screen flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
  );
} 