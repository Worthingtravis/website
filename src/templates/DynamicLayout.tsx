import TwoColumnLayout from './TwoColumnLayout'; // assuming the file path
import clsx from 'clsx';

// DynamicLayout.js
export const DynamicLayout = ({
  layout,
  positions,
  leftColumn,
  mainContent,
}) => {
  const dynamicContent = (
    <div
      className={clsx(
        layout,
        Object.values(positions),
        'gap-4 shadow-neutral-950 '
      )}
    >
      {mainContent}
    </div>
  );

  return (
    <TwoColumnLayout leftColumn={leftColumn} rightColumn={dynamicContent} />
  );
};
