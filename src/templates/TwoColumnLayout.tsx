import React from 'react';

const TwoColumnLayout = ({
  leftColumn,
  rightColumn,
}: {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
}) => {
  return (
    <div className="grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-4 ">
      <div className="col-span-1 flex flex-col gap-4 overflow-auto border bg-gray-800 p-2 shadow-lg">
        {leftColumn}
      </div>
      <div className="scrollbar  overflow-y-auto border border-gray-600 md:col-span-3">
        {rightColumn}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
