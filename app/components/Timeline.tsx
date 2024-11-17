import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type TimelineProps = {
  children: React.ReactNode[];
};

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative flex flex-wrap justify-center gap-12 rounded ">
      <AnimatePresence>
        {children.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <motion.div key={index} transition={{ duration: 1, delay: 0.5 }}>
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
