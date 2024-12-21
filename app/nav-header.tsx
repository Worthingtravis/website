"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "./lib/utils";

interface Nav {
  label: React.ReactNode;
  href: string;
}

const Links: Nav[] = [
  { label: <HomeIcon size={28} />, href: "/" },
  { label: "Experience", href: "/resume" },
  { label: "Projects", href: "/projects" },
  {
    label: <FaGithub size={32} />,
    href: "https://github.com/worthingtravis",
  },
];

export function NavHeader() {
  const pathname = usePathname();
  const [underline, setUnderline] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const activeLink = linkRefs.current[pathname];
    if (activeLink && navRef.current) {
      const containerRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setUnderline({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="relative mt-8 max-w-7xl w-full justify-between z-10 mx-auto flex h-14 items-center px-6 backdrop-blur-sm"
    >
      {Links.map(({ label, href }) => (
        <Link
          data-cursor
          key={href}
          href={href}
          // @ts-ignore
          ref={(el) => (linkRefs.current[href] = el)}
          className={cn(
            "relative p-4 !rounded-full  flex justify-center text-foreground hover:text-blue-400",
            pathname === href ? "text-cyan-400" : ""
          )}
        >
          {label}
        </Link>
      ))}
      <motion.div
        animate={{ left: underline.left, width: underline.width }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute bottom-0 px-4 h-1 bg-gradient-to-r from-blue-500 to-pink-500"
      />
    </nav>
  );
}
