import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { currentProjects, projects } from './projectData';
import { ProjectLinks } from './ProjectCard';
import { Parallax } from '../components/history/Parallax';

interface ProjectSectionProps {
  project: (typeof projects)[0];
}

const MotionImage = motion(Image);

const ProjectSection = ({ project }: ProjectSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  const color = useTransform(scrollYProgress, [0, 0.5], ['black', 'white']);

  return (
    <motion.div
      ref={ref}
      className="mx-auto flex w-full  flex-col space-y-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-50 bg-clip-text p-4 shadow-lg will-change-transform"
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.75 }}
      style={{ scale }}
    >
      <motion.h1
        style={{
          scale,
          color,
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
        }}
      >
        {project.title}
      </motion.h1>
      <div className="flex flex-col-reverse items-center  justify-between gap-8 md:flex-row">
        {project.imageSrc ? (
          <MotionImage
            className=" rounded-xl shadow-md"
            src={project.imageSrc}
            alt={project.title}
            width={400}
            height={400}
          />
        ) : (
          project.componentBlock
        )}
        <motion.div className="flex flex-1 flex-col items-start justify-center">
          <motion.p
            className="text-white"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 'clamp(1.5rem, 2.5vw, 2rem)',
              textShadow: '0 0 8px rgba(0, 0, 0, 0.7)',
            }}
          >
            {project.description}
          </motion.p>
          <ProjectLinks
            openSeaLink={project.openSeaLink}
            blankRasaLink={project.blankRasaLink}
            marketingSiteLink={project.marketingSiteLink}
            blockchain={project.blockchain}
            date={project.date}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ProjectPage = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="z-[2] flex min-h-screen flex-col gap-4 space-y-8 pt-12"
    >
      <motion.div className="flex h-32 w-full max-w-full items-center justify-center bg-gradient-to-r from-purple-500 to-pink-50 bg-clip-text">
        <motion.h1
          className="w-full  font-bold text-white"
          initial={{ scale: 0.9 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Current Project
          {currentProjects.length > 1 && <>s</>}
        </motion.h1>
      </motion.div>
      {currentProjects.map((project, idx) => (
        <div
          key={project.title}
          className=" max-w-5xl flex-col gap-32 bg-transparent"
        >
          <Parallax offSetY={20} offSetX={0}>
            <ProjectSection project={project} />
          </Parallax>
          {idx !== currentProjects.length - 1 && (
            <hr className="h-1 w-full bg-white" />
          )}
        </div>
      ))}

      <motion.div className="flex h-32 w-full max-w-full items-center justify-center bg-gradient-to-r from-purple-500 to-pink-50 bg-clip-text">
        <motion.h1
          className="w-full  font-bold text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          transition={{ duration: 0.5 }}
        >
          Past Personal Projects
        </motion.h1>
      </motion.div>
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className=" max-w-5xl flex-col gap-32 bg-transparent"
        >
          <Parallax offSetY={20} offSetX={0}>
            <ProjectSection project={project} />
          </Parallax>
          {idx !== projects.length - 1 && (
            <hr className="h-1 w-full bg-white" />
          )}
        </div>
      ))}
    </div>
  );
};
