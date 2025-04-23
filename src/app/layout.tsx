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

  verification: {
    google: "WuHsQ-mp86N5c3Bkmbce7fzBsgW3wN1JiuwT9o9FPTA",
  },

  openGraph: {
    siteName: "FSTA - Frontier science and tech alliance",
    title: "Frontier science and tech alliance",
    type: "website",
    description:
      'Dive into the wonders of science with our Science Club! As Carl Sagan said, "The good thing about science is that it is true whether or not you believe in it." Explore various scientific disciplines, conduct experiments, and engage in exciting activities. Joining our club enhances your scientific knowledge, sharpens critical thinking, and sparks a lifelong passion for science.',
    url: "https://fsta-next.netlify.app",
    images: [
      {
        url: "https://fsta-next.netlify.app/link-image.png",
        width: 200,
        height: 200,
        alt: "Image of Frontier science and tech alliance site",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Frontier science and tech alliance",
    description:
      'Dive into the wonders of science with our Science Club! As Carl Sagan said, "The good thing about science is that it is true whether or not you believe in it." Explore various scientific disciplines, conduct experiments, and engage in exciting activities. Joining our club enhances your scientific knowledge, sharpens critical thinking, and sparks a lifelong passion for science.',
    creator: "Rakesh Karmaker",
    images: ["https://fsta-next.netlify.app/link-img.jpg"],
    site: "https://fsta-next.netlify.app"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
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
