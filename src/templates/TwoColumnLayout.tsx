import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const TwoColumnLayout = ({
  leftColumn,
  rightColumn,
}: {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
}) => {
  return (
    <div className="grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-4">
      <ScrollArea className="flex flex-col space-y-8 overflow-auto border bg-gray-800 p-2 shadow-lg sm:order-2 md:order-1">
        {leftColumn}
      </ScrollArea>
      <ScrollArea className="h-full w-full rounded-md border p-4  sm:order-2 md:order-1 md:col-span-3">
        {rightColumn}
      </ScrollArea>
    </div>
  );
};

export default TwoColumnLayout;
