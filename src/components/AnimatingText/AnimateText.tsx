import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';

import { Button } from '../Button';
import type { AnimateProps } from './AnimateText.config';
import { animationVariants } from './AnimateText.config';

const ParagraphBreak = () => <div className={'w-full grow bg-gray-400'} />;

export const AnimateText: React.FC<AnimateProps> = ({
  text,
  delay = 0.1,
  variant = 'default',
  splitBy = 'word',
  speed = 0.1,
}) => {
  const [isSkipping, setIsSkipping] = useState<boolean>(false);
  const textArray = useMemo(() => {
    if (!text) {
      return [];
    }
    const lines = text.split('\n');
    let result = [];

    for (const line of lines) {
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
  return (
    <>
      <Button onClick={() => setIsSkipping(!isSkipping)}>
        {isSkipping ? 'Restart' : 'Skip to end'}
      </Button>
      <br />
      <div className="flex flex-wrap gap-2">
        {textArray?.map((part, index) =>
          part.includes('\n') ? (
            <ParagraphBreak key={nanoid()} />
          ) : (
            <motion.span
              key={nanoid()}
              initial={
                isSkipping ? undefined : animationVariants[variant]?.initial
              }
              animate={
                isSkipping ? undefined : animationVariants[variant]?.animate
              }
              transition={
                isSkipping
                  ? undefined
                  : animationVariants[variant]?.transition(index, delay, speed)
              }
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
