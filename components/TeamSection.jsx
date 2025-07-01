'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'

const people = [
  {
    name: 'Timothée MARCHAIS',
    imageUrl: '/imgs/team/greyBackgroundTeam/greyTimo.jpg',
    email: 'timothee@hexagone-tours.com',
    phone: '+33695869084',
  },
  {
    name: 'Raouf MAHBOUB',
    imageUrl: '/imgs/team/greyBackgroundTeam/greyRaouf.jpg',
    email: 'raouf@hexagone-tours.com',
    phone: '+33612190349',
  },
  {
    name: 'Lamine MOKRANE',
    imageUrl: '/imgs/team/greyBackgroundTeam/greyLamine.jpg',
    email: 'lamine@hexagone-tours.com',
    phone: '+33650038632',
  },
  {
    name: 'Hakim OUHADJ',
    imageUrl: '/', // à compléter
    email: 'hakim@hexagone-tours.com',
    phone: '+33761024330',
  },
]

export default function TeamSection() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <section className="relative scroll-mt-32 bg-white py-24 md:py-32 lg:py-30" id="qui-sommes-nous">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-20 max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-playfair font-medium text-primary">
            {t.teamTitle}
          </h2>
          <p className="mt-8 text-xl lg:text-4xl lg:leading-[1.4] font-playfair text-secondary">
            {t.teamDescription}
          </p>
        </div>

        <ul role="list" className="grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person, index) => (
            <li key={person.name} className="mx-auto text-center">
              <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border border-gray-200 shadow-md mx-auto">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  className="object-cover [object-position:center_30%]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="mt-4 text-xl font-playfair text-primary">{person.name}</h3>
              <p className="text-base font-light text-secondary">
                {t.people?.[index]?.role || ''}
              </p>

              <div className="mt-3 space-y-1 text-sm text-gray-700">
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zM4.5 3.75a.75.75 0 00-.75.75v.243l8.25 5.502 8.25-5.502V4.5a.75.75 0 00-.75-.75h-15zm15 16.5a.75.75 0 00.75-.75v-11.7l-8.034 5.371a.75.75 0 01-.832 0L3.75 7.8v11.7a.75.75 0 00.75.75h15z" />
                  </svg>
                  <a href={`mailto:${person.email}`} className="hover:underline">{person.email}</a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h1.635a2.25 2.25 0 012.12 1.512l1.017 3.05a2.25 2.25 0 01-.516 2.292l-1.08 1.08a12.038 12.038 0 005.67 5.67l1.08-1.08a2.25 2.25 0 012.292-.516l3.05 1.017a2.25 2.25 0 011.512 2.12V19.5a2.25 2.25 0 01-2.25 2.25h-1.5C8.22 21.75 2.25 15.78 2.25 8.25v-1.5z" />
                  </svg>
                  <a href={`tel:${person.phone}`} className="hover:underline">{person.phone}</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bloc vertical "Notre équipe" à droite */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex flex-col items-center font-playfair absolute top-42 right-4 xl:right-12"
      >
        <span className="text-md lg:text-2xl [writing-mode:vertical-rl] [text-orientation:upright] text-secondary">
          {locale === 'en' ? 'Our Team' : 'QUI SOMMES-NOUS ?'}
        </span>
        <div className="w-px h-32 bg-secondary mt-4" />
      </motion.div>
    </section>
  )
}
