import { AnimatedText } from '@/components/AnimatingText/AnimatedText';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const topics = [
  `Welcome! \nI'm Travis Worthing, a seasoned Full Stack Software Developer driven by two core beliefs: technology should primarily drive innovation and economic growth, and user privacy and security are paramount. Since 2017, I've been harnessing my Bachelor's Degree in Computer Science from the University of British Columbia Okanagan (UBCO) to create cutting-edge decentralized applications (dApps).
I have a notable track record in the blockchain and Web3 domain, leading diverse and globally distributed teams to success. I've designed and built cryptocurrency wallets for two companies, contributing to the proliferation and adoption of digital currencies. Despite the success of these projects being hard to measure in terms of user base, the real triumph lies in their smooth operation, robust security, and the considerable transactions they facilitate daily.,
Beyond that, my contributions have significantly boosted operational efficiency and reduced costs, showcasing my ability to add value to any project I'm part of. My strength lies in developing and deploying sophisticated contracts like ERC721, ERC20, zk-SNARK, and UniRep on platforms like Avalanche.,
Currently, I am open to full-time job opportunities, consultancy roles, and collaborations on projects related to Web3 technologies, where I can bring my expertise to create innovative and secure tech solutions. My toolset ranges from Jest and Playwright for testing to a broad range of technologies like ReactJS, NextJS, MySQL, Express, Laravel, TailwindCSS, SCSS, and Material-UI.`,
];
const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      <AnimatedText
        _text={topics.join('\n')}
        className="space-y-10 p-5 text-xl"
      />
    </div>
  </Main>
);

export default About;
