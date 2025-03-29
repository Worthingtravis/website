import { Metadata } from "next";
import { HomePageClient } from "./components/home-page-client";

export const metadata: Metadata = {
  title: "Worthy Dev | Web Development Portfolio",
  description: "Welcome to my portfolio website showcasing my projects, experience, and skills in web development.",
  openGraph: {
    title: "Worthy Dev | Web Development Portfolio",
    description: "Welcome to my portfolio website showcasing my projects, experience, and skills in web development.",
    type: "website",
    locale: "en_US",
    siteName: "Worthy Dev Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worthy Dev | Web Development Portfolio",
    description: "Welcome to my portfolio website showcasing my projects, experience, and skills in web development.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
