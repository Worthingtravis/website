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
  const ref = React.useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { amount: 0.5 });
  return (
    <motion.div
      className={clsx(
        'relative my-10 flex gap-8 ',
        index % 2 === 0 ? 'flex-row-reverse  ' : 'flex-row'
      )}
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={inView ? { duration: 0.5, delay: 0.25 } : {}}
        exit={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        className={clsx(
          ' z-20 flex aspect-square h-8 w-8 items-center justify-center rounded-full text-3xl font-extrabold ',
          index % 2 === 0 ? 'flex-row-reverse' : 'flex-row ',
          inView ? 'text-white' : 'text-gray-800'
        )}
      >
        {index}
      </motion.div>
      {child}
    </motion.div>
  );
});

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-y-0 left-1/2 z-0 my-10 w-1 bg-gray-800"
        ></motion.div>
        {children.map((child, index) => (
          // Pass the appropriate ref to each TimelineItem
          // eslint-disable-next-line react/no-array-index-key
          <TimelineItem key={index} index={index} child={child} />
        ))}
      </AnimatePresence>
    </div>
  );
};
