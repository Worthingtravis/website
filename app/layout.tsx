import React from "react";
import "./styles/global.css";
import { ToastProvider } from "@/ui/toast";
import { NavHeader } from "./nav-header";

import BgScene from "./animate3D";
import CustomCursor from "./hooks/useMousePosition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"dark h-full"}>
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
