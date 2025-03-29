'use client'
import React, { Suspense } from "react";
import "./styles/global.css";
import { ToastProvider } from "@/ui/toast";
import { Exo } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavHeader } from "@/components/nav-header";

const inter = Exo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("dark h-full scroll-smooth", inter.className)}
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Travis Worthing - Web3 Developer</title>
        <meta
          name="description"
          content="Web3 Developer specializing in NFT collections, smart contracts, and decentralized applications"
        />
      </head>
      <body className="bg-background text-foreground flex min-h-screen flex-col font-sans antialiased">
        <NavHeader />
        <ToastProvider>
          <main className="flex-grow">{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
