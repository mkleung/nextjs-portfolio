import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Michael's Portfolio",
  description: "My new Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={open_sans.className}>
        {children}
      </body>
    </html>
  );
}
