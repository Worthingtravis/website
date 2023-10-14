import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'currentColor',
  },
  whileHover: {
    pathLength: 1,
    fill: 'currentColor',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(0,0,0, 0.5)',
  },
};

export function HomeCards() {
  return (
    <div
      className={
        'z-30 flex w-full max-w-3xl flex-col items-stretch    md:justify-center'
      }
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="z-10 grid h-1/2 grid-cols-1 gap-8 text-white md:grid-cols-2"
      >
        <MotionLink
          href="/resume"
          animate={{
            rotate: [-180, 180, 0],
            scale: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="flex h-48 items-center justify-center gap-2 rounded-lg bg-gray-950 text-2xl text-inherit hover:bg-blue-500"
        >
          Resume
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <motion.path
              variants={icon}
              initial={'hidden'}
              animate={'visible'}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </motion.svg>
        </MotionLink>

        <MotionLink
          initial={{
            rotate: 180,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [-180, 180, 0],
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          href="/projects"
          className="flex h-48 items-center justify-center gap-2 rounded-lg  bg-gray-950 text-2xl text-inherit hover:bg-red-500"
        >
          Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={icon}
              initial={'hidden'}
              animate={'visible'}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
          </svg>
        </MotionLink>
        <MotionLink
          href="/playground"
          initial={{
            rotate: 180,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [-180, 180, 0],
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.4,
          }}
          className="group flex h-48 items-center justify-center gap-2 rounded-lg  bg-gray-950 text-2xl text-inherit hover:bg-green-500 hover:text-green-900"
        >
          Playground
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={icon}
              initial={'hidden'}
              animate={'visible'}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
            />
          </svg>
        </MotionLink>
        <MotionLink
          href="/about"
          initial={{
            rotate: 180,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            rotate: [-180, 180, 0],
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.6,
          }}
          className="flex h-48  items-center justify-center gap-2 rounded-lg  bg-gray-950 text-2xl text-inherit bg-blend-color mix-blend-hard-light hover:bg-yellow-500"
        >
          About
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={icon}
              initial={'hidden'}
              animate={'visible'}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
            />
          </motion.svg>
        </MotionLink>
      </motion.div>
    </div>
  );
}
