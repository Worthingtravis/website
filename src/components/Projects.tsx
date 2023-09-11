import clsx from 'clsx';
import React from 'react';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC<{}> = () => {
  return (
    <div className={clsx('my-10 flex max-w-7xl  flex-wrap gap-8')}>
      <ProjectCard
        bgImage={'/toonsquadbg.avif'}
        title="ToonSquad"
        description="The Toon Squad is a fun collection of unique digital cartoons taking us on a journey to embrace our inner Toon. We aspire to bring joy and fun to people, while building a decentralized environment we truly believe in."
        imageSrc="/toonsquad.webp"
        openSeaLink="https://opensea.io/collection/toonsquad-official"
        marketingSiteLink="https://toonsquadnft.io/"
        blockchain="Ethereum"
        date="March 2022"
        // additionalInfo="Integrated with ethereum contract using ethers.js and web3-react."
      />
      <ProjectCard
        bgImage={'/orkahideoutbg.jpg'}
        title="Orka Hideout"
        description="Orka Hideout is an innovative project on the Canto blockchain..."
        imageSrc="/orkahideout.png"
        blankRasaLink="https://www.blankrasa.com/collection/0x10a64af86267ad75a96865ee3b3db831e6d2baed"
        marketingSiteLink="https://orkahideout.io/"
        blockchain="Canto"
        date="June 2022"
        // additionalInfo="Integrated with ethereum contract using ethers.js and web3-react."
      />
      <ProjectCard
        bgImage={'/superfrensbg.png'}
        title="superfrens"
        description="SUPERFRENS is a unique collection of 1/1 baby goons captured away and ready to be released by you. Choose wisely as each of their unique traits and abilities will affect the future of the Superfrens World."
        imageSrc="/superfrens.avif"
        openSeaLink="https://opensea.io/collection/superfrens"
        blockchain="Ethereum"
        date="Nov 2021"
        // additionalInfo="Largely contributed to frontend integration."
      />
    </div>
  );
};
