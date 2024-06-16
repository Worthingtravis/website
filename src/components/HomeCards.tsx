import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedBorderGradient } from './Spotlight';
import { AnimatedText } from './AnimatedText';

const MotionLink = motion(Link);

// Component for each navigation card
const NavCard = ({ href, label }: { href: string; label: string }) => (
  <MotionLink
    href={href}
    whileHover={{ scale: 1.05 }}
    initial="hidden"
    animate="visible"
    className="relative flex h-full w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg  p-4"
  >
    <AnimatedBorderGradient>
      <AnimatedText>
        <motion.h1
          className="text-4xl font-bold text-transparent"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
          }}
        >
          {label}
        </motion.h1>
      </AnimatedText>
    </AnimatedBorderGradient>
  </MotionLink>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export function HomeCards() {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-stretch md:justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-wrap justify-center gap-0"
      >
        <NavCard href="/resume" label="Resume" />
        <NavCard href="/projects" label="Projects" />
      </motion.div>
    </div>
  );
}
