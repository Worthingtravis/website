"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HomeIcon, BriefcaseIcon, FolderIcon, UserIcon, MailIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "./lib/utils";

interface Nav {
  label: React.ReactNode;
  href: string;
  external?: boolean;
  tooltip?: string;
}

const Links: Nav[] = [
  { label: <HomeIcon size={24} />, href: "#hero", tooltip: "Home" },
  { label: <UserIcon size={24} />, href: "#about", tooltip: "About" },
  { label: <FolderIcon size={24} />, href: "#projects", tooltip: "Projects" },
  { label: <BriefcaseIcon size={24} />, href: "#experience", tooltip: "Experience" },
  { label: <MailIcon size={24} />, href: "#contact", tooltip: "Contact" },
  {
    label: <FaGithub size={24} />,
    href: "https://github.com/worthingtravis",
    external: true,
    tooltip: "GitHub",
  },
];

export function NavHeader() {
  const [activeSection, setActiveSection] = React.useState<string>("#hero");
  const navRef = useRef<HTMLDivElement>(null);

  // Track scroll position to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Adding offset for better UX

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center select-none justify-center gap-2 md:gap-8 backdrop-blur-sm bg-background/70"
    >
      <div className="flex items-center justify-center gap-4 md:gap-8 px-4">
        {Links.map(({ label, href, external, tooltip }) => (
          <a
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (!external) {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({
                  behavior: "smooth"
                });
              }
            }}
            data-cursor
            className={cn(
              "relative flex justify-center items-center rounded-full p-3 hover:bg-gray-800/50 transition-colors duration-300",
              activeSection === href ? "text-cyan-400" : "text-foreground",
            )}
          >
            {label}
            {tooltip && (
              <span className="absolute -bottom-8 text-xs bg-background/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {tooltip}
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
