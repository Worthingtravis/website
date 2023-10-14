import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectCard } from './ProjectCard';
import { useLastHoveredImage } from './useLastHoveredImage';
import { projects } from './projectData';

export const NftProjects: React.FC<{}> = () => {
  const { handleHover, lastHoveredImage } = useLastHoveredImage(
    projects[0].bgImage
  );

  return (
    <div className={'flex flex-col items-center'}>
      <div className={'relative z-[1] flex flex-wrap  justify-center gap-10'}>
        <Image
          src={lastHoveredImage}
          alt={projects[0].bgImage}
          height={2160}
          width={3840}
          className={'fixed inset-0 z-[0] h-full w-full bg-fixed'}
        />
        {projects.map((project) => (
          <motion.div
            className={`group/${project.title} z-[2] max-w-sm grow`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={project.title}
          >
            <ProjectCard {...project} onHover={handleHover} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
