// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // 1. Forcer la suppression de "www."
  if (url.hostname === 'www.hexagone-tours.com') {
    url.hostname = 'hexagone-tours.com';
    return NextResponse.redirect(url, 301);
  }

  // 2. Redirection de la racine vers la langue
  const acceptLang = request.headers.get('accept-language') || 'fr';
  const lang = acceptLang.startsWith('fr') ? 'fr' : 'en';
  const { pathname } = url;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Applique uniquement sur la racine
};
