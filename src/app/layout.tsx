import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/cursor";
import PageLoading from "@/components/pageLoading";
import { LoadingProvider } from "@/contexts/loadingContext";
import Menu from "@/layouts/menu/menu";
import Footer from "@/layouts/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

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
        className={`${poppins.className} antialiased relative py-[6em] px-[2em] max-w-screen overflow-x-hidden`}
      >
        <LoadingProvider>
          <PageLoading />
          <Menu />
          {children}
          <Footer />
          <Cursor />
        </LoadingProvider>
      </body>
    </html>
  );
}
