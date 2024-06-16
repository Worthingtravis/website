import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface JobDetails {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
}

export const JobHistory = ({ jobs }: { jobs: JobDetails[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref}>
      <motion.div className="sticky top-0 flex w-full flex-col items-center justify-center space-y-12">
        {jobs.map((job) => (
          <JobComponent key={job.title} job={job} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export const JobComponent = ({ job }: { job: JobDetails }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Card
      className={
        'flex flex-col gap-2 rounded bg-card/50 p-2 py-4 ring-1 backdrop-blur-3xl'
      }
      ref={ref}
      onClick={() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
    >
      <CardHeader className={'pb-4'}>
        <CardTitle>{job.title}</CardTitle>

        <CardDescription className={'ml-2 flex items-center gap-1'}>
          <FaBuilding size={12} />
          <span>{job.company}</span>
        </CardDescription>

        <CardDescription className={'ml-2 flex items-center gap-1'}>
          <FaCalendar size={12} />
          <span>{job.period}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className={'flex flex-col gap-1 '}>
        {job.responsibilities.map((responsibility, i) => (
          <motion.div
            key={responsibility}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-sm leading-relaxed "
          >
            {responsibility}
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};
