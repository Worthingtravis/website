"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  animated?: boolean;
}

export function Skeleton({ className, animated = true }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-gray-800/50",
        animated && "animate-pulse",
        className
      )}
    />
  );
}

// Coffee Lottie Skeleton (reusable)
export function CoffeeLottieSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative scale-75 sm:scale-100"
      >
        {/* Cup body - responsive sizing */}
        <Skeleton className="w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-48 rounded-b-3xl rounded-t-lg" />
        {/* Cup handle */}
        <div className="absolute right-0 top-6 sm:top-8 w-4 h-8 sm:w-6 sm:h-12 lg:w-8 lg:h-16 border-2 sm:border-4 border-gray-700/50 rounded-r-full animate-pulse" />
        {/* Steam */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 sm:-translate-y-2 space-y-1">
          <Skeleton className="w-0.5 h-4 sm:w-1 sm:h-8 lg:h-12 rounded-full" />
          <Skeleton className="w-0.5 h-3 sm:w-1 sm:h-6 lg:h-9 rounded-full ml-1 sm:ml-2" />
          <Skeleton className="w-0.5 h-4 sm:w-1 sm:h-7 lg:h-10 rounded-full -ml-0.5 sm:-ml-1" />
        </div>
      </motion.div>
    </div>
  );
}



// Astronaut Animation Skeleton
export function AstronautSkeleton() {
  return (
    <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
      <Skeleton className="w-full h-full rounded-full" />
    </div>
  );
}

// Generic Loading component for sections
export function SectionSkeleton({ 
  className = "",
  rows = 3 
}: { 
  className?: string;
  rows?: number;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
  );
}
