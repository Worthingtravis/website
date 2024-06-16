import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedBorderGradient } from './Spotlight';
import { AnimatedText } from './AnimatedText';
import { Contact, contactInfo } from './ContactMe/Contact';
import { Card, CardHeader, CardTitle } from '@/ui/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const MotionLink = motion(Link);

// Component for each navigation card
const NavCard = ({ href, label }: { href: string; label: string }) => (
  <MotionLink
    href={href}
    whileHover={{ scale: 1.05 }}
    initial="hidden"
    animate="visible"
    className="contents max-w-sm"
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
    <div className="flex h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-stretch px-2 md:justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row"
      >
        <NavCard href="/resume" label="Resume" />
        <NavCard href="/projects" label="Projects" />
        <ContactNavCard />
      </motion.div>
    </div>
  );
}

export function ContactNavCard() {
  return (
    <div className="flex  w-full max-w-3xl flex-col items-stretch md:justify-center">
      <AnimatedBorderGradient className={'hover:border-gray-900/80 '}>
        <AnimatedText>
          <motion.h1
            className="text-4xl font-bold text-transparent"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
            }}
          >
            <Card className={'border-0 bg-transparent'}>
              <CardHeader className={'space-x-4 space-y-4'}>
                <CardTitle> {contactInfo.name}</CardTitle>

                <Link href={`mailto:${contactInfo.email}`} passHref>
                  <CardTitle
                    className={
                      'flex gap-2 text-sm   transition-all duration-300 ease-in-out hover:scale-105'
                    }
                  >
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm">{contactInfo.email}</span>
                        </TooltipTrigger>
                        <TooltipContent side={'right'}>
                          <span className="text-sm">Send me an email</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                </Link>
                <Link href={contactInfo.linkedIn} passHref>
                  <CardTitle
                    className={
                      'flex items-center gap-2  text-sm transition-all duration-300 ease-in-out hover:scale-105'
                    }
                  >
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger
                          className={
                            'flex items-center gap-2  text-sm transition-all duration-300 ease-in-out hover:scale-105'
                          }
                        >
                          <>
                            <FaLinkedin size={24} />
                            <span >LinkedIn</span>
                          </>
                        </TooltipTrigger>
                        <TooltipContent side={'right'}>
                          <span >
                            Open my LinkedIn Profile
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                </Link>
                <Link href={contactInfo.gitHub} passHref>
                  <CardTitle
                    className={
                      'flex items-center gap-2  text-sm transition-all duration-300 ease-in-out hover:scale-105'
                    }
                  >
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger
                          className={
                            'flex items-center gap-2  text-sm transition-all duration-300 ease-in-out hover:scale-105'
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
                    </TooltipProvider>
                  </CardTitle>
                </Link>
              </CardHeader>
            </Card>
          </motion.h1>
        </AnimatedText>
      </AnimatedBorderGradient>
    </div>
  );
}
