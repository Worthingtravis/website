import { motion } from 'framer-motion';
import Link from 'next/link';
import { AboutIcon, PlaygroundIcon, ProjectsIcon, ResumeIcon } from './Icons';
import { AnimatedBorderGradient, CardSpotlightEffect } from './Spotlight';

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
        className="z-10 grid h-1/2 grid-cols-1 items-end gap-4   font-medium tracking-tight text-white ease-in-out md:grid-cols-2 md:gap-8 "
      >
        <MotionLink
          href="/resume"
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
          className={'h-full'}
        >
          <AnimatedBorderGradient>
            <CardSpotlightEffect>
              <span className="flex animate-text-gradient items-center gap-4 bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">
                Resume
                <ResumeIcon />
              </span>
            </CardSpotlightEffect>
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
            <CardSpotlightEffect>
              <span className="flex animate-text-gradient items-center gap-4 bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">
                Projects
                <ProjectsIcon />
              </span>
            </CardSpotlightEffect>
          </AnimatedBorderGradient>
        </MotionLink>
        <MotionLink
          href="/playground"
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
        >
          <AnimatedBorderGradient>
            <CardSpotlightEffect>
              <span className="flex animate-text-gradient items-center gap-4 bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">
                Playground
                <PlaygroundIcon />
              </span>
            </CardSpotlightEffect>
          </AnimatedBorderGradient>
        </MotionLink>
        <MotionLink
          href="/about"
          whileHover={'whileHover'}
          initial={'hidden'}
          animate={'visible'}
        >
          <AnimatedBorderGradient>
            <CardSpotlightEffect>
              <span className="flex animate-text-gradient items-center gap-4 bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">
                About
                <AboutIcon />
              </span>
            </CardSpotlightEffect>
          </AnimatedBorderGradient>
        </MotionLink>
      </motion.div>
    </div>
  );
}
