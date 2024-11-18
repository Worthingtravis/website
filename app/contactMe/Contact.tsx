import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Card } from '../components/ui/card';
import { contactInfo } from './contact.config';
import type { ContactInfo } from './contact.config';
import { cn } from '../lib/utils';

const ContactDetails = ({ contact }: { contact: ContactInfo }) => {
  const [isHovered, setIsHovered] = useState<
    'mail' | 'linkedIn' | 'gitHub' | null
  >(null);

  return (
    <LayoutGroup id={'bg'}>
      <Card className="rounded-2xl duration-300 ease-out hover:border-border/5">
        <AnimatePresence mode={'sync'}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            id="mail"
            key="mail"
            onMouseEnter={() => setIsHovered('mail')}
            onMouseLeave={() => setIsHovered(null)}
            className={cn(
              'col-span-6 flex items-center gap-2 md:col-span-3 lg:col-span-4',
              linkStyle
            )}
            href={`mailto:${contact.email}`}
          >
            <Mail size={24} />
            <span className="relative text-lg lg:text-2xl">
              {contact.email}
              {isHovered === 'mail' && <ExternalLinkIcon />}
            </span>
            {isHovered === 'mail' && <Background />}
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            key="linkedIn"
            id="linkedIn"
            onMouseEnter={() => setIsHovered('linkedIn')}
            onMouseLeave={() => setIsHovered(null)}
            className={cn(
              'col-span-6 flex items-center gap-2 md:col-span-3 lg:col-span-4',
              linkStyle
            )}
            href={contact.linkedIn}
          >
            <FaLinkedin size={24} />
            <span className="relative text-lg lg:text-2xl">
              LinkedIn
              {isHovered === 'linkedIn' && <ExternalLinkIcon />}
            </span>
            {isHovered === 'linkedIn' && <Background />}
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={'gitHub'}
            id="gitHub"
            onMouseEnter={() => setIsHovered('gitHub')}
            onMouseLeave={() => setIsHovered(null)}
            className={cn(
              'col-span-6 flex items-center gap-2 md:col-span-3 lg:col-span-4',
              linkStyle
            )}
            href={contact.gitHub}
          >
            <FaGithub size={24} />
            <span className="relative text-lg lg:text-2xl">
              GitHub
              {isHovered === 'gitHub' && <ExternalLinkIcon />}
            </span>

            {isHovered === 'gitHub' && <Background />}
          </Link>
        </AnimatePresence>
      </Card>
    </LayoutGroup>
  );
};

const ExternalLinkIcon = () => (
  <motion.div
    layoutId={'external-icon'}
    layout
    className="absolute right-0 top-1/2 shrink-0 -translate-y-1/2"
  >
    <motion.span
      transition={{ duration: 2, type: 'spring' }}
      className="absolute right-[-30px] top-1/2 flex w-full -translate-y-1/2 items-center gap-2"
    >
      <ExternalLink size={24} className="shrink-0" />
      <span className="w-fit text-nowrap text-sm">Open in new tab</span>
    </motion.span>
  </motion.div>
);

const Background = () => (
  <motion.span layoutId={'hover'} className={animatedBgClassName} />
);
const animatedBgClassName =
  'absolute inset-0 z-[-1] rounded-2xl bg-blue-500/50';
const linkStyle =
  'p-4 group z-10 relative transition-transform duration-500 ease-in-out transition-colors duration-300 ease-in-out';

export const Contact = () => {
  return <ContactDetails contact={contactInfo} />;
};
