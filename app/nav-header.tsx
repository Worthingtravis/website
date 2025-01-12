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
  external?: boolean;
  hoverPopover?: {
    content: string;
    position: "top" | "right" | "bottom" | "left";
  };
}

const Links: Nav[] = [
  { label: <HomeIcon size={64} />, href: "/" },
  { label: "Experience", href: "/resume" },
  { label: "Projects", href: "/projects" },
  {
    label: <FaGithub size={64} />,
    href: "https://github.com/worthingtravis",
    external: true,
    hoverPopover: {
      content: "GitHub",
      position: "right",
    },
  },
];

export function NavHeader() {
  const pathname = usePathname();
  const [underline, setUnderline] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
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

  // if the screen resizes, update the underline

  return (
    <nav
      ref={navRef}
      className=" z-10 flex h-32 items-center select-none justify-center gap-2 md:gap-8 px-6 md:backdrop-blur-none backdrop-blur-sm"
    >
      {Links.map(({ label, href, external }) => (
        <Link
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}

          data-cursor
          key={href}
          href={href}
          // @ts-ignore
          ref={(el) => (linkRefs.current[href] = el)}
          className={cn(
            "text-foreground relative flex justify-center xl:text-2xl text-lg 2xl:text-6xl !rounded-full p-4 hover:text-blue-400",
            pathname === href ? "text-cyan-400" : "",
          )}
        >
          {label}


        </Link>
      ))}

    </nav>
  );
}
