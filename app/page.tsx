"use client";

import React from "react";
import { HeroSection } from "@/heroSection";
import { AboutSection } from "@/aboutSection";
import { ProjectsSection } from "@/projectsSection";
import { Footer } from "@/footerSection";
import { ExperienceSection } from "@/experienceSection";
import { ContactSection } from "./contactSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
