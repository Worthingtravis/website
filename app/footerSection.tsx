"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/60 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-2xl font-bold text-white">
                Travis Worthing
              </h3>
              <p className="text-gray-400">
                Web3 Developer & Smart Contract Specialist
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/worthingtravis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/travis-worthing-3676a2166/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row"
        >
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Travis Worthing. All rights reserved.
          </p>

          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#hero")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
