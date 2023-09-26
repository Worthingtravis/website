import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type TimelineProps = {
  children: React.ReactNode[];
};

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  {
    index: number;
    child: React.ReactNode;
  }
>(({ index, child }) => {
  // ref
  return (
    <motion.div className={'rounded border '} key={index} layout>
      {child}
    </motion.div>
  );
});

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative mt-10  flex flex-wrap justify-center gap-12 bg-gray-900">
      <AnimatePresence>
        <motion.div
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-y-0 left-1/2 z-0  w-2 border bg-gray-950 "
        />
        {children.map((child, index) => (
          // Pass the appropriate ref to each TimelineItem
          // eslint-disable-next-line react/no-array-index-key
          <TimelineItem key={index} index={index} child={child} />
        ))}
      </AnimatePresence>
    </div>
  );
};
