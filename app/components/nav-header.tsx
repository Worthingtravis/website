"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaHome, FaUser, FaFolder, FaBriefcase, FaEnvelope, FaCheck, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Nav {
  label: React.ReactNode;
  href: string;
  external?: boolean;
  tooltip?: string;
}

const Links: Nav[] = [
  { label: <FaHome size={24} />, href: "#hero", tooltip: "Home" },
  { label: <FaUser size={24} />, href: "#about", tooltip: "About" },
  { label: <FaFolder size={24} />, href: "#projects", tooltip: "Projects" },
  { label: <FaBriefcase size={24} />, href: "#experience", tooltip: "Experience" },
  { label: <FaEnvelope size={24} />, href: "#contact", tooltip: "Contact" },
  {
    label: <FaGithub size={24} />,
    href: "https://github.com/worthingtravis",
    external: true,
    tooltip: "GitHub ↗",
  },
];

// Debounce helper
function debounce<T extends () => void>(fn: T, ms = 100) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

export function NavHeader() {
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
  const [arrowDirections, setArrowDirections] = useState<Record<string, React.ReactNode>>({});
  const [isMounted, setIsMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize section refs
  useEffect(() => {
    if (!isMounted) return;

    Links.forEach(({ href }) => {
      if (!href.startsWith('http')) {
        const sectionId = href.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          sectionsRef.current[href] = section;
        }
      }
    });
  }, [isMounted]);

  // Track scroll position to highlight active nav item and determine arrow direction
  useEffect(() => {
    if (!isMounted) return;

    const getArrowDirection = (href: string) => {
      const section = sectionsRef.current[href];
      if (!section) return null;
      
      const sectionTop = section.offsetTop;
      return scrollPosition > sectionTop ? <FaArrowUp className="h-3 w-3" /> : <FaArrowDown className="h-3 w-3" />;
    };

    const updateBarPosition = () => {
      try {
        const activeLink = linksRef.current.find(link => link?.getAttribute('href') === activeSection);
        if (activeLink && navRef.current) {
          const container = navRef.current.querySelector('.flex.items-center');
          if (container) {
            const containerRect = container.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            
            // Calculate position relative to the container, accounting for padding and gaps
            const left = linkRect.left - containerRect.left + 12; // Add half of the padding (p-3 = 12px)
            setBarStyle({ 
              left,
              width: 24 // Fixed width matching icon size
            });
          }
        } else {
          // Fallback to first nav item if no active section
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
    };

    const debouncedResize = debounce(updateBarPosition, 100);

    const handleScroll = () => {
      const currentScroll = window.scrollY + 100; // Adding offset for better UX
      setScrollPosition(currentScroll);

      // Update arrow directions for all sections
      const newArrowDirections: Record<string, React.ReactNode> = {};
      Links.forEach(({ href }) => {
        if (!href.startsWith('http')) {
          newArrowDirections[href] = getArrowDirection(href);
        }
      });
      setArrowDirections(newArrowDirections);

      // Find active section
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
    };

    // Initial position with a small delay to ensure layout is ready
    const timeoutId = setTimeout(updateBarPosition, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", debouncedResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [scrollPosition, isMounted, activeSection]);

  if (!isMounted) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center select-none justify-center gap-2 md:gap-8 backdrop-blur-sm bg-background/70"
    >
      <div className="flex items-center relative bg-teal-950 justify-center gap-4 md:gap-8 px-4 rounded-full">
        {Links.map(({ label, href, external, tooltip }, index) => (
          <a
            key={href}
            ref={(el) => {
              if (el) linksRef.current[index] = el;
            }}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (!external) {
                e.preventDefault();
                const section = sectionsRef.current[href];
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            data-cursor
            className={cn(
              "relative flex justify-center items-center rounded-full p-3 hover:bg-gray-800/50 transition-colors duration-300 group",
              activeSection === href ? "text-cyan-400" : "text-foreground",
            )}
          >
            {label}
            {tooltip && (
              <span className="absolute -bottom-8 text-xs bg-background/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap flex items-center gap-1">
                {tooltip}
                {!external && (
                  activeSection === href ? (
                    <FaCheck className="text-cyan-400 h-3 w-3" />
                  ) : (
                    <span className="text-cyan-400">{arrowDirections[href]}</span>
                  )
                )}
              </span>
            )}
          </a>
        ))}
        {/* Sliding bar */}
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