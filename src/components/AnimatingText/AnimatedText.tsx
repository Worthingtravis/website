import clsx from 'clsx';
import { useState } from 'react';

import { AnimateText } from '@/components/AnimatingText/AnimateText';
import type { AnimateProps } from '@/components/AnimatingText/AnimateText.config';
import TwoColumnLayout from '@/templates/TwoColumnLayout';

import { OptionButtonGroup, RadioOptionGroup } from '../OptionGroups';

interface AnimationOptions {
  fade: AnimateProps['variant'];
  rotate: AnimateProps['variant'];
  scale: AnimateProps['variant'];
  slide: AnimateProps['variant'];
}

const animationOptions: AnimationOptions = {
  fade: 'fade',
  rotate: 'rotate',
  scale: 'scale',
  slide: 'slide',
};

interface AnimatedTextProps {
  _text?: string;
  className?: string;
}

export function AnimatedText({ _text, className }: AnimatedTextProps) {
  const [animation, setAnimation] = useState<AnimateProps['variant']>('fade');
  const [splitBy, setSplitBy] = useState<AnimateProps['splitBy']>('word');
  const [text, setText] = useState<string>(_text || 'Welcome to my website!');
  const [speed, setSpeed] = useState<number>(0.5);

  const leftColumnContent = (
    <>
      <OptionButtonGroup
        title="Animation"
        options={Object.entries(animationOptions).map(([key, value]) => ({
          key,
          value,
        }))}
        activeValue={animation as string}
        setActiveValue={setAnimation as (value: any) => void}
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
        activeValue={speed.toString()}
        setActiveValue={setSpeed as (value: any) => void}
      />
      <hr />
      <RadioOptionGroup
        title="Animate by"
        options={[
          { key: 'Word', value: 'word' },
          { key: 'Letter', value: 'letter' },
        ]}
        activeValue={splitBy as string}
        setActiveValue={setSplitBy as (value: any) => void}
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
          rows={12}
          name="text"
          className="scrollbar rounded-md bg-gray-700 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );

  const rightColumnContent = (
    <div className={clsx('p-4', className)}>
      <AnimateText
        text={text}
        variant={animation}
        splitBy={splitBy}
        speed={speed}
      />
    </div>
  );

  return (
    <TwoColumnLayout
      leftColumn={leftColumnContent}
      rightColumn={rightColumnContent}
    />
  );
}
