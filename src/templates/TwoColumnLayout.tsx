import React from 'react';

const TwoColumnLayout = ({ leftColumn, rightColumn }) => {
  return (
    <div className="grid grid-cols-4 gap-2 text-sm">
      <div className="col-span-1 flex flex-col gap-4 border bg-gray-800 p-2 shadow-lg">
        {leftColumn}
      </div>
      <div className="scrollbar col-span-3 max-h-[calc(100vh-22rem)] overflow-y-auto border border-gray-600">
        {rightColumn}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
