import GithubIcon from './gitIcon.png';
import LinkedInIcon from './linkedInIcon.png';

export interface ContactInfo {
  Title: string;
  Name: string;
  Email: string;
  'Time Zone': { isTimeZone: boolean; value: string };
  LinkedIn: { isLink: boolean; value: string };
  GitHub: { isLink: boolean; value: string };
}

export const contactInfo = [
  {
    Title: 'Senior Software Developer',
    Name: 'Travis Worthing',
    Email: 'worthingtravis@gmail.com',
    'Time Zone': {
      isTimeZone: true,
      value: 'PST',
    },
    LinkedIn: {
      value: 'https://www.linkedin.com/in/travis-worthing-3676a2166/',
      isLink: true,
      icon: LinkedInIcon,
    },
    GitHub: {
      value: 'https://github.com/Worthingtravis',
      isLink: true,
      icon: GithubIcon,
    },
  } as ContactInfo,
];

// Define your vCard data (customize this based on your contact details)
export const generateVCard = () => {
  // Use your contact info to populate this vCard string
  return `
      BEGIN:VCARD
      VERSION:3.0
      PROFILE:VCARD
      N:${contactInfo[0].Name}
      FN:${contactInfo[0].Name}
      TITLE:${contactInfo[0].Title}
      EMAIL:${contactInfo[0].Email}
      TZ:${contactInfo[0]['Time Zone'].value}
      END:VCARD
    `;
};
