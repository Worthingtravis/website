import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { Contact } from '@/components/ContactMe/Contact';
import { contactInfo } from '@/components/ContactMe/Contact.config';
import { JobHistory } from '@/components/history/JobComponent';
import { jobs } from '@/components/history/JobComponent.config';
import { ProfileSection } from '@/components/Profile/ProfileSection';
import { categories } from '@/components/Profile/ProfileSection.config';
import { Tabs } from '@/components/Tabs';
import { Meta } from '@/layouts/Meta';
import TransitionComponent from '@/pages/TransitionComponent';
import { Main } from '@/templates/Main';

const MainPage = () => {
  const [tab, setTab] = useState<'experience' | 'contact' | 'profile'>(
    'experience'
  );

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Tabs
        tabs={['experience', 'contact', 'profile']}
        tab={tab}
        setTab={setTab}
      />
      <br />
      <br />
      <AnimatePresence presenceAffectsLayout>
        {tab === 'profile' && (
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
    </Main>
  );
};

export default MainPage;
