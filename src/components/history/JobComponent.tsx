import clsx from 'clsx';

import { Timeline } from '@/components/Timeline';

import type { Job } from './JobComponent.config';

export function JobComponent({ job }: { job: Job }) {
  return (
    <div
      className={clsx(
        'relative my-8 rounded bg-gray-800 p-2 pt-4 text-white shadow-2xl outline outline-1 outline-emerald-400'
      )}
    >
      <div className="mb-4 ml-4 ">
        <h1 className="mb-4 font-bold text-blue-400 sm:text-lg md:text-2xl">
          {job.title}
        </h1>
        <h2 className="mb-1 font-medium text-gray-400 sm:text-sm md:text-base">
          {job.period}
        </h2>
        <h3 className="mb-4  font-medium text-gray-400 sm:text-xs md:text-sm">
          {job.company}
        </h3>
        <div className="-ml-2 w-full rounded border-l-4 border-solid  bg-gray-900 py-1 pl-4 ">
          <ul className="list-inside list-disc">
            {job.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="mb-2 text-gray-300 sm:text-sm md:text-base"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function JobHistory({ jobs }: { jobs: Job[] }) {
  return (
    <Timeline>
      {jobs.map((job) => (
        <JobComponent key={job.title} job={job} />
      ))}
    </Timeline>
  );
}
