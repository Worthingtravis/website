"use client";

import { motion } from "framer-motion";
import React from "react";
import { Card } from "./components/ui/card";

export default function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 18,
        }}
        className="flex h-screen items-center justify-center"
      >
        <Card
          data-cursor
          className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-lg border-none bg-black/30 p-8 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-black/40 hover:ring-white/20"
        >
          <motion.h1
            className="text-4xl font-light tracking-wider text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            WORTHING TRAVIS
          </motion.h1>
          <motion.div
            className="h-px w-2/3 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.75,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
          <motion.p
            className="origin-center overflow-clip text-xl font-light text-gray-300"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{
              delay: 0.75,
              duration: 1.2,
              // ease slow in the middle
              ease: [0.9, 0, 0.1, 2],
            }}
          >
            @WorthyDev.com
          </motion.p>
        </Card>
      </motion.div>
    </>
  );
}
