import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { motion } from 'framer-motion';

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
      <div className={'flex  h-screen flex-col md:justify-center md:p-0'}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid h-1/2 grid-cols-1 gap-8 text-white md:grid-cols-2"
        >
          <motion.a
            href="/about"
            whileHover={{ scale: 1.1 }}
            className="flex h-48 items-center justify-center rounded-lg bg-blue-500 text-2xl text-inherit"
          >
            About
          </motion.a>
          <motion.a
            href="/playground"
            whileHover={{ scale: 1.1 }}
            className="flex h-48 items-center  justify-center rounded-lg bg-green-500 text-2xl text-white"
          >
            Playground
          </motion.a>

          <motion.a
            href="/resume"
            whileHover={{ scale: 1.1 }}
            className="flex h-48 items-center justify-center rounded-lg bg-red-500 text-2xl text-white"
          >
            Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/projects"
            className="z-0 flex h-48 items-center justify-center rounded-lg bg-gray-500 text-2xl text-white "
          >
            Projects
          </motion.a>
        </motion.div>
      </div>
    </Main>
  );
};

export default Index;
