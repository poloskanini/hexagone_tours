"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation"; // <--- Ajouté

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const pathname = usePathname(); // <--- Ajouté

  // Fade audio
  const fadeVolume = async (targetVolume) => {
    if (!videoRef.current) return;
    await controls.start({
      volume: targetVolume,
      transition: { duration: 0.5, ease: "easeOut" },
    });
    videoRef.current.volume = targetVolume;
  };

  // Toggle mute
  const toggleMute = () => {
    if (!videoRef.current) return;
    if (muted) {
      setMuted(false);
      videoRef.current.muted = false;
      fadeVolume(1);
    } else {
      fadeVolume(0).then(() => {
        videoRef.current.muted = true;
        setMuted(true);
      });
    }
  };

  // Auto-mute si vidéo hors viewport
  useEffect(() => {
    if (!videoRef.current) return;
    if (!isInView) {
      fadeVolume(0).then(() => {
        videoRef.current.muted = true;
        setMuted(true);
      });
    } else if (isInView && !muted) {
      videoRef.current.muted = false;
      fadeVolume(1);
    }
  }, [isInView]);

  // Redémarrer la vidéo quand on revient sur la home
  useEffect(() => {
    if (!videoRef.current) return;
    if (pathname === "/" || pathname === "/fr" || pathname === "/en") {
      videoRef.current.currentTime = 0; // Repart à zéro
      videoRef.current.play(); // Relance la lecture
    }
  }, [pathname]);

  return (
    <div ref={containerRef} className="relative h-[90vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden rounded-br-[110px]"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/imgs/poster_11zon.webp"
          className="w-full h-full object-cover"
        >
          <source src="/videos/HEXAGONE3.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Bouton volume */}
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 right-8 p-3 rounded-full hover:bg-black/60 z-10 cursor-pointer"
      >
        {muted ? (
          <VolumeX className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Volume2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>
    </div>
  );
}
