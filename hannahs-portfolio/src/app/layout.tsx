import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Hannah's Portfolio Website",
  description: "A portfolio website for Hannah Lindbäcks projects and work. Web developer, designer and fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`${caveat.variable} antialiased`}
      >
            <TopNav />
        {children}
     
      </body>
    </html>
  );
}
