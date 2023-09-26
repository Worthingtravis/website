import clsx from 'clsx';
import _ from 'lodash';
import type { Dispatch, SetStateAction, ReactNode } from 'react';
import { Button } from './Button';

interface TabProps<T> {
  tabs: T[];
  activeTab: T;
  setActiveTab: Dispatch<SetStateAction<T>>;
  customStyles?: {
    active?: string;
    inactive?: string;
  };
  renderLabel?: (tab: T) => ReactNode; // For custom label rendering
}

function defaultRenderLabel(tab: string | number): ReactNode {
  return _.startCase(tab as string);
}

function Tabs<T extends string | number>({
  tabs,
  activeTab,
  setActiveTab,
  customStyles = {},
  renderLabel = defaultRenderLabel, // If no renderLabel is provided, defaultRenderLabel is used
}: TabProps<T>) {
  const defaultActiveStyle = 'bg-gray-950 text-white hover:bg-gray-950/40';
  const defaultInactiveStyle = 'bg-gray-900 text-gray-300 hover:bg-gray-800';

  return (
    <div className="flex flex-row flex-wrap items-center  justify-center gap-4">
      {tabs.map((tab) => (
        <Button
          key={tab.toString()}
          onClick={() => setActiveTab(tab)}
          className={clsx(
            'rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300',
            activeTab === tab
              ? customStyles.active || defaultActiveStyle
              : customStyles.inactive || defaultInactiveStyle
          )}
        >
          {renderLabel(tab)}
        </Button>
      ))}
    </div>
  );
}

export default Tabs;
