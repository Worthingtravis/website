import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type ITransitionComponentProps = {
  children: React.ReactNode;
  className?: string;
  layoutId?: string;
};
const TransitionComponent: FC<ITransitionComponentProps> = ({
  children,
  className,
  layoutId,
}) => {
  return (
    <motion.div
      className={clsx(className, 'flex size-full flex-1 justify-center')}
      variants={TransitionComponentVariants}
      layoutId={layoutId}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default TransitionComponent;

export const TransitionComponentVariants = {
  initial: () => ({
    opacity: 0,
  }),
  animate: () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    };
  },
  exit: () => {
    return {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    };
  },
};
