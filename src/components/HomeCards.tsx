import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AnimatedBorderGradient } from './Spotlight';
import { AnimatedText } from './AnimatedText';
import { contactInfo } from './ContactMe/Contact';
import { Card, CardHeader, CardTitle } from '@/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AuroraBackground } from '@/ui/aurora-background';

const MotionLink = motion(Link);

// Component for each navigation card
const NavCard = ({ href, label }: { href: string; label: string }) => (
  <MotionLink
    href={href}
    whileHover={{ scale: 1.05 }}
    initial="hidden"
    animate="visible"
    className="contents"
  >
    <AnimatedBorderGradient className={'relative'}>
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
    <div className="flex h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-stretch px-2 md:justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex size-full flex-col items-center justify-center gap-4 md:flex-row"
      >
        <NavCard href="/resume" label="Resume" />
        <ContactNavCard />
        <NavCard href="/projects" label="Projects" />
      </motion.div>
    </div>
  );
}

export function ContactNavCard() {
  return (
    <div className="z-20 flex w-full flex-col items-stretch text-center md:justify-center">
      <AnimatedBorderGradient
        className={' backdrop-blur-3xl hover:border-gray-900/80'}
      >
        <Card className={'relative z-20 border-0 bg-transparent'}>
          <TooltipProvider skipDelayDuration={0}>
            <CardHeader className={' space-y-4'}>
              <CardTitle> {contactInfo.name}</CardTitle>

              <Link href={`mailto:${contactInfo.email}`} passHref>
                <CardTitle
                  className={
                    'flex gap-2 text-sm  transition-all duration-300 ease-in-out hover:scale-105'
                  }
                >
                  <Tooltip>
                    <TooltipTrigger className={'mx-auto'}>
                      <AnimatedText className={'transition-all !delay-1000'}>
                        <span className="text-sm">{contactInfo.email}</span>
                      </AnimatedText>
                    </TooltipTrigger>
                    <TooltipContent side={'right'}>
                      <span className="text-sm">Send me an email</span>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </Link>
              <Link href={contactInfo.linkedIn} passHref>
                <CardTitle
                  className={
                    'flex items-center gap-2 text-sm transition-all duration-300 ease-in-out hover:scale-105'
                  }
                >
                  <Tooltip>
                    <TooltipTrigger
                      className={
                        'mx-auto flex items-center gap-2 text-sm transition-all duration-300 ease-in-out hover:scale-105'
                      }
                    >
                      <>
                        <FaLinkedin size={24} />
                        <span>LinkedIn</span>
                      </>
                    </TooltipTrigger>
                    <TooltipContent side={'right'}>
                      <span>Open my LinkedIn Profile</span>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </Link>
              <Link href={contactInfo.gitHub} passHref>
                <CardTitle
                  className={
                    'flex items-center gap-2 text-sm transition-all duration-300 ease-in-out hover:scale-105'
                  }
                >
                  <Tooltip>
                    <TooltipTrigger
                      className={
                        'mx-auto flex items-center gap-2 text-sm transition-all duration-300 ease-in-out hover:scale-105'
                      }
                    >
                      <>
                        <FaGithub size={24} />
                        <span>GitHub</span>
                      </>
                    </TooltipTrigger>
                    <TooltipContent side={'right'}>
                      <span className="text-sm">Check out my GitHub</span>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </Link>
            </CardHeader>
          </TooltipProvider>
        </Card>
      </AnimatedBorderGradient>
    </div>
  );
}
