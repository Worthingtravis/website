"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendar,
  FaCode,
  FaCogs,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

// Job type definition
type Job = {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  tags: string[];
};

// Sample job data
const jobs: Job[] = [
  {
    id: "sacred-contract",
    title: "Web3 Developer — Contract Work",
    company: "Sacred Finance",
    period: "Oct 2023 - Present",
    responsibilities: [
      "Built a Web3 forum with integrations for zkSNARKs and ERC20 contracts, leveraging Next.js, React, and Tailwind.",
      "Worked on a Web3 forum using Orbis, focusing on speed and security optimizations.",
      "Created a Chrome extension for social media features using Next.js, React, and Tailwind.",
    ],
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "zkSNARK",
      "ERC20",
      "Ethereum",
      "Avalanche",
      "UniRep",
    ],
  },
  {
    id: "smart-contract-auditor",
    title: "Smart Contract Auditor — Contract Work",
    company: "Ratio Software Inc",
    period: "Jul 2023 - Sep 2023",
    responsibilities: [
      "Reviewed Solidity smart contracts, identifying bugs and suggesting security improvements.",
      "Ran simulations using Forge and Foundry tools to improve contract performance and reliability.",
      "Enhanced knowledge in Solidity for better gas efficiency and secure contract development.",
    ],
    tags: [
      "Web3",
      "Defi",
      "Forge",
      "Foundry",
      "Solidity",
      "Ethereum",
      "ERC20",
      "NFT",
    ],
  },
  {
    id: "web3-developer-contract",
    title: "Web3 Developer — Contract",
    company: "Frequency & Sacred Finance",
    period: "Mar 2023 - Jun 2023",
    responsibilities: [
      "Helped develop an NFT wallet, implementing new features with Next.js, React, and Tailwind.",
      "Built a private forum integrating zkSNARKs and ERC20 contracts, delivering a smooth user experience.",
      "Met project goals by aligning development with stakeholder expectations and maintaining high code quality.",
      "Solved challenges with innovative technical solutions and ensured timely project completion.",
    ],
    tags: ["Web3", "Chrome Extension", "React", "Ethereum", "Solidity", "Defi"],
  },
  {
    id: "senior-fullstack",
    title: "Senior Fullstack Developer",
    company: "Atomic47 Labs",
    period: "Jul 2022 - Mar 2023",
    responsibilities: [
      "Managed a team of 3-7 developers, delivering projects on time.",
      "Developed a marketplace for NFTs in ReactJS, integrating EVM smart contracts.",
      "Simplified token purchases for ERC20 tokens with user-friendly workflows.",
      "Improved team productivity through code reviews and pair programming.",
      "Collaborated with UX/UI teams to design intuitive interfaces using React, Next.js, and TailwindCSS.",
    ],
    tags: [
      "Web3",
      "React",
      "Laravel",
      "Ethereum",
      "Avalanche",
      "MySQL",
      "Material-UI",
      "AWS",
      "Nodejs",
    ],
  },
  {
    id: "intermediate-developer",
    title: "Intermediate Developer",
    company: "Global Physical Asset Management",
    period: "Jun 2021 - Jul 2022",
    responsibilities: [
      "Developed a web app with Ionic, React, and TypeScript to automate reporting processes.",
      "Integrated Microsoft authentication for secure logins and file sharing.",
      "Oversaw the entire development cycle, from planning to team management and final delivery.",
    ],
    tags: ["Ionic", "React", "TypeScript", "Microsoft", "AWS", "Nodejs"],
  },
];

// Helper function to choose an icon per job
const getJobIcon = (jobId: string) => {
  switch (jobId) {
    case "sacred-contract":
      return <FaCode className="text-cyan-400" />;
    case "smart-contract-auditor":
      return <FaShieldAlt className="text-cyan-400" />;
    case "web3-developer-contract":
      return <FaCode className="text-cyan-400" />;
    case "senior-fullstack":
      return <FaUsers className="text-cyan-400" />;
    case "intermediate-developer":
      return <FaCogs className="text-cyan-400" />;
    default:
      return <FaBuilding className="text-cyan-400" />;
  }
};

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen items-center justify-center bg-gray-900/30 py-20 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-16 text-center text-4xl font-bold">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {jobs.map((job, index) => {
            const isLast = index === jobs.length - 1;
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative grid grid-cols-[auto,1fr] gap-4"
              >
                {/* Timeline marker */}
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-700 bg-gray-800/70">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                      {getJobIcon(job.id)}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="absolute top-16 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gray-700" />
                  )}
                </div>

                {/* Job content */}
                <div className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50">
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {job.title}
                  </h3>

                  <div className="mb-3 flex items-center gap-2 text-cyan-400">
                    <FaBuilding className="text-sm" />
                    <span>{job.company}</span>
                  </div>

                  <div className="mb-6 flex items-center gap-2 text-gray-400">
                    <FaCalendar className="text-sm" />
                    <span>{job.period}</span>
                  </div>

                  <div className="mb-6 space-y-3">
                    {job.responsibilities.map((responsibility, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 flex-shrink-0">
                          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                        </div>
                        <p className="text-gray-300">{responsibility}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-700/50 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
