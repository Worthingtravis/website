import type { ReactNode } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '../components/Icons';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from "../components/ui/lamp";
import { Boxes, BoxesGame } from "src/components/ui/background-boxes";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  className?: string;
};

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

const Main = ({ meta, children, className }: IMainProps) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActiveRoute = (href: string) => router.pathname === href;

  return (
    <div className="flex h-full relative min-h-screen flex-col z-50 bg-slate-950 overflow-clip">

      <Hero />
      <Header
        navLinks={navLinks}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        isActiveRoute={isActiveRoute}
      />

      <div className={' flex-1 '} />
      <footer className="sticky bottom-0 z-[50] bg-background py-4 text-center text-sm">
        © {new Date().getFullYear()} {AppConfig.title}
      </footer>
    </div>
  );
};

export { Main };
// MenuButton.js
const MenuButton = ({ toggleMenu }) => (
  <button
    type="button"
    className="z-20 flex items-center rounded border border-white bg-foreground px-3 py-2 text-white hover:border-white hover:text-white sm:hidden"
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
);

// NavigationLink.js
const NavigationLink = ({ link, isActive }) => (
  <Link
    href={link.href}
    className="group relative mr-6 border-0"
    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    <motion.li
      className={clsx(
        'flex items-center gap-2 rounded-md border-0 border-transparent transition-colors duration-300 hover:border-0',
        isActive ? 'text-white' : 'text-white/90'
      )}
    >
      {link.label}
      {link.icon}
      {isActive && (
        <motion.div
          layoutId="spotlight"
          id={link.href}
          className={clsx(
            'absolute -bottom-1 h-1 w-full',
            link.href === '/resume' && 'bg-blue-500 hover:bg-blue-500',
            link.href === '/projects' && 'bg-red-500 hover:bg-red-500',
            link.href === '/about' && 'bg-foreground hover:bg-foreground',
            link.href === '/playground' && 'bg-green-500',
            link.href === '/' && 'bg-purple-500',
            link.external && 'bg-foreground hover:bg-foreground'
          )}
        />
      )}
    </motion.li>
  </Link>
);

// NavigationMenu.js
const NavigationMenu = ({ navLinks, menuOpen, isActiveRoute }) => (
  <motion.ul
    className={`flex w-full flex-wrap justify-center text-xl md:rounded-lg ${
      menuOpen
        ? 'fixed inset-0 flex flex-col items-center gap-10 bg-black/90 '
        : 'hidden sm:flex'
    }`}
  >
    {navLinks.map((link) => (
      <NavigationLink
        key={link.href}
        link={link}
        isActive={isActiveRoute(link.href)}
      />
    ))}
  </motion.ul>
);

// Header.js
const Header = ({ navLinks, menuOpen, toggleMenu, isActiveRoute }) => (
  <header className="sticky top-0 z-50 bg-background shadow-md">
    <nav className="container mx-auto flex items-center justify-between p-4">
      <MenuButton toggleMenu={toggleMenu} />
      <NavigationMenu
        navLinks={navLinks}
        menuOpen={menuOpen}
        isActiveRoute={isActiveRoute}
      />
    </nav>
  </header>
);

export default Header;




