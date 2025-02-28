"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendar,
  FaCode,
  FaCogs,
  FaReact,
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

// Updated job data with more focus on React/TypeScript and less on smart contracts
const jobs: Job[] = [
  {
    id: "sacred-contract",
    title: "Full-Stack Developer — Contract Work",
    company: "Sacred Finance",
    period: "Oct 2023 - Present",
    responsibilities: [
      "Built a feature-rich Web3 forum using Next.js, React, and Tailwind CSS with a focus on performance and user experience.",
      "Integrated wallet connections for multiple blockchain networks and implemented token-gated content features.",
      "Developed a Chrome extension for social media integration, creating a seamless cross-platform experience using React.",
      "Collaborated directly with stakeholders to rapidly iterate on designs and functionality to meet tight deadlines.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web3",
      "Chrome Extension",
    ],
  },
  {
    id: "smart-contract-auditor",
    title: "Web3 Integration Specialist — Contract Work",
    company: "Ratio Software Inc",
    period: "Jul 2023 - Sep 2023",
    responsibilities: [
      "Implemented front-end interfaces for blockchain interaction, focusing on user experience and technical optimization.",
      "Built testing frameworks for web3 integrations using React Testing Library and Cypress.",
      "Collaborated with blockchain engineers to ensure seamless integration between front-end applications and smart contract functionality.",
      "Optimized application performance and network interactions for better handling of web3 transactions.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Web3.js",
      "Ethers.js",
      "Wallet Integration",
      "Testing",
    ],
  },
  {
    id: "web3-developer-contract",
    title: "React Developer — Contract",
    company: "Frequency & Sacred Finance",
    period: "Mar 2023 - Jun 2023",
    responsibilities: [
      "Developed key components for an NFT wallet using React, TypeScript, and Next.js with a focus on UX/UI.",
      "Built a secure and private forum application with advanced authentication features and content management.",
      "Implemented wallet integration for multiple blockchain networks including Ethereum and Avalanche.",
      "Solved complex technical challenges under tight deadlines, delivering high-quality code that met all requirements.",
    ],
    tags: ["React", "TypeScript", "Next.js", "Web3", "Chrome Extension", "Tailwind CSS"],
  },
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Developer",
    company: "Atomic47 Labs",
    period: "Jul 2022 - Mar 2023",
    responsibilities: [
      "Led a team of 3-7 developers, managing project timelines and code quality for multiple concurrent projects.",
      "Architected and developed a marketplace for NFTs using React, handling complex state management and API integrations.",
      "Created intuitive user interfaces for crypto token purchases and wallet management, enhancing user experience.",
      "Implemented CI/CD pipelines and established best practices for code reviews and testing.",
      "Collaborated with design teams to translate Figma mockups into responsive, pixel-perfect React components.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Material-UI",
      "Redux",
      "Web3 Integration",
      "Team Leadership",
      "AWS",
    ],
  },
  {
    id: "intermediate-developer",
    title: "Full-Stack Developer",
    company: "Global Physical Asset Management",
    period: "Jun 2021 - Jul 2022",
    responsibilities: [
      "Developed a feature-rich web application using Ionic, React, and TypeScript to automate reporting processes.",
      "Integrated Microsoft authentication for secure login and implemented complex data visualization features.",
      "Led feature development from conception to deployment, collaborating with both design and backend teams.",
      "Optimized application performance and implemented responsive design for mobile and desktop use cases.",
    ],
    tags: ["Ionic", "React", "TypeScript", "Microsoft Auth", "Responsive Design", "AWS"],
  },
];

// Helper function to choose an icon per job
const getJobIcon = (jobId: string) => {
  switch (jobId) {
    case "sacred-contract":
      return <FaCode className="text-cyan-400" />;
    case "smart-contract-auditor":
      return <FaReact className="text-cyan-400" />;
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
