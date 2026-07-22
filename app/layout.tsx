import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  let baseUrl: URL;

  try {
    baseUrl = new URL(`${protocol}://${host}`);
  } catch {
    baseUrl = new URL("http://localhost:3000");
  }

  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "TabKnight — Every tab. One shortcut.",
    description:
      "A keyboard-first Chrome tab switcher with fuzzy search, live previews, audio controls, and local-first privacy.",
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
      description: "Search, preview, and switch across every Chrome window—without leaving the page.",
      siteName: "TabKnight",
      images: [{ url: socialImage, width: 1672, height: 941, alt: "TabKnight — Every tab. One shortcut." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "TabKnight — Every tab. One shortcut.",
      description: "A fast, private, open-source command bar for Chrome tabs.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
