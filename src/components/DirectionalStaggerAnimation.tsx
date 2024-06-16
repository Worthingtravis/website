import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import AnimatedGradientBackground from '../projects/AnimatedGradientBackground';

const itemVariants = {
  hidden: {
    opacity: 0.5,
  },
  visible: (delayRef: { current: any }) => ({
    opacity: [0, 1],
    scale: 0.99,
    transition: { delay: delayRef.current },
  }),
};

const Box = React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <motion.button
      ref={ref}
      {...props}
      className="pointer-events-auto  relative size-32 overflow-hidden hover:cursor-pointer"
    >
      <AnimatedGradientBackground />
    </motion.button>
  );
});

function GridItem({
  delayPerPixel,
  i,
  originIndex,
  originOffset,
  onClick,
}: {
  delayPerPixel: number;
  i: number;
  originIndex: number;
  originOffset: React.MutableRefObject<{ top: number; left: number }>;
  onClick: () => void;
}) {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef();

  // The measurement for all elements happens in the layoutEffect cycle
  // This ensures that when we calculate distance in the effect cycle
  // all elements have already been measured
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      // @ts-ignore
      top: element.offsetTop,
      // @ts-ignore
      left: element.offsetLeft,
    };

    if (i === originIndex) {
      // eslint-disable-next-line no-param-reassign
      originOffset.current = offset.current;
    }
  }, [delayPerPixel, originIndex, originOffset, i]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    // @ts-ignore
    const d = Math.sqrt(dx ** 2 + dy ** 2);
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel, originIndex, originOffset, i]);

  return (
    <Box
      ref={ref}
      // @ts-ignore
      variants={itemVariants}
      custom={delayRef}
      onClick={onClick}
      onHover={'onHover'}
    />
  );
}

export function Grid({
  delayPerPixel = 0.0008,
  numItems = 25,
}: {
  delayPerPixel?: number;
  numItems?: number;
}) {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();
  const [originIndex, setOriginIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    controls.start('visible');
  }, [originIndex, cycle, controls]);

  const handleBoxClick = (i) => {
    setOriginIndex(i);
    controls.start('visible');
  };

  return (
    <motion.div initial="hidden" animate={controls}>
      <AnimatePresence mode={'popLayout'}>
        {Array.from({ length: numItems }).map((_, i) => (
          <GridItem
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            i={i}
            originIndex={originIndex}
            delayPerPixel={delayPerPixel}
            originOffset={originOffset}
            onClick={() => {
              handleBoxClick(i);
              setCycle(cycle + 1);
            }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
