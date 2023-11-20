import { motion } from 'framer-motion';
import Link from 'next/link';
import { AboutIcon, PlaygroundIcon, ProjectsIcon, ResumeIcon } from './Icons';
import { AnimatedBorderGradient } from './Spotlight';
import { AnimatedText } from './AnimatedText';

const MotionLink = motion(Link);

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1],
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export function HomeCards() {
  return (
    <div
      className={
        'flex w-full max-w-3xl flex-col items-stretch md:scale-150 md:justify-center'
      }
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="z-10 grid h-1/2 grid-cols-1 items-end gap-4   font-medium tracking-tight  ease-in-out md:grid-cols-2 md:gap-8 "
      >
        <MotionLink
          href="/resume"
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          className={'h-full'}
        >
          <AnimatedBorderGradient>
            <AnimatedText>
              Resume
              <ResumeIcon />
            </AnimatedText>
          </AnimatedBorderGradient>
        </MotionLink>

        <MotionLink
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          href="/projects"
        >
          {' '}
          <AnimatedBorderGradient>
            <AnimatedText>
              Projects
              <ProjectsIcon />
            </AnimatedText>
          </AnimatedBorderGradient>
        </MotionLink>
        <MotionLink
          href="/playground"
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
        >
          <AnimatedBorderGradient>
            <AnimatedText>
              {' '}
              Playground
              <PlaygroundIcon />
            </AnimatedText>
          </AnimatedBorderGradient>
        </MotionLink>
        <MotionLink
          href="/"
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
        >
          <AnimatedBorderGradient>
            <AnimatedText>
              Nothing
              <AboutIcon />
            </AnimatedText>
          </AnimatedBorderGradient>
        </MotionLink>
      </motion.div>
    </div>
  );
}
