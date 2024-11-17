import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, QuoteIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import type { Project } from './projectData';
import { currentProjects, projects } from './projectData';

import { Badge } from '@/ui/badge';
import { Button } from '@/ui/button';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className="group flex transform flex-col
    justify-between overflow-hidden antialiased shadow shadow-gray-900
    transition-transform duration-300 ease-in-out   hover:scale-105"
    >
      <div className="relative h-48">
        <Image
          src={project.bgImage}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300  group-hover:scale-95"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
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
            className="rounded bg-black/5 p-2 font-serif text-muted-foreground
           shadow shadow-gray-900 transition-all duration-300
          group-hover:scale-105 group-hover:text-foreground group-hover:shadow-blue-500 "
          >
            <QuoteIcon className={'float-left mr-2 '} />
            <span className={'group-hover:scale-0'}>
              {project.personalDescription}
            </span>
          </blockquote>
        )}
      </CardContent>
      <CardFooter className="flex items-center  justify-between">
        {project.date && (
          <span className="text-balance text-sm text-muted-foreground">
            {project.date}
          </span>
        )}
        <div className="ml-auto flex space-x-2">
          {project.marketingSiteLink && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={project.marketingSiteLink}
                target="_blank"
                className={'flex-no-wrap flex shrink-0 items-center gap-1'}
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {project.buttonLabel || 'Visit Site'}
              </Link>
            </Button>
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
            <Button variant="outline" size="sm" asChild>
              <Link
                href={project.blankRasaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                BlankRasa
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">My Projects</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Currently working on {currentProjects.length} Project
          {currentProjects.length > 1 ? 's' : ''}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Past Projects</h2>
        <p className="mb-8 text-muted-foreground">
          Here are some of the <b>more personal</b> projects I have worked on in
          the past.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
