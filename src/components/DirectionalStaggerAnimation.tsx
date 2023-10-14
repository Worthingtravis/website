import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';

const itemVariants = {
  hidden: {
    opacity: 0.5,
    scale: 0.5,
  },
  visible: (delayRef: { current: any }) => ({
    opacity: [0, 1],
    transition: { delay: delayRef.current },
  }),
};

const Box = React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <motion.button
      ref={ref}
      {...props}
      className="pointer-events-auto  h-10 w-10 rounded-2xl bg-gray-950 hover:cursor-pointer"
    />
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
  useLayoutEffect(() => {
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
  }, [delayPerPixel, originIndex]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    // @ts-ignore
    const d = Math.sqrt(dx ** 2 + dy ** 2);
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel, originIndex]);

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
  numItems = 64,
  className,
}: {
  delayPerPixel?: number;
  numItems?: number;
  className: string;
}) {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();
  const [originIndex, setOriginIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    controls.start('visible');
  }, [originIndex]);

  const handleBoxClick = (i) => {
    setOriginIndex(i);
    controls.start('visible');
  };

  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        layout
        initial="hidden"
        animate={controls}
        onHoverStart={() => controls.start('onHover')}
        className={clsx(
          className,
          'fixed left-0 top-0 ',
          'grid h-full w-full grid-cols-8 place-items-center gap-2 p-2',
          'md:grid-cols-16 md:grid-rows-12 md:gap-4 md:p-4'
        )}
        onHoverEnd={() => controls.start('rehide')}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
