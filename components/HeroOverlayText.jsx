'use client'

import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'

export default function HeroOverlayText() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <div className="relative z-10 flex items-center justify-center h-[90vh] text-white text-center px-6">
      
    </div>
  )
}
