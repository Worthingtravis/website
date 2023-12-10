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
    <div className={' my-24 flex w-full overflow-visible'}>
      <ScrollArea className={'flex basis-1/2 justify-center'}>
        {leftColumn}
      </ScrollArea>
      <ScrollArea className={'basis-1/2 '}>{rightColumn}</ScrollArea>
    </div>
  );
};

export default TwoColumnLayout;
