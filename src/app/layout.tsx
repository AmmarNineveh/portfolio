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
  title: "Nineveh AI | Building the Future with AI",
  description: "We create intelligent systems that merge cutting-edge AI technology with elegant design. Based in Iraq, serving the world.",
  keywords: ["AI", "artificial intelligence", "machine learning", "Nineveh AI", "Next.js", "technology", "Iraq"],
  authors: [{ name: "Nineveh AI" }],
  openGraph: {
    title: "Nineveh AI | Building the Future with AI",
    description: "We create intelligent systems that merge cutting-edge AI technology with elegant design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nineveh AI | Building the Future with AI",
    description: "We create intelligent systems that merge cutting-edge AI technology with elegant design.",
  },
  icons: {
    icon: "/logo-light.png",
    apple: "/logo-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
