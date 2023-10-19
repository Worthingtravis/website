import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import { motion } from 'framer-motion';
import _ from 'lodash';
import { ProjectCard, ProjectLinks } from './ProjectCard';
import { useLastHoveredImage } from './useLastHoveredImage';
import { projects } from './projectData';
import { AnimatedBorderGradient } from '../components/Spotlight';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/ui/scroll-area';

const MotionImage = motion(Image);

export const NftProjects: React.FC<{}> = () => {
  const { handleHover, lastHoveredImage } = useLastHoveredImage(
    projects[0].bgImage
  );

  return (
    <div className="flex max-w-4xl select-none flex-col justify-center gap-4 sm:w-full">
      <AspectRatio ratio={2}>
        <MotionImage
          width={1000}
          height={500}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: projects.length * 0.2 } }}
          exit={{ opacity: 0 }}
          src={lastHoveredImage}
          alt={projects[0].bgImage}
          className={clsx('h-full w-full object-center')}
        />
      </AspectRatio>

      <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row ">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: i * 0.2 } }}
            exit={{ opacity: 0 }}
            key={project.title}
            className={clsx(
              ' flex flex-col items-center justify-center  sm:bg-gray-950'
            )}
          >
            <h1 className="text-start text-2xl">
              {_.startCase(project.title)}
            </h1>
            <AnimatedBorderGradient className={'max-h-28 w-full min-w-[400px]'}>
              <ProjectCard {...project} onHover={handleHover} />
            </AnimatedBorderGradient>
            <ScrollArea className="flex  h-[150px] flex-col p-1 text-sm text-gray-500 hover:text-white ">
              <p className="text-start text-sm   ">{project.description}</p>
            </ScrollArea>
            <ProjectLinks
              openSeaLink={project.openSeaLink}
              blankRasaLink={project.blankRasaLink}
              marketingSiteLink={project.marketingSiteLink}
              blockchain={project.blockchain}
              date={project.date}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
