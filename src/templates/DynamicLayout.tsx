import clsx from 'clsx';

import TwoColumnLayout from './TwoColumnLayout'; // assuming the file path

// DynamicLayout.js
export const DynamicLayout = ({
  layout,
  positions,
  leftColumn,
  mainContent,
}: {
  layout: string;
  positions: {
    items: string;
    justify: string;
    alignSelf?: string;
  };
  leftColumn: React.ReactNode;
  mainContent: React.ReactNode;
}) => {
  return (
    <TwoColumnLayout
      leftColumn={leftColumn}
      rightColumn={
        <div
          className={clsx(
            layout,
            Object.values(positions),
            'gap-4 shadow-neutral-950 '
          )}
        >
          {mainContent}
        </div>
      }
    />
  );
};
