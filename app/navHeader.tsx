'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Nav {
  label: string;
  href: string;
}

const Links: Nav[] = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'GitHub', href: 'https://github.com/worthingtravis' },
  {
    label: 'Source Code',
    href: 'https://github.com/Worthingtravis/website',
  },
];

export function NavHeader() {
  return (
    <AnimatePresence mode={'wait'}>
      <NavHeaderItems />
    </AnimatePresence>
  );
}

function NavHeaderItems() {
  const pathname = usePathname();

  if (pathname === '/resume/') {
    return (
      <motion.nav
        key={pathname}
        layoutId="nav"
        className="border-b-double h-fit w-fit origin-left border-b-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 items-center">
          <motion.div
            variants={variantChildDelay}
            initial="hidden"
            animate="animate"
            className="flex justify-between gap-4"
          >
            <AnimatePresence>
              {Links.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  animate="animate"
                  variants={variantChildDelay}
                >
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'text-nowrap text-foreground underline-offset-2 transition-colors hover:text-foreground/80',
                      pathname === item.href ||
                        (item?.href && pathname === `${item.href}/`)
                        ? 'font-bold underline'
                        : ''
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>
    );
  }

  if (pathname === '/projects/')
    return (
      <motion.nav
        key={pathname}
        layoutId="nav"
        className="border-b-double h-fit w-fit origin-left border-b-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 items-center">
          <motion.div
            variants={variantChildDelay}
            initial="hidden"
            animate="animate"
            className="flex justify-between gap-4"
          >
            <AnimatePresence>
              {Links.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  animate="animate"
                  variants={variantChildDelay}
                >
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'text-nowrap text-foreground underline-offset-2 transition-colors hover:text-foreground/80',
                      pathname === item.href ||
                        (item?.href && pathname === `${item.href}/`)
                        ? 'font-bold underline'
                        : ''
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>
    );

  return (
    <motion.nav
      key={pathname}
      layoutId="nav"
      className="border-b-double h-fit w-fit origin-left border-b-black bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center">
        <motion.div
          variants={variantChildDelay}
          initial="hidden"
          animate="animate"
          className="flex justify-between gap-4"
        >
          <AnimatePresence>
            {Links.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate="animate"
                variants={variantChildDelay}
              >
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'text-nowrap text-foreground underline-offset-2 transition-colors hover:text-foreground/80',
                    pathname === item.href ||
                      (item?.href && pathname === `${item.href}/`)
                      ? 'font-bold underline'
                      : ''
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}

const variantChildDelay = {
  animate: (i) => ({
    y: [-100, 0],
    transition: {
      staggerChildren: 0.1,
      delay: i * 0.1,
    },
  }),
  hidden: { y: -100 },
  exit: (i) => ({
    y: -100,
    transition: {
      staggerChildren: 0.1,
      delay: i * 0.1,
    },
  }),
};
