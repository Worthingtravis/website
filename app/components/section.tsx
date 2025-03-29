import React from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "./motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullHeight?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, fullHeight = true, className, title, subtitle, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full py-16 md:py-24 scroll-mt-8",
          fullHeight && "min-h-screen flex items-center",
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-6xl px-4 w-full">
          {(title || subtitle) && (
            <FadeIn className="mb-16 text-center">
              {title && (
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
              )}
              {subtitle && (
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </FadeIn>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section"; 