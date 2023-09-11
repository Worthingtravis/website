import { AnimatedText } from '../components/AnimatingText/AnimatedText';
import { LoginExamples } from '../components/LoginForm/LoginForm';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

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
      <div className={'flex flex-col gap-2'}>
        <AnimatedText />
        <LoginExamples />
      </div>
    </Main>
  );
};

export default Index;
