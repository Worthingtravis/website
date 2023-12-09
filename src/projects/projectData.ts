// projectData.ts

interface Project {
  bgImage: string;
  title: string;
  description: string;
  imageSrc: string;
  openSeaLink?: string;
  blankRasaLink?: string;
  marketingSiteLink?: string;
  blockchain?: string;
  date?: string;
}
export const projects: Project[] = [
  {
    bgImage: '/robolove.png',
    title: 'RoboLove',
    description:
      'RoboLove stands out from my other projects as a pioneering platform designed for those keen on fostering personal connections with AI. Currently in its nascent stages, this project promises an exciting journey into the realm of AI relationships.',
    imageSrc: '/robolove.webp',
    marketingSiteLink: 'https://robolove.ai/',
  },
  {
    bgImage: '/toonsquad.png',
    title: 'ToonSquad',
    description:
      'ToonSquad brings to life a vibrant collection of digital cartoons. Each unique character invites us on an adventure to unleash our playful side. Our aim is not just to spread joy but also to cultivate a community-driven, decentralized space.',
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
      'Orka Hideout marks a groundbreaking venture within the Canto blockchain. This project is characterized by its innovation and forward-thinking approach, setting a new standard in the blockchain space.',
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
      'SUPERFRENS offers an exclusive collection of one-of-a-kind baby goons, each awaiting their liberation. Choosing the right character is crucial, as their distinctive traits and abilities will shape the future of the Superfrens universe.',
    imageSrc: '/superfrens.avif',
    openSeaLink: 'https://opensea.io/collection/superfrens',
    blockchain: 'Ethereum',
    date: 'Nov 2021',
  },
];
