import React from 'react';
import './styles/global.css';
import { NavHeader } from './NavHeader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex  min-h-screen flex-col font-sans text-foreground antialiased">
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
