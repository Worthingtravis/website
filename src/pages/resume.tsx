import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Contact } from '../components/ContactMe/Contact';
import { JobHistory } from '../components/history/JobComponent';
import { jobs } from '../components/history/JobComponent.config';
import { ProfileSection } from '../components/Profile/ProfileSection';
import { categories } from '../components/Profile/ProfileSection.config';
import Tabs from '../components/Tabs';
import { Meta } from '../layouts/Meta';
import TransitionComponent from './TransitionComponent';
import { Main } from '../templates/Main';
import { Parallax } from 'src/components/history/Parallax';

type Tab = 'experience' | 'contact' | 'profile';

interface ScrollToTabParams {
  onClick: () => void;
  tab: 'experience' | 'contact' | 'profile';
  label?: string;
  active?: boolean;
}

function ScrollToTab({ onClick, tab, label, active }: ScrollToTabParams) {
  return (
    <motion.button
      layout
      onClick={onClick}
      animate={active ? 'active' : 'inactive'}
      variants={{
        active: {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: 'white',
          scale: 3,
        },
        inactive: {
          backgroundColor: 'rgba(255,255,255,0.05)',
          color: 'rgba(255,255,255,0.5)',
          scale: 1,
        },
      }}
      className="sticky top-0 w-fit cursor-pointer font-bold text-white "
    >
      {label}
    </motion.button>
  );
}

const MainPage = () => {
  const ScrollTo = (id: string, block: ScrollLogicalPosition = 'center') => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block,
      inline: 'end',
    });
  };
  const [tab, setTab] = useState<Tab>(undefined);
  return (
    <Main meta={<Meta title="Resume - Worthing Travis" description="" />}>
      <div className="relative grid h-full w-full grid-cols-4">
        <div className=" col-span-1 flex flex-col items-center ">
          <ScrollToTab
            onClick={() => {
              ScrollTo('experience');
            }}
            active={tab === 'experience'}
            tab={'experience'}
            label={'Experience'}
          />

          <ScrollToTab
            onClick={() => {
              ScrollTo('contact');
            }}
            active={tab === 'contact'}
            tab={'contact'}
            label={'Contact'}
          />
          <ScrollToTab
            onClick={() => {
              ScrollTo('profile');
            }}
            active={tab === 'profile'}
            tab={'profile'}
            label={'Profile'}
          />
        </div>

        <Parallax offSetY={-250} offSetX={0} className={'col-span-3'}>
          <div className="relative z-[50] flex w-full max-w-4xl flex-col items-center  gap-32 rounded-lg p-4">
            <motion.div
              id="experience"
              viewport={{ amount: 0.25 }}
              className="relative flex w-full flex-col justify-start gap-32"
              onViewportEnter={() => setTab('experience')}
            >
              <JobHistory jobs={jobs} />
            </motion.div>
            <div className={'flex flex-wrap gap-32'}>
              <Parallax
                id="contact"
                viewport={{ amount: 0.25 }}
                offSetY={50}
                offSetX={0}
                onViewportEnter={() => setTab('contact')}
              >
                <Contact />
              </Parallax>
              <Parallax
                id="profile"
                viewport={{ amount: 0.5 }}
                offSetY={50}
                offSetX={0}
                onViewportEnter={() => setTab('profile')}
              >
                <ProfileSection categories={categories} />
              </Parallax>
            </div>
          </div>
        </Parallax>
      </div>
    </Main>
  );
};

export default MainPage;
