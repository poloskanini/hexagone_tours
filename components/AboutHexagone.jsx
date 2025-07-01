'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function AboutHexagone() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'fr'

  return (
    <section className="bg-white pt-20 md:pb-8 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        {/* Image à gauche */}
        <div className="w-full lg:w-1/2 relative aspect-[4/3]">
          <Image
            src="/imgs/HexagoneFacade.png"
            alt="Hexagone Tours team"
            fill
            className="object-cover rounded-xl shadow-md"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Texte à droite */}
        <div className="w-full lg:w-1/2 text-secondary text-base md:text-lg leading-relaxed font-light text-justify space-y-6 font-raleway">
          {locale === 'en' ? (
            <>
              <p>
                <strong className="text-primary font-semibold">Hexagone Tours</strong> is a Paris-based travel agency,
                specializing in <strong className="font-medium">tailor-made solutions</strong> designed to meet all your needs —
                whether for <strong className="font-medium">business trips</strong>, <strong className="font-medium">seminars</strong>,
                <strong className="font-medium"> conventions</strong>, <strong className="font-medium">incentives</strong>, or
                <strong className="font-medium"> bespoke stays and tours</strong> in France and abroad.
              </p>

              <p className="mt-6">
                With <strong className="font-medium">over 10 years of experience</strong> and
                <strong className="font-medium"> destination expertise</strong>, we offer
                <strong className="font-medium"> consistently competitive rates</strong>, ensuring
                <strong className="font-medium"> excellent value for money</strong>. We
                <strong className="font-medium"> carefully select</strong> every product and service to guarantee quality and reliability.
              </p>

              <p className="mt-6">
                Because <strong className="font-medium">a satisfied client is a loyal client</strong>, we commit to answering your requests with
                <strong className="font-medium"> personalization</strong>, <strong className="font-medium">reactivity</strong>, and in
                <strong className="font-medium"> the shortest possible time</strong>. Our
                <strong className="font-medium"> dynamic, multilingual team</strong> is here to support you every step of the way, offering a
                <strong className="font-medium"> tailor-made service</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-primary font-semibold">Hexagone Tours</strong> est une agence de voyages parisienne, spécialisée dans la
                <strong className="font-medium"> création de solutions sur mesure</strong>, adaptées à toutes vos attentes, que ce soit pour des
                <strong className="font-medium"> voyages d'affaires</strong>, des <strong className="font-medium">séminaires</strong>, des
                <strong className="font-medium"> congrès</strong>, des <strong className="font-medium">incentives</strong>, ou encore des
                <strong className="font-medium"> séjours et circuits</strong>, en France comme à l'international.
              </p>

              <p className="mt-6">
                <strong className="font-medium">Forts de plus de 10 ans d’expérience</strong> et de notre
                <strong className="font-medium"> expertise des destinations</strong>, nous vous offrons des
                <strong className="font-medium"> tarifs toujours compétitifs</strong>, garantissant un
                <strong className="font-medium"> excellent rapport qualité-prix</strong>. Nous
                <strong className="font-medium"> sélectionnons rigoureusement</strong> chaque produit et service, assurant ainsi leur qualité et leur fiabilité.
              </p>

              <p className="mt-6">
                Parce qu’<strong className="font-medium">un client satisfait est un client fidèle</strong>, nous nous engageons à répondre à vos demandes de manière
                <strong className="font-medium"> personnalisée</strong>, <strong className="font-medium">réactive</strong> et
                <strong className="font-medium"> dans les plus brefs délais</strong>. Notre
                <strong className="font-medium"> équipe dynamique et multilingue</strong> est à votre écoute pour vous accompagner tout au long de votre projet, en vous offrant un
                <strong className="font-medium"> service sur mesure</strong>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
