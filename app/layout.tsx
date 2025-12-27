import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mission & Hope | Evangelism Outreach",
  description:
    "Spreading the Gospel and supporting communities through faith and action.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.className} antialiased flex flex-col min-h-screen bg-[#fafafa] text-[#1a1a1a]`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
