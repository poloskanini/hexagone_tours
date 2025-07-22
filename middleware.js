// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const acceptLang = request.headers.get('accept-language') || 'fr'
  const lang = acceptLang.startsWith('fr') ? 'fr' : 'en'

  const { pathname } = request.nextUrl
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${lang}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'], // Important : matcher bien configuré
}
