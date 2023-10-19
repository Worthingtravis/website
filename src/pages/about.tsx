import React from 'react';
import { AnimatedTextExample } from '../components/AnimatingText/AnimatedTextExample';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

const topics = [
  `Welcome! 
  I'm Travis Worthing, an experienced Full Stack Software Developer. I'm passionate about the potential of technology to drive innovation and economic growth, while also placing a high value on user privacy and security. Holding a Computer Science degree from the University of British Columbia, I've sharpened my skills in the development of advanced decentralized applications (dApps). This educational foundation has not only solidified my programming and systems design abilities but also opened doors for me to explore groundbreaking solutions in the ever-changing field of blockchain technology.
  
  My work in the blockchain and Web3 sectors has allowed me to lead diverse, globally-distributed teams to success. I've had the privilege of designing and developing cryptocurrency wallets for two companies, contributing to the growing adoption of digital currencies.
  
  Currently, I am open to full-time roles, consultancy opportunities, and collaborations on projects that focus on Web3 technologies. My goal is to apply my expertise to create innovative and secure tech solutions. My technical skill set ranges from testing frameworks like Jest and Playwright to a broad spectrum of technologies, including ReactJS, NextJS, MySQL, Express, Laravel, TailwindCSS, SCSS, and Material-UI.`,
];

const About = () => (
  <Main
    meta={
      <Meta
        title="Home Page"
        description="Demonstrating ability to create fully typed, reusable and configurable components..."
      />
    }
  >
    <div
      className={
        'z-30 flex w-full max-w-7xl flex-col items-stretch    md:justify-center'
      }
    >
      <AnimatedTextExample
        _text={topics.join('\n')}
        className="space-y-10 p-5 text-xl"
      />
    </div>
  </Main>
);

export default About;
