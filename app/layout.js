"use client";

import useLenis from '../lib/hooks/useLenis';
import './globals.css'
import { Manrope, Playfair_Display, Raleway } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from '../components/Header'
import VideoBackground from '../components/VideoBackground'
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100','200','300', '400', '500', '600', '700','800','900'],
  display: 'swap',
  variable: '--font-raleway',
})

export default function RootLayout({ children }) {
  useLenis()

  const pathname = usePathname();

  const showVideo =
    pathname === "/" || pathname === "/fr" || pathname === "/en";

  return (
    <html lang="fr" className={`${playfair.variable} ${raleway.variable}`}>
      <body>
        <Header />
        {showVideo && (
          <section id="home" className="scroll-mt-24">
            <VideoBackground />
          </section>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
