"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { YCenter } from "@/animations/center-animate";

const headerDuration = 0.15;
const headerDelay = 1.35;
export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={YCenter}
          custom={{ duration: headerDuration, delay: headerDelay }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute top-[40vh] left-[50vh] z-10 container mx-auto my-auto flex max-h-[80vh] w-1/2 flex-col items-center justify-center space-y-8 space-x-2 rounded-xl p-0 mix-blend-overlay"
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={YCenter}
            transition={{ delay: 2 }}
            className={
              "!text-foregound absolute top-[60vh]  sticky left-0 z-[5]  rounded-xl md:border !text-black left-[50vw] z-[5] -translate-x-[50%] scale-[1.2] rounded-xl border md:p-4 backdrop-blur-3xl"
            }          >
            <h1
              className="mx-auto w-fit p-4 text-lg font-light md:text-4xl"
            >
              WORTHING TRAVIS
            </h1>
            <p
              className="mx-auto w-fit p-4 text-lg font-light md:text-xl"
            >
              @WorthyDev.com
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={YCenter}
          transition={{ delay: 2 }}
          data-cursor

          className={
            "!text-foregound absolute top-[60vh] left-[50vw] z-[5] -translate-x-[50%] scale-[1.2] rounded-xl md:border md:p-4 backdrop-blur-3xl"
          }
        >
          <h1
            className="mx-auto w-fit p-4 text-lg font-light md:text-4xl"
          >
            WORTHING TRAVIS
          </h1>
          <p
            className="mx-auto w-fit p-4 text-lg font-light md:text-xl"
          >
            @WorthyDev.com
          </p>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
