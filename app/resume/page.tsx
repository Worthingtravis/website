'use client';

import { Contact } from 'app/components/contactMe/Contact';
import { JobHistory } from 'app/components/history/JobComponent';
import { jobs } from 'app/components/history/JobComponent.config';
import { ProfileSection } from 'app/components/profile/ProfileSection';
import { categories } from 'app/components/profile/ProfileSection.config';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const MotionLink = motion(Link);
const MainPage = () => {
  return <Outline />;
};

export function Outline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (key: string) => {
    const url = new URL(window.location.href);
    url.hash = key;
    navigator.clipboard.writeText(url.href);
  };

  return (
    <motion.div
      ref={containerRef}
      className={
        'relative m-8 mb-32 flex h-full grow flex-col space-y-8 2xl:mt-32'
      }
    >
      <motion.div className={'space-y-8'}>
        {Object.entries(data).map(([key, value]) => (
          <motion.section key={key} className={'space-y-8'}>
            <h1
              id={key}
              className=" scroll-mt-[40vh] text-2xl font-bold"
              onClick={() => {
                copyToClipboard(key);
              }}
            >
              {value.title}
            </h1>
            {value.content}
            <motion.div
              onViewportEnter={() => {
                window.history.replaceState(null, '', `#${key}`);
              }}
              className="absolute bottom-0 left-0 size-0"
            />
          </motion.section>
        ))}
        <Link
          href="#/"
          aria-description="Back to Top"
          aria-label="Back to Top"
          className="absolute right-4 top-full rounded-md bg-gray-800 p-2 text-white"
        >
          Back to Top
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default MainPage;

const data = {
  contact: {
    title: 'Contact',
    content: <Contact />,
  },
  experience: {
    title: 'Experience',
    content: <JobHistory jobs={jobs} />,
  },
  profile: {
    title: 'Profile',
    content: <ProfileSection categories={categories} />,
  },
};
