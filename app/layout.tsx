import type { Metadata } from "next";
import { Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Michael Leung - Front End Developer",
  description:
    "Michael Leung is a skilled Front End Developer specializing in creating dynamic and responsive web applications. Explore my portfolio to see my latest projects and discover how I can help bring your ideas to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          poppins.variable,
          work_sans.variable,
          "bg-gray-800 text-white antialiased font-sans caret-transparent"
        )}
      >
        {children}
      </body>
    </html>
  );
}
