import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Contact } from '../components/ContactMe/Contact';
import { contactInfo } from '../components/ContactMe/Contact.config';
import { JobHistory } from '../components/history/JobComponent';
import { jobs } from '../components/history/JobComponent.config';
import { ProfileSection } from '../components/Profile/ProfileSection';
import { categories } from '../components/Profile/ProfileSection.config';
import Tabs from '../components/Tabs';
import { Meta } from '../layouts/Meta';
import TransitionComponent from './TransitionComponent';
import { Main } from '../templates/Main';

type Tab = 'experience' | 'contact' | 'skills & qualities';
const MainPage = () => {
  const [tab, setTab] = useState<Tab>('experience');

  return (
    <Main meta={<Meta title="Worthing Travis - Resume" description="" />}>
      <div
        className={'z-[2] flex w-full max-w-4xl flex-col items-center gap-5'}
      >
        <Tabs
          tabs={['experience', 'contact', 'skills & qualities']}
          activeTab={tab}
          setActiveTab={setTab}
        />

        <AnimatePresence>
          {tab === 'experience' && (
            <TransitionComponent key="experience">
              <JobHistory jobs={jobs} />
            </TransitionComponent>
          )}

          {tab === 'contact' && (
            <TransitionComponent key="contact">
              <Contact info={contactInfo} />
            </TransitionComponent>
          )}

          {tab === 'skills & qualities' && (
            <TransitionComponent key="profile">
              <ProfileSection categories={categories} />
            </TransitionComponent>
          )}
        </AnimatePresence>
      </div>
    </Main>
  );
};

export default MainPage;
