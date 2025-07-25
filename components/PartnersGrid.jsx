'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const partners = [
  { imgUrl: '/imgs/logos/sanofi.png', name: 'Sanofi' },
  { imgUrl: '/imgs/logos/novonordisk.png', name: 'Novonordisk' },
  { imgUrl: '/imgs/logos/slb.png', name: 'Schlumberger' },
  { imgUrl: '/imgs/logos/hikma.png', name: 'Hikma' },
  { imgUrl: '/imgs/logos/amgen.png', name: 'Amgen' },
  { imgUrl: '/imgs/logos/broshing.png', name: 'Broshing Events' },
  { imgUrl: '/imgs/logos/bayer.png', name: 'Bayer' },
  { imgUrl: '/imgs/logos/derichebourg.png', name: 'Derichebourg' },
  { imgUrl: '/imgs/logos/roche.png', name: 'Roche' },
  { imgUrl: '/imgs/logos/airp.png', name: 'Abdi Brahim Remède Pharma' },
  { imgUrl: '/imgs/logos/biopharm.png', name: 'Biopharm' },
  { imgUrl: '/imgs/logos/Elkendi-02-removebg-preview.png', name: 'El Kendi MS Pharma' },
  { imgUrl: '/imgs/logos/drreddys.png', name: "Dr Reddy's" },
  { imgUrl: '/imgs/logos/allwaystravel2-removebg-preview.png', name: 'Always Travel' },
  { imgUrl: '/imgs/logos/beker.png', name: 'Beker' },
  { imgUrl: '/imgs/logos/Logo_TotalEnergies.png', name: 'Total Energies' },
]

export default function PartnersGrid() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'

  const title = locale === 'en' ? 'They trusted us:' : 'Ils nous ont fait confiance :'

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-medium text-secondary md:text-4xl font-playfair">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-100 p-4 sm:p-6 h-[120px] rounded-md"
            >
              <div className="relative w-full h-20 sm:h-24">
                <Image
                  src={partner.imgUrl}
                  alt={partner.name}
                  fill
                  className={`object-contain p-2 ${
                    partner.name === 'Always Travel' ? 'scale-155' : ''
                  }`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
