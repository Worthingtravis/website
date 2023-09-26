import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { NftProjects } from '../projects/NftProjects';
import React from 'react';
import { motion } from 'framer-motion';

export default function Index() {
  return (
    <Main
      meta={
        <Meta
          title="Past Projects"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 30 }}
        className="left-0 top-5 z-10 flex justify-center text-6xl   font-extrabold text-white md:fixed"
      >
        NFT Projects
      </motion.span>
      <NftProjects />
    </Main>
  );
}
