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
  title: "Ammar | Full Stack Developer & AI Engineer",
  description: "I craft digital experiences. Full Stack Developer & AI Engineer based in Iraq, building intelligent systems that merge performance with elegance.",
  keywords: ["developer", "portfolio", "AI", "full stack", "Next.js", "Flutter", "Rust"],
  authors: [{ name: "Ammar" }],
  openGraph: {
    title: "Ammar | Full Stack Developer & AI Engineer",
    description: "Building intelligent systems that merge performance with elegance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar | Full Stack Developer & AI Engineer",
    description: "Building intelligent systems that merge performance with elegance.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
