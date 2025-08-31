"use client";

import { useState, useEffect, useCallback } from "react";

interface UseLottieDataReturn {
  data: any | null;
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export function useLottieData(url: string): UseLottieDataReturn {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load animation: ${response.statusText}`);
      }
      
      const animationData = await response.json();
      setData(animationData);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load animation";
      setError(message);
      console.error("Error loading Lottie animation:", err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, retry };
}

// Specialized hooks for common animations
export function useCoffeeLottie() {
  return useLottieData("/coffee.json");
}

export function useAstronautLottie() {
  return useLottieData("/astronaut-coffee.json");
}
