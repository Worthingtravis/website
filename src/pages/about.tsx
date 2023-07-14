import type { FC, ReactNode } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const topics = [
  `Welcome!`,
  `I'm Travis Worthing, a seasoned Full Stack Software Developer
        deeply immersed in the Web3 ecosystem since 2017. I hold a Bachelor's
        Degree in Computer Science from the University of British Columbia
        Okanagan (UBCO). My technical acumen and leadership skills have been
        honed through significant roles, where I've orchestrated projects
        including decentralized applications (dApps) for marketplaces, token
        swapping platforms, and key integrations for member onboarding.`,

  `Throughout my career, I've had the privilege of managing dynamic
        development teams, varying in size from 4 to 6 individuals, located
        across the globe. This experience has not only enhanced my leadership
        skills, but also equipped me to efficiently navigate multicultural and
        geographically dispersed work environments.`,

  `I've been instrumental in the creation of cryptocurrency wallets for two
        renowned companies, reflecting my versatility in the blockchain domain.
        Recently, my focus has shifted towards integrating sophisticated
        contracts such as ERC721, ERC20, zk-SNARK, and UniRep, and I've
        successfully developed and deployed contracts on platforms like
        Avalanche.`,
  ` When it comes to testing, my toolkit of choice includes Jest and
        Playwright. My technical proficiency is backed by an extensive
        experience with a broad spectrum of technologies, including ReactJS,
        NextJS, MySQL, Express, Laravel, TailwindCSS, SCSS, and Material-UI,
        with particular confidence in leveraging React, Tailwind, MySQL, and
        NextJS.`,
  `Driven by a relentless pursuit of innovation, I'm excited to
            continue my journey in the world of Web3 and blockchain, delivering
            cutting-edge technology solutions that shape the future.`,
];

const TextBlock: FC<TextBlockProps> = ({ children }) => (
  <div className="mb-10 text-2xl text-white/50">{children}</div>
);

// Your tag component
const Tag: FC<TextBlockProps> = ({ children }) => {
  return <TextBlock>{children}</TextBlock>;
};
const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="bg-gray-900">
      {topics.map((topic) => (
        <Tag key={topic}>{topic}</Tag>
      ))}
    </div>
  </Main>
);

type TextBlockProps = {
  children: ReactNode;
};

export default About;
