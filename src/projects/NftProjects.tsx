import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import _ from 'lodash';
import { ProjectLinks } from './ProjectCard';
import { useLastHoveredImage } from './useLastHoveredImage';
import { projects } from './projectData';

const MotionImage = motion(Image);

export const NftProjects: React.FC<{}> = () => {
  const { handleHover, lastHoveredImage } = useLastHoveredImage(
    projects[0].bgImage
  );

  return (
    <div className={'flex  w-screen flex-col space-y-10 divide-y px-20'}>
      {projects.map((project) => (
        <div
          key={project.title}
          className={'flex h-full w-full flex-col gap-8 p-2 py-12'}
        >
          <div
            className={'flex justify-between'}
            onMouseEnter={() => handleHover(project.bgImage)}
          >
            <AnimatePresence mode={'popLayout'}>
              <MotionImage
                className={clsx(
                  'object-cover object-center transition-all duration-75',
                  lastHoveredImage === project.bgImage
                    ? 'h-auto w-10 rounded-md md:h-96 md:w-96'
                    : 'h-96 w-96 rounded-full p-6'
                )}
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={400}
              />
              {lastHoveredImage === project.bgImage && (
                <MotionImage
                  layoutId={'spotlight-projects'}
                  width={400}
                  height={400}
                  className={clsx('h-96 w-96 object-cover object-center')}
                  variants={imageVariant}
                  initial={'initial'}
                  // animate={
                  //   lastHoveredImage === project.bgImage ? 'animate' : 'initial'
                  animate={'animate'}
                  exit={'exit'}
                  src={lastHoveredImage}
                  alt={`${project.title} background image`}
                />
              )}
            </AnimatePresence>
          </div>
          <h1 className="text-start text-2xl">{_.startCase(project.title)}</h1>
          <p className="w-3/5 text-start text-sm">{project.description}</p>
          <ProjectLinks
            openSeaLink={project.openSeaLink}
            blankRasaLink={project.blankRasaLink}
            marketingSiteLink={project.marketingSiteLink}
            blockchain={project.blockchain}
            date={project.date}
          />
        </div>
      ))}
    </div>
  );
};

const imageVariant: Variants = {
  initial: {},
  animate: {
    borderRadius: '5%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
