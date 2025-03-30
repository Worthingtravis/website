'use client';

import { NavHeader } from "@/components/nav-header";
import { ToastProvider } from "@/ui/toast";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative bg-[#0B1121]">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0B1121] via-[#0B1121] to-[#1a2942] opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <NavHeader />
        <ToastProvider>
          <main className="md:container mx-auto md:px-4 py-8">{children}</main>
        </ToastProvider>
      </div>
    </div>
  );
} 