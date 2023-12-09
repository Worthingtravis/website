import React from 'react';

import { motion } from 'framer-motion';
import type { Job } from './JobComponent.config';
import { AnimatedText } from '../AnimatedText';
import { Parallax } from './Parallax';

export function JobComponent({ job }: { job: Job }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const onClick = React.useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'end',
      });
    }
  }, [ref]);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <motion.div ref={ref} onClick={onClick}>
      <h1 className="mb-4 font-bold text-blue-400 sm:text-lg md:text-2xl">
        <AnimatedText variant={'pulse'}>{job.title}</AnimatedText>
      </h1>
      <time className="text-lg font-semibold text-gray-300 dark:text-white">
        {job.period}
      </time>
      <h3 className="mb-4 font-medium text-gray-400 sm:text-xs md:text-sm">
        {job.company}
      </h3>
      <div className="relative w-full rounded bg-gray-900 ">
        <ol className="mt-3 ">
          {job.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="block items-center p-3 hover:bg-gray-700 sm:flex "
            >
              {responsibility}
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}

export function JobHistory({ jobs }: { jobs: Job[] }) {
  return (
    <div className={'mb-[400px] flex snap-y snap-proximity flex-col gap-32'}>
      {jobs.map((job) => (
        <Parallax offset={250}>
          <JobComponent key={job.title} job={job} />
        </Parallax>
      ))}
    </div>
  );
}
