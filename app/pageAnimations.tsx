'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const headerDuration = 0.15;
const headerDelay = 1.35;

const MotionLink = motion(Link);
const YCenter = {
  opacity: 1,
  y: 0,
  transition: ({ duration, delay }: { duration: number; delay: number }) => ({
    duration,
    delay,
  }),
};

const Home = () => {
  const buttonRef = useRef(null);
  return (
    <AnimatePresence mode="wait">
      <motion.div className="flex grow flex-col items-center justify-center gap-8">
        <motion.div
          className="flex gap-2 text-balance text-5xl
            font-bold
           md:text-7xl"
          initial={{ opacity: 0, y: -100 }}
          animate={YCenter}
          custom={{ duration: headerDuration, delay: headerDelay }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          Travis Worthing
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={YCenter}
          custom={{ duration: headerDuration, delay: headerDelay }}
          className="mx-auto w-fit max-w-[700px] text-balance text-center text-muted-foreground md:text-xl"
        >
          Web Application Developer specializing in modern web technologies
        </motion.div>

        <MotionLink
          initial={{ opacity: 0, y: -20 }}
          ref={buttonRef}
          layout
          href="/resume"
          animate={YCenter}
          custom={{ duration: headerDuration, delay: headerDelay }}
          className={cn(
            'group relative flex items-center justify-center gap-2 border-2 border-transparent px-4 py-2 text-lg font-bold hover:bg-black hover:text-[#18CCFC]'
          )}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            layout
            animate={YCenter}
            custom={{ duration: headerDuration, delay: headerDelay }}
          >
            Next
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            layout
            animate={YCenter}
            custom={{ duration: headerDuration, delay: headerDelay }}
          >
            <ArrowRight size={24} />
          </motion.span>
        </MotionLink>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
