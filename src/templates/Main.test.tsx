import { render, screen } from '@testing-library/react';

import { AppConfig } from '@/utils/AppConfig';

import { Main } from './Main';

jest.mock('next/router', () => ({
  useRouter: () => ({
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    pathname: '',
  }),
}));

describe('Main template', () => {
  describe('Render method', () => {
    it('should render correct number of navigation links', () => {
      render(<Main meta={null}>{null}</Main>);

      const links = screen.getAllByRole('link');

      // Expect 5 links as per navLinks array
      expect(links).toHaveLength(5);
    });

    it('should render navigation links with correct hrefs', () => {
      render(<Main meta={null}>{null}</Main>);

      const links = screen.getAllByRole('link');

      // Expect each link to have the correct href as per navLinks array
      expect(links[0]).toHaveAttribute('href', '/');
      expect(links[1]).toHaveAttribute('href', '/about');
      expect(links[2]).toHaveAttribute('href', '/resume');
      expect(links[3]).toHaveAttribute(
        'href',
        'https://github.com/worthingtravis'
      );
      expect(links[4]).toHaveAttribute(
        'href',
        'https://github.com/worthingtravis/about-me'
      );
    });

    it('should render external navigation links with target=_blank', () => {
      render(<Main meta={null}>{null}</Main>);

      const links = screen.getAllByRole('link');

      // Expect the external links to have target="_blank"
      expect(links[3]).toHaveAttribute('target', '_blank');
      expect(links[4]).toHaveAttribute('target', '_blank');
    });

    it('should render the footer with the correct copyright message', () => {
      render(<Main meta={null}>{null}</Main>);

      const currentYear = new Date().getFullYear();
      const copyrightMessageRegex = new RegExp(
        `© Copyright ${currentYear} ${AppConfig.title}`
      );

      expect(screen.getByText(copyrightMessageRegex)).toBeInTheDocument();
    });
  });
});
