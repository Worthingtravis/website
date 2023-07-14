import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Contact } from '@/components/Contact';
import { Tabs } from '@/components/Tabs';
import { Timeline } from '@/components/timeline';
import { Meta } from '@/layouts/Meta';
import TransitionComponent from '@/pages/TransitionComponent';
import { Main } from '@/templates/Main';

type Job = {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
};

const jobs: Job[] = [
  {
    title: 'Independent Contractor — Web3 Developer',
    period: 'March 2023 - Present',
    company: 'Frequency & Sacred Finance',
    responsibilities: [
      'Contributing to the development of an NFT wallet project, primarily focusing on feature implementations using Next.js, React, and Tailwind for front-end development.',
      'Developing a private forum project with a focus on contract integration around zkSNARK, ERC20 contracts, and UniRep, utilizing Next.js and React with Tailwind for a consistent front-end experience.',
    ],
  },
  {
    title: 'Atomic47 — Senior Fullstack Developer',
    period: 'July 2022 - March 2023',
    company: 'Atomic47 Labs',
    responsibilities: [
      'Led a team of 3-7 developers, fostering a collaborative environment and managing project deadlines.',
      'Orchestrated the development of Bullpen, a marketplace built in ReactJS, integrated with complex EVM smart contracts to streamline NFT transactions.',
      'Launched a web3 project to simplify the sales process for our ERC20 tokens, AUX/AGX, by developing a user-friendly guide for purchasing AVAX or USDC with a credit card and facilitating seamless token swapping through a DEX.',
    ],
  },
  {
    title: 'Global Physical Asset Management — Senior Developer',
    period: 'June 2021 - July 2022',
    company: 'Global Physical Asset Management',
    responsibilities: [
      'Headed the development of a progressive web app using Ionic, React, and TypeScript, automating reporting in non-destructive testing areas through a range of features such as inspection information collection, photo capture and annotation, automatic document generation, and data storage.',
      'Implemented Microsoft authentication for secure sign-on and file sharing.',
      'Managed all stages of project development from preliminary research and requirement gathering, hiring software developers, team management, to feedback collection and resolution.',
    ],
  },
  {
    title: 'Atomic47 — Software Developer',
    period: 'August 2018 - June 2021',
    company: 'Atomic47 Labs',
    responsibilities: [
      'As a key contributor at Atomic47 Labs, I delivered advanced technology solutions for our primary client, Lode. This included creating and enhancing databases, designing member and admin portals, and scaling technology infrastructure to improve business processes.',
      "My efforts significantly improved efficiency and user experience for both Lode's customers and administrators.",
    ],
  },
];
function JobComponent(props: { job: Job }) {
  return (
    <div className="relative my-8 rounded-lg bg-gray-800 p-6 text-white shadow-2xl sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-blue-400">
          {props.job.title}
        </h1>
        <h2 className="mb-1 text-base font-medium text-gray-400">
          {props.job.period}
        </h2>
        <h3 className="mb-4 text-sm font-medium text-gray-400">
          {props.job.company}
        </h3>
        <div className="border-l-4 border-solid border-blue-500 pl-4">
          <ul className="list-inside list-disc">
            {props.job.responsibilities.map((responsibility) => (
              <li key={responsibility} className="mb-2 text-gray-300">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <Timeline>
      {jobs.map((job) => (
        <JobComponent key={job.title} job={job} />
      ))}
    </Timeline>
  );
}

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
    if (tab !== router.query.tab && router.query.tab !== undefined)
      router.push({ query: { tab } }, undefined, { shallow: true });
    if (tab === undefined && router.query.tab !== undefined)
      setTab(router.query.tab as string);
    if (tab === undefined && router.query.tab === undefined)
      setTab('experience');
    if (tab !== undefined && router.query.tab === undefined)
      router.push({ query: { tab } }, undefined, { shallow: true });
  }, [tab, router.query.tab, router.isReady]);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Tabs tabs={['experience', 'contact']} tab={tab} setTab={setTab} />
      <AnimatePresence mode="wait">
        {tab === undefined && <LoadingComponent />}
        {tab === 'experience' && (
          <TransitionComponent
            key="experience"
            className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center p-4"
          >
            <Resume />
          </TransitionComponent>
        )}
        {tab === 'contact' && (
          <TransitionComponent
            key="contact"
            className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center p-4"
          >
            <Contact />
          </TransitionComponent>
        )}
      </AnimatePresence>
    </Main>
  );
};

export default MainPage;
