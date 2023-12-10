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
    <div className={'my-12 flex w-full'}>
      <ScrollArea className={'flex basis-1/2 justify-center'}>
        {leftColumn}
      </ScrollArea>
      <ScrollArea className={'h-96 basis-1/2'}>{rightColumn}</ScrollArea>
    </div>
  );
};

export default TwoColumnLayout;
