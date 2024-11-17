export interface Categories {
  Skills: {
    [key: string]: string;
  };
  Qualities: {
    [key: string]: string;
  };
}

export const categories: Categories = {
  Skills: {
    'Full Stack Development':
      'Proficient in front-end and back-end technologies, with special emphasis on ReactJS, NextJS, MySQL, Express, Laravel, TailwindCSS, SCSS, and Material-UI.',
    'Blockchain Development':
      'Experienced in creating decentralized applications (dApps) and cryptocurrency wallets. Expertise in integrating sophisticated contracts such as ERC721, ERC20, zk-SNARK, and UniRep on platforms like Avalanche.',
    'Project Management':
      'Proven track record in leading and managing diverse, globally distributed development teams.',
    'Software Testing':
      'Expertise in testing tools like Jest and Playwright to ensure robust and reliable software solutions.',
    'Technical Leadership':
      'Ability to guide teams through complex technical challenges and ensure project success.',
  },
  Qualities: {
    Innovative:
      'Constant pursuit of innovation in the blockchain and Web3 domain, striving to deliver cutting-edge technology solutions.',
    Leadership:
      'Demonstrated leadership skills, managing dynamic development teams located across the globe.',
    Adaptable:
      'Able to efficiently navigate multicultural and geographically dispersed work environments.',
    'Security-conscious':
      'Emphasis on prioritizing user privacy and security in software development.',
    'Economically Driven':
      'Committed to using technology as a tool to drive economic growth and efficiency.',
  },
};
