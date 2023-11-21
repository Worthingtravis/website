import { AnimatePresence } from 'framer-motion';
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

type Tab = 'experience' | 'contact' | 'profile';
const MainPage = () => {
  const [tab, setTab] = useState<Tab>('experience');

  return (
    <Main meta={<Meta title="Worthing Travis - Resume" description="" />}>
      <div
        className={
          'relative z-[2] flex w-full max-w-4xl flex-col items-center gap-5'
        }
      >
        <Tabs
          tabs={['experience', 'contact', 'profile']}
          activeTab={tab}
          setActiveTab={(newTab) => {
            setTab(newTab);
          }}
        />
        <AnimatePresence mode={'wait'}>
          {Object.entries(data).map(([key, value]) => {
            if (tab === key) {
              return (
                <TransitionComponent key={key} layoutId={key}>
                  {value.content}
                </TransitionComponent>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </Main>
  );
};

export default MainPage;

const data = {
  experience: {
    title: 'Experience',
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <JobHistory jobs={jobs} />
      </div>
    ),
  },
  contact: {
    title: 'Contact',
    content: (
      <div className="flex h-full w-full  flex-col justify-start">
        <Contact />
      </div>
    ),
  },
  profile: {
    title: 'Profile',
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <ProfileSection categories={categories} />
      </div>
    ),
  },
};
