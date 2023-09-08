import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedCheckIcon({
  initial = true,
  isVisible = false,
  path = 'M5 13l4 4L19 7',
  duration = 0.3,
  delay = 0,
}) {
  return (
    <AnimatePresence initial={initial} mode={'wait'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={clsx('relative h-6 w-6 text-current')}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          d={path}
          className={clsx('absolute left-0 top-0 opacity-5')}
        />

        <motion.path
          layout
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          exit={{ pathLength: 0 }}
          transition={{
            type: 'tween',
            duration,
            ease: isVisible ? 'easeOut' : 'easeIn',
            delay,
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={path}
          className={clsx('absolute left-0 top-0')}
        />
      </svg>
    </AnimatePresence>
  );
}
export default AnimatedCheckIcon;
