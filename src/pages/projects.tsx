import React from 'react';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { ProjectPage } from '../projects/ProjectPage';

export default function Projects() {
  return (
    <Main
      meta={
        <Meta
          title="Projects"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <ProjectPage />
    </Main>
  );
}
