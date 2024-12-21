'use client'
import { motion } from "framer-motion";
import CustomCursor from "./hooks/useMousePosition";

const SpiralLightAnimation = () => {


  return (
    <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 1, rotate: 0 }}
        animate={{ pathLength: 0, rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        id="spiralPath"
        d="M250,250
           M250,250
           m-10,0
           a10,10 0 1,1 20,0
           a20,20 0 1,1 -40,0
           a30,30 0 1,1 60,0
           a40,40 0 1,1 -80,0
           a50,50 0 1,1 100,0
           a60,60 0 1,1 -120,0
           a70,70 0 1,1 140,0
           a80,80 0 1,1 -160,0
           a90,90 0 1,1 180,0
           a100,100 0 1,1 -200,0"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="2"
      />
      <motion.path
        initial={{ pathLength: 0,rotate:0 }}
        animate={{ pathLength: 1, rotate: -360  }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        id="spiralPath"
        d="M250,250
           M250,250
           m-10,0
           a10,10 0 1,1 20,0
           a20,20 0 1,1 -40,0
           a30,30 0 1,1 60,0
           a40,40 0 1,1 -80,0
           a50,50 0 1,1 100,0
           a60,60 0 1,1 -120,0
           a70,70 0 1,1 140,0
           a80,80 0 1,1 -160,0
           a90,90 0 1,1 180,0
           a100,100 0 1,1 -200,0"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="2"
      />

      <motion.path
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        id="spiralPath"
        d="M250,250
           M250,250
           m-10,0
           a10,10 0 1,1 20,0
           a20,20 0 1,1 -40,0
           a30,30 0 1,1 60,0
           a40,40 0 1,1 -80,0
           a50,50 0 1,1 100,0
           a60,60 0 1,1 -120,0
           a70,70 0 1,1 140,0
           a80,80 0 1,1 -160,0
           a90,90 0 1,1 180,0
           a100,100 0 1,1 -200,0"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="2"
      />

    </svg>
  );
};

export default SpiralLightAnimation;
