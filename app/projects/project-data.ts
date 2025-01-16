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

];

export const projects: Project[] = [
  {
    bgImage: "/toonsquad.png",
    title: "ToonSquad",
    description:
      "ToonSquad brings together a collection of 10,000 unique NFTs, each with its own distinctive traits and abilities. The project is built on the Ethereum blockchain. ",
    personalDescription:
      "I built the web application and integrated web3 functionalities, including seamless interaction with ERC20 smart contracts, to deliver a user-friendly NFT experience.",
    imageSrc: "/toonsquad.webp",
    openSeaLink: "https://opensea.io/collection/toonsquad-official",
    marketingSiteLink: "https://toonsquadnft.io/",
    blockchain: "Ethereum",
    date: "March 2022",
  },
  {
    bgImage: "/orkahideoutbg.jpg",
    title: "Orka Hideout",
    description:
      "Orka Hideout is a collection of 3,000 unique NFTs, each with its own distinctive traits and abilities. The project is built on the Canto blockchain.",
    personalDescription:
      "I handled the development of the web application, integrating Canto-based ERC20 functionalities and ensuring smooth interaction with the blockchain for a unique user experience.",
    imageSrc: "/orkahideout.png",
    blankRasaLink:
      "https://www.blankrasa.com/collection/0x10a64af86267ad75a96865ee3b3db831e6d2baed",
    marketingSiteLink: "https://orkahideout.io/",
    blockchain: "Canto",
    date: "June 2022",
  },
  {
    bgImage: "/superfrensbg.png",
    title: "Superfrens",
    description:
      "Superfrens is a collection of 10,000 unique NFTs, each with its own distinctive traits and abilities. The project is built on the Ethereum blockchain. ",
    personalDescription:
      "Introduction to nft projects. No rewards, no incentives, just a fun project to learn the ropes of nft development.",
    imageSrc: "/superfrens.avif",
    openSeaLink: "https://opensea.io/collection/superfrens",
    blockchain: "Ethereum",
    date: "Nov 2021",
  },
];

export const contractWork: Project[] = [
  {
    bgImage: "/spearbit.png",
    title: "Spearbit",
    description:
      "Spearbit is a distributed network of industry-leading security researchers tackling the most complex and mission-critical protocols across web3.",
    personalDescription:
      "I developed the core functionality of the website, turning designs into a high-performance application. The site was built on the Next.js framework, delivering a fast and scalable solution for the client.",
    imageSrc: "/spearbit.png",
    marketingSiteLink: "https://spearbit.com/",
    date: "2023",
  },
  {
    bgImage: "/sacred.png",
    imageSrc: "/sacred.png",
    title: "Sacred Forum Application",
    marketingSiteLink: "https://app.sacredprotocol.com",
    description:
      "A decentralized forum enabling secure and private user interactions. Developed by Sacred Protocol, it integrates with the Sacred Social Media Engagement Chrome Extension.",
    buttonLabel: "Visit Forum",
    blockchain: "Ethereum, Polygon, Avalanche, Orbis",
    date: "Discontinued",
  },
  {
    bgImage: "/sacred.png",
    title: "Sacred Social Media Engagement Chrome Extension",
    description:
      "A Chrome extension that rewards users for engaging with forum content.",

    buttonLabel: "Marketing Site",

    marketingSiteLink: "https://www.sacredprotocol.com",
    blockchain: "Facebook, Twitter, Instagram, Reddit, Sacred Forum",
    date: "There is no website for this project yet",
  },
];
