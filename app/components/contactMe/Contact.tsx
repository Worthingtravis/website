import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

interface ContactInfo {
  name: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}

const ContactDetails = ({ contact }: { contact: ContactInfo }) => (
  <Card className="z-10 bg-transparent p-0 backdrop-blur-3xl md:rounded md:ring-1">
    <CardHeader className={' space-y-4 rounded-xl md:m-2 md:p-4'}>
      <Link href={`mailto:${contact.email}`} passHref>
        <CardTitle
          className={
            'flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 md:p-4 hover:md:bg-gray-950'
          }
        >
          <Mail size={24} />
          <span className="text-lg md:text-2xl ">{contact.email}</span>
        </CardTitle>
      </Link>
      <Link href={contact.linkedIn} passHref>
        <CardTitle
          className={
            'flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 md:p-4 hover:md:bg-gray-950'
          }
        >
          <FaLinkedin size={24} />
          <span className="text-lg md:text-2xl ">LinkedIn</span>
        </CardTitle>{' '}
      </Link>
      <Link href={contact.gitHub} passHref>
        <CardTitle
          className={
            'flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 md:p-4 hover:md:bg-gray-950'
          }
        >
          <FaGithub size={24} />
          <span className="text-lg md:text-2xl ">GitHub</span>
        </CardTitle>
      </Link>
    </CardHeader>
  </Card>
);

export const Contact = () => {
  return <ContactDetails contact={contactInfo} />;
};
export const contactInfo: ContactInfo = {
  name: 'Travis Worthing',
  email: 'worthingtravis@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/travis-worthing-3676a2166/',
  gitHub: 'https://github.com/Worthingtravis',
};
