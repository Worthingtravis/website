"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/section";
import { FadeIn, SlideIn } from "@/components/motion";
import { Button } from "@/components/button";

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
      { label: "BlankRasa", url: "https://www.blankrasa.com/collection/0x10a64af86267ad75a96865ee3b3db831e6d2baed" }
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
    links: [],
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
    links: [],
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
  // External link icon component
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
  );

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A showcase of my work in NFT collections, blockchain applications, and web development"
    >
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={0.1 * index}>
            <div className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1 ${
                        project.category === 'nft'
                          ? 'bg-cyan-500/90 text-black'
                          : 'bg-indigo-500/90 text-black'
                      } text-xs font-medium rounded-full`}
                      role="status"
                      aria-label={`Project tag: ${tag}`}
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
                  <div className="italic text-sm text-gray-400 border-l-2 border-cyan-500 pl-3 mb-4" role="note">
                    &ldquo;{project.personalNote}&rdquo;
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                  <span className="text-gray-400 text-sm">{project.date}</span>
                  <div className="flex gap-4">
                    {project.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                        aria-label={`${link.label} - Opens in new tab`}
                      >
                        <span>{link.label}</span>
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* View More Projects Button */}
      <FadeIn delay={0.7} className="mt-12 text-center">
        <Button
          variant="outline"
          onClick={() => window.open("https://github.com/worthingtravis", "_blank")}
          rightIcon={<ExternalLinkIcon />}
        >
          View More on GitHub
        </Button>
      </FadeIn>
    </Section>
  );
};
