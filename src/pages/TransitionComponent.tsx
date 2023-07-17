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
      className={clsx(
        'flex flex-col items-center justify-center ',
        'mx-auto  w-full max-w-3xl p-4',
        className
      )}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionComponent;
