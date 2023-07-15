import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AnimatedText } from '@/components/AnimatingText/AnimatedText';
import { LoginExamples } from '@/components/LoginForm/LoginForm';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
