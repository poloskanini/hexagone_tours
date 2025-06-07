'use client'

import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'

export default function HeroSection() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <section className="text-center py-20 text-black mt-20">
      <h1 className="text-4xl font-bold">{t.home.title}</h1>
      <p className="mt-4 text-lg">{t.home.subtitle}</p>
    </section>
  )
}
