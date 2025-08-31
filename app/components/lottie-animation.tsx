"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { LottieAnimationProps } from "types/lottie";
import { useReducedMotion } from "framer-motion";
import React, { useState, useEffect } from "react";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-gray-200/20 rounded" />
});

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class LottieErrorBoundary extends React.Component<
  React.PropsWithChildren<{ className?: string }>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{ className?: string }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Lottie animation error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`flex items-center justify-center ${this.props.className || ""}`}>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">⚠️</div>
            <p className="text-gray-400 text-sm">Animation failed to load</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function LottieAnimation({ 
  animationData, 
  className = "",
  loop = true,
  autoplay = true 
}: LottieAnimationProps & { loop?: boolean; autoplay?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`w-full h-full animate-pulse bg-gray-200/20 rounded ${className}`} />
    );
  }

  return (
    <LottieErrorBoundary className={className}>
      <motion.div
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: prefersReducedMotion ? 0.2 : 0.5,
          type: "spring",
          damping: 25,
          stiffness: 300
        }}
        className={className}
      >
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          className="w-full h-full"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true
          }}
        />
      </motion.div>
    </LottieErrorBoundary>
  );
}
