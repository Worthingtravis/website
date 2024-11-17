'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import _ from 'lodash';

const MotionLink = motion(Link);

export function Footer() {
  const pathName = usePathname();
  const paths = ['/', '/resume/', '/projects/'];
  const currentIndex = paths.indexOf(pathName);

  const nextPath = paths[currentIndex + 1] || paths[0];

  return (
    <div className="absolute right-0 top-24 ">
      <MotionLink
        href={nextPath}
        className={cn(
          'flex items-center gap-2 border-2 border-transparent px-4 py-2 text-lg font-bold hover:bg-black hover:text-[#18CCFC]'
        )}
      >
        <span>{_.startCase(nextPath) || 'Home'}</span>
        <ArrowRight size={24} />
      </MotionLink>
    </div>
  );
}
