import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
// const calistoga = Calistoga({
//   subsets: ['latin'],
//   variable: '--font-serif',
//   weight: '400',
// });

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
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
      <body className={twMerge(inter.variable, outfit.variable, "bg-gray-800 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
