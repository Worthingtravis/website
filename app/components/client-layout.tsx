'use client';

import { NavHeader } from "@/components/nav-header";
import { ToastProvider } from "@/ui/toast";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavHeader />
      <ToastProvider>
        <main className="md:container mx-auto md:px-4 py-8">{children}</main>
      </ToastProvider>
    </div>
  );
} 