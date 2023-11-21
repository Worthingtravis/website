import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ContactDetails = ({ contact }: { contact: ContactInfo }) => (
  <motion.div
    className="flex max-w-3xl flex-col space-y-12 rounded-lg "
    variants={contactVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <motion.div
      className="text-4xl font-semibold md:text-7xl"
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <motion.div whileHover={{ scale: 1.1 }}>{contact.name}</motion.div>
    </motion.div>

    <Link
      href={`mailto:${contact.email}`}
      target={'_blank'}
      className="font-serif text-3xl text-blue-500 hover:text-blue-600 md:text-5xl"
    >
      <motion.div whileHover={{ scale: 1.1 }}>{contact.email}</motion.div>
    </Link>

    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={contact.linkedIn}
        className="flex items-center space-x-2 text-4xl text-blue-500 hover:text-blue-600"
      >
        <FaLinkedin size={96} />
        <span>LinkedIn</span>
      </Link>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={contact.gitHub}
        className="flex items-center space-x-2 text-4xl text-gray-600 hover:text-black"
      >
        <FaGithub size={96} />
        <span>GitHub</span>
      </Link>
    </motion.div>
  </motion.div>
);

interface ContactInfo {
  name: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}

export const Contact = () => {
  const contactInfo: ContactInfo = {
    name: 'Travis Worthing',
    email: 'worthingtravis@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/travis-worthing-3676a2166/',
    gitHub: 'https://github.com/Worthingtravis',
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <ContactDetails contact={contactInfo} />
    </motion.div>
  );
};
