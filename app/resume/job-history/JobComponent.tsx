import { useRef } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendar } from "react-icons/fa";
import Link from "next/link";
import type { Job } from "./job-component.config";
import { getTagLink } from "./job-component.config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";

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
        className="bg-card/50 flex flex-col gap-2 rounded ring-1 backdrop-blur-instant md:p-2 md:py-4"
      ref={ref}
      onClick={() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
    >
      <CardHeader className={"space-y-2 pb-4"}>
        <CardTitle>{job.title}</CardTitle>

        <CardDescription className={"ml-2 flex items-center gap-1"}>
          <FaBuilding size={12} />
          <span>{job.company}</span>
        </CardDescription>

        <CardDescription className={"ml-2 flex items-center gap-1"}>
          <FaCalendar size={12} />
          <span>{job.period}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className={"flex flex-col gap-1"}>
        {job.responsibilities.map((responsibility, i) => (
          <motion.div
            key={responsibility.toLowerCase()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-sm leading-relaxed"
          >
            {responsibility}
          </motion.div>
        ))}
      </CardContent>
      <TooltipProvider delayDuration={200}>
        <CardFooter className={"flex flex-wrap gap-y-2"}>
          {job.tags.map((tag) => (
            <Tooltip key={tag}>
              <TooltipTrigger asChild>
                <Badge
                  key={tag}
                  className="group relative"
                  variant={"secondary"}
                >
                  <Link href={getTagLink(tag)}>
                    {tag}

                    <span className="sr-only">Filter by {tag}</span>
                  </Link>
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <span className="text-xs"> Go to {tag} website</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </CardFooter>{" "}
      </TooltipProvider>
    </Card>
  );
};
