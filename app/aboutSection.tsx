"use client";

import React, { useState } from "react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/motion";
import { ImageRotation } from "../components/image-rotation";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  IconCode, 
  IconRocket, 
  IconBrain, 
  IconCoffee, 
  IconHeart, 
  IconSparkles,
  IconPaw,
  IconBrandGithub,
  IconWorld
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Story chapters data
const storyChapters = [
  {
    id: "origin",
    title: "The Grind Begins",
    emoji: "🎯",
    year: "Early Days",
    content: "Like many things worth mastering, programming didn't come easy at first. After barely passing that first Java class, everything clicked when a friend explained variables using salt and pepper shakers—suddenly the abstract became tangible. That drive to excel, whether on the basketball court or in code, meant grinding until concepts made sense.",
    highlight: "Persistence over perfection"
  },
  {
    id: "evolution", 
    title: "Finding My Edge",
    emoji: "♟️",
    year: "College Years",
    content: "Building a chess application with a talented partner showed me what was possible when you push beyond basic requirements. That competitive drive—wanting to be as efficient as the best programmers around me—became the foundation for everything that followed.",
    highlight: "Excellence through collaboration and competition"
  },
  {
    id: "mastery",
    title: "The Web3 Gateway", 
    emoji: "⛓️",
    year: "Professional Era",
    content: "While working on road safety analytics using crash data, a coffee meeting about a silver-backed token project opened the door to blockchain development. That introduction led to leading teams at Atomic47 Labs and delivering solutions for Sacred Finance, Ratio Software and other innovative startups.",
    highlight: "From data analysis to decentralized solutions"
  },
  {
    id: "personal",
    title: "The Human Side",
    emoji: "🏀",
    year: "Always",
    content: "A former college basketball athlete at UBC Okanagan, I bring teamwork, resilience and a hands-on mentoring leadership style to every project. Whether on the court or in code, it's about elevating the whole team's performance.",
    highlight: "Athlete mindset meets engineering excellence"
  }
];

// Enhanced skill categories with more metadata
type SkillCategory = {
  title: string;
  skills: string[];
  color: string;
  icon: React.ReactNode;
  description: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Wizardry",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Material-UI", "Three.js", "React Query"],
    color: "from-blue-500 to-cyan-500",
    icon: <IconCode className="size-5" />,
    description: "Pixel-perfect UIs backed by clean, maintainable code"
  },
  {
    title: "Web3 Innovation", 
    skills: ["Web3.js", "Ethers.js", "Multi-chain Wallets", "dApp Development", "NFT Marketplaces", "Ethereum", "Solana", "Blockchain Integrations"],
    color: "from-purple-500 to-pink-500",
    icon: <IconBrain className="size-5" />,
    description: "Scalable dApps and blockchain solutions"
  },
  {
    title: "Backend Architecture",
    skills: ["Node.js", "Express", "Laravel", "MySQL", "AWS", "API Integration", "LLM Integration"],
    color: "from-green-500 to-emerald-500", 
    icon: <IconRocket className="size-5" />,
    description: "Servers that scale and APIs that sing"
  }
];

// Professional stats
const coffeeStats = [
  { label: "Years of Experience", value: "8+", icon: <IconSparkles />, color: "text-cyan-400" },
  { label: "Location", value: "Kelowna, BC", icon: <IconWorld />, color: "text-blue-400" },
  { label: "Specialization", value: "Full-Stack", icon: <IconCode />, color: "text-purple-400" },
  { label: "College Athlete", value: "UBC", icon: <IconHeart />, color: "text-orange-400" }
];

// Interactive card component
const StoryCard = ({ chapter, index, isActive, onClick }: { 
  chapter: typeof storyChapters[0], 
  index: number, 
  isActive: boolean,
  onClick: () => void 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      className={cn(
        "relative p-6 rounded-2xl cursor-pointer transition-all duration-300",
        "bg-gradient-to-br from-black/40 to-black/60 border border-gray-800/50",
        "hover:border-cyan-500/50 group",
        isActive && "border-cyan-500 bg-gradient-to-br from-cyan-950/20 to-black/60"
      )}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{chapter.emoji}</div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {chapter.title}
          </h3>
          <p className="text-sm text-cyan-400 font-mono">{chapter.year}</p>
        </div>
      </div>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isActive ? "auto" : 0, 
          opacity: isActive ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 leading-relaxed mb-3">
          {chapter.content}
        </p>
        <p className="text-cyan-400 text-sm italic">
          {chapter.highlight}
        </p>
      </motion.div>
      
      {!isActive && (
        <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
          Click to read the story...
        </p>
      )}
    </motion.div>
  );
};

// Skill tag component with hover effects
const SkillTag = ({ skill, delay = 0 }: { skill: string, delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.1, y: -2 }}
    className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
               text-cyan-400 rounded-full text-sm border border-cyan-500/20
               hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-blue-500/20
               cursor-default transition-all duration-200"
  >
    {skill}
  </motion.span>
);

export const AboutSection = () => {
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <Section
      id="about"
      title="The Developer Behind the Code"
      subtitle="Senior engineer, team leader, and former college athlete building the future of Web3 🚀"
      className="py-8 md:py-16 relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero intro with rotating image */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Meet Travis Worthing
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A Kelowna-based software engineer with a Computer Science degree from UBC Okanagan. 
                Specializing in React, TypeScript, and Web3 development, with a competitive drive 
                for building clean, scalable solutions that make a difference.
              </p>
              <div className="flex items-center gap-4 text-cyan-400">
                <IconWorld className="size-5" />
                <span>Building scalable dApps with pixel-perfect UIs</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <ImageRotation
                  frontImage={{
                    src: "/smile-fixed.png",
                    alt: "Travis Worthing - Focused Developer"
                  }}
                  backImage={{
                    src: "/hot.png", 
                    alt: "Travis Worthing - Caffeinated Mode"
                  }}
                  rotationFactor={2}
                  transitionDuration={800}
                  className="w-72 h-72 md:w-80 md:h-80"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Coffee-themed stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coffeeStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-black/40 to-black/60 p-4 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className={cn("text-2xl", stat.color)}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className={cn("text-2xl md:text-3xl font-bold mb-1", stat.color)}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.label}
                  </div>
                </div>
                {hoveredStat === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-black px-2 py-1 rounded text-xs font-semibold"
                  >
                    {index === 3 ? "UBC Okanagan basketball" : "Professional milestone"}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Interactive story chapters */}
        <FadeIn>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">
              The Chronicles of a Caffeinated Coder
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {storyChapters.map((chapter, index) => (
                <StoryCard
                  key={chapter.id}
                  chapter={chapter}
                  index={index}
                  isActive={activeChapter === chapter.id}
                  onClick={() => setActiveChapter(
                    activeChapter === chapter.id ? null : chapter.id
                  )}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Enhanced skills showcase */}
        <FadeIn>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-cyan-400">
              The Technical Arsenal
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="bg-gradient-to-br from-black/40 to-black/60 p-6 rounded-xl border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-2 rounded-lg bg-gradient-to-r", category.color)}>
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillTag 
                        key={skill} 
                        skill={skill} 
                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
};
