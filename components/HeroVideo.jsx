'use client'

import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'

export default function HeroVideo() {

  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)
  
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-hexagone.mp4" type="video/mp4" />
      </video>
      {/* Optionnel : message ou slogan */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
          {t.home.title}
        </h1>
      </div>
    </div>
  )
}
