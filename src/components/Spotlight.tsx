import clsx from 'clsx';
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const CardSpotlightEffect = ({
  children,
  className,
  maxSize = 300, // Default maximum size of the gradient
}: {
  children: React.ReactNode;
  className?: string;
  maxSize?: number; // Optional prop to customize max size
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    };

    const node = ref.current;
    node?.addEventListener('mousemove', handleMouseMove);
    return () => node?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => opacity.set(1);
  const handleMouseLeave = () => opacity.set(0);

  const background = useTransform([mouseX, mouseY], ([x, y]) => {
    const size = Math.min(maxSize, maxSize); // Calculate the size based on constraints
    return `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(123, 58, 235, 1) 0%, transparent 40%)`;
  });

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex h-full w-full items-center justify-center  ${className}`}
      style={{ position: 'relative' }}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0"
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
    <div
      className={clsx(
        className,
        ' group relative z-[2] flex h-48 w-full items-center justify-center gap-2 text-clip rounded-3xl border-2 border-gray-900/80 bg-card p-0.5   text-card-foreground     hover:border-white'
      )}
    >
      <div className="absolute inset-0 z-[20] flex w-full justify-center border-transparent  text-transparent ">
        {children}
      </div>
    </div>
  );
};
