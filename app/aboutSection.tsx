"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-gray-900/30 py-20 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-16 text-center text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left column: Profile info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyan-400">Who I Am</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              I&#39;m a seasoned full-stack developer with extensive experience in React, TypeScript and modern web technologies.
              Having thrived in fast-paced startup environments, I excel at rapid iteration and delivering high-quality applications
              under tight deadlines.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              My journey in web development has led me to specialize in creating intuitive,
              responsive user interfaces and seamless web experiences. I have particular expertise in
              web3 integrations, having built multiple wallet implementations across Ethereum-based chains
              and Solana.
            </p>
          </motion.div>

          {/* Right column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyan-400">My Skills</h3>

            {/* Skill Categories */}
            <div className="space-y-8">
              {/* Frontend Skills */}
              <div>
                <h4 className="mb-3 text-xl font-medium">Frontend</h4>
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
                      className="rounded-full bg-indigo-900/30 px-3 py-1 text-sm text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Web3 Skills */}
              <div>
                <h4 className="mb-3 text-xl font-medium">Web3</h4>
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
                      className="rounded-full bg-cyan-900/30 px-3 py-1 text-sm text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="mb-3 text-xl font-medium">Backend</h4>
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
                      className="rounded-full bg-emerald-900/30 px-3 py-1 text-sm text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info - What I do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Service 1 */}
          <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-cyan-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 18l6-6-6-6"></path>
                <path d="M8 6l-6 6 6 6"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Frontend Development</h3>
            <p className="text-gray-300">
              Creating responsive, interactive web applications with modern React, TypeScript, and Next.js
              to deliver exceptional user experiences.
            </p>
          </div>

          {/* Service 2 */}
          <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-cyan-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Web3 Integration</h3>
            <p className="text-gray-300">
              Implementing blockchain functionality into web applications, including wallet connections,
              NFT marketplaces, and decentralized platforms.
            </p>
          </div>

          {/* Service 3 */}
          <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-cyan-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Startup-Ready Development</h3>
            <p className="text-gray-300">
              Delivering rapid iterations and MVPs for startups, with a focus on clean code,
              scalable architecture, and quick time-to-market.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
