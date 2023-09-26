import clsx from 'clsx';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { useLastHoveredImage } from './useLastHoveredImage';
import { projects } from './projectData';

export const NftProjects: React.FC<{}> = () => {
  const { handleHover, lastHoveredImage } = useLastHoveredImage(
    projects[0].bgImage
  );

  return (
    <div className={'flex flex-wrap justify-center gap-10'}>
      <div className={'flex flex-col justify-center gap-10 '}>
        <AnimatePresence>
          <motion.div
            key={lastHoveredImage}
            className={clsx(
              'fixed inset-0 -z-[2] bg-cover bg-center bg-no-repeat'
            )}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              backgroundImage: `url(${lastHoveredImage})`,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 2,
            }}
            exit={{ opacity: 0.1 }}
          />
        </AnimatePresence>
        {projects.map((project) => (
          <div
            className={`group/${project.title} max-w-xl flex-grow`}
            key={project.title}
          >
            <ProjectCard {...project} onHover={handleHover} />
          </div>
        ))}
      </div>
    </div>
  );
};
