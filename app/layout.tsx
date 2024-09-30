import type { Metadata } from "next";
import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern-day banking platform for anyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
