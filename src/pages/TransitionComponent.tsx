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
        className,
        'flex min-h-screen w-full justify-center rounded-lg p-4'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionComponent;
