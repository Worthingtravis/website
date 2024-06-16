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
    <div className=" sticky top-0 flex w-full flex-wrap items-center justify-between">
      <AnimatePresence mode={'wait'}>
        {tabs.map((tab) => {
          return (
            <MotionButton
              className={clsx('hover:text-gray-500')}
              layoutId={activeTab ? `tab` : `tab-${tab}`}
              variants={tabContainer}
              key={tab.toString()}
              onClick={() => setActiveTab(tab)}
            >
              {renderLabel(tab)}
            </MotionButton>
          );
        })}
      </AnimatePresence>
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
