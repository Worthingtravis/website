import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useScroll } from 'framer-motion';
import { clsx } from 'clsx';
import Image from 'next/image';
import { projects } from './projectData';
import { useLastHoveredImage } from './useLastHoveredImage';
import { ProjectLinks } from './ProjectCard';

const MotionImage = motion(Image);

const ProjectSection = ({
  project,
  active,
  setCurrentClosest,
}: {
  project: (typeof projects)[0];
  active: boolean;
  setCurrentClosest: (title: string, distance: number) => void;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      setCurrentClosest(project.title, progress);
    });
    return () => unsubscribe();
  }, [scrollYProgress, project.title, setCurrentClosest]);

  return (
    <div ref={ref} className={'mt-48 flex flex-col gap-10 p-12'}>
      <h1 className="text-4xl font-semibold">{project.title}</h1>
      <div className="flex w-full justify-around gap-2">
        <LayoutGroup id={project.title}>
          <MotionImage
            layout={'preserve-aspect'}
            className="h-96 w-1/2 shrink-0 origin-center  self-start rounded-xl bg-cover bg-center object-cover object-center"
            src={project.imageSrc}
            alt={project.title}
            width={400}
            height={400}
          />
        </LayoutGroup>

        <AnimatePresence mode={'popLayout'}>
          {active && (
            <MotionImage
              layout={'preserve-aspect'}
              layoutId={'spotlight-image'}
              className={clsx(
                'h-96 w-1/2 origin-center rounded-xl bg-cover bg-center object-cover object-center'
              )}
              src={project.bgImage}
              alt={project.title}
              width={400}
              height={400}
            />
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex w-full flex-col  justify-start gap-4 "
      >
        <p className="text-sm">{project.description}</p>
        <ProjectLinks
          openSeaLink={project.openSeaLink}
          blankRasaLink={project.blankRasaLink}
          marketingSiteLink={project.marketingSiteLink}
          blockchain={project.blockchain}
          date={project.date}
        />
      </motion.div>
    </div>
  );
};

export const NftProjects = () => {
  const { handleHover } = useLastHoveredImage(projects[0].bgImage);
  const containerRef = useRef(null);
  const [closestSection, setClosestSection] = useState({
    title: '',
    distance: Infinity,
  });

  const setCurrentClosest = (title, distance) => {
    // Since `distance` is already the absolute difference from 0.5, we just compare it directly.
    if (distance < closestSection.distance) {
      setClosestSection({ title, distance });
    }
    // No need to call setClosestSection if the current closest is still the closest.
  };
  useEffect(() => {
    if (closestSection.title) {
      handleHover(
        projects.find((p) => p.title === closestSection.title).bgImage
      );
    }
  }, [closestSection, handleHover]);

  return (
    <div ref={containerRef}>
      {projects.map((project) => (
        <ProjectSection
          key={project.title}
          project={project}
          setCurrentClosest={setCurrentClosest}
          active={project.title === closestSection.title}
        />
      ))}
    </div>
  );
};
