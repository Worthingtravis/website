import clsx from 'clsx';
import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const CardSpotlightEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const opacity = useMotionValue(0);

  const calculateRelativePosition = useCallback((event) => {
    const rect = divRef.current?.getBoundingClientRect();
    return {
      x: event.clientX - (rect?.left ?? -500),
      y: event.clientY - (rect?.top ?? -500),
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const { x, y } = calculateRelativePosition(e);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => opacity.set(1);
  const handleMouseLeave = () => opacity.set(0);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(123, 58, 235,1), transparent 40%)`
  );

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
    >
      {children}
      <motion.div
        className="cursor-glow pointer-events-none absolute -inset-px z-0 transition duration-300"
        style={{ opacity, background }}
      />
    </div>
  );
};

export const AnimatedBorderGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={clsx(
        className,
        'card group z-[2] flex h-48 w-full items-center justify-center gap-2 text-clip rounded-xl p-[1px] backdrop-blur-[3px] hover:p-0.5'
      )}
    >
      <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center gap-8 rounded-xl">
        {children}
      </div>
      <span className="conic-gradient absolute z-[-1] flex gap-2 text-clip " />
      <div className="z-[1] inline-flex h-full w-full items-center justify-center text-clip rounded-xl  bg-slate-950 py-1 text-sm font-medium text-white backdrop-blur-3xl " />
    </span>
  );
};
