import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

interface AnimationVariants {
  initial: object;
  animate: object;
  transition: (index: number, delay: number, speed: number) => object;
}

const animationVariants: { [key: string]: AnimationVariants } = {
  default: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  slide: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  scale: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay * speed,
      duration: speed,
    }),
  },
  rotate: {
    initial: { opacity: 0, rotate: 180 },
    animate: { opacity: 1, rotate: 0 },
    transition: (index: number, delay: number, speed: number) => ({
      delay: index * delay,
      duration: speed,
    }),
  },
};
export type SplitBy = 'word' | 'letter';
export interface AnimateTextProps {
  text?: string;
  delay?: number;
  variant?: 'default' | 'fade' | 'slide' | 'scale' | 'rotate';
  splitBy?: SplitBy;
  speed?: number;
}

export const AnimateText: React.FC<AnimateTextProps> = ({
  text,
  delay = 0.1,
  variant = 'default',
  splitBy = 'word',
  speed = 0.1,
}) => {
  const [isSkipping, setIsSkipping] = useState(false);
  const textArray = useMemo(() => {
    if (!text) {
      return [];
    }

    const lines = text.split('\n');
    let result = [];

    for (let line of lines) {
      if (splitBy === 'word') {
        result.push(line.split(' '));
      } else if (splitBy === 'letter') {
        result.push(line.split(/(?=[\s\S])/g));
      }
    }

    // Flatten the array and include line breaks
    result = result.reduce((acc, val, index) => {
      if (index !== 0) {
        acc.push('\n'); // Include line breaks between lines
      }
      return acc.concat(val);
    }, []);

    return result;
  }, [text, variant, splitBy, speed]);

  if (isSkipping) {
    return (
      <>
        <button
          onClick={() => setIsSkipping(false)}
          className="mb-4 self-start rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Restart
        </button>
        <span className="flex flex-wrap gap-2">
          {textArray?.map((part, index) =>
            part.includes('\n') ? (
              <div className={'w-full grow bg-gray-400'}></div>
            ) : (
              <motion.span key={part + index}>{part}</motion.span>
            )
          )}
        </span>
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsSkipping(true)}
        className="mb-4 self-start rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Skip to end
      </button>
      <div className="flex flex-wrap gap-2">
        {textArray?.map((part, index) =>
          part.includes('\n') ? (
            <div className={'w-full flex-grow bg-gray-400'}></div>
          ) : (
            <motion.span
              key={part + index + speed}
              initial={animationVariants[variant]?.initial}
              animate={animationVariants[variant]?.animate}
              transition={animationVariants[variant]?.transition(
                index,
                delay,
                speed
              )}
              onAnimationComplete={() => {
                if (index === textArray.length - 1) {
                  setIsSkipping(true);
                }
              }}
            >
              {part}
            </motion.span>
          )
        )}
      </div>
    </>
  );
};
