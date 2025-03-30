"use client";

import React from "react";
import { Section } from "@/components/section";
import { FadeIn, SlideIn } from "@/components/motion";
import { ImageRotation } from "../components/image-rotation";

export const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
    >
      <div className="space-y-12">
        {/* Top section: Image and Who I Am side by side */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left: Image */}
          <SlideIn>
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
              gradientColor="from-cyan-500/20"
            />
          </SlideIn>

          {/* Right: Who I Am */}
          <SlideIn delay={0.1} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            <p className="text-lg leading-relaxed text-gray-200">
              I&apos;m a seasoned full-stack developer specializing in React, TypeScript, and Web3 technologies.
              With experience in fast-paced startup environments, I excel at delivering high-quality applications
              while maintaining clean, scalable code.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              My expertise includes building intuitive user interfaces and implementing complex Web3 integrations
              across multiple blockchain platforms, from Ethereum to Solana.
            </p>
          </SlideIn>
        </div>

        {/* Skills Section */}
        <SlideIn delay={0.2} className="space-y-6 bg-cyan-500/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-cyan-100">My Skills</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Frontend Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-cyan-300">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Material-UI",
                  "Three.js",
                  "Redux",
                  "React Query",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                    role="status"
                    aria-label={`Frontend skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web3 Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-cyan-300">Web3</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web3.js",
                  "Ethers.js",
                  "Wallet Integration",
                  "dApp Development",
                  "Avalanche",
                  "Ethereum",
                  "Solana",
                  "NFT Platforms",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                    role="status"
                    aria-label={`Web3 skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-medium text-cyan-300">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "Laravel",
                  "MySQL",
                  "AWS",
                  "API Integration",
                  "Firebase",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                    role="status"
                    aria-label={`Backend skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Services Section */}
        <FadeIn delay={0.4} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Service 1 */}
          <div 
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
            role="article"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 18l6-6-6-6"></path>
                <path d="M8 6l-6 6 6 6"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Frontend Development</h3>
            <p className="text-gray-200">
              Creating responsive, interactive web applications with modern React, TypeScript, and Next.js
              to deliver exceptional user experiences.
            </p>
          </div>

          {/* Service 2 */}
          <div 
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
            role="article"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Web3 Integration</h3>
            <p className="text-gray-200">
              Implementing blockchain functionality into web applications, including wallet connections,
              NFT marketplaces, and decentralized platforms.
            </p>
          </div>

          {/* Service 3 */}
          <div 
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
            role="article"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Startup-Ready Development</h3>
            <p className="text-gray-200">
              Delivering rapid iterations and MVPs for startups, with a focus on clean code,
              scalable architecture, and quick time-to-market.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
