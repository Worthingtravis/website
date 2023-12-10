'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

type ParallaxProps = {
  children: ReactNode[] | ReactNode | JSX.Element[] | JSX.Element;
  offSetY?: number;
  offSetX?: number;
};

export const Parallax = ({
  children,
  offSetY = 50,
  offSetX = 150,
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offSetY;

  const yRange = useTransform(scrollY, [initial, final], [offSetY, -offSetY]);
  const xRange = useTransform(scrollY, [initial, final], [offSetX, -offSetX]);

  const y = useSpring(yRange, { stiffness: 400, damping: 90 });
  const x = useSpring(xRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        );
        setClientHeight(window.innerHeight);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  // Return children directly if user prefers reduced motion
  if (prefersReducedMotion) {
    return children as JSX.Element;
  }

  return (
    <motion.div ref={ref} style={{ y, x }}>
      {children}
    </motion.div>
  );
};
