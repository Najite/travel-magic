import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '✈️ TravelMagic Plan Your Next Adventure with AI ',
  description: 'Discover, plan, and visualize your dream trips with AI.',
  openGraph: {
    title: '✈️ TravelMagic Plan Your Next Adventure with AI ',
    description: 'Discover, plan, and visualize your dream trips with AI.',
    url: 'https://travel-magic-lovat.vercel.app/',
    siteName: 'TravelMagic',
    images: [
      {
        url: 'https://travel-magic-lovat.vercel.app/_next/image?url=%2Fcarousel%2Fmap.jpg&w=828&q=75',
        width: 1200,
        height: 630,
        alt: 'TraveMagic Preview',
      },
    ],
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
