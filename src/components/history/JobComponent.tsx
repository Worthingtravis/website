import { Timeline } from '@/components/timeline';

import type { Job } from './JobComponent.config';

export function JobComponent({ job }: { job: Job }) {
  return (
    <div className="relative my-8 rounded-lg bg-gray-800 p-6 text-white shadow-2xl sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-blue-400">{job.title}</h1>
        <h2 className="mb-1 text-base font-medium text-gray-400">
          {job.period}
        </h2>
        <h3 className="mb-4 text-sm font-medium text-gray-400">
          {job.company}
        </h3>
        <div className="border-l-4 border-solid border-blue-500 pl-4">
          <ul className="list-inside list-disc">
            {job.responsibilities.map((responsibility) => (
              <li key={responsibility} className="mb-2 text-gray-300">
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
