// app/hooks/useLenisHorizontal.js
"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function useLenisHorizontal() {
  useEffect(() => {
    const container = document.querySelector("#carousel") // le wrapper

    if (!container) return

    const lenis = new Lenis({
      orientation: "horizontal",
      gestureOrientation: "both",
      wrapper: container,
      content: container,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(t) {
      lenis.raf(t)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
}
