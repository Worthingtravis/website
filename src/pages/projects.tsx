import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { Projects } from '../components/Projects';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Past Projects"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <Projects />
    </Main>
  );
};

export default Index;
