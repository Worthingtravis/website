"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { YCenter } from "../animations/center-animate";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { MotionLink } from "@/components/motionLink";
import { cn } from "@/lib/utils";
import type { Tag } from "@/resume/job-history/job-component.config";
import { jobs } from "@/resume/job-history/job-component.config";
import { JobHistory } from "@/resume/job-history/JobComponent";

const headerDuration = 0.15;
const headerDelay = 1.35;

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    return Array.from(new Set(jobs.flatMap((job) => job.tags)));
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.responsibilities
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag: Tag) => job.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchTerm, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="container mx-auto space-y-8 space-x-2 px-4 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={YCenter}
          custom={{ duration: headerDuration, delay: headerDelay }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="container mx-auto space-y-8 space-x-2 px-4 py-8"
        >
          <motion.div
            layoutId={"header"}
            className="flex gap-2 text-5xl font-bold text-balance md:text-7xl"
            layoutRoot
            layoutDependency={"header"}
            id="header"
            initial={{ opacity: 0, y: -100 }}
            viewport={{
              once: true,
            }}
            animate={YCenter}
            custom={{ duration: headerDuration, delay: headerDelay }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            Work Experience
          </motion.div>

          <div className="flex items-center space-x-2">
            <Input
              placeholder="This search totally works"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="grow bg-card/50 placeholder:text-white"
            />
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter Tags</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Tags</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={selectedTags.length === 0}
                  onCheckedChange={() => setSelectedTags([])}
                >
                  This sort of seems uneccessary
                </DropdownMenuCheckboxItem>
                {allTags.map((tag) => (
                  <DropdownMenuCheckboxItem
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <Button
                  key={tag}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                  <X className="ml-2 size-4" />
                </Button>
              ))}
            </div>
          )}

          <JobHistory jobs={filteredJobs} />
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
