"use client";

import { Section } from "@/components/section";
import { FadeIn } from "@/components/motion";
import { IconBrandReact, IconDeviceMobile, IconCode, IconBrandJavascript } from "@tabler/icons-react";
import { ImageRotation } from "../components/image-rotation";

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
      "Built testing frameworks for web3 integrations using React Testing Library and PlayWright.",
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

  {
    id: "developer",
    title: "Applications Developer",
    company: "Lode",
    period: "2017 - Jun 2021",
    responsibilities: [
      "Developed and maintained customer-facing websites for the stable token cryptocurrency platform backed by silver.",
      "Built dashboards and admin interfaces to facilitate user interaction and system control.",
      "Implemented scalable and responsive web designs using modern frameworks and technologies.",
      "Collaborated with cross-functional teams to deliver key features and enhance overall user experience.",
      "Ensured code quality and performance optimizations to meet enterprise-grade standards.",
      "Integrated and optimized Laravel API endpoints to enhance backend functionality and data management."
    ],
    tags: [
      "React",
      "TypeScript",
      "Dashboard Development",
      "Admin Panel",
      "Responsive Design",
      "Cryptocurrency",
      "Laravel"
    ]
  }
];

function getJobIcon(jobId: string) {
  switch (jobId) {
    case "sacred-contract":
      return <IconBrandReact className="text-3xl text-cyan-400" aria-hidden="true" />;
    case "smart-contract-auditor":
      return <IconBrandJavascript className="text-3xl text-yellow-400" aria-hidden="true" />;
    case "web3-developer-contract":
      return <IconCode className="text-3xl text-green-400" aria-hidden="true" />;
    case "senior-fullstack":
      return <IconBrandReact className="text-3xl text-cyan-400" aria-hidden="true" />;
    case "intermediate-developer":
      return <IconDeviceMobile className="text-3xl text-blue-400" aria-hidden="true" />;
    case "developer":
      return <IconCode className="text-3xl text-green-400" aria-hidden="true" />;
    default:
      return <IconCode className="text-3xl text-gray-400" aria-hidden="true" />;
  }
}

export const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      fullHeight={false}
      className="overflow-visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Experience Timeline */}
        <div className="md:col-span-2 space-y-8">
          {jobs.map((job, index) => {
            const isLast = index === jobs.length - 1;
            return (
              <FadeIn key={job.id} delay={0.1 * index}>
                <div className="relative grid grid-cols-[auto,1fr] gap-4">
                  {/* Timeline marker */}
                  <div className="relative">
                    <div className="h-16" />
                    {!isLast && (
                      <div className="absolute top-16 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gray-700" />
                    )}
                  </div>

                  {/* Job content */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-800/50">
                        {getJobIcon(job.id)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <p className="text-lg text-cyan-400">{job.company}</p>
                        <p className="text-sm text-gray-400">{job.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="mt-1 text-cyan-400">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-800/50 px-3 py-1 text-sm text-gray-300"
                          role="status"
                          aria-label={`Technology: ${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Flipping Image Container */}
        <div className="relative">
          {/* Sticky Image Wrapper */}
          <div className="md:sticky md:top-24">
            <div className="relative h-[400px] w-full md:h-[600px]">
              <FadeIn delay={0.2}>
                <ImageRotation
                  frontImage={{
                    src: "/winter-coffee.png",
                    alt: "Winter Coffee"
                  }}
                  backImage={{
                    src: "/winter-spill.png",
                    alt: "Winter Spill"
                  }}
                  rotationFactor={2}
                  transitionDuration={500}
                  gradientColor="from-coffee-500/20"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
