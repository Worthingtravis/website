"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { YCenter } from "@/animations/center-animate";
import { Card } from "./components/ui/card";
import { MotionLink } from "@/components/motionLink";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={YCenter}
          transition={{ delay: 2 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed inset-0 flex items-center justify-center"
        >
          <Card
            data-cursor
            className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-lg border-none bg-black/30 p-8 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-black/40 hover:ring-white/20"
          >
            <motion.h1
              className="text-4xl font-light tracking-wider text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              WORTHING TRAVIS
            </motion.h1>
            <motion.div
              className="h-px w-2/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
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
              className="text-xl font-light text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              @WorthyDev.com
            </motion.p>
          </Card>
        </motion.div>

      </AnimatePresence>

      <div className={"w-full fixed bottom-1/4"}>

        <MotionLink
          layoutId={'nav-button'}
          data-cursor
          initial={{ opacity: 0, y: -20 }}
          layout
          href="/resume"
          animate={YCenter}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            "group hover:bg-background relative mx-auto flex w-fit items-center justify-center gap-2 self-center border-2 border-transparent px-4 py-2 text-lg font-bold hover:text-[#18CCFC]",
          )}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            layout
            animate={YCenter}
          >
            Experience
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            layout
            animate={YCenter}
          >
            <ArrowRight size={24} />
          </motion.span>
        </MotionLink>
      </div>
    </>
  );
}
