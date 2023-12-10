import _ from 'lodash';
import { motion } from 'framer-motion';
import { AnimatedTextExample } from '../components/AnimatingText/AnimatedTextExample';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { DirectionalAnimationExample } from '../components/directionalAnimationExample';

const Index = () => {
  return (
    <Main
      className={'relative flex max-w-7xl flex-col items-center justify-center'}
      meta={
        <Meta
          title="Demo Components"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <motion.h1 className={'z-10 my-2 text-center text-7xl font-bold'}>
        {_.startCase('Playground')}
      </motion.h1>
      <DirectionalAnimationExample />
      <AnimatedTextExample />
    </Main>
  );
};

export default Index;
