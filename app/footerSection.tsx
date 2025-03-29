"use client";

import React from "react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { FadeIn } from "@/components/motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/worthingtravis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <IconBrandGithub className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/travis-worthing-3676a2166/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <IconBrandLinkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com/laughing_whales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
              aria-label="Twitter Profile"
            >
              <IconBrandTwitter className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Travis Worthing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
