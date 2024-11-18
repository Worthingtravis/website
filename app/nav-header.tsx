'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { cn } from './lib/utils';

interface Nav {
  label: string | React.ReactNode;
  href: string;
}

const Links: Nav[] = [
  { label: <HomeIcon size={28} />, href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  {
    label: <FaGithub size={32} />,
    href: 'https://github.com/worthingtravis',
  },
];

export function NavHeader() {
  return <NavHeaderItems />;
}

function NavHeaderItems() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Update the previous pathname when it changes
  React.useEffect(() => {
    if (pathname !== prevPathname) {
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  return (
    <nav className="container relative flex h-14 w-full items-center border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full justify-between gap-4">
        {Links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative flex w-full justify-center text-nowrap px-2 py-1 text-2xl text-foreground transition-colors hover:text-foreground/80',
              pathname === item.href ||
                (item?.href && pathname === `${item.href}`)
                ? ' font-bold text-blue-500'
                : ''
            )}
          >
            {item.label}
            {pathname === item.href && (
              <motion.div
                layoutId="underline"
                className={cn(
                  'absolute bottom-0 left-0 z-50 h-1 w-full ',
                  pathname === item.href &&
                    item.href === '/' &&
                    'bg-gradient-to-r  from-blue-500 to-fuchsia-500',
                  pathname === item.href &&
                    item.href === '/resume' &&
                    'bg-gradient-to-l  from-blue-500 via-fuchsia-500 to-blue-500',
                  pathname === item.href &&
                    item.href === '/projects' &&
                    'bg-gradient-to-r from-fuchsia-500 to-blue-500'
                )}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
