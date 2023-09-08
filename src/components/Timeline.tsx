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
        'group relative   flex snap-start items-start rounded transition-colors duration-300  hover:brightness-125 ',
        index % 2 === 0
          ? 'flex-row rounded-l-3xl rounded-br-none rounded-tl-none border-4 !border-r-0 !border-t-0 border-gray-800 '
          : 'flex-row-reverse rounded-r-2xl rounded-bl-none rounded-tr-none  border-4 !border-l-0 !border-t-0 ',
        isInView && '!border-emerald-400'
      )}
      ref={ref}
      onClick={handleClick}
    >
      <motion.div
        className={clsx(
          'absolute -top-4 z-20 flex h-[40px] min-w-[40px] items-center justify-center rounded-xl text-2xl outline transition-colors duration-300',
          'bg-gray-900 font-extrabold',
          index % 2 === 0 ? '-left-5' : '-right-4',
          isInView && 'text-emerald-400 outline-emerald-400'
        )}
      >
        {index + 1}
      </motion.div>
      <div className="relative m-4 my-0 ">{child}</div>
    </motion.div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="relative flex flex-col ">
        <AnimatePresence>
          {children.map((child, index) => (
            <TimelineItem key={nanoid()} index={index} child={child} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
