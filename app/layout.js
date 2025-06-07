"use client";

import './globals.css'
import { Manrope } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from '../components/Header'
import VideoBackground from '../components/VideoBackground'

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {

  const pathname = usePathname();

  const showVideo =
    pathname === "/" || pathname === "/fr" || pathname === "/en";

  return (
    <html lang="fr" className={`${manrope.variable} font-sans`}>
      <body className="font-sans">
        <Header />
        {showVideo && <VideoBackground />}
        {children}
      </body>
    </html>
  )
}
