import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AnimatedText } from '@/components/AnimatingText/AnimatedText';
import { LoginExamples } from '@/components/LoginForm/LoginForm';

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
        <span className={'text-base'}>
          These components were made for the sole purpose of demonstrating
          ability to create fully typed, reusable and configurable components...
        </span>
        <AnimatedText />
        <LoginExamples />
      </div>
    </Main>
  );
};

export default Index;
