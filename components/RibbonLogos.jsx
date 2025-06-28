'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partnersTop = [
  { imgUrl: '/imgs/logos/sanofi.png', name: 'Sanofi' },
  { imgUrl: '/imgs/logos/novonordisk.png', name: 'Novonordisk' },
  { imgUrl: '/imgs/logos/slb.png', name: 'Schlumberger' },
  { imgUrl: '/imgs/logos/hikma.png', name: 'Hikma' },
  { imgUrl: '/imgs/logos/amgen.png', name: 'Amgen' },
  { imgUrl: '/imgs/logos/danone.png', name: 'Danone' },
  { imgUrl: '/imgs/logos/bayer.png', name: 'Bayer' },
]

const partnersBottom = [
  { imgUrl: '/imgs/logos/takeda.png', name: 'Takeda' },
  { imgUrl: '/imgs/logos/roche.png', name: 'Roche' },
  { imgUrl: '/imgs/logos/airp.png', name: 'Abdi Brahim Remède Pharma' },
  { imgUrl: '/imgs/logos/biopharma.png', name: 'Biopharma' },
  { imgUrl: '/imgs/logos/elkendi.png', name: 'El Kendi MS Pharma' },
  { imgUrl: '/imgs/logos/drreddys.png', name: "Dr Reddy's" },
  { imgUrl: '/imgs/logos/allwaystravel.jpeg', name: 'Always Travel Algérie' },
]

export default function RibbonLogos() {
  return (
    <section className="overflow-hidden bg-primary py-24 text-black">
      <h2 className="mx-4 mb-12 text-center text-2xl font-medium text-white md:text-4xl font-playfair">
        Ils nous ont fait confiance :
      </h2>

      <div className="relative -mt-2 border-y-2 border-neutral-900 bg-neutral-50">
        {/* Ruban supérieur */}
        <div className="relative z-0 flex overflow-hidden border-b-2 border-neutral-900">
          <TranslateWrapper>
            <LogoItems logos={partnersTop} />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItems logos={partnersTop} />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItems logos={partnersTop} />
          </TranslateWrapper>
        </div>

        {/* Ruban inférieur */}
        <div className="relative z-0 flex overflow-hidden">
          <TranslateWrapper reverse>
            <LogoItems logos={partnersBottom} />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItems logos={partnersBottom} />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItems logos={partnersBottom} />
          </TranslateWrapper>
        </div>

        {/* Dégradés de masquage gauche/droite */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-neutral-50 to-neutral-50/0" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-neutral-50 to-neutral-50/0" />
      </div>
    </section>
  )
}

const TranslateWrapper = ({ children, reverse = false }) => (
  <motion.div
    initial={{ translateX: reverse ? '-100%' : '0%' }}
    animate={{ translateX: reverse ? '0%' : '-100%' }}
    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
    className="flex px-2"
  >
    {children}
  </motion.div>
)

const LogoItem = ({ imgUrl, name }) => (
  <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
    <div className="relative h-18 w-18 md:h-24 md:w-24">
      <Image src={imgUrl} alt={name} fill className="object-contain" />
    </div>
    <span className="whitespace-nowrap text-base font-black uppercase md:text-lg">
      {name}
    </span>
  </span>
)

const LogoItems = ({ logos }) => (
  <>
    {logos.map((logo, idx) => (
      <LogoItem key={idx} imgUrl={logo.imgUrl} name={logo.name} />
    ))}
  </>
)
