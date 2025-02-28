import { motion } from "framer-motion";
import React from "react";
import { FaReact, FaJs, FaPaintBrush } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, -90],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <div className="relative inline-block">
              <span className="font-mono text-sm tracking-wider text-cyan-400 md:text-base">
                Hello, I&#39;m
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Travis Worthing
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
              <h2 className="mb-8 text-2xl font-light text-cyan-400 md:text-3xl">
                Senior Full-Stack Developer
              </h2>
          </motion.div>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build exceptional digital experiences with a focus on modern React applications
            and web3 integrations. Specializing in fast-paced startup environments where
            quality and speed are essential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-full bg-cyan-500 px-8 py-3 text-lg font-bold text-black transition-colors duration-300 hover:bg-cyan-600"
            >
              View My Work
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-full border border-cyan-500 px-8 py-3 text-lg font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech stack icons - subtle in background */}
      <motion.div
        className="absolute right-0 bottom-20 left-0 flex justify-center gap-6 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="flex gap-6 rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm">
          <span className="text-3xl text-cyan-500"><FaReact /></span>
          <span className="text-3xl text-blue-500"><SiTypescript /></span>
          <span className="text-3xl text-gray-800"><RiNextjsFill /></span>
          <span className="text-3xl text-yellow-500"><FaJs /></span>
          <span className="text-3xl text-pink-500"><FaPaintBrush /></span>
        </div>
      </motion.div>

      {/* Down arrow indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-gray-400 transition-colors duration-300 hover:text-white"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};
