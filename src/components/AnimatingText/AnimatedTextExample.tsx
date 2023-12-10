import clsx from 'clsx';
import { useState } from 'react';

import TwoColumnLayout from '../../templates/TwoColumnLayout';
import { OptionButtonGroup, RadioOptionGroup } from '../OptionGroups';
import { AnimateText } from './AnimateText';
import type { AnimateProps } from './AnimateText.config';
import { Textarea } from '@/ui/textarea';

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

export function AnimatedTextExample({ _text, className }: AnimatedTextProps) {
  const [animation, setAnimation] = useState<AnimateProps['variant']>('fade');
  const [splitBy, setSplitBy] = useState<AnimateProps['splitBy']>('word');
  const [text, setText] = useState<string>(
    _text || 'Hey there! 👋 🤖 🤙 🤘 🤟 '
  );
  const [speed, setSpeed] = useState<number>(2);

  const leftColumnContent = (
    <div className={'flex flex-col gap-4 '}>
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
      <br />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        aria-label={'changing animating text'}
        htmlFor={'text'}
        className="sticky top-0 text-white"
      >
        Text:
      </label>
      <Textarea
        id={'text'}
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
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
