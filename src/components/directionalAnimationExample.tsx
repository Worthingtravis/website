import { useState } from 'react';
import TwoColumnLayout from '../templates/TwoColumnLayout';
import { Grid } from './DirectionalStaggerAnimation';
import { OptionButtonGroup } from './OptionGroups';

export function DirectionalAnimationExample() {
  const [speed, setSpeed] = useState(0.0008);

  return (
    <TwoColumnLayout
      leftColumn={
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
      }
      rightColumn={<Grid delayPerPixel={Number(speed)} />}
    />
  );
}
