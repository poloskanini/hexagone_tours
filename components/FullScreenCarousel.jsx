"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import getTranslations from "../lib/getTranslations";

export default function FullscreenCarousel() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr";
  const t = getTranslations(locale);

  const [slides, setSlides] = useState(t.carousel);
  const [current, setCurrent] = useState(t.carousel[0]);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const buttonControls = useAnimation();

  // Pour réinitialiser slides quand la langue change
  useEffect(() => {
    setSlides(t.carousel);
    setCurrent(t.carousel[0]);
  }, [t]);

  // Animation "pulse" lente du bouton
  useEffect(() => {
    const loopPulse = async () => {
      while (true) {
        await buttonControls.start({ scale: 1.2, transition: { duration: 1.8, ease: "easeInOut" } });
        await buttonControls.start({ scale: 1, transition: { duration: 1.8, ease: "easeInOut" } });
      }
    };
    loopPulse();
  }, [buttonControls]);

  const handleNext = () => {
    if (animating || slides.length < 2) return;
    setAnimating(true);

    const track = trackRef.current;
    const card = track?.children[0];
    const cardWidth = card?.offsetWidth || 0;
    const rect = card.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const zoomImage = document.createElement("img");
    zoomImage.src = slides[1].image;
    zoomImage.className = "absolute object-cover z-30 rounded-xl will-change-transform";
    Object.assign(zoomImage.style, {
      top: `${rect.top - containerRect.top}px`,
      left: `${rect.left - containerRect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transition: "all 0.7s ease",
    });

    containerRef.current.appendChild(zoomImage);
    card.style.visibility = "hidden";

    requestAnimationFrame(() => {
      Object.assign(zoomImage.style, {
        top: "0",
        left: "0",
        width: `${containerRect.width}px`,
        height: `${containerRect.height}px`,
        borderRadius: "0",
        transform: "scale(1.0001)",
      });
    });

    track.style.transition = "transform 0.7s ease";
    track.style.transform = `translateX(-${cardWidth + 16}px)`;

    setTimeout(() => {
      const nextSlides = slides.slice(1);
      const reappearing = slides[0];
      setSlides([...nextSlides, reappearing]);
      setCurrent(nextSlides[0]);

      if (zoomImage && zoomImage.parentNode) {
        zoomImage.parentNode.removeChild(zoomImage);
      }
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      card.style.visibility = "visible";

      setAnimating(false);
    }, 700);
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Fond principal */}
      <div className="absolute inset-0 z-0 transition-all duration-700">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.image})`, filter: "brightness(60%)" }}
        />
      </div>

      {/* Mini carousel (hors image actuelle) */}
      <div className="absolute bottom-10 lg:bottom-48 right-0 left-1/3 px-10 z-40 overflow-hidden">
        <div ref={trackRef} className="flex space-x-4">
          {slides.map((slide, index) =>
            index === 0 || slide.title === current.title ? null : (
              <motion.img
                key={slide.title}
                src={slide.image}
                alt={slide.subtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-58 h-70 object-cover shadow-lg rounded-xl shrink-0"
              />
            )
          )}
        </div>
      </div>

      {/* Texte */}
      <div className="relative z-40 flex h-[50vh]">
        <div className="w-full lg:w-1/3 flex flex-col justify-center pt-24 lg:pt-32 px-6 md:px-12 text-white text-center lg:text-left transition-opacity duration-700">
          <motion.h1
            key={current.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-playfair"
          >
            {current.title}
          </motion.h1>
          <motion.h3
            key={current.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-normal mb-4"
          >
            {current.subtitle}
          </motion.h3>
        </div>
      </div>

      {/* Bouton suivant */}
      <motion.div
        className="absolute md:top-92 2xl:top-112 left-[34%] z-40"
        animate={buttonControls}
        initial={{ scale: 1 }}
      >
        <button
          onClick={handleNext}
          className="group w-20 h-20 bg-white/10 border-2 border-white text-white text-[3.5rem] font-normal cursor-pointer leading-none rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110 relative"
        >
          <span>
            ›
          </span>

          {/* Halo animé autour du bouton */}
          <span className="absolute inset-0 rounded-full animate-ping border-2 border-white/30" />
        </button>
      </motion.div>

      {/* <motion.div
        className="absolute top-112 left-[34%] z-40"
        animate={buttonControls}
        initial={{ scale: 1 }}
      >
        <button
          onClick={handleNext}
          className="w-20 h-20 bg-transparent border-3 border-white text-white text-[3.5rem] font-normal cursor-pointer leading-none rounded-full flex items-center justify-center transition duration-300 ease-in-out"
        >
          ›
        </button>
      </motion.div> */}
    </div>
  );
}
