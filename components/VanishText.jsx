"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import getTranslations from "../lib/getTranslations"
import { motion } from "framer-motion"

export const VanishText = () => {
  const pathname = usePathname()
  const locale = pathname.split("/")[1] || "fr"
  const t = getTranslations(locale)

  return (
    <div className="container sm:px-6 lg:px-8 px-4 py-12 md:py-36 text-left mx-auto">
      <h3 className="text-3xl lg:text-5xl font-normal text-secondary font-playfair gap-2 lg:leading-[1.4]">
        <span>{t.vanish.static} </span>
        <AnimatedText phrases={t.vanish.phrases} />
      </h3>
    </div>
  )
}

const ONE_SECOND = 1000
const WAIT_TIME = ONE_SECOND * 3

const AnimatedText = ({ phrases }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length)
    }, WAIT_TIME)

    return () => clearInterval(intervalRef)
  }, [phrases])

  return (
    <span className="relative min-w-[10ch] h-[1em] inline-block align-top font-bold">
      {phrases.map((phrase, index) => {
        const isActive = index === active
        return (
          <motion.span
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            variants={{
              active: { opacity: 1, scale: 1 },
              inactive: { opacity: 0, scale: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 text-primary"
          >
            {phrase}
          </motion.span>
        )
      })}
    </span>
  )
}
