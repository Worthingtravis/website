import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Job } from './job-component.config';
import { getTagLink } from './job-component.config';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';

export const JobHistory = ({ jobs }: { jobs: Job[] }) => (
  <>
    {jobs.map((job) => (
      <JobComponent key={job.title} job={job} />
    ))}
  </>
);
export const JobComponent = ({ job }: { job: Job }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Card
      className={
        'flex flex-col gap-2 rounded bg-card/50 ring-1 backdrop-blur-3xl md:p-2  md:py-4'
      }
      ref={ref}
      onClick={() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
    >
      <CardHeader className={'space-y-2 pb-4'}>
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
            key={responsibility.toLowerCase()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-sm leading-relaxed "
          >
            {responsibility}
          </motion.div>
        ))}
      </CardContent>
      <CardFooter className={'flex flex-wrap gap-y-2'}>
        {job.tags.map((tag) => (
          <Badge key={tag} className="group relative mr-2">
            <Link href={getTagLink(tag)}>{tag}</Link>
            <span className="sr-only">Filter by {tag}</span>
            <span className="hidden items-center group-hover:flex ">
              <span className="pointer-events-none absolute bottom-full right-0 mx-auto mb-2 flex h-6 w-32 flex-nowrap items-center overflow-visible rounded-l-full border border-r-0 bg-background/90  p-1 text-center text-foreground">
                Open External Link
              </span>
              <ExternalLink className="absolute bottom-full left-full mb-2  flex h-6 shrink-0 items-center overflow-visible rounded-r-full border border-l-0 bg-background/90 p-1 text-foreground" />
            </span>
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
