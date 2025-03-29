import React from "react";
import { cn } from "@/lib/utils";

export const SkipLink = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gray-800 focus:text-white focus:rounded-lg focus:ring-2 focus:ring-cyan-500"
    aria-label="Skip to main content"
  >
    Skip to main content
  </a>
);

export const focusStyles = {
  base: "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900",
  input: "focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
  button: "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900",
};

export const ariaLabels = {
  navigation: "Main navigation",
  social: "Social media links",
  contact: "Contact form",
  projects: "Project gallery",
  experience: "Work experience timeline",
};

export const FocusRing = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 rounded-lg", className)}>
    {children}
  </div>
); 