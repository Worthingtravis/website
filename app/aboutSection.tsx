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
    title: "The Origin Story",
    emoji: "🌱",
    year: "2015",
    content: "It all started with a simple question: 'How do I make this button do something?' Eight years later, I'm still asking questions—just slightly more sophisticated ones involving blockchain protocols and scalable web applications.",
    highlight: "Curiosity-driven from day one"
  },
  {
    id: "evolution", 
    title: "The Coffee Chronicles",
    emoji: "☕",
    year: `2016-${new Date().getFullYear()}`,
    content: "Through startup sprints, midnight deploys, and those 'just-one-more-feature' moments, coffee became my constant companion. Current stats: ∞ cups consumed, 6 strategically spilled (we don't talk about spill #3).",
    highlight: "Fueled by caffeine, driven by passion"
  },
  {
    id: "mastery",
    title: "The Tech Journey", 
    emoji: "🚀",
    year: "Present",
    content: "From React components to Web3 protocols, I've built my craft across the full stack. Whether it's crafting pixel-perfect UIs or architecting scalable backends, I bridge the gap between what's possible and what's profitable.",
    highlight: "Full-stack expertise with startup speed"
  },
  {
    id: "personal",
    title: "The Human Side",
    emoji: "🐕",
    year: "Always",
    content: "When I'm not debugging React components, you'll find me with my Australian Shepherd, who's mastered the art of judging my code from across the room. He's particularly critical of my variable naming conventions.",
    highlight: "Code reviewer: 1 very opinionated dog"
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
    description: "Crafting interfaces that users actually enjoy"
  },
  {
    title: "Web3 Innovation", 
    skills: ["Web3.js", "Ethers.js", "Wallet Integration", "dApp Development", "Avalanche", "Ethereum", "Solana", "NFT Platforms"],
    color: "from-purple-500 to-pink-500",
    icon: <IconBrain className="size-5" />,
    description: "Building the decentralized future"
  },
  {
    title: "Backend Architecture",
    skills: ["Node.js", "Express", "Laravel", "MySQL", "AWS", "API Integration"],
    color: "from-green-500 to-emerald-500", 
    icon: <IconRocket className="size-5" />,
    description: "Servers that scale and APIs that sing"
  }
];

// Coffee-themed stats
const coffeeStats = [
  { label: "Years of Experience", value: "8+", icon: <IconSparkles />, color: "text-cyan-400" },
  { label: "Cups of Coffee", value: "∞", icon: <IconCoffee />, color: "text-coffee-400" },
  { label: "Strategic Spills", value: "6", icon: <IconCoffee />, color: "text-coffee-600" },
  { label: "Furry Code Reviewers", value: "1", icon: <IconPaw />, color: "text-latte-400" }
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
      subtitle="A story told through coffee stains, code commits, and one very judgmental dog 🐕"
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
                A seasoned full-stack developer who turns coffee into code and ideas into 
                digital reality. Specializing in React ecosystems, Web3 innovations, and 
                fast-paced startup environments where &ldquo;impossible&rdquo; is just another challenge.
              </p>
              <div className="flex items-center gap-4 text-cyan-400">
                <IconWorld className="size-5" />
                <span>Building the web, one component at a time</span>
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
                    {index === 2 ? "We don't talk about #3" : "Essential metric"}
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
