import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { CardSpotlightEffect } from './Spotlight';

type TimelineProps = {
  children: React.ReactNode[];
};

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  {
    child: React.ReactNode;
  }
>(({ child }) => {
  // ref
  return <CardSpotlightEffect>{child}</CardSpotlightEffect>;
});

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative flex flex-wrap justify-center gap-12 rounded ">
      <AnimatePresence>
        {children.map(
          (
            child,
            index // Pass the appropriate ref to each TimelineItem
          ) => (
            <motion.div transition={{ duration: 1, delay: 0.5 }}>
              {/* eslint-disable-next-line react/no-array-index-key */}
              <TimelineItem key={index} child={child} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};
