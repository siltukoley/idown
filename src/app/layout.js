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

export const metadata = {
  title: "Instagram video downloader",
  description:
    "A free tool for Instagram Video Download, paste links to Instagram Video Downloader and download video in seconds without any login or signup.",
  keywords: "Instagram downloader, download video, free video download, Instagram tool, ig vdo dl, ig video dl",
  icons: {
    icon: "idown_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="idown_logo.png" type="image/x-icon" />
        {/* Optionally add other meta tags here */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
