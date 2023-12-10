import TwoColumnLayout from './TwoColumnLayout'; // assuming the file path

// DynamicLayout.js
export const DynamicLayout = ({
  leftColumn,
  mainContent,
}: {
  leftColumn: React.ReactNode;
  mainContent: React.ReactNode;
}) => {
  return <TwoColumnLayout leftColumn={leftColumn} rightColumn={mainContent} />;
};
