import _ from 'lodash';

import type { Categories } from './ProfileSection.config';

const Label = ({ text }: { text: string }) => (
  <h2 className="text-xl font-bold text-blue-300">{text}</h2>
);

const Text = ({ text }: { text: string }) => (
  <p className="text-base font-light text-gray-300">{text}</p>
);

export const ProfileSection = ({ categories }: { categories: Categories }) => (
  <div className="space-y-8 rounded border bg-gray-900 p-4">
    {Object.entries(categories).map(([category, items]) => (
      <div key={category} className={'space-y-4'}>
        <h1 className="mb-4 text-2xl font-semibold text-white">{category}</h1>
        {Object.entries(items).map(([label, text]) => (
          <div key={label} className="space-y-2">
            <Label text={_.startCase(label)} />
            <Text text={text as string} />
          </div>
        ))}
      </div>
    ))}
  </div>
);
