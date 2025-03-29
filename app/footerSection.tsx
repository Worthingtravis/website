"use client";

import React from "react";
import { FadeIn } from "@/components/motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Travis Worthing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
