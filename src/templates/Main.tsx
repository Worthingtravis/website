import type { ReactNode } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, useAnimate, stagger } from 'framer-motion';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const isActiveRoute = (href: string) => router.pathname === href;
  return (
    <div
      className={clsx(
        'pointer-events-none relative  mx-auto flex min-h-screen flex-col justify-between gap-12 text-white antialiased '
      )}
    >
      {props.meta}
      <header className="pointer-events-auto  sticky top-0 z-[3] flex w-full flex-col">
        <nav className="flex justify-between bg-black/80 p-4 sm:justify-center ">
          <button
            className=" z-20 flex items-center rounded border border-white px-3 py-2 text-white hover:border-white hover:text-white sm:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <motion.ul
            className={`
            flex w-full flex-wrap justify-center text-xl md:rounded-lg 
            ${
              menuOpen
                ? 'fixed inset-0 flex flex-col items-center gap-10 bg-black/90 '
                : 'hidden sm:flex'
            }
        `}
          >
            {navLinks.map((link) => (
              <Link
                className="group relative mr-6 border-0"
                href={link.href}
                {...(link.external
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
              >
                <motion.li
                  key={link.href}
                  className={clsx(
                    'flex items-center gap-2 rounded-md border-0 border-transparent transition-colors duration-300 hover:border-0',
                    isActiveRoute(link.href) ? 'text-white' : 'text-white/90'
                  )}
                >
                  {link.label}
                  {link.icon}
                  <motion.div
                    id={link.href}
                    className={clsx(
                      'absolute -bottom-1 h-1 w-full ',
                      link.href === '/' && 'bg-purple-500',
                      link.href === '/resume' && 'bg-blue-500',
                      link.href === '/projects' && 'bg-red-500',
                      link.href === '/about' && 'bg-white',
                      link.href === '/playground' && 'bg-green-500',
                      {
                        'opacity-0 group-hover:opacity-50': !isActiveRoute(
                          link.href
                        ),
                        'opacity-100': isActiveRoute(link.href),
                      }
                    )}
                  />
                </motion.li>
              </Link>
            ))}
          </motion.ul>
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

      <main className="pointer-events-auto relative z-[2] mx-auto flex h-full w-full flex-col items-center justify-center  text-sm">
        {props.children}
      </main>
      <footer className="z-10 rounded-t border-gray-300 p-4 text-end text-sm ">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  );
};

export { Main };
