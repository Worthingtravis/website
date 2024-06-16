import _ from 'lodash';

import type { Categories } from './ProfileSection.config';

const Label = ({ text }: { text: string }) => (
  <h2
    className="text-xl font-bold text-blue-300 transition-transform 
   duration-300 ease-in-out group-hover:scale-105
  "
  >
    {text}
  </h2>
);

const Text = ({ text }: { text: string }) => (
  <p className="text-base font-light text-gray-300">{text}</p>
);

export const ProfileSection = ({ categories }: { categories: Categories }) => (
  <div className={'flex gap-2 rounded p-2 py-4 ring-1 backdrop-blur-3xl'}>
    {Object.entries(categories).map(([category, items]) => (
      <div key={category} className={'space-x-2 space-y-4'}>
        <h1 className="mb-4 text-2xl font-semibold text-white">{category}</h1>
        {Object.entries(items).map(([label, text]) => (
          <div key={label} className="group space-y-2">
            <Label text={_.startCase(label)} />
            <Text text={text as string} />
          </div>
        ))}
      </div>
    ))}
  </div>
);
