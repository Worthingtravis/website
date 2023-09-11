import clsx from 'clsx';
import { motion } from 'framer-motion';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  MutableRefObject,
} from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { CaretIcon } from './Icons';

interface AccordionButtonBufferProps {
  direction: 'left' | 'right';
}

// AccordionButtonBuffer is a transparent overlay that appears over the accordion button when the accordion button slides out of view.
// This overlay is used to prevent the user from clicking on the area where the accordion button was previously located.
const AccordionButtonBuffer: FC<AccordionButtonBufferProps> = ({
  direction,
}) => {
  const classes = clsx(
    'pointer-events-auto absolute inset-y-0 z-[8] w-[1rem]',
    direction === 'left' ? 'left-0' : 'right-0'
  );

  return (
    <div className={classes}>
      <span className="sr-only">
        This overlay appears as soon as the accordion button is visible and
        disappears after a specified delay.
      </span>
    </div>
  );
};
type Direction = 'left' | 'right';

export interface AccordionButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  direction: Direction;
  isVisible: boolean;
  exitAfterMs?: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const classes = {
  baseClass:
    'group/button pointer-events-auto absolute bottom-0 top-[0px] z-[9] flex h-auto cursor-pointer select-none items-center justify-center overflow-hidden border-b border-t border-transparent text-transparent outline-0 bg-transparent transition-colors duration-300 hover:border-white/50 hover:bg-gray-900 group-hover:text-white/50',
  leftDirectionClass: 'left-0 rounded-e border-r',
  rightDirectionClass: 'right-0 rounded-s border-l',
};
const updateBufferStatus = (
  isVisible: boolean,
  setBuffer: (value: boolean) => void,
  exitAfterMs: number
) => {
  if (isVisible) return setBuffer(false);
  return setTimeout(() => setBuffer(false), exitAfterMs);
};

const animateAccordionButton = (isVisible: boolean, direction: Direction) => {
  const baseStyles = {
    opacity: isVisible ? 0.8 : 0.2,
    width: isVisible ? '1rem' : '0.5rem',
  };
  if (isVisible) {
    return {
      ...baseStyles,
      translateX: 0,
    };
  }
  if (direction === 'left') {
    return {
      ...baseStyles,
      translateX: '-30%',
    };
  }
  return {
    ...baseStyles,
    translateX: '30%',
  };
};
const AccordionButton: React.FC<AccordionButtonProps> = ({
  direction,
  containerRef,
  isVisible,
  exitAfterMs = 750,
}) => {
  const [startBuffer, setStartBuffer] = useState<boolean>(false);
  const [endBuffer, setEndBuffer] = useState<boolean>(false);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = React.useCallback(() => {
    if (!containerRef.current) return;
    const left = direction === 'left' ? -100 : 100;
    containerRef.current.scrollBy({ left, behavior: 'smooth' });
  }, [direction, containerRef]);

  const startScroll = () => {
    handleScroll();
    scrollInterval.current = setInterval(handleScroll, 150);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    const setter = direction === 'left' ? setStartBuffer : setEndBuffer;
    updateBufferStatus(isVisible, setter, exitAfterMs);
  }, [isVisible, direction, exitAfterMs]);

  useEffect(() => {
    return stopScrolling;
  }, []);

  const animation = animateAccordionButton(isVisible, direction);
  const animationSettings = {
    initial: animation,
    animate: animation,
    exit: animation,
  };

  const className = clsx({
    [classes.baseClass]: true,
    [classes.leftDirectionClass]: direction === 'left',
    [classes.rightDirectionClass]: direction === 'right',
  });

  return (
    <>
      {startBuffer && <AccordionButtonBuffer direction={direction} />}
      <motion.button
        type="button"
        onMouseDown={startScroll}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        transition={{ duration: 0.5, delay: 0.1 }}
        {...animationSettings}
        className={className}
      >
        <CaretIcon direction={direction} isOpen={isVisible} />
      </motion.button>
      {endBuffer && <AccordionButtonBuffer direction={direction} />}
    </>
  );
};

interface AccordionContentParams {
  disableGutters?: boolean | { dTop?: boolean; dBottom?: boolean };
  showBar: 'always' | 'hover' | 'never' | 'as-needed';
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

const base =
  'px-1 scrollbar user-select-none relative flex w-full touch-pan-x select-none snap-x snap-mandatory gap-2 bg-gray-900 py-2';
const disabledGutters = '!pb-0';
const showBarAlways = 'overflow-x-scroll';
const showBarHover = 'overflow-x-auto';
const disableGuttersTop = '!pt-0';
const disableGuttersBottom = '!pb-0';
const hiddenContent = 'hidden';

function AccordionContent({
  children,
  disableGutters,
  contentRef,
  showBar,
}: AccordionContentParams) {
  const gutterClasses = clsx(
    typeof disableGutters === 'boolean'
      ? {
          [disabledGutters]: disableGutters === true,
        }
      : ({
          [disableGuttersTop]: disableGutters?.dTop === true,
          [disableGuttersBottom]: disableGutters?.dBottom === true,
        } as const)
  );

  const contentClass = clsx({
    [base]: true,
    [gutterClasses]: true,
    [showBarAlways]: showBar === 'always',
    [showBarHover]: showBar === 'hover',
    [hiddenContent]: !children,
  });
  return (
    <div className={clsx(contentClass)} ref={contentRef}>
      {children}
    </div>
  );
}

export const Accordion = ({
  showButtons,
  showBar = 'hover',
  isLeftVisible,
  isRightVisible,
  children,
  classNames = '',
  disableGutters = false,
  onMouseEnter,
  onMouseLeave,
  hidden = false,
}: {
  showButtons: boolean;
  showBar?: 'always' | 'hover' | 'never' | 'as-needed';
  isLeftVisible: boolean;
  isRightVisible: boolean;
  children: React.ReactNode;
  classNames?: string;
  disableGutters?: boolean | { dTop?: boolean; dBottom?: boolean };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  hidden?: boolean;
}): React.JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={clsx(
        'group relative flex overflow-hidden',
        classNames,
        hidden && 'hidden'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showButtons && (
        <AccordionButton
          isVisible={isLeftVisible}
          direction="left"
          containerRef={containerRef}
        />
      )}
      <AccordionContent
        disableGutters={disableGutters}
        showBar={showBar}
        contentRef={containerRef}
      >
        {children}
      </AccordionContent>
      {showButtons && (
        <AccordionButton
          isVisible={isRightVisible}
          direction="right"
          containerRef={containerRef}
        />
      )}
    </div>
  );
};
