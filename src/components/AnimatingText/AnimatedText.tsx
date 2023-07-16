import { useState } from 'react';

import type { AnimateTextProps } from '@/components/AnimatingText/AnimateText';
import { AnimateText } from '@/components/AnimatingText/AnimateText';

import TwoColumnLayout from '@/templates/TwoColumnLayout';
import { OptionButtonGroup, RadioOptionGroup } from '../OptionGroups';

interface AnimationOptions {
  fade: AnimateTextProps['variant'];
  rotate: AnimateTextProps['variant'];
  scale: AnimateTextProps['variant'];
  slide: AnimateTextProps['variant'];
}

const animationOptions: AnimationOptions = {
  fade: 'fade',
  rotate: 'rotate',
  scale: 'scale',
  slide: 'slide',
};

export function AnimatedText({ customText }: { customText?: string }) {
  const [animation, setAnimation] =
    useState<AnimateTextProps['variant']>('fade');

  const [splitBy, setSplitBy] = useState<AnimateTextProps['splitBy']>('word');

  const [text, setText] = useState<string>(
    customText || 'Welcome to my website!'
  );

  const [speed, setSpeed] = useState<number>(0.5);

  const leftColumnContent = (
    <>
      <OptionButtonGroup
        title="Animation"
        options={Object.entries(animationOptions).map(([key, value]) => ({
          key,
          value,
        }))}
        activeValue={animation}
        setActiveValue={setAnimation}
      />
      <OptionButtonGroup
        title="Speed"
        options={[
          { key: 'xfast', value: 0.01 },
          { key: 'fast', value: 0.05 },
          { key: 'normal', value: 0.5 },
          { key: 'slow', value: 1 },
          { key: 'xslow', value: 2 },
        ]}
        activeValue={speed}
        setActiveValue={setSpeed}
      />
      <hr />
      <RadioOptionGroup
        title="Animate by"
        options={[
          { key: 'Word', value: 'word' },
          { key: 'Letter', value: 'letter' },
        ]}
        activeValue={splitBy}
        setActiveValue={setSplitBy}
      />
      <hr />
      <div className="flex flex-col gap-2">
        <label
          aria-label={'changing animating text'}
          htmlFor={'text'}
          className="text-white"
        >
          Text:
        </label>
        <textarea
          id={'text'}
          rows={24}
          name="text"
          className="scrollbar rounded-md bg-gray-700 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );

  const rightColumnContent = (
    <AnimateText
      text={text}
      variant={animation}
      splitBy={splitBy}
      speed={speed}
    />
  );

  return (
    <TwoColumnLayout
      leftColumn={leftColumnContent}
      rightColumn={rightColumnContent}
    />
  );
}
