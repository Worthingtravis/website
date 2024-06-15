import clsx from 'clsx';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SpotLight = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const hoveredElementDimensions = useMotionValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const opacity = useMotionValue(1);
  const [hoverColor, setHoverColor] = useState('#fff');

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);

    const element = document.elementFromPoint(e.clientX, e.clientY);

    if (element) {
      const { width, height, x, y } = element.getBoundingClientRect();
      hoveredElementDimensions.set({ width, height, x, y });
      setHoverColor(element.getAttribute('data-hover-color') || '#ffffff50');
    } else {
      hoveredElementDimensions.set(undefined);
      setHoverColor('#fff');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const background = useTransform([mouseX, mouseY], ([x, y]) =>
    // if we hover over the element, set the hover color, smother the element with this color

    hoveredElementDimensions
      ? `radial-gradient(${
          hoveredElementDimensions?.width ?? 600
        } circle at ${hoveredElementDimensions?.x || x}px ${hoveredElementDimensions?.y || y}px, ${hoverColor}, transparent 40%)`
      : 'transparent'
  );

  return (
    <motion.div
      ref={divRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      style={{ opacity, background }}
      className="fixed inset-0 z-[0] h-full w-full"
    />
  );
};

export default SpotLight;

export const AnimatedBorderGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={clsx(className)}>{children}</span>;
};
