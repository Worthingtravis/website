import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLinkIcon } from '../components/Icons';
// Internal imports
import { AppConfig } from '../utils/AppConfig';

// Types
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// Navigation links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/playground', label: 'PlayGround' },
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

  const isActiveRoute = (href: string) => router.pathname === href;

  return (
    <div
      className={clsx(
        'pointer-events-none relative  mx-auto flex min-h-screen flex-col justify-between gap-12 text-white antialiased '
      )}
    >
      {props.meta}
      <header className="pointer-events-auto sticky top-0 z-[3]  flex  w-full flex-col ">
        <nav className={'flex justify-center'}>
          <ul className="flex w-full flex-wrap justify-center bg-black/80  p-4 align-middle  text-xl  md:rounded-lg ">
            {navLinks.map((link) => (
              <motion.li
                className="group relative mr-6 border-0"
                key={link.href}
              >
                <Link
                  className={clsx(
                    'flex items-center gap-2 rounded-md border-0 border-transparent transition-colors duration-300 hover:border-0',
                    isActiveRoute(link.href) ? 'text-white' : 'text-white/90'
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
                </Link>
                <div
                  className={clsx('absolute h-1 w-full bg-blue-500', {
                    'opacity-0 group-hover:opacity-100': !isActiveRoute(
                      link.href
                    ),
                    'opacity-100': isActiveRoute(link.href),
                  })}
                />
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <Image
        src={'/img_1.png'}
        alt={'bg'}
        className={'fixed z-[1] h-full w-full'}
        height={2160}
        width={3840}
        quality={100}
        priority={true}
      />

      <main className="pointer-events-auto relative mx-auto flex h-full w-full flex-col items-center justify-center  text-sm">
        {props.children}
      </main>
      <footer className="z-10 rounded-t border-gray-300 p-4 text-end text-sm ">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  );
};

export { Main };
