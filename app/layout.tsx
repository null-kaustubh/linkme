import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGro = Bricolage_Grotesque({
  variable: "--font-brico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkMe",
  description: "All of my useful links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolageGro.variable} antialiased`}
    >
      <body className={geistSans.className}>{children}</body>
    </html>
  );
}
