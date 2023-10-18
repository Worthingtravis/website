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
      staggerChildren: 1,
    },
  },
};

export function HomeCards() {
  return (
    <div
      className={
        'z-30 flex w-full max-w-3xl flex-col items-stretch md:justify-center'
      }
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="z-10 grid h-1/2 grid-cols-1 items-end gap-8 text-white md:grid-cols-2"
      >
        <MotionLink
          href="/resume"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="flex h-48 items-center justify-center gap-2 rounded-lg bg-gray-950 text-2xl text-inherit hover:bg-blue-500"
        >
          Resume
          <ResumeIcon />
        </MotionLink>

        <MotionLink
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          href="/projects"
          className="flex h-48 items-center justify-center gap-2 rounded-lg  bg-gray-950 text-2xl text-inherit hover:bg-red-500"
        >
          Projects
          <ProjectsIcon />
        </MotionLink>
        <MotionLink
          href="/playground"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="group flex h-48 items-center justify-center gap-2 rounded-lg  bg-gray-950 text-2xl text-inherit hover:bg-green-500 hover:text-green-900"
        >
          Playground
          <PlaygroundIcon />
        </MotionLink>
        <MotionLink
          href="/about"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="flex h-48  items-center justify-center gap-2 rounded-lg  bg-gray-950 text-2xl text-inherit bg-blend-color mix-blend-hard-light hover:bg-yellow-500"
        >
          About
          <AboutIcon />
        </MotionLink>
      </motion.div>
    </div>
  );
}
