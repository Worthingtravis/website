import clsx from 'clsx';
import _ from 'lodash';
import type { Dispatch, SetStateAction } from 'react';

import { Button } from './Button';

export const Tabs = ({
  tabs,
  tab,
  setTab,
}: {
  tabs: string[];
  tab: string | undefined;
  setTab: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-4">
      {tabs.map((t) => (
        <Button
          key={t}
          onClick={() => setTab(t)}
          className={clsx(
            'rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300',
            tab === t
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          )}
        >
          {_.capitalize(t)}
        </Button>
      ))}
    </div>
  );
};
