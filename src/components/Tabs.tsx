import _ from 'lodash';
import type { Dispatch, SetStateAction, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="sticky top-20 z-[20] flex w-full flex-row flex-wrap items-center justify-center gap-4">
      {tabs.map((tab) => (
        <Button
          key={tab.toString()}
          onClick={() => setActiveTab(tab)}
          variant={activeTab === tab ? 'default' : 'ghost'}
        >
          {renderLabel(tab)}
        </Button>
      ))}
    </div>
  );
}

export default Tabs;
