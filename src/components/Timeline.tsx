import clsx from 'clsx';
import { AnimatePresence, motion, useInView } from 'framer-motion';
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
    <motion.div
      key={index}
      layout
      className={clsx('relative flex gap-8', 'flex-row-reverse  ')}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {child}
    </motion.div>
  );
});

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative flex  flex-wrap justify-center gap-32 ">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-y-0 left-1/2 z-0  w-2 bg-gray-950 shadow-2xl"
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
