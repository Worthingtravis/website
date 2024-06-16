import { motion } from 'framer-motion';
import { Meta } from 'src/layouts/Meta';
import { Main } from 'src/templates/Main';
import { Contact } from '../components/ContactMe/Contact';
import { JobHistory } from '../components/history/JobComponent';
import { jobs } from '../components/history/JobComponent.config';
import { ProfileSection } from '../components/Profile/ProfileSection';
import { categories } from '../components/Profile/ProfileSection.config';
import { TracingBeam } from '../components/tracing-beam';

const MainPage = () => {
  return <TracingBeamDemo />;
};

export function TracingBeamDemo() {
  return (
    <Main
      meta={
        <Meta
          title="Resume"
          description="Demonstrating ability to create fully typed, reusable and configurable components..."
        />
      }
    >
      <div
        className={
          'fixed right-4 top-12 hidden h-full  flex-col gap-2  md:flex'
        }
      >
        {Object.entries(data).map(([key, value]) => (
          <a
            key={key}
            href={`#${key}`}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            {value.title}
          </a>
        ))}
      </div>
      <TracingBeam className="top-12 z-[1]">
        <div className="relative mx-auto mb-48 max-w-2xl space-y-12 pt-4 antialiased">
          {Object.entries(data).map(([key, value]) => (
            <motion.div key={key} className="space-x-4 space-y-4 ">
              <h1
                id={key}
                className="mb-4 scroll-mt-[40vh] text-2xl font-bold "
              >
                {value.title}
              </h1>
              {value.content}
              <motion.div
                onViewportEnter={() => {
                  window.history.replaceState(null, '', `#${key}`);
                }}
                className="absolute bottom-0 left-0 h-0 w-0"
              />
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </Main>
  );
}

export default MainPage;

const data = {
  contact: {
    title: 'Contact',
    content: <Contact />,
  },
  experience: {
    title: 'Experience',
    content: <JobHistory jobs={jobs} />,
  },

  profile: {
    title: 'Profile',
    content: <ProfileSection categories={categories} />,
  },
};
