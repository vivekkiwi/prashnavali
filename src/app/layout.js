import { Geist, Geist_Mono } from "next/font/google";
import ClarityProvider from './ClarityProvider';
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
  title: "Ram Prashnavali",
  description: "Prashnavali online : Ram Shalaka Prashnavali Chart",
  manifest: '/manifest.json',
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClarityProvider />
        {children}
      </body>
    </html>
  );
}
