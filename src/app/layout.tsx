import "./globals.css";
import type { Metadata } from "next";
/*
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
example: <body className={inter.className}
*/

export const metadata: Metadata = {
  title: "Kian Musser",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
