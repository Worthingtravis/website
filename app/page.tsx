"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { YCenter } from "@/animations/center-animate";
import { Card } from "./components/ui/card";

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="container fixed mx-auto flex h-[85vh] flex-col items-center justify-center space-y-8 space-x-2 px-4 py-8"
        initial={{ opacity: 0, y: -100 }}
        animate={YCenter}
        transition={{ delay: 2 }}
      >
        <Card data-cursor
              className="flex flex-col items-center justify-center p-4 bg-background/50 backdrop-blur-xl
           hover:backdrop-blur-none
           shadow-lg"
        >
          <h1 className="mx-auto w-fit p-4 text-lg font-light md:text-4xl">
            WORTHING TRAVIS
          </h1>
          <p className="mx-auto w-fit p-4 text-lg font-light md:text-xl">
            @WorthyDev.com
          </p>{" "}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
