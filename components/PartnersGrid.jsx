'use client'

import Image from 'next/image'

const partners = [
  { imgUrl: '/imgs/logos/sanofi.png', name: 'Sanofi' },
  { imgUrl: '/imgs/logos/novonordisk.png', name: 'Novonordisk' },
  { imgUrl: '/imgs/logos/slb.png', name: 'Schlumberger' },
  { imgUrl: '/imgs/logos/hikma.png', name: 'Hikma' },
  { imgUrl: '/imgs/logos/amgen.png', name: 'Amgen' },
  { imgUrl: '/imgs/logos/danone.png', name: 'Danone' },
  { imgUrl: '/imgs/logos/bayer.png', name: 'Bayer' },
  { imgUrl: '/imgs/logos/takeda.png', name: 'Takeda' },
  { imgUrl: '/imgs/logos/roche.png', name: 'Roche' },
  { imgUrl: '/imgs/logos/airp.png', name: 'Abdi Brahim Remède Pharma' },
  { imgUrl: '/imgs/logos/biopharma.png', name: 'Biopharma' },
  { imgUrl: '/imgs/logos/elkendi.png', name: 'El Kendi MS Pharma' },
  { imgUrl: '/imgs/logos/drreddys.png', name: "Dr Reddy's" },
  { imgUrl: '/imgs/logos/allwaystravel.jpeg', name: 'Always Travel Algérie' },
]

export default function PartnersGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-medium text-gray-800 md:text-4xl font-playfair">
          Ils nous ont fait confiance :
        </h2>

        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-100 p-6 sm:p-10 flex items-center justify-center">
              <div className="relative w-[158px] h-[48px]">
                <Image
                  src={partner.imgUrl}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 158px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
