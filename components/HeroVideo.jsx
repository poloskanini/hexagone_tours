'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function HeroVideo() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full overflow-hidden">
      {/* VIDEO EN FOND */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/your-video.mp4" type="video/mp4" />
      </video> */}

      {/* BARRE DE NAVIGATION */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
        <div className="text-white text-xl font-bold">LOGO</div>
        <button onClick={() => setMenuOpen(true)} className="text-white text-md uppercase tracking-wide">
          Menu
        </button>
      </div>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-20 flex justify-end"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-full p-10 flex flex-col justify-center items-start gap-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-black text-lg mb-10"
              >
                ✕
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
