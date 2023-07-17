export interface ContactInfo {
  Title: string;
  Name: string;
  Email: string;
  'Time Zone': string;
  LinkedIn: { isLink: boolean; value: string };
  GitHub: { isLink: boolean; value: string };
}

export const contactInfo = [
  {
    Title: 'Senior Software Developer',
    Name: 'Travis Worthing',
    Email: 'worthingtravis@gmail.com',
    'Time Zone': 'PST',
    LinkedIn: {
      value: 'https://www.linkedin.com/in/travis-worthing-3676a2166/',
      isLink: true,
    },
    GitHub: { value: 'https://github.com/Worthingtravis', isLink: true },
  } as ContactInfo,
];
