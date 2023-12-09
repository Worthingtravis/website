import type { ReactNode } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CardSpotlightEffect } from 'src/components/Spotlight';
import { ExternalLinkIcon } from '../components/Icons';
// Internal imports
import { AppConfig } from '../utils/AppConfig';

// Types
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  className?: string;
};

// Navigation links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  {
    href: '/projects',
    label: 'Projects',
  },
  // { href: '/about', label: 'About' },
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
    <CardSpotlightEffect>
      <div
        className={clsx(
          'pointer-events-none relative mx-auto flex min-h-screen w-full flex-col justify-between gap-12 overflow-x-clip overflow-y-scroll font-medium tracking-tight text-white antialiased '
        )}
      >
        {props.meta}
        <header className="pointer-events-auto  sticky top-0 z-[3] flex w-full flex-col">
          <nav className="flex justify-between bg-black/80 p-4 sm:justify-center ">
            <button
              type="button"
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
                  key={link.href}
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

                    {isActiveRoute(link.href) && (
                      <motion.div
                        layoutId={'spotlight'}
                        id={link.href}
                        className={clsx(
                          'absolute -bottom-1 h-1 w-full',
                          link.href === '/resume' &&
                            'bg-blue-500 hover:bg-blue-500',
                          link.href === '/projects' &&
                            'bg-red-500 hover:bg-red-500',
                          link.href === '/about' && 'bg-white hover:bg-white',
                          link.href === '/playground' && 'bg-green-500',
                          link.href === '/' && 'bg-purple-500',
                          link.external && 'bg-white hover:bg-white',

                          {
                            'opacity-0  group-hover:opacity-100 ':
                              !isActiveRoute(link.href),
                            'opacity-100': isActiveRoute(link.href),
                          }
                        )}
                      />
                    )}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </nav>
        </header>

        <main
          className={clsx(
            'pointer-events-auto relative z-[2] mx-auto flex h-full w-full flex-col items-center justify-center  ',
            props.className
          )}
        >
          {props.children}
        </main>
        <footer className="z-10 rounded-t border-gray-300 p-4 text-end text-sm ">
          © Copyright {new Date().getFullYear()} {AppConfig.title}
        </footer>
      </div>
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
    </CardSpotlightEffect>
  );
};

export { Main };
