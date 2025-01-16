import React from "react";
import "./styles/global.css";
import { ToastProvider } from "@/ui/toast";
import { NavHeader } from "./nav-header";
import { Exo } from "next/font/google";

import BgScene from "./animate3D";
import CustomCursor from "./hooks/useMousePosition";
import { cn } from "@/lib/utils";

const inter = Exo({
  subsets: ["latin"],
  display: "swap",
});

// fonts from google

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark h-full", inter)}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>WorthyDev</title>
      </head>
      <body className="bg-background text-foreground flex min-h-screen flex-col font-sans antialiased">
        <NavHeader />
        <ToastProvider>
          <CustomCursor />
          <BgScene />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
