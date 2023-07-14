import clsx from 'clsx';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useRef } from 'react';

type TimelineProps = {
  children: React.ReactNode[];
};
const TimelineItem: React.FC<{ index: number; child: React.ReactNode }> = ({
  index,
  child,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 1 });

  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth', // animate the scrolling
      block: 'center', // vertically align at the center
      inline: 'nearest', // horizontally align at the nearest edge
    });
  };

  return (
    <motion.div
      key={index}
      className={clsx(
        'group relative -my-1 flex snap-start items-start border-gray-900  transition-colors duration-300 hover:border-emerald-400 hover:brightness-125',
        index % 2 === 0
          ? 'flex-row rounded-l-3xl border-b-4 border-l-4 ps-8'
          : 'flex-row-reverse rounded-r-3xl border-b-4 border-r-4 pe-8',
        isInView && '!border-emerald-400'
      )}
      ref={ref}
      onClick={handleClick}
    >
      <motion.div
        className={clsx(
          'z-20  -mx-12  flex h-[60px] min-w-[60px] items-center justify-center rounded-full transition-colors duration-300',
          'border-8 bg-gray-900 text-white ring ring-gray-900 ring-offset-8 ring-offset-gray-900',
          'border-gray-800 group-hover:border-blue-500',
          isInView && '!border-blue-500'
        )}
      >
        {index + 1}
      </motion.div>
      <div className="relative mx-8  ">{child}</div>
    </motion.div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="relative flex flex-col bg-gray-900">
        <AnimatePresence>
          {children.map((child, index) => (
            <TimelineItem key={nanoid()} index={index} child={child} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
