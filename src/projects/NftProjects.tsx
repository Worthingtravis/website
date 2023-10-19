import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import _ from 'lodash';
import { ProjectCard, ProjectLinks } from './ProjectCard';
import { useLastHoveredImage } from './useLastHoveredImage';
import { projects } from './projectData';
import { AnimatedBorderGradient } from '../components/Spotlight';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const NftProjects: React.FC<{}> = () => {
  const { handleHover, lastHoveredImage } = useLastHoveredImage(
    projects[0].bgImage
  );

  return (
    <div
      className={
        'flex h-full w-full select-none flex-col items-stretch justify-center gap-4'
      }
    >
      <AspectRatio ratio={16 / 8}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: projects.length * 0.2 } }}
          exit={{ opacity: 0 }}
          src={lastHoveredImage}
          alt={projects[0].bgImage}
          className={clsx('h-full w-full   object-center  ')}
        />
      </AspectRatio>

      <div
        className={
          'flex w-full flex-col  items-center justify-center gap-10 md:flex-row'
        }
      >
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: i * 0.2 } }}
            exit={{ opacity: 0 }}
            key={project.title}
          >
            <h1 className="text-start text-2xl">
              {_.startCase(project.title)}
            </h1>
            <AnimatedBorderGradient className={'h-28 w-full '}>
              <ProjectCard {...project} onHover={handleHover} />
            </AnimatedBorderGradient>
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
