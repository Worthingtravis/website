'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TracingBeam = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end start'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.99], [0, svgHeight]),
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
      style={style}
      ref={ref}
      className={cn(
        'relative mx-auto h-full w-full max-w-3xl border-t border-[#9091A0] border-opacity-[0.16]',
        className
      )}
    >
      <div className="absolute left-[-1.2rem] hidden justify-center self-start md:flex ">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" block"
          aria-hidden="true"
        >
          <motion.path
            d={generateDynamicSVGPath(continousArray(0, 1, 0.12))}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={generateDynamicSVGPath(continousArray(0, 1, 0.12))}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
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
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
