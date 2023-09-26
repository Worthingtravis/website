import { motion } from 'framer-motion';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

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
      <div
        className={
          'flex w-full max-w-3xl flex-col items-stretch md:justify-center '
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid h-1/2 grid-cols-1 gap-8 text-white md:grid-cols-2"
        >
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.1 }}
            className="flex h-48 items-center justify-center rounded-lg bg-gray-950 text-2xl text-inherit hover:bg-blue-500"
          >
            Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/projects"
            className="flex h-48 items-center justify-center rounded-lg bg-gray-950 text-2xl text-inherit hover:bg-blue-500"
          >
            Projects
          </motion.a>
          <motion.a
            href="/playground"
            whileHover={{ scale: 1.1 }}
            className="flex h-48 items-center justify-center rounded-lg bg-gray-950 text-2xl text-inherit hover:bg-blue-500"
          >
            Playground
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.1 }}
            className="flex h-48 items-center justify-center rounded-lg bg-gray-950 text-2xl text-inherit hover:bg-blue-500"
          >
            About
          </motion.a>
        </motion.div>
      </div>
    </Main>
  );
};

export default Index;
