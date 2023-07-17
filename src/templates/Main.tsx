// Libraries
import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { ExternalLinkIcon } from '@/components/Icons';
// Internal imports
import { AppConfig } from '@/utils/AppConfig';

// Types
type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// Navigation links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  {
    href: 'https://github.com/worthingtravis',
    label: 'GitHub',
    icon: <ExternalLinkIcon />,
    external: true,
  },
  {
    href: 'https://github.com/Worthingtravis/IGot99ProblemsButCodeAintOne',
    label: 'Code for this site',
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
    <div className="relative mx-auto max-w-screen-2xl bg-gray-900 px-1 text-white antialiased ">
      <div className="relative z-20 bg-gray-900">
        {props.meta}
        <header className="my-20">
          <nav>
            <ul className="flex flex-wrap border-0 text-xl text-white hover:text-white/50">
              {navLinks.map((link) => (
                <li className="group relative mr-6 border-0" key={link.href}>
                  <a
                    className={clsx(
                      'flex items-center gap-2 rounded-md border-0 border-transparent px-3 py-2 transition-colors duration-300 hover:border-0',
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
                    className={clsx('absolute h-1 w-full bg-white', {
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
        <main className="content py-5 text-sm">{props.children}</main>
        <footer className="border-t border-gray-300 py-8 text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}
        </footer>
      </div>
    </div>
  );
};

export { Main };
