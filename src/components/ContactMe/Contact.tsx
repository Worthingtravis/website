import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactInfo {
  name: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}

const ContactDetails = ({ contact }: { contact: ContactInfo }) => (
  <Card>
    <CardHeader className={'space-x-4'}>
      <CardTitle> {contact.name}</CardTitle>

      <Link href={`mailto:${contact.email}`} passHref>
        <CardTitle
          className={
            'flex gap-2 text-sm   transition-all duration-300 ease-in-out hover:scale-105'
          }
        >
          <span className="text-sm">{contact.email}</span>
        </CardTitle>
      </Link>
      <Link href={contact.linkedIn} passHref>
        <CardTitle
          className={
            'flex gap-2 text-sm underline transition-all duration-300 ease-in-out hover:scale-105'
          }
        >
          <FaLinkedin size={24} />
          <span className="text-sm">LinkedIn</span>
        </CardTitle>{' '}
      </Link>
      <Link href={contact.gitHub} passHref>
        <CardTitle
          className={
            'flex gap-2 text-sm underline transition-all duration-300 ease-in-out hover:scale-105'
          }
        >
          <FaGithub size={24} />
          <span className="text-sm">GitHub</span>
        </CardTitle>
      </Link>
    </CardHeader>
  </Card>
);

export const Contact = () => {
  return <ContactDetails contact={contactInfo} />;
};
const contactInfo: ContactInfo = {
  name: 'Travis Worthing',
  email: 'worthingtravis@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/travis-worthing-3676a2166/',
  gitHub: 'https://github.com/Worthingtravis',
};
