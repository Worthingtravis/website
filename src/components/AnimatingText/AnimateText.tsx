import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

interface AnimationVariants {
  initial: object;
  animate: object;
  transition: (index: number, delay: number) => object;
}

const animationVariants: { [key: string]: AnimationVariants } = {
  default: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (index: number, delay: number) => ({
      delay: index * 0.1 + delay,
    }),
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (index: number, delay: number) => ({
      delay: index * 0.1 + delay,
    }),
  },
  slide: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: (index: number, delay: number) => ({
      delay: index * 0.1 + delay,
    }),
  },
  scale: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: (index: number, delay: number) => ({
      delay: index * 0.1 + delay,
    }),
  },
  rotate: {
    initial: { opacity: 0, rotate: 180 },
    animate: { opacity: 1, rotate: 0 },
    transition: (index: number, delay: number) => ({
      delay: index * 0.1 + delay,
    }),
  },
};
export type SplitBy = 'word' | 'letter';
export interface AnimateTextProps {
  text?: string;
  delay?: number;
  variant?: 'default' | 'fade' | 'slide' | 'scale' | 'rotate';
  splitBy?: SplitBy;
}

export const AnimateText: React.FC<AnimateTextProps> = ({
  text,
  delay = 0.1,
  variant = 'default',
  splitBy = 'word',
}) => {
  const textArray = useMemo(
    () => text?.split(splitBy === 'word' ? ' ' : ''),
    [text, variant, splitBy]
  );

  return (
    <>
      <AnimatePresence key={variant + splitBy} presenceAffectsLayout={true} >
        <div className="flex flex-row gap-2">
          {textArray?.map((letter, index) => (
            <motion.span
              key={letter}
              initial={animationVariants[variant]?.initial}
              animate={animationVariants[variant]?.animate}
              transition={animationVariants[variant]?.transition(index, delay)}
              exit={{ opacity: 0 }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};
