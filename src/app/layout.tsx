import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";
import PageLoading from "@/components/pageLoading";
import { LoadingProvider } from "@/contexts/loadingContext";
import Menu from "@/components/menu/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontier science and tech alliance",
  description:
    'Dive into the wonders of science with our Science Club! As Carl Sagan said, "The good thing about science is that it is true whether or not you believe in it." Explore various scientific disciplines, conduct experiments, and engage in exciting activities. Joining our club enhances your scientific knowledge, sharpens critical thinking, and sparks a lifelong passion for science.',
  keywords: [
    "fsta",
    "Frontier science and tech alliance",
    "club",
    "science",
    "it",
    "information technology",
    "astronomy",
    "PUBLICATIONS AND CONTENT WRITING",
    "PUBLICITY AND MANAGEMENT",
    "bd club",
  ],
  openGraph: {
    title: "Frontier science and tech alliance",
    description:
      'Dive into the wonders of science with our Science Club! As Carl Sagan said, "The good thing about science is that it is true whether or not you believe in it." Explore various scientific disciplines, conduct experiments, and engage in exciting activities. Joining our club enhances your scientific knowledge, sharpens critical thinking, and sparks a lifelong passion for science.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative py-[6em] px-[2em]`}
      >
        <LoadingProvider>
          <PageLoading />
          <Menu />
          {children}
          <Cursor />
        </LoadingProvider>
      </body>
    </html>
  );
}
