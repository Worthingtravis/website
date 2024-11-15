'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { MotionValue } from 'framer-motion';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

function LineAnimation({
  d,
  svgHeight,
  y1,
  y2,
  style,
}: {
  svgHeight: number;
  d: string;
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      style={{
        top: 0,
        left: -18,
        position: 'absolute',
        ...style,
      }}
    >
      <motion.svg
        viewBox={`0 0 20 ${svgHeight}`}
        width={'20'}
        layout
        layoutScroll={true}
        height={svgHeight} // Set the SVG height
        className="block "
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          d={d}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-transparent will-change-transform  motion-reduce:hidden"
          transition={{
            duration: 10,
          }}
        />
        <motion.path
          d={d}
          stroke="#9091A0"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-transparent  motion-reduce:hidden"
          transition={{
            duration: 10,
          }}
        />

        <defs>
          <motion.linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={y1}
            y2={y2}
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="0.325" stopColor="#6344F5" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.65], [0, svgHeight]),
    {
      stiffness: 100,
      damping: 20,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0.5, 1], [0, svgHeight]),
    {
      stiffness: 500,
      damping: 50,
    }
  );

  // const generateDynamicSVGPath: DynamicPath = (heightFactors) => {
  //  let d = `M 1 0 V -36`; // Start the path and move up initially
  //
  //  // Constants for horizontal movement and vertical segment adjustment
  //  const horizontalMove = 18;
  //  const verticalSegment = 24;
  //
  //  // Iterate over each pair of factors in the array to create in and out movements
  //  heightFactors.forEach(([outFactor, inFactor]) => {
  //   const outHeight = outFactor * svgHeight;
  //   const inHeight = inFactor * svgHeight; // directly use the 'in' factor provided
  //   d += ` l ${horizontalMove} ${verticalSegment} V ${outHeight}`;
  //   d += ` l ${-horizontalMove} ${verticalSegment} V ${inHeight}`;
  //  });
  //
  //  // Close the path by reaching the bottom of the SVG
  //  d += ` V ${svgHeight}`;
  //  return d;
  // };
  // function that returns [0, 0.01],
  //        [0.02, 0.03],
  //        [0.04, 0.05],
  // .. and so on between 0 and 1
  function continousArray(start: number, end: number, step: number) {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push([i, i + 0.1]);
    }
    return result;
  }

  function generateDynamicSVGPath(heightFactors: [number, number][]) {
    let d = `M 1 -10 V -36`; // Start the path and move up initially
    const horizontalMove = 18;
    const verticalSegment = 24;
    heightFactors.forEach(([outFactor, inFactor]) => {
      const outHeight = outFactor * svgHeight;
      const inHeight = inFactor * svgHeight; // directly use the 'in' factor provided
      d += ` l ${horizontalMove} ${verticalSegment} V ${outHeight}`;
      d += ` l ${-horizontalMove} ${verticalSegment} V ${inHeight}`;
    });
    d += ` V ${svgHeight}`;
    return d;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative mx-auto   w-full max-w-3xl space-y-8 border-opacity-[0.5] bg-transparent',
        className
      )}
      // make content outside the SVG invisible
    >
      <LineAnimation
        svgHeight={svgHeight}
        d={generateDynamicSVGPath(continousArray(0.05, 1, 0.12))}
        y1={y1}
        y2={y2}
      />
      <LineAnimation
        svgHeight={svgHeight}
        d={generateDynamicSVGPath(continousArray(0.05, 1, 0.12))}
        y1={y1}
        y2={y2}
        style={{
          top: -32,
          transform: 'rotate(180deg) scaleY(-1)',
          right: -18,
          left: 'auto',
          position: 'absolute',
        }}
      />
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
