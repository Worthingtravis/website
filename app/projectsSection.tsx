"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Project type definition
type Project = {
  id: string;
  title: string;
  description: string;
  personalNote?: string;
  image: string;
  category: "nft" | "contract" | "personal";
  tags: string[];
  links: {
    label: string;
    url: string;
    icon?: React.ReactNode;
  }[];
  date: string;
};

// Sample projects data
const projects: Project[] = [
  {
    id: "toonsquad",
    title: "ToonSquad",
    description: "ToonSquad brings together a collection of 10,000 unique NFTs, each with its own distinctive traits and abilities.",
    personalNote: "I built the web application and integrated web3 functionalities, including seamless interaction with ERC20 smart contracts.",
    image: "/toonsquad.png",
    category: "nft",
    tags: ["Ethereum"],
    links: [
      { label: "OpenSea", url: "https://opensea.io/collection/toonsquad-official" },
      { label: "Website", url: "https://toonsquadnft.io/" }
    ],
    date: "March 2022"
  },
  {
    id: "orka-hideout",
    title: "Orka Hideout",
    description: "Orka Hideout is a collection of 3,000 unique NFTs, each with its own distinctive traits and abilities.",
    personalNote: "I handled the development of the web application, integrating Canto-based ERC20 functionalities for a unique user experience.",
    image: "/orkahideoutbg.jpg",
    category: "nft",
    tags: ["Canto"],
    links: [
      { label: "BlankRasa", url: "https://www.blankrasa.com/collection/0x10a64af86267ad75a96865ee3b3db831e6d2baed" },
      { label: "Website", url: "https://orkahideout.io/" }
    ],
    date: "June 2022"
  },
  {
    id: "superfrens",
    title: "Superfrens",
    description: "Superfrens is a collection of 10,000 unique NFTs, each with its own distinctive traits and abilities.",
    personalNote: "Introduction to NFT projects. No rewards, no incentives, just a fun project to learn the ropes of NFT development.",
    image: "/superfrensbg.png",
    category: "nft",
    tags: ["Ethereum"],
    links: [
      { label: "OpenSea", url: "https://opensea.io/collection/superfrens" }
    ],
    date: "November 2021"
  },
  {
    id: "spearbit",
    title: "Spearbit",
    description: "Spearbit is a distributed network of industry-leading security researchers tackling complex protocols across web3.",
    personalNote: "I developed the core functionality of the website, turning designs into a high-performance application using Next.js.",
    image: "/spearbit.png",
    category: "contract",
    tags: ["Contract Work"],
    links: [
      { label: "Website", url: "https://spearbit.com/" }
    ],
    date: "2023"
  },
  {
    id: "sacred-forum",
    title: "Sacred Forum",
    description: "A decentralized forum enabling secure and private user interactions, integrated with the Sacred Social Media Engagement extension.",
    personalNote: "Built using cutting-edge technologies for privacy and security in the Web3 space.",
    image: "/sacred-forum-2.png",
    category: "contract",
    tags: ["Contract Work"],
    links: [
      { label: "Visit Forum", url: "https://app.sacredprotocol.com" }
    ],
    date: "2023"
  },
  {
    id: "sacred-extension",
    title: "Sacred Chrome Extension",
    description: "A Chrome extension that rewards users for engaging with forum content on various social media platforms.",
    personalNote: "Developed seamless integration between web browsers and blockchain technology for user engagement rewards.",
    image: "/sacred.png",
    category: "contract",
    tags: ["Contract Work"],
    links: [
      { label: "Marketing Site", url: "https://www.sacredprotocol.com" }
    ],
    date: "2023"
  }
];

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "nft" | "contract">("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  // External link icon component
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
            A showcase of my work in NFT collections, blockchain applications, and web development
          </p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex justify-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1 inline-flex flex-wrap justify-center">
            <button
              className={`py-2 px-6 rounded-full ${filter === "all" ? "bg-cyan-500 text-black font-medium" : "text-gray-300 hover:text-white transition-colors"}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`py-2 px-6 rounded-full ${filter === "nft" ? "bg-cyan-500 text-black font-medium" : "text-gray-300 hover:text-white transition-colors"}`}
              onClick={() => setFilter("nft")}
            >
              NFT Collections
            </button>
            <button
              className={`py-2 px-6 rounded-full ${filter === "contract" ? "bg-cyan-500 text-black font-medium" : "text-gray-300 hover:text-white transition-colors"}`}
              onClick={() => setFilter("contract")}
            >
              Contract Work
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1 ${
                        project.category === 'nft'
                          ? 'bg-cyan-500/90 text-black'
                          : 'bg-indigo-500/90 text-black'
                      } text-xs font-medium rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {project.personalNote && (
                  <div className="italic text-sm text-gray-400 border-l-2 border-cyan-500 pl-3 mb-4">
                    "{project.personalNote}"
                  </div>
                )}

                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-400 text-sm">{project.date}</span>
                  <div className="flex gap-2">
                    {project.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/worthingtravis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/70 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          >
            <span>View More on GitHub</span>
            <ExternalLinkIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
