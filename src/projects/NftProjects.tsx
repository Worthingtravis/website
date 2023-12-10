import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projects } from './projectData';
import { ProjectLinks } from './ProjectCard';
import { Parallax } from '../components/history/Parallax';

const MotionImage = motion(Image);

interface ProjectSectionProps {
  project: (typeof projects)[0];
}

const ProjectSection = ({ project }: ProjectSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const fontSize = useTransform(scrollYProgress, [0, 0.5], ['2rem', '4rem']);

  return (
    <motion.div
      ref={ref}
      className=" flex w-full max-w-7xl flex-col gap-8 p-6 will-change-transform "
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.75 }}
      layoutScroll={true}
    >
      <motion.h1
        className="mb-12  text-xl font-semibold md:text-3xl"
        style={{ fontSize }}
      >
        {project.title}
      </motion.h1>

      <motion.div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
        <div className={'basis-1/4'}>
          <MotionImage
            className="h-auto w-full max-w-lg rounded-xl bg-cover bg-center object-cover object-center will-change-transform "
            src={project.imageSrc}
            alt={project.title}
            width={400}
            height={400}
          />

          <div className="flex w-full justify-center md:justify-start">
            <ProjectLinks
              openSeaLink={project.openSeaLink}
              blankRasaLink={project.blankRasaLink}
              marketingSiteLink={project.marketingSiteLink}
              blockchain={project.blockchain}
              date={project.date}
            />
          </div>
        </div>

        <motion.span
          className="w-full text-center text-sm md:w-1/2 md:text-left md:text-base"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            lineHeight: 'clamp(1.5rem, 2vw, 2.5rem)',
          }}
        >
          {project.description}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export const NftProjects = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <div className="flex h-52 w-full items-center justify-center">
        <motion.h1
          className="text-6xl font-semibold text-white"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Personal Projects
        </motion.h1>
      </div>
      {projects.map((project) => (
        <div key={project.title}>
          <Parallax offSetY={50} offSetX={50}>
            <ProjectSection project={project} />
          </Parallax>
        </div>
      ))}
    </div>
  );
};
