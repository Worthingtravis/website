import { motion } from 'framer-motion';
import Link from 'next/link';
import { AboutIcon, PlaygroundIcon, ProjectsIcon, ResumeIcon } from './Icons';

const MotionLink = motion(Link);

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

export function HomeCards() {
  return (
    <div
      className={
        'z-30 flex w-full max-w-3xl flex-col items-stretch md:scale-150 md:justify-center'
      }
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="z-10 grid h-1/2 grid-cols-1 items-end gap-4  font-light tracking-normal text-white ease-in-out md:grid-cols-2 md:gap-8"
      >
        <MotionLink
          href="/resume"
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          className="flex h-48 items-center justify-center gap-2 rounded-lg border-2 border-blue-500 bg-gray-950  text-2xl  text-inherit hover:border-black hover:bg-blue-500 hover:text-black "
        >
          Resume
          <ResumeIcon />
        </MotionLink>

        <MotionLink
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          href="/projects"
          className="group flex h-48 items-center justify-center gap-2 rounded-lg  border-2 border-red-500 bg-gray-950 text-2xl text-inherit hover:border-black hover:bg-red-500 hover:text-black "
        >
          Projects
          <ProjectsIcon />
        </MotionLink>
        <MotionLink
          href="/playground"
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          className="group flex h-48 items-center justify-center gap-2 rounded-lg  border-2 border-green-500 bg-gray-950 text-2xl text-inherit hover:border-black  hover:bg-green-500 hover:text-black"
        >
          Playground
          <PlaygroundIcon />
        </MotionLink>
        <MotionLink
          href="/about"
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          className="group flex h-48 items-center justify-center gap-2 rounded-lg  border-2 border-white bg-gray-950 text-2xl text-inherit hover:border-black hover:bg-white hover:text-black"
        >
          About
          <AboutIcon />
        </MotionLink>
      </motion.div>
    </div>
  );
}
