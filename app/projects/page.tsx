'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, QuoteIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import type { Project } from './projectData';
import { currentProjects, projects } from './projectData';

import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { buttonVariants } from '../components/ui/buttonVariantsCVA';
import { YCenter } from '../CenterAnimation';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden p-4 antialiased shadow shadow-gray-900 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="relative h-48" aria-label={'Project background image'}>
        <Image
          src={project.bgImage}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-95"
        />
      </div>
      <CardHeader>
        <CardTitle aria-label={'Project Title'}>{project.title}</CardTitle>
        {project.blockchain && (
          <Badge variant="secondary" className="w-fit">
            {project.blockchain}
          </Badge>
        )}
      </CardHeader>
      <CardContent className={'flex flex-col gap-2'}>
        <CardDescription className={'group-hover:text-foreground'}>
          {project?.description}
        </CardDescription>
        {project?.personalDescription && (
          <blockquote
            aria-label={'Personal details added about the project'}
            className="rounded bg-black/5 p-2 font-serif text-muted-foreground shadow shadow-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:text-foreground group-hover:shadow-blue-500 "
          >
            <QuoteIcon className={'float-left mr-2 '} />
            <span className={'group-hover:scale-0'}>
              {project.personalDescription}
            </span>
          </blockquote>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        {project.date && (
          <span className="text-balance text-sm text-muted-foreground">
            {project.date}
          </span>
        )}
        <div className="ml-auto flex space-x-2">
          {project.marketingSiteLink && (
            <Link
              href={project.marketingSiteLink}
              target="_blank"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className: 'flex items-center text-nowrap',
              })}
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 size-4" />
              {project.buttonLabel || 'Visit Site'}
            </Link>
          )}
          {project.openSeaLink && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={project.openSeaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenSea
              </Link>
            </Button>
          )}
          {project.blankRasaLink && (
            <Link
              href={project.blankRasaLink}
              target="_blank"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
              })}
              rel="noopener noreferrer"
            >
              BlankRasa
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

const headerDuration = 0.15;
const headerDelay = 1.35;

export default function ProjectsPage() {
  return (
    <div className="container mx-auto space-x-2 space-y-8 px-4 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={YCenter}
          custom={{ duration: headerDuration, delay: headerDelay }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="container mx-auto space-x-2 space-y-8 px-4 py-8"
        >
          <motion.div
            layoutId={'header'}
            className="flex gap-2 text-balance text-5xl
            font-bold
           md:text-7xl"
            layoutRoot
            layoutDependency={'header'}
            id="header"
            initial={{ opacity: 0, y: -100 }}
            viewport={{
              once: true,
            }}
            animate={YCenter}
            custom={{ duration: headerDuration, delay: headerDelay }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            My Projects
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={YCenter}
            custom={{ duration: headerDuration, delay: headerDelay }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h2 className="mb-4 text-2xl font-semibold">Past Projects</h2>
            <p className="mb-8 text-muted-foreground">
              Here are some of the <b>more personal</b> projects I have worked
              on in the past.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <motion.section
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={YCenter}
                  key={project.title}
                  custom={{ duration: headerDuration, delay: headerDelay }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <ProjectCard project={project} />
                </motion.section>
              ))}
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={YCenter}
            custom={{ duration: headerDuration, delay: headerDelay }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h2 className="mb-4 text-2xl font-semibold">
              Currently working on {currentProjects.length} Project
              {currentProjects.length > 1 ? 's' : ''}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
