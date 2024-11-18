export type Job = {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
  tags?: Tag[];
  tagsLinks?: string[];
};
export const jobs: Job[] = [
  {
    title: 'Web3 Developer — Contract Work',
    period: 'Oct 2023 - Present',
    company: 'Sacred Finance',
    tags: [
      'Next.js',
      'React',
      'Tailwind',
      'zkSNARK',
      'ERC20',
      'Ethereum',
      'Avalanche',
      'UniRep',
    ],
    responsibilities: [
      'Built a Web3 forum with integrations for zkSNARKs and ERC20 contracts, leveraging Next.js, React, and Tailwind.',
      'Worked on a Web3 forum using Orbis, focusing on speed and security optimizations.',
      'Created a Chrome extension for social media features using Next.js, React, and Tailwind.',
    ],
  },
  {
    title: 'Smart Contract Auditor — Contract Work',
    period: 'Jul 2023 - Sep 2023',
    company: 'Ratio Software Inc',
    tags: [
      'Web3',
      'Defi',
      'Forge',
      'Foundry',
      'Solidity',
      'Ethereum',
      'ERC20',
      'NFT',
    ],
    responsibilities: [
      'Reviewed Solidity smart contracts, identifying bugs and suggesting security improvements.',
      'Ran simulations using Forge and Foundry tools to improve contract performance and reliability.',
      'Enhanced knowledge in Solidity for better gas efficiency and secure contract development.',
    ],
  },
  {
    title: 'Web3 Developer — Contract',
    period: 'Mar 2023 - Jun 2023',
    company: 'Frequency & Sacred Finance',
    tags: ['Web3', 'Chrome Extension', 'React', 'Ethereum', 'Solidity', 'Defi'],
    responsibilities: [
      'Helped develop an NFT wallet, implementing new features with Next.js, React, and Tailwind.',
      'Built a private forum integrating zkSNARKs and ERC20 contracts, delivering a smooth user experience.',
      'Met project goals by aligning development with stakeholder expectations and maintaining high code quality.',
      'Solved challenges with innovative technical solutions and ensured timely project completion.',
    ],
  },
  {
    title: 'Senior Fullstack Developer',
    period: 'Jul 2022 - Mar 2023',
    company: 'Atomic47 Labs',
    tags: [
      'Web3',
      'React',
      'Laravel',
      'Ethereum',
      'Avalanche',
      'MySQL',
      'Material-UI',
      'AWS',
      'Nodejs',
    ],
    responsibilities: [
      'Managed a team of 3-7 developers, delivering projects on time.',
      'Developed a marketplace for NFTs in ReactJS, integrating EVM smart contracts.',
      'Simplified token purchases for ERC20 tokens with user-friendly workflows.',
      'Improved team productivity through code reviews and pair programming.',
      'Collaborated with UX/UI teams to design intuitive interfaces using React, Next.js, and TailwindCSS.',
    ],
  },
  {
    title: 'Intermediate Developer',
    period: 'Jun 2021 - Jul 2022',
    company: 'Global Physical Asset Management',
    tags: ['Ionic', 'React', 'TypeScript', 'Microsoft', 'AWS', 'Nodejs'],
    responsibilities: [
      'Developed a web app with Ionic, React, and TypeScript to automate reporting processes.',
      'Integrated Microsoft authentication for secure logins and file sharing.',
      'Oversaw the entire development cycle, from planning to team management and final delivery.',
    ],
  },
  {
    title: 'Software Developer',
    period: 'Aug 2018 - Jun 2021',
    company: 'Atomic47 Labs',
    tags: ['Laravel', 'MySQL', 'AWS', 'React', 'Material-UI', 'Nodejs'],
    responsibilities: [
      'Contributed to technology solutions for Lode, including building databases and portals.',
      'Improved business efficiency and enhanced user experience for customers and administrators.',
    ],
  },
];

export type Tag = keyof typeof Tags;

const Tags = {
  Web3: 'Web3',
  Defi: 'Defi',
  Forge: 'Forge',
  Foundry: 'Foundry',
  Solidity: 'Solidity',
  Ethereum: 'Ethereum',
  'Chrome Extension': 'Chrome Extension',
  React: 'React',
  'NFT Wallet': 'NFT Wallet',
  'Private Forum': 'Private Forum',
  zkSNARK: 'zkSNARK',
  ERC20: 'ERC20',
  UniRep: 'UniRep',
  Laravel: 'Laravel',
  Avalanche: 'Avalanche',
  MySQL: 'MySQL',
  'Material-UI': 'Material-UI',
  Ionic: 'Ionic',
  TypeScript: 'TypeScript',
  Microsoft: 'Microsoft',
  AWS: 'AWS',
  Nodejs: 'Node.js',
  'Next.js': 'Next.js',
  Tailwind: 'Tailwind',
  NFT: 'NFT',
};

export const getTagLink = (tags: Tag) => {
  if (tags in TagLinks) {
    return TagLinks[tags];
  }
  return '';
};

export const TagLinks: Record<Tag, string> = {
  AWS: 'https://aws.amazon.com/',
  Ionic: 'https://ionicframework.com/',
  Tailwind: 'https://tailwindcss.com/',
  'Next.js': 'https://nextjs.org/',
  Nodejs: 'https://nodejs.org/',
  NFT: 'https://en.wikipedia.org/wiki/Non-fungible_token',
  TypeScript: 'https://www.typescriptlang.org/',
  Microsoft: 'https://www.microsoft.com/',
  Web3: 'https://ethereum.org/en/',
  Defi: 'https://www.coinbase.com/en-ca/learn/crypto-basics/what-is-defi',
  Forge: 'https://book.getfoundry.sh/forge/',
  Foundry: 'https://book.getfoundry.sh/forge/',
  Solidity: 'https://docs.soliditylang.org/en/v0.8.10/',
  Ethereum: 'https://ethereum.org/en/',
  'Chrome Extension': 'https://developer.chrome.com/docs/extensions/',
  React: 'https://reactjs.org/',
  'NFT Wallet': 'https://en.wikipedia.org/wiki/Non-fungible_token',
  'Private Forum': 'https://en.wikipedia.org/wiki/Internet_forum',
  zkSNARK: 'https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof',
  ERC20: 'https://ethereum.org/en/developers/docs/standards/tokens/erc-20/',
  UniRep: 'https://developer.unirep.io/docs/1.0.1/applications/unirep-social',
  Laravel: 'https://laravel.com/',
  Avalanche: 'https://www.avax.network/',
  MySQL: 'https://www.mysql.com/',
  'Material-UI': 'https://material-ui.com/',
};
