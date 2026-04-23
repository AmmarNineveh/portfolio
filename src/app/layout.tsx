import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Tajawal } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
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
        className={`${archivo.variable} ${spaceGrotesk.variable} ${tajawal.variable} antialiased paper-texture grid-pattern overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
