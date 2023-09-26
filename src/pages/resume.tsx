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

const MainPage = () => {
  const [tab, setTab] = useState<
    'experience' | 'contact' | 'skills & qualities'
  >('experience');

  return (
    <Main meta={<Meta title="Worthing Travis - Resume" description="" />}>
      <div className={'my-8 flex w-full max-w-4xl flex-col items-center gap-5'}>
        <Tabs
          tabs={['experience', 'contact', 'skills & qualities']}
          activeTab={tab}
          setActiveTab={setTab}
        />

        <AnimatePresence presenceAffectsLayout>
          {tab === 'skills & qualities' && (
            <TransitionComponent key="profile">
              <ProfileSection categories={categories} />
            </TransitionComponent>
          )}

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
        </AnimatePresence>
      </div>
    </Main>
  );
};

export default MainPage;
