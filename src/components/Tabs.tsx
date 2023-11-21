import _ from 'lodash';
import type { Dispatch, SetStateAction, ReactNode } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MotionButton = motion(Button);

interface TabProps<T> {
  tabs: T[];
  activeTab: T;
  setActiveTab: Dispatch<SetStateAction<T>>;

  renderLabel?: (tab: T) => ReactNode; // For custom label rendering
}

function defaultRenderLabel(tab: string | number): ReactNode {
  return _.startCase(tab as string);
}

function Tabs<T extends string | number>({
  tabs,
  activeTab,
  setActiveTab,
  renderLabel = defaultRenderLabel, // If no renderLabel is provided, defaultRenderLabel is used
}: TabProps<T>) {
  return (
    <div className="  z-[20] my-[5vh]  grid w-full grid-cols-3 gap-32 ">
      <AnimatePresence mode={'popLayout'}>
        {tabs.map((tab) => {
          return (
            activeTab !== tab && (
              <MotionButton
                className={clsx('hover:text-gray-500')}
                layoutId={tab.toString()}
                variants={tabContainer}
                key={tab.toString()}
                onClick={() => setActiveTab(tab)}
              >
                {renderLabel(tab)}
              </MotionButton>
            )
          );
        })}
      </AnimatePresence>

      <motion.div
        layoutId={activeTab.toString()}
        variants={tabContainer}
        animate="animate"
        exit="exit"
        initial="initial"
        className={clsx('col-start-1 justify-center text-7xl')}
        key={activeTab.toString()}
      >
        {renderLabel(activeTab)}
      </motion.div>
    </div>
  );
}
const tabContainer = {
  initial: {
    opacity: 0,
    rotate: -90,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      backgroundColor: {
        duration: 0,
      },
    },
  },
  exit: {
    opacity: 0,
    rotate: 90,
    transition: {
      duration: 0.5,
    },
  },
};

export default Tabs;
