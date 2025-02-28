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
              I'm a seasoned Web3 developer with expertise in building
              decentralized applications, NFT collections, and blockchain-based
              solutions. With a background spanning both contract work and
              full-time positions, I've developed a deep understanding of
              blockchain technologies and smart contract implementation.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              My journey in web development began with traditional frameworks,
              but I quickly became fascinated with the possibilities of
              blockchain technology. Now I specialize in bridging the gap
              between conventional web applications and the decentralized
              ecosystem.
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
              {/* Blockchain Skills */}
              <div>
                <h4 className="mb-3 text-xl font-medium">Blockchain</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Solidity",
                    "Ethereum",
                    "Smart Contracts",
                    "ERC20",
                    "ERC721",
                    "Web3.js",
                    "Avalanche",
                    "NFTs",
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

              {/* Frontend Skills */}
              <div>
                <h4 className="mb-3 text-xl font-medium">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Material-UI",
                    "Three.js",
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

              {/* Backend Skills */}
              <div>
                <h4 className="mb-3 text-xl font-medium">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Laravel",
                    "MySQL",
                    "AWS",
                    "API Integration",
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
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">NFT Development</h3>
            <p className="text-gray-300">
              Designing and implementing unique NFT collections with custom
              smart contracts and engaging frontend interfaces.
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
            <h3 className="mb-2 text-xl font-bold">DApp Development</h3>
            <p className="text-gray-300">
              Building decentralized applications that connect traditional web
              interfaces with blockchain functionality.
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
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Smart Contract Auditing</h3>
            <p className="text-gray-300">
              Ensuring smart contract security through comprehensive code
              reviews and industry best practices implementation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
