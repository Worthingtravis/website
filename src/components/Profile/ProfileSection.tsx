import _ from 'lodash';

import type { Categories } from './ProfileSection.config';
import { CardSpotlightEffect } from '../Spotlight';

const Label = ({ text }: { text: string }) => (
  <h2 className="text-xl font-bold text-blue-300">{text}</h2>
);

const Text = ({ text }: { text: string }) => (
  <p className="text-base font-light text-gray-300">{text}</p>
);

export const ProfileSection = ({ categories }: { categories: Categories }) => (
  <CardSpotlightEffect className={'flex h-fit w-fit gap-2 bg-gray-950/20 p-2'}>
    {Object.entries(categories).map(([category, items]) => (
      <div key={category} className={'space-x-2 space-y-4'}>
        <h1 className="mb-4 text-2xl font-semibold text-white">{category}</h1>
        {Object.entries(items).map(([label, text]) => (
          <div key={label} className="space-y-2">
            <Label text={_.startCase(label)} />
            <Text text={text as string} />
          </div>
        ))}
      </div>
    ))}
  </CardSpotlightEffect>
);
