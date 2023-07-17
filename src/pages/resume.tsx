import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Contact } from '@/components/ContactMe/Contact';
import { Tabs } from '@/components/Tabs';
import { Timeline } from '@/components/timeline';
import { Meta } from '@/layouts/Meta';
import TransitionComponent from '@/pages/TransitionComponent';
import { Main } from '@/templates/Main';
import { ProfileSection } from '@/components/Profile/ProfileSection';
import { contactInfo } from '@/components/ContactMe/Contact.config';
import { JobComponent } from '@/components/history/jobComponent';
import { JobHistory } from '@/components/history/JobComponent';
import { jobs } from '@/components/history/JobComponent.config';
import { categories } from '@/components/Profile/ProfileSection.config';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-y-2 border-gray-900" />
    </div>
  );
};

const MainPage = () => {
  const router = useRouter();

  const [tab, setTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!router.isReady) return;
    const urlTab = router.query.tab; // urlTab is the tab in the url
    if (tab && urlTab !== tab) {
      // tab is defined and url tab is not
      router.push({ query: { tab } }, undefined, { shallow: true }); // update url
    } else if (!tab) {
      // tab is undefined
      if (urlTab) {
        setTab(urlTab as string); // url tab is defined and tab is not
      } else {
        setTab('experience'); // default tab
      }
    } else if (tab && !urlTab) {
      // tab is defined and url tab is not
      router.push({ query: { tab } }, undefined, { shallow: true }); // update url
    }
  }, [tab, router.query.tab, router.isReady]);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Tabs
        tabs={['experience', 'contact', 'profile']}
        tab={tab}
        setTab={setTab}
      />
      <br />
      <br />
      <AnimatePresence mode="wait">
        {tab === undefined && <LoadingComponent />}

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
