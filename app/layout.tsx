import { Exo } from "next/font/google";
import "./styles/global.css";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import { ClientLayout } from "@/components/client-layout";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

const exo = Exo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://worthydev.com'),
  title: 'WorthyDev - Travis Worthing',
  description: 'Professional portfolio and blog of Travis Worthing, a full-stack developer specializing in modern web technologies.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'WorthyDev',
    title: 'WorthyDev - Travis Worthing',
    description: 'Professional portfolio and blog of Travis Worthing, a full-stack developer specializing in modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WorthyDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorthyDev - Travis Worthing',
    description: 'Professional portfolio and blog of Travis Worthing, a full-stack developer specializing in modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@laughing_whales',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cn("dark", exo.className)}`}>
      <body className="bg-background text-foreground flex min-h-screen flex-col font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
