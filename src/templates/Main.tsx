import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import React, { useEffect } from 'react';

import { ExternalLinkIcon } from '../components/Icons';
// Internal imports
import { AppConfig } from '../utils/AppConfig';

// Types
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  maxWidth?: '2xl';
};

// Navigation links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  {
    href: 'https://github.com/worthingtravis',
    label: 'GitHub',
    icon: <ExternalLinkIcon />,
    external: true,
  },

  {
    href: 'https://github.com/Worthingtravis/IGot99ProblemsButCodeAintOne',
    label: 'Source Code',
    icon: <ExternalLinkIcon />,
    external: true,
  },
];

const Main = (props: IMainProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (_url: any, { shallow }: any) => {
      if (!shallow) {
        window.scrollTo(0, 0);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const isActiveRoute = (href: string) => router.pathname === href;

  return (
    <div
      className={clsx(
        'relative mx-auto mt-8 flex h-full flex-col text-white antialiased',
        'max-w-screen-2xl'
      )}
    >
      <div className={'flex flex-col gap-8'}>
        {props.meta}
        <header className="">
          <nav className={'flex justify-center'}>
            <ul className="flex w-fit flex-wrap justify-center border-4 border-gray-950 bg-gray-950 p-4 align-middle  text-xl  md:rounded-lg ">
              {navLinks.map((link) => (
                <li className="group relative mr-6 border-0" key={link.href}>
                  <a
                    className={clsx(
                      'flex items-center gap-2 rounded-md border-0 border-transparent transition-colors duration-300 hover:border-0',
                      isActiveRoute(link.href) ? 'text-white' : 'text-white/50'
                    )}
                    href={link.href}
                    {...(link.external
                      ? {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                  >
                    {link.label}
                    {link.icon}
                  </a>
                  <div
                    className={clsx('absolute h-1 w-full bg-blue-500', {
                      'opacity-0 group-hover:opacity-100': !isActiveRoute(
                        link.href
                      ),
                      'opacity-100': isActiveRoute(link.href),
                    })}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="flex h-full w-full justify-center text-sm">
          {props.children}
        </main>
      </div>
      <div className={'mt-20 flex-1'} />
      <footer className="z-30 border-t border-gray-300 p-4 py-8 text-center text-sm hover:bg-gray-900">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  );
};

export { Main };
