"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    <footer className="bg-gray-900/60 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <FadeIn className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Travis Worthing
            </h3>
            <p className="text-gray-400">
              Full Stack Developer
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex space-x-6">
            <a
              href="https://github.com/worthingtravis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/travis-worthing-3676a2166/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} aria-hidden="true" />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-8 flex flex-col items-center border-t border-gray-800 pt-8">
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
                aria-label={`Scroll to ${link.label} section`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <p className="mt-6 text-sm text-gray-500">
            &copy; {currentYear} Travis Worthing. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
};
