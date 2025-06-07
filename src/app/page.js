// src/app/page.js
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectHome() {
  const router = useRouter()

  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0] || 'fr'
    const lang = userLang.startsWith('fr') ? 'fr' : 'en'
    router.replace(`/${lang}`)
  }, [router])

  return null
}
