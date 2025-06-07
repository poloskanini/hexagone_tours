"use client";

import './globals.css'
import { usePathname } from "next/navigation";
import Header from '../components/Header'
import VideoBackground from '../components/VideoBackground'

export default function RootLayout({ children }) {

  const pathname = usePathname();

  const showVideo =
    pathname === "/" || pathname === "/fr" || pathname === "/en";

  return (
    <html lang="fr">
      <body>
        <Header />
        {showVideo && <VideoBackground />}
        {children}
      </body>
    </html>
  )
}
