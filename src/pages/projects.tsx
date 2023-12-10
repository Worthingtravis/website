import React from 'react';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { NftProjects } from '../projects/NftProjects';

export default function Projects() {
  return (
    <Main
      meta={
        <Meta
          title="Past Projects"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <NftProjects />
    </Main>
  );
}
