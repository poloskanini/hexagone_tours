'use client'

import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'

export default function HeroSection() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <section className="text-center text-black h-screen mt-15 font-sans">
      <h1 className="text-7xl font-extralight font-sans">{t.home.title}</h1>
      <p className="mt-4 text-xl">{t.home.intro}</p>
    </section>
  )
}
