'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoMaskWhite from './LogoMaskWhite'
import getTranslations from '../lib/getTranslations'

export default function HexagoneFooter() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <footer className="w-full bg-gradient-to-b from-[#1B1416] to-black px-6 py-12 text-neutral-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* Logo à gauche */}
        <div className="w-[200px]">
          <LogoMaskWhite className="w-full h-auto" />
        </div>

        {/* Liens à droite */}
        <ul className="space-y-4 text-center text-lg font-semibold tracking-wide uppercase md:space-y-2 md:text-right">
          <li>
            <Link href="#home" className="hover:opacity-80 transition-opacity duration-300">
              {t.header.home}
            </Link>
          </li>
          <li>
            <Link href="#expertise" className="hover:opacity-80 transition-opacity duration-300">
              {t.header.expertise}
            </Link>
          </li>
          <li>
            <Link href="#approche" className="hover:opacity-80 transition-opacity duration-300">
              {t.header.approch}
            </Link>
          </li>
          <li>
            <Link href="#qui-sommes-nous" className="hover:opacity-80 transition-opacity duration-300">
              {t.header.whoarewe}
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:opacity-80 transition-opacity duration-300">
              {t.header.contact}
            </Link>
          </li>
        </ul>
      </div>

      {/* Infos légales */}
      <div className="mt-12 text-center text-sm text-neutral-400 space-y-1">
        <p>© Hexagone Tours {currentYear} – {t.footer.rights}</p>
        <p>
          <Link href="/politique-de-confidentialite" className="hover:underline">
            {t.footer.privacy}
          </Link>
        </p>
        <p>
          <a
            href="https://www.nicolasbarthes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t.footer.credit}
          </a>
        </p>
      </div>
    </footer>
  )
}
