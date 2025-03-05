import type { Metadata } from 'next';
import {  Poppins, Work_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge'

const poppins = Poppins({
  subsets: ['latin'], variable: '--font-sans',
  weight: '500'
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '700',
});



export const metadata: Metadata = {
  title: "Michael Leung - Front End Developer",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.variable, work_sans.variable, "bg-gray-800 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
