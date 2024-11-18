export interface Project {
  bgImage: string;
  title: string;
  description: string;
  personalDescription?: string;
  imageSrc?: string;
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain?: string;
  date?: string;
  buttonLabel?: string;
}

export const currentProjects: Project[] = [
  {
    bgImage: '/sacred.png',
    imageSrc: '/sacred.png',
    title: 'Sacred Forum Application',
    marketingSiteLink: 'https://app.sacredprotocol.com',
    description:
      'A decentralized forum enabling secure and private user interactions. Developed by Sacred Protocol, it integrates with the Sacred Social Media Engagement Chrome Extension.',
    buttonLabel: 'Visit Forum',
    blockchain: 'Ethereum, Polygon, Avalanche, Orbis',
    date: 'TBD',
  },
  {
    bgImage: '/sacred.png',
    title: 'Sacred Social Media Engagement Chrome Extension',
    description:
      'A Chrome extension that rewards users for engaging with forum content.',

    buttonLabel: 'Marketing Site',

    marketingSiteLink: 'https://www.sacredprotocol.com',
    blockchain: 'Facebook, Twitter, Instagram, Reddit, Sacred Forum',
    date: 'There is no website for this project yet',
  },
];

export const projects: Project[] = [
  {
    bgImage: '/toonsquad.png',
    title: 'ToonSquad',
    description:
      'ToonSquad brings together a collection of 10,000 unique NFTs, each with its own distinctive traits and abilities. The project is built on the Ethereum blockchain. ',
    personalDescription:
      'My role in this project was building the web application, integrating web3 functionalities of a erc20 smart contract into the user interface.',
    imageSrc: '/toonsquad.webp',
    openSeaLink: 'https://opensea.io/collection/toonsquad-official',
    marketingSiteLink: 'https://toonsquadnft.io/',
    blockchain: 'Ethereum',
    date: 'March 2022',
  },
  {
    bgImage: '/orkahideoutbg.jpg',
    title: 'Orka Hideout',
    description:
      'Orka Hideout is a collection of 3,000 unique NFTs, each with its own distinctive traits and abilities. The project is built on the Canto blockchain. ',
    personalDescription:
      'My role in this project was building the web application, integrating web3 functionalities of a erc20 smart contract into the user interface.',
    imageSrc: '/orkahideout.png',
    blankRasaLink:
      'https://www.blankrasa.com/collection/0x10a64af86267ad75a96865ee3b3db831e6d2baed',
    marketingSiteLink: 'https://orkahideout.io/',
    blockchain: 'Canto',
    date: 'June 2022',
  },
  {
    bgImage: '/superfrensbg.png',
    title: 'Superfrens',
    description:
      'Superfrens is a collection of 10,000 unique NFTs, each with its own distinctive traits and abilities. The project is built on the Ethereum blockchain. ',
    personalDescription:
      'Introduction to nft projects. No rewards, no incentives, just a fun project to learn the ropes of nft development.',
    imageSrc: '/superfrens.avif',
    openSeaLink: 'https://opensea.io/collection/superfrens',
    blockchain: 'Ethereum',
    date: 'Nov 2021',
  },
  {
    bgImage: '/robolove.png',
    title: 'RoboLove',
    description:
      'RoboLove is a dating application that uses AI to create an ideal chatbot partner.',
    personalDescription:
      'As a personal favor to a friend, I assisted in building the first few prototype applications. These prototypes enabled the founder of Robolove to receive initial project funding. The Project is still in development, and I am no longer involved.',
    imageSrc: '/robolove.webp',
    marketingSiteLink: 'https://robolove.ai/',
  },
];
