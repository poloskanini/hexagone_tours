"use client";

import './globals.css'
import { Manrope, Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from '../components/Header'
import VideoBackground from '../components/VideoBackground'

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }) {

  const pathname = usePathname();

  const showVideo =
    pathname === "/" || pathname === "/fr" || pathname === "/en";

  return (
    <html lang="fr" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {showVideo && (
          <section id="home" className="scroll-mt-24">
            <VideoBackground />
          </section>
        )}
        {children}
      </body>
    </html>
  )
}
