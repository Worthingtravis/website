import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { PlaygroundIcon, ProjectsIcon, ResumeIcon } from './Icons';

const MotionLink = motion(Link);

export function HomeCards() {
  return (
    <LayoutGroup>
      <div className=" flex h-full w-full flex-wrap items-center justify-center gap-4 p-4 md:p-8 ">
        <Card href="/resume" icon={ResumeIcon} text="Resume" />
        <Card href="/projects" icon={ProjectsIcon} text="Projects" />
        <Card href="/playground" icon={PlaygroundIcon} text="Playground" />
      </div>
    </LayoutGroup>
  );
}

const Card = ({ href, icon: IconComponent, text }) => {
  return (
    <MotionLink
      href={href}
      passHref
      whileHover={'whileHover'}
      exit={'exit'}
      className="flex h-fit  w-fit animate-text-gradient flex-wrap items-center justify-center rounded-xl border border-primary-foreground bg-background/50 p-6 hover:bg-background/90 hover:shadow-lg"
    >
      <span className="text-xl font-semibold">{text}</span>
      <IconComponent className="h-72 w-72 shrink-0 self-start text-foreground/50" />
    </MotionLink>
  );
};
