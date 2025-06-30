'use client'

import Image from "next/image";
import { usePathname } from 'next/navigation'
import getTranslations from '../lib/getTranslations'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'
  const t = getTranslations(locale)

  return (
    <>
      <div className="container mx-auto sm:px-6 lg:px-8 relative">
        <section className="text-left mt-14 flex flex-col justify-center px-4 scroll-mt-32" id="expertise">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-6xl font-playfair font-medium mb-4 text-primary"
          >
            {t.home.title}
          </motion.h1>

          <div className="space-y-2 mt-12">
            {t.home.intro.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-2xl lg:text-5xl lg:leading-[1.4] font-playfair text-secondary"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Image centrée en bas du bloc texte sur mobile */}
          <div className="2xl:hidden mt-6 mb-4 flex justify-center">
            <div className="w-[200px] aspect-square overflow-hidden rounded-full border-2 border-primary shadow-lg">
              <Image
                src="/imgs/chris-karidis-nnzkZNYWHaU-unsplash_11zon.jpg"
                alt="Illustration"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          
        </section>
      </div>

      <section className="scroll-mt-32 absolute w-full">
        <div className="flex items-start gap-8">
          <div className="flex-1"></div>

          {/* Bloc vertical EXPÉRIENCES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center font-playfair pr-2 lg:pr-5 -mt-62 lg:-mt-72 xl:-mt-82"
          >
            <span className="text-md lg:text-2xl [writing-mode:vertical-rl] [text-orientation:upright]">
              {t.home.aside}
            </span>
            <div className="w-px h-42 bg-secondary mt-4" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
