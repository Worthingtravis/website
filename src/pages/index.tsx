import React from 'react';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { HomeCards } from '../components/HomeCards';
import { AuroraBackground } from '@/components/ui/aurora-background';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Home Page"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
        <HomeCards />
    </Main>
  );
};

export default Index;
