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

const baseUrl = new URL("https://tabknight.gmsudo.com");
const socialImage = new URL("/og.png", baseUrl).toString();

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: "TabKnight — Every tab. One shortcut.",
  description:
    "A keyboard-first Chrome command surface for tabs, bookmarks, history, URLs, and web search—with local-first privacy.",
  alternates: { canonical: baseUrl.toString() },
  icons: {
    icon: "/tabknight-icon.png",
    shortcut: "/tabknight-icon.png",
    apple: "/tabknight-icon.png",
  },
  openGraph: {
    type: "website",
    url: baseUrl.toString(),
    title: "TabKnight — Every tab. One shortcut.",
    description: "Search tabs, bookmarks, history, and the web from one private Chrome command surface.",
    siteName: "TabKnight",
    images: [{ url: socialImage, width: 1672, height: 941, alt: "TabKnight — Every tab. One shortcut." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TabKnight — Every tab. One shortcut.",
    description: "A fast, private, open-source command bar for your browser.",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
