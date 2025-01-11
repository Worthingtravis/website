"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { YCenter } from "@/animations/center-animate";
import { Card } from "./components/ui/card";

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={YCenter}
        transition={{ delay: 2 }}
        exit={{ opacity: 0, y: -100 }}
        className={'fixed inset-0 flex items-center justify-center'}
      >
        <Card data-cursor
          className="bg-card/50 min-h-[20vh] justify-center aspect-square flex flex-col gap-2 rounded ring-1 backdrop-blur-instant md:p-2 md:py-4"
        >
          <h1 className="mx-auto w-fit p-4 text-2xl font-light md:text-4xl">
            WORTHING TRAVIS
          </h1>
          <p className="mx-auto w-fit p-4 text-lg font-light md:text-xl">
            @WorthyDev.com
          </p>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
