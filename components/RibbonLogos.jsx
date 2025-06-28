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

const RibbonLogos = () => {
  return (
    <section className="bg-primary py-24 overflow-x-hidden">
      <h2 className="mx-4 mb-12 text-center text-2xl font-medium text-white md:text-4xl font-playfair">
        Ils nous ont fait confiance :
      </h2>

      <div className="flex h-28 translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
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

      <div className="flex h-28 -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
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
      
    </section>
    
  )
}

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  )
}

const LogoItem = ({ imgUrl, name }) => {
  return (
    <div className="flex items-center justify-center gap-8 px-6 py-4 text-black transition-colors">
      <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-visible">
        <div className="absolute inset-0 scale-[2]">
          <Image src={imgUrl} alt={name} fill className="object-contain" />
        </div>
      </div>
      <span className="whitespace-nowrap text-base font-black uppercase md:text-lg">
        {name}
      </span>
    </div>
  )
}


const LogoItems = ({ logos }) => (
  <>
    {logos.map((logo, idx) => (
      <LogoItem key={idx} imgUrl={logo.imgUrl} name={logo.name} />
    ))}
  </>
)

export default RibbonLogos
