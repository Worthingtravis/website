import { useState } from 'react';

import type { AnimateTextProps } from '@/components/AnimatingText/AnimateText';
import { AnimateText } from '@/components/AnimatingText/AnimateText';

import { Button } from '../Button';

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

// import other necessary libraries and components

export function AnimatedText() {
  const [animation, setAnimation] =
    useState<AnimateTextProps['variant']>('fade');

  const [splitBy, setSplitBy] = useState<AnimateTextProps['splitBy']>('word');

  const [text, setText] = useState<string>('Welcome to my website!');

  return (
    <div className={'grid grid-cols-4 gap-2 text-sm'}>
      <div
        className={
          'col-span-1 flex flex-col gap-4 border bg-gray-800 p-2 shadow-lg'
        }
      >
        <div className={`mt-2 grid grid-cols-5 justify-items-center gap-4`}>
          {Object.entries(animationOptions).map(([key, value]) => (
            <Button
              key={key}
              onClick={() => setAnimation(value)}
              active={value === animation}
            >
              {key}
            </Button>
          ))}
        </div>

        <hr />

        <div className="flex  gap-2">
          <h1>Animate by:</h1>

          <label
            className="inline-flex items-center text-white"
            aria-label={''}
            htmlFor={'radio-colors-1'}
          >
            <input
              type="radio"
              id={'radio-colors-1'}
              className="form-radio h-5 w-5"
              name="radio-colors"
              value="1"
              checked={splitBy === 'word'}
              onChange={() => setSplitBy('word')}
            />
            <span className="ml-2 ">Word</span>
          </label>
          <label
            className="inline-flex items-center"
            aria-label={'letter'}
            htmlFor={'radio-colors-2'}
          >
            <input
              id={'radio-colors-2'}
              type="radio"
              className="form-radio h-5 w-5 "
              name="radio-colors"
              value="2"
              checked={splitBy === 'letter'}
              onChange={() => setSplitBy('letter')}
            />
            <span className="ml-2">Letter</span>
          </label>
        </div>

        <hr />
        <div className="flex flex-col gap-2">
          <label
            aria-label={'changing animating text'}
            htmlFor={'text'}
            className="text-white"
          >
            Text:
          </label>
          <input
            name="text"
            className="rounded-md bg-gray-700 p-2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div
        className={
          'scrollbar col-span-3 flex max-h-[calc(100vh-22rem)] flex-col items-center justify-center gap-4 overflow-y-auto border border-gray-600 p-2 shadow-lg'
        }
      >
        <h1 className="text-6xl font-bold">
          <AnimateText text={text} variant={animation} splitBy={splitBy} />
        </h1>
      </div>
    </div>
  );
}
