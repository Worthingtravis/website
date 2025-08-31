"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { IconHome, IconHomeFilled, IconUser, IconUserFilled, IconFolder, IconFolderFilled, IconBriefcase, IconBriefcaseFilled, IconMail, IconMailFilled, IconBrandGithub, IconCheck, IconArrowUp, IconArrowDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { IconBaseProps } from "react-icons";
import { HiExternalLink } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: React.ElementType<IconBaseProps>;
  activeLabel: React.ElementType<IconBaseProps>;
  href: string;
  external?: boolean;
  tooltip?: string;
}

interface BarStyle {
  left: number;
  width: number;
}

const NAV_ITEMS: NavItem[] = [
  { 
    label: IconHome as React.ElementType<IconBaseProps>, 
    activeLabel: IconHomeFilled as React.ElementType<IconBaseProps>,
    href: "#hero", 
    tooltip: "Home" 
  },
  { 
    label: IconUser as React.ElementType<IconBaseProps>, 
    activeLabel: IconUserFilled as React.ElementType<IconBaseProps>,
    href: "#about", 
    tooltip: "About" 
  },
  { 
    label: IconFolder as React.ElementType<IconBaseProps>, 
    activeLabel: IconFolderFilled as React.ElementType<IconBaseProps>,
    href: "#projects", 
    tooltip: "Projects" 
  },
  { 
    label: IconBriefcase as React.ElementType<IconBaseProps>, 
    activeLabel: IconBriefcaseFilled as React.ElementType<IconBaseProps>,
    href: "#experience", 
    tooltip: "Experience" 
  },
  { 
    label: IconMail as React.ElementType<IconBaseProps>, 
    activeLabel: IconMailFilled as React.ElementType<IconBaseProps>,
    href: "#contact", 
    tooltip: "Contact" 
  },
  {
    label: IconBrandGithub as React.ElementType<IconBaseProps>,
    activeLabel: IconBrandGithub as React.ElementType<IconBaseProps>,
    href: "https://github.com/worthingtravis",
    external: true,
    tooltip: "GitHub",
  },
];

const ArrowIcon = ({ icon: IconComponent }: { icon: React.ComponentType<{ className?: string }> }): React.ReactElement => {
  return <IconComponent className="h-3 w-3" />;
};

// Debounce helper
const debounce = <T extends () => void>(fn: T, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export function NavHeader() {
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [barStyle, setBarStyle] = useState<BarStyle>({ left: 0, width: 0 });
  const [arrowDirections, setArrowDirections] = useState<Record<string, React.ReactElement | null>>({});
  const [isMounted, setIsMounted] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Initialize section refs
  useEffect(() => {
    if (!isMounted) return;

    NAV_ITEMS.forEach(({ href }) => {
      if (!href.startsWith('http')) {
        const sectionId = href.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          sectionsRef.current[href] = section;
        }
      }
    });
  }, [isMounted]);

  const getArrowDirection = useCallback((href: string): React.ReactElement | null => {
    const section = sectionsRef.current[href];
    if (!section) return null;
    
    const sectionTop = section.offsetTop;
    return scrollPosition > sectionTop 
      ? <ArrowIcon icon={IconArrowUp} />
      : <ArrowIcon icon={IconArrowDown} />;
  }, [scrollPosition]);

  const updateBarPosition = useCallback(() => {
    try {
      const activeLink = linksRef.current.find(link => link?.getAttribute('href') === activeSection);
      if (activeLink && navRef.current) {
        const container = navRef.current.querySelector('.flex.items-center');
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          setBarStyle({ 
            left: linkRect.left - containerRect.left + 12,
            width: 24
          });
        }
      } else {
        const firstLink = linksRef.current[0];
        if (firstLink && navRef.current) {
          const container = navRef.current.querySelector('.flex.items-center');
          if (container) {
            const containerRect = container.getBoundingClientRect();
            const linkRect = firstLink.getBoundingClientRect();
            setBarStyle({ 
              left: linkRect.left - containerRect.left + 12,
              width: 24
            });
          }
        }
      }
    } catch (error) {
      console.error('Error updating bar position:', error);
    }
  }, [activeSection]);

  const debouncedResize = useMemo(() => debounce(updateBarPosition, 100), [updateBarPosition]);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY + 100;
    setScrollPosition(currentScroll);

    const newArrowDirections: Record<string, React.ReactElement | null> = {};
    NAV_ITEMS.forEach(({ href }) => {
      if (!href.startsWith('http')) {
        newArrowDirections[href] = getArrowDirection(href);
      }
    });
    setArrowDirections(newArrowDirections);

    let activeSectionId = "#hero";
    Object.entries(sectionsRef.current).forEach(([href, section]) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          activeSectionId = href;
        }
      }
    });

    setActiveSection(activeSectionId);
    updateBarPosition();
  }, [getArrowDirection, updateBarPosition]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string, external: boolean) => {
    if (!external) {
      e.preventDefault();
      const section = sectionsRef.current[href];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timeoutId = setTimeout(updateBarPosition, 100);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", debouncedResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [isMounted, handleScroll, debouncedResize, updateBarPosition]);



  if (!isMounted) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center select-none justify-center gap-2 md:gap-8 backdrop-blur-sm bg-gray-900/70"
    >
      <div className="flex items-center relative bg-gray-800/50 justify-center gap-2 md:gap-4 px-4 rounded-full">
        {NAV_ITEMS.map(({ label, activeLabel, href, external, tooltip }, index) => (
          <React.Fragment key={href}>
            {/* Add separator before external links */}
            {external && index > 0 && (
              <div className="h-6 w-px bg-gray-600/50 mx-1 md:mx-2" />
            )}
            <a
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleClick(e, href, !!external)}
              data-cursor
              className={cn(
                "relative flex justify-center items-center rounded-full p-3 hover:bg-gray-800/50 transition-colors duration-300 group",
                activeSection === href ? "text-cyan-400" : "text-foreground",
              )}
            >
                          {React.createElement(activeSection === href ? activeLabel : label, {
              size: 24,
              className: "relative transition-all duration-300"
            })}
              {tooltip && (
                <span className="absolute -bottom-8 text-xs bg-background/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap flex items-center gap-1">
                  {tooltip}
                  {external ? (
                    <HiExternalLink className="text-cyan-400 h-3 w-3" />
                  ) : (
                    activeSection === href ? (
                      <IconCheck className="text-cyan-400 h-3 w-3" />
                    ) : (
                      <span className="text-cyan-400">{arrowDirections[href]}</span>
                    )
                  )}
                </span>
              )}
            </a>
          </React.Fragment>
        ))}
        <div 
          className="absolute bottom-0 h-1 bg-white rounded-full transition-all duration-300 ease-in-out"
          style={{
            height: '4px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            left: `${barStyle.left}px`,
            width: `${barStyle.width}px`,
          }}
        />
      </div>
    </nav>
  );
} 