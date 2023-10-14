import { useState } from 'react';
import clsx from 'clsx';
import TwoColumnLayout from '../templates/TwoColumnLayout';
import { Grid } from './DirectionalStaggerAnimation';
import { OptionButtonGroup } from './OptionGroups';

export function DirectionalAnimationExample() {
  const [items, setItems] = useState(64);
  const [speed, setSpeed] = useState(0.0008);

  return (
    <div className={' '}>
      <TwoColumnLayout
        leftColumn={
          <div
            className={clsx(
              items === 64 && 'h-[450px]',
              items === 128 && 'h-[900px]'
            )}
          >
            <OptionButtonGroup
              title="Items"
              options={[
                { key: '64', value: 64 },
                { key: '128', value: 128 },
              ]}
              activeValue={items.toString()}
              setActiveValue={(value) => setItems(value as number)}
            />

            <OptionButtonGroup
              title="Speed"
              options={[
                { key: 'slow', value: 0.0008 },
                { key: 'fast', value: 0.0004 },
                { key: 'faster', value: 0.0002 },
              ]}
              activeValue={speed.toString()}
              setActiveValue={(value) => setSpeed(value as number)}
            />
          </div>
        }
        rightColumn={
          <div className={'relative h-auto'}>
            <Grid
              delayPerPixel={Number(speed)}
              numItems={Number(items)}
              className={clsx('!absolute left-0 top-0 z-10')}
            />
          </div>
        }
      />
    </div>
  );
}
