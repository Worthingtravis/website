import { motion } from 'framer-motion';
import Link from 'next/link';

import { CopyV2 } from '@/components/CopyV2';

const resumeInfo = [
  {
    Title: 'Senior Software Developer',
    Name: 'Travis Worthing',
    Email: 'worthingtravis@gmail.com',
    'Time Zone': 'PST',
    LinkedIn: {
      value: 'https://www.linkedin.com/in/travis-worthing-3676a2166/',
      isLink: true,
    },
    GitHub: { value: 'https://github.com/Worthingtravis', isLink: true },
  },
];

export const Contact = () => {
  return (
    <motion.div className="flex w-full flex-col items-center justify-center space-y-6 rounded-lg bg-gray-900 ">
      {resumeInfo.map((contact) => {
        return Object.entries(contact).map(([key, value]) => {
          const isLink = typeof value === 'object' && value.isLink;
          const actualValue = isLink ? value.value : value;
          return (
            <motion.div
              key={key}
              className="grid w-full grid-cols-5  items-center  rounded-md bg-gray-800 px-4 py-2"
            >
              <h1 className="col-span-1 text-lg  font-medium text-gray-300">
                {key}
              </h1>
              {isLink ? (
                <Link
                  href={actualValue as string}
                  className="col-span-3 text-lg font-medium text-blue-400 hover:border-b-0 hover:text-blue-500 hover:no-underline"
                >
                  {actualValue as string}
                </Link>
              ) : (
                <span className="col-span-3 text-lg font-medium text-blue-400">
                  {actualValue as string}
                </span>
              )}
              <div className="col-span-1">
                {' '}
                <CopyV2 text={actualValue as string} />
              </div>
            </motion.div>
          );
        });
      })}
    </motion.div>
  );
};
