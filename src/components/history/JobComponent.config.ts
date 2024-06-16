export type Job = {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    title: 'Independent Contractor — Web3/Defi',
    period: 'July 25, 2023 - Present',
    company: 'Ratio Software Inc',
    responsibilities: [
      'Assisted in auditing of Solidity contracts, focusing on identifying potential vulnerabilities and suggesting improvements for better security and performance.',
      'Utilized Forge and Foundry tools for contract simulations, helping the team make more informed decisions and aligning with industry best practices.',
      'Expanded my knowledge in Solidity beyond just implementation, covering areas like contract security, gas optimization, and composability.',
    ],
  },
  {
    title: 'Independent Contractor — Web3 Space',
    period: 'March 2023 - June 2023',
    company: 'Frequency & Sacred Finance',
    responsibilities: [
      'Contributed to the development of an NFT wallet project, primarily focused on feature implementations using Next.js, React, and Tailwind for front-end development.',
      'Developed a private forum project with a focus on contract integration around zkSNARK, ERC20 contracts, and UniRep, utilized Next.js and React with Tailwind for a consistent front-end experience.',
      "Consistently align all development activities with project requirements and stakeholders' expectations while adhering to the industry's best practices for code quality, performance, and maintainability.",
      'Demonstrate leadership and technical acumen by providing insights and solutions to overcome challenges and meet project deadlines.',
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
      'Promoted a culture of code quality and best practices within the team, implementing code review processes and pair programming sessions to ensure maintainability and efficiency of the codebase.',
      'Worked closely with the UX/UI team to implement user-friendly interfaces and workflows, thereby boosting platform usability and customer engagement. Used my extensive knowledge of React, NextJS, and TailwindCSS to create performant and visually appealing application interfaces.',
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
