'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function SunSetDesktop() {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'center center'],
  });

  const x = useTransform(scrollYProgress, [1, 0], [0, 100]);
  const y = useTransform(scrollYProgress, [1, 0], [0, 160]);

  return (
    <div
      ref={target}
      className="relative mr-auto h-[calc(50vh-5rem)] w-full max-w-xs self-start"
    >
      <motion.svg
        width="100%"
        height="100%"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        className="w-screen text-clip rounded-t-full md:w-full "
        viewBox="0 0 320 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M155.258 0.63916H164.731C250.42 0.63916 320 70.2087 320 155.898V495.488H0V155.898C0 70.2087 69.5695 0.63916 155.258 0.63916Z"
          fill="url(#paint0_linear_94_365)"
        />
        <motion.path
          layoutId="sun"
          style={{ originX: 0.5, originY: 0.5, x, y }}
          d="M159.398 176.331C182.392 176.331 201.032 157.691 201.032 134.697C201.032 111.703 182.392 93.0627 159.398 93.0627C136.404 93.0627 117.763 111.703 117.763 134.697C117.763 157.691 136.404 176.331 159.398 176.331Z"
          fill="#F23133"
        />

        <motion.path
          d="M319.923 197.203V495.499H0.0766602V411.617L319.923 197.203Z"
          fill="url(#paint1_linear_94_365)"
        />
        <motion.path
          d="M0.15332 206.643V495.499H320V406.218L0.15332 206.643Z"
          fill="url(#paint2_linear_94_365)"
        />
        <defs>
          <motion.linearGradient
            id="paint0_linear_94_365"
            x1="160"
            y1="0.63916"
            x2="160"
            y2="495.499"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop stopColor="#CF422F" />
            <motion.stop offset="0.06" stopColor="#A53C2C" />
            <motion.stop offset="0.11" stopColor="#7E3629" />
            <motion.stop offset="0.17" stopColor="#5D3226" />
            <motion.stop offset="0.23" stopColor="#412E24" />
            <motion.stop offset="0.31" stopColor="#2B2B22" />
            <motion.stop offset="0.39" stopColor="#1A2821" />
            <motion.stop offset="0.49" stopColor="#0D2720" />
            <motion.stop offset="0.64" stopColor="#062620" />
            <motion.stop offset="1" stopColor="#052620" />
          </motion.linearGradient>

          <motion.linearGradient
            id="paint1_linear_94_365"
            x1="171.858"
            y1="197.203"
            x2="171.858"
            y2="495.499"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#43A799" />
            <stop offset="0.01" stopColor="#3F9E90" />
            <stop offset="0.07" stopColor="#327E73" />
            <stop offset="0.14" stopColor="#27635A" />
            <stop offset="0.22" stopColor="#1E4D45" />
            <stop offset="0.31" stopColor="#173C36" />
            <stop offset="0.42" stopColor="#12302B" />
            <stop offset="0.57" stopColor="#0F2924" />
            <stop offset="1" stopColor="#0C1E1B" />
          </motion.linearGradient>

          <linearGradient
            id="paint2_linear_94_365"
            x1="160.077"
            y1="206.643"
            x2="160.077"
            y2="495.499"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#42A597" />
            <stop offset="0.15" stopColor="#327F74" />
            <stop offset="0.3" stopColor="#255F56" />
            <stop offset="0.46" stopColor="#1B4740" />
            <stop offset="0.62" stopColor="#14352F" />
            <stop offset="0.79" stopColor="#102B26" />
            <stop offset="1" stopColor="#0C1E1B" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
