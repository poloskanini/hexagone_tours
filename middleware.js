// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || ''
  const isGoogleBot = userAgent.toLowerCase().includes('googlebot')

  const { pathname } = request.nextUrl
  if (pathname === '/' && !isGoogleBot) {
    const acceptLang = request.headers.get('accept-language') || 'fr'
    const lang = acceptLang.startsWith('fr') ? 'fr' : 'en'
    return NextResponse.redirect(new URL(`/${lang}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // Important : matcher bien configuré
}
