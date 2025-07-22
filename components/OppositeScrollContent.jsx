"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { usePathname } from "next/navigation"

const OppoScroll = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })

  const pathname = usePathname()
  const locale = pathname.split("/")[1] || "fr"
  const items = getItems(locale)

  return (
    <section ref={targetRef} className="flex bg-black text-white h-[400vh]">
      <Content content={items} locale={locale} />
      <Images content={items} scrollYProgress={scrollYProgress} />
    </section>
  )
}

const Content = ({ content, locale }) => {
  return (
    <div className="w-1/2" id="approche">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`relative p-8 h-screen flex items-center ${
            idx % 2 ? "bg-white text-secondary" : "bg-secondary text-white"
          }`}
        >
          {idx === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1 }}
              className="hidden lg:flex flex-col items-center mr-12"
            >
              <span className="text-md uppercase lg:text-2xl [writing-mode:vertical-rl] [text-orientation:upright] font-playfair">
                {locale === "en" ? "Our services" : "Nos services"}
              </span>
              <div className="w-px h-32 bg-white mt-4" />
            </motion.div>
          )}

          <div className="relative max-w-3xl text-left sm:text-justify">
            {idx === 0 && (
              <svg
                viewBox="0 0 162 128"
                fill="white"
                aria-hidden="true"
                className="absolute left-0 top-40 h-32 stroke-white/20 opacity-30 z-30"
              >
                <path
                  id="quote-deco"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#quote-deco" x="86"></use>
              </svg>
            )}
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-medium mb-6 leading-tight">
              {title}
            </h3>
            {description && (
              <div className="text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-3xl">
                {description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  )

  return (
    <div className="w-1/2 h-screen overflow-hidden sticky top-0">
      <motion.div style={{ top }} className="absolute left-0 right-0 top-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            src={img}
            className="h-screen w-full object-cover object-center"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default OppoScroll

// Contenu riche en JSX, multilingue intégré
const getItems = (locale) => {
  const isFr = locale === "fr"

  return [
    {
      id: 1,
      title: isFr
        ? "“Une vision humaine, créative et exigeante”"
        : "“A human, creative and exacting vision”",
      description: null,
      img: "/imgs/getty-images-lPOjkff2nsc-unsplash_11zon.webp",
    },
    {
      id: 2,
      title: isFr ? "Depuis plus de 10 ans" : "For over 10 years",
      description: isFr ? (
        <>
          <strong className="font-semibold text-primary">Basés à Paris</strong>, nous accompagnons entreprises, agences et institutions
          dans la création et la réalisation de leurs événements en France comme à l’étranger.
          <br />
          <br />
          <strong className="font-semibold">Congrès, séminaires, séjours d’affaires, incentives, circuits culturels ou soirées d’exception : </strong>
          notre équipe vous propose des solutions <strong>sur mesure</strong>, quel que soit le format ou la complexité.
        </>
      ) : (
        <>
          <strong className="font-semibold text-primary">Based in Paris</strong>, we support companies, agencies, and institutions in designing
          and delivering their events in France and abroad.
          <br />
          <br />
          <strong className="font-semibold">Conventions, seminars, business trips, incentives, cultural tours, or exceptional evenings : </strong>
          our team provides <strong>tailor-made solutions</strong> regardless of the format or complexity.
        </>
      ),
      img: "/imgs/eiffel3.webp",
    },
    {
      id: 3,
      title: isFr ? "Congrès & Séminaires" : "Congresses & Seminars",
      description: isFr ? (
        <>
          Experts des <strong className="font-semibold">congrès pharmaceutiques</strong> et des <em>Cycle Meetings</em>,
          nous prenons en charge l’organisation de vos événements de A à Z.
          <br />
          Lieux adaptés, hébergements sélectionnés, restauration sur mesure, activités de cohésion…
          <br />
          <br />
          Chaque détail est pensé pour créer une <strong className="font-semibold">expérience à la fois fluide, engageante et personnalisée.</strong>
        </>
      ) : (
        <>
          Experts in <strong>pharmaceutical congresses</strong> and <em>Cycle Meetings</em>,
          we manage your events from start to finish.
          <br />
          Suitable venues, selected accommodations, tailor-made catering, team-building activities…
          <br />
          <br />
          Every detail is crafted to deliver a <strong className="font-semibold">seamless, engaging, and personalized experience.</strong>
        </>
      ),
      img: "/imgs/seminaire3.webp",
    },
    {
      id: 4,
      title: isFr ? "Groupes & FIT" : "Groups & FIT",
      description: isFr ? (
        <>
          Qu’ils soient individuels ou en groupe, nous organisons <strong className="font-bold text-primary"> vos séjours de A à Z.</strong>
          <br />
          Transferts confortables, hébergements variés, visites guidées multilingues, excursions sur mesure, repas adaptés…
          <br />
          <br />
          <strong className="font-bold text-primary">Une expérience <em>sur-mesure</em></strong>, compétitive et avec un <strong>service d’excellence</strong>.
        </>
      ) : (
        <>
          Whether for individuals or groups, we organize <strong className="font-bold text-primary"> your trips from A to Z.</strong>
          <br />
          Comfortable transfers, diverse accommodations, multilingual guided tours, tailor-made excursions, budget-friendly meals…
          <br />
          <br />
          A <em>tailored</em>, competitive, and <strong>top-quality</strong> experience.
        </>
      ),
      img: "/imgs/tourists-2.webp",
    },
  ]
}
