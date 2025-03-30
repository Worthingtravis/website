"use client";

import React from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/motion";
import { ImageRotation } from "../components/image-rotation";
import { IconCode, IconRocket, IconBrain } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { cn } from "@/lib/utils";

// Skill category type
type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Material-UI", "Three.js", "React Query"]
  },
  {
    title: "Web3",
    skills: ["Web3.js", "Ethers.js", "Wallet Integration", "dApp Development", "Avalanche", "Ethereum", "Solana", "NFT Platforms"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Laravel", "MySQL", "AWS", "API Integration"]
  }
];

const items = [
  {
    title: "Who I Am",
    description: (
      <div className="prose prose-invert max-w-none">
        <p className="text-sm lg:text-lg leading-relaxed text-gray-300">
          I&apos;m a seasoned full-stack developer specializing in React, TypeScript, and Web3 technologies.
          With experience in fast-paced startup environments, I excel at delivering high-quality applications
          while maintaining clean, scalable code.
        </p>
        <p className="text-sm lg:text-lg leading-relaxed text-gray-300">
          My expertise includes building intuitive user interfaces and implementing complex Web3 integrations
          across multiple blockchain platforms, from Ethereum to Solana.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconCode className="size-4 lg:size-6 text-cyan-400" />,
  },
  {
    description: (
      <div className="max-w-[240px] mx-auto lg:max-w-none">
        <ImageRotation
          frontImage={{
            src: "/smile-fixed.png",
            alt: "Travis Worthing - Fixed State"
          }}
          backImage={{
            src: "/hot.png",
            alt: "Travis Worthing - Fire State"
          }}
          rotationFactor={2}
          transitionDuration={500}
        />
      </div>
    ),
    className: "md:col-span-1 !bg-transparent !border-0 !shadow-none !p-0",
  },
  {
    title: "Quick Facts",
    description: (
      <div className="grid grid-cols-2 gap-2 lg:gap-3">
        <div className="space-y-1">
          <p className="text-xs text-cyan-400">Years Experience</p>
          <p className="text-xl lg:text-3xl font-bold text-white">8+</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-cyan-400">Cups of Coffee</p>
          <p className="text-xl lg:text-3xl font-bold text-white">∞</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-cyan-400">Spilled Coffees</p>
          <p className="text-xl lg:text-3xl font-bold text-white">6</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-cyan-400">Australian Shepherds</p>
          <p className="text-xl lg:text-3xl font-bold text-white">1</p>
        </div>
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconRocket className="size-4 lg:size-6 text-cyan-400" />,
  },
  {
    title: "Web3 Skills",
    description: (
      <div className="flex flex-wrap gap-1.5 lg:gap-2">
        {skillCategories[1].skills.map((skill) => (
          <span
            key={skill}
            className="px-2 lg:px-3 py-0.5 lg:py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconBrain className="size-4 lg:size-6 text-cyan-400" />,
  },
  {
    title: "Frontend Skills",
    description: (
      <div className="flex flex-wrap gap-1.5 lg:gap-2">
        {skillCategories[0].skills.map((skill) => (
          <span
            key={skill}
            className="px-2 lg:px-3 py-0.5 lg:py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconCode className="size-4 lg:size-6 text-cyan-400" />,
  },
  {
    title: "Backend Skills",
    description: (
      <div className="flex flex-wrap gap-1.5 lg:gap-2">
        {skillCategories[2].skills.map((skill) => (
          <span
            key={skill}
            className="px-2 lg:px-3 py-0.5 lg:py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconRocket className="size-4 lg:size-6 text-cyan-400" />,
  },
];

export const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="I craft digital experiences with code and coffee ☕"
      className="py-8 md:py-16"
    >
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </Section>
  );
};
