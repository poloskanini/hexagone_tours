'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'

export default function HexagoneFooter() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <footer className="relative w-full text-white px-6 py-16 overflow-hidden bg-black">
      {/* ✅ Image en fond bas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/airportBoard.jpg"
          alt="Fond footer"
          fill
          className="object-cover object-bottom opacity-40"
          sizes="100vw"
        />
      </div>

      {/* ✅ Dégradé de noir par-dessus l’image */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* ✅ Contenu principal du footer */}
      <div className="relative z-20 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative w-[200px] aspect-[1034/781]">
            <Image
              src="/imgs/LogoHexaWhite.png"
              alt="Logo Hexagone Tours"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Adresse */}
        <div className="text-normal leading-relaxed space-y-1">
          <p className="font-semibold text-lg">HEXAGONE TOURS</p>
          <p>
            <a
              href="https://www.google.com/maps?q=86,+boulevard+de+l'Hôpital,+75013+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:underline transition-opacity duration-200 ease-in-out"
            >
              86, boulevard de l'Hôpital – 75013 PARIS
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h1.635a2.25 2.25 0 012.12 1.512l1.017 3.05a2.25 2.25 0 01-.516 2.292l-1.08 1.08a12.038 12.038 0 005.67 5.67l1.08-1.08a2.25 2.25 0 012.292-.516l3.05 1.017a2.25 2.25 0 011.512 2.12V19.5a2.25 2.25 0 01-2.25 2.25h-1.5C8.22 21.75 2.25 15.78 2.25 8.25v-1.5z" />
            </svg>
            <a href="tel:+33142504250" className="hover:opacity-80 hover:underline transition-opacity duration-200 ease-in-out">
              +33 1 42 50 42 50
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zM4.5 3.75a.75.75 0 00-.75.75v.243l8.25 5.502 8.25-5.502V4.5a.75.75 0 00-.75-.75h-15zm15 16.5a.75.75 0 00.75-.75v-11.7l-8.034 5.371a.75.75 0 01-.832 0L3.75 7.8v11.7a.75.75 0 00.75.75h15z" />
            </svg>
            <a href="mailto:infos@hexagone-tours.com" className="hover:opacity-80 hover:underline transition-opacity duration-200 ease-in-out">
              infos@hexagone-tours.com
            </a>
          </p>
        </div>

        {/* Menu */}
        <ul className="space-y-2 text-lg font-semibold tracking-wide uppercase md:text-right">
          <li><Link href="#home" className="hover:opacity-80 transition-opacity duration-200 ease-in-out">{t.header.home}</Link></li>
          <li><Link href="#expertise" className="hover:opacity-80 transition-opacity duration-200 ease-in-out">{t.header.expertise}</Link></li>
          <li><Link href="#approche" className="hover:opacity-80 transition-opacity duration-200 ease-in-out">{t.header.approch}</Link></li>
          <li><Link href="#qui-sommes-nous" className="hover:opacity-80 transition-opacity duration-200 ease-in-out">{t.header.whoarewe}</Link></li>
          <li><Link href="#contact" className="hover:opacity-80 transition-opacity duration-200 ease-in-out">{t.header.contact}</Link></li>
        </ul>
      </div>

      {/* Bloc logos + mentions */}
      <div className="relative z-20 mt-12 mx-auto max-w-7xl flex flex-col md:grid md:grid-cols-2 text-sm text-neutral-400 items-center md:items-start gap-6">
        {/* Gauche (desktop), dessous les logos en mobile */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-1">
          <p>© Hexagone Tours {currentYear} – {t.footer.rights}</p>
          <p>
            <Link href={`/${locale}/politique-de-confidentialite`} className="hover:opacity-80 hover:underline transition-opacity duration-200 ease-in-out">
              {t.footer.privacy}
            </Link>
            <span> - </span>
            <Link href={`/${locale}/mentions-legales`} className="hover:opacity-80 hover:underline transition-opacity duration-200 ease-in-out">
              {t.footer.mentions}
            </Link>
          </p>
        </div>

        {/* Centre : logos partenaires */}
        {/* <div className="order-1 md:order-2 flex items-center justify-center gap-6">
          <div className="relative w-20 h-10">
            <Image
              src="/imgs/logos/APST.png"
              alt="APST"
              fill
              sizes="(max-width: 768px) 150px, 200px"
              className="object-contain bg-white p-1"
            />
          </div>
          <div className="relative w-20 h-10">
            <Image
                src="/imgs/logos/ATOUT_FRANCE.png"
                alt="Atout France"
                fill
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain bg-white p-1"
              />
          </div>
          <div className="relative w-20 h-10">
            <Image
                src="/imgs/logos/HISCOX.jpeg"
                alt="Hiscox"
                fill
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain bg-white p-1"
              />
          </div>
        </div> */}

        {/* Droite */}
        <div className="order-3 text-center md:text-right mt-4 md:mt-0">
          <p>
            <Link
              href="https://www.nicolasbarthes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:underline transition-opacity duration-200 ease-in-out"
            >
              {t.footer.credit}
            </Link>
          </p>
        </div>
      </div>

    </footer>
  )
}
