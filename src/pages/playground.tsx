import { AnimatedText } from '../components/AnimatingText/AnimatedText';
import { LoginExamples } from '../components/LoginForm/LoginForm';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { DirectionalAnimationExample } from '../components/directionalAnimationExample';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Demo Components"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <div className={'z-[2] flex flex-col gap-2 rounded bg-gray-800 p-2'}>
        <h1 className={'z-10 my-2 text-center text-7xl font-bold text-white'}>
          Playground
        </h1>
        <DirectionalAnimationExample />
        <AnimatedText />
        <LoginExamples />
      </div>
    </Main>
  );
};

export default Index;
