import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type ITransitionComponentProps = {
  children: React.ReactNode;
  className?: string;
};
const TransitionComponent: FC<ITransitionComponentProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      className={clsx(className, 'flex min-h-screen w-full justify-center')}
      variants={TransitionComponentVariants}
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
