"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import LogoMaskWithImage from "./LogoMask";
import { HoverImageLinks } from "./HoverImageLinks";
import getTranslations from "../lib/getTranslations";
import { RevealText } from "./RevealText";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split("/")[1] || "fr";
  const t = useMemo(() => getTranslations(locale), [locale]);

  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(false);
  const forceUpdate = useState()[1];
  const menuButtonRef = useRef(null);
  const [menuBtnPos, setMenuBtnPos] = useState({ top: 0, right: 0 });

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Reduction taille Logo au scroll
  useEffect(() => {
    setHydrated(true);
    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  const logoWidthRaw = useTransform(scrollY, [0, 300], [45, 20]);
  const staticWidth = 60;
  const animatedWidth = useSpring(logoWidthRaw, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });
  const logoWidthVW = useMotionTemplate`${hydrated && isDesktop ? animatedWidth : staticWidth}vw`;

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 300);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const [logoSrc, setLogoSrc] = useState("/Logo_Hexagone_Titre_White_Full.svg");

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setLogoSrc(
        latest > 300
          ? "/Logo_Hexagone_Titre.svg"
          : "/Logo_Hexagone_Titre_White_Full.svg"
      );
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Position du bouton "X" dans Menu Navlink Full Screen
  useEffect(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuBtnPos({ top: rect.top, right: window.innerWidth - rect.right });
    }
  }, [menuRef.current]);

  // Gestion de la langue
  const changeLocale = (newLocale) => {
    const basePath = pathname.replace(/^\/(fr|en)/, "");
    router.push(`/${newLocale}${basePath}`, { scroll: false });
  };

  return (
    <>
      <motion.header
        className={`w-full fixed top-0 left-0 z-40 px-6 pt-2 flex justify-between items-center transition-colors duration-500 ${
          isScrolled ? "bg-white border-b border-[#f0eee2]" : "bg-transparent"
        }`}
      >
        <Link href={`/${locale}`}>
          <motion.div style={{ width: logoWidthVW }}>
            <Image
              src={logoSrc}
              alt="Logo"
              width={1000}
              height={100}
              className="h-auto w-full p-2 -m-2"
              priority
            />
          </motion.div>
        </Link>

        {/* BOUTON MENU */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => {
              menuRef.current = true;
              forceUpdate({});
            }}
            ref={menuButtonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`tracking-wide cursor-pointer text-lg lg:text-2xl font-thin transition-colors duration-300 xl:m-6 relative p-2 -m-2 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <RevealText isHovered={isHovered}>
              menu
            </RevealText>
            
          </button>
        </div>
      </motion.header>

      {/* MENU NAVLINK FULL SCREEN */}
      <AnimatePresence>
        {menuRef.current && (
          <>
            <motion.div
              className="fixed top-0 right-0 w-full h-screen bg-[#700026] z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            />
            <motion.div
              className="fixed inset-0 right-0 w-full h-screen bg-cyan-900 z-50 flex flex-col justify-center items-center text-neutral-400"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <button
                onClick={() => {
                  menuRef.current = false;
                  forceUpdate({});
                }}
                className="text-4xl cursor-pointer hover:text-neutral-100 transition-colors duration-300"
                style={{
                  position: "absolute",
                  top: menuBtnPos.top - 30, // ou -10 selon le rendu souhaité
                  right: menuBtnPos.right,
                  padding: "24px",
                }}
              >
                ×
              </button>

              {/* Logo Background */}
              <div className="relative w-full max-w-5xl mx-auto px-4 md:px-8">
                <LogoMaskWithImage
                  imageUrl="/imgs/pexels-marcin-dampc-807808-1684187.jpg"
                  className="absolute xl:-left-0 2xl:-left-70 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[1200px] md:h-[1200px] opacity-30 pointer-events-none z-0"
                />
                <div className="relative z-10">
                  <HoverImageLinks
                    locale={locale}
                    onClick={() => {
                      menuRef.current = false;
                      forceUpdate({});
                    }}
                    translations={t.header}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MultiLingue */}
      <div className="fixed bottom-5 left-6 z-50 bg-black/60 backdrop-blur-md text-white rounded-full px-4 py-2 text-sm shadow-md">
        <button
          onClick={() => changeLocale("fr")}
          className={`hover:underline cursor-pointer ${
            locale === "fr" ? "font-bold text-white" : "text-gray-300"
          }`}
        >
          FR
        </button>
        <span className="mx-1 text-gray-400">|</span>
        <button
          onClick={() => changeLocale("en")}
          className={`hover:underline cursor-pointer ${
            locale === "en" ? "font-bold text-white" : "text-gray-300"
          }`}
        >
          EN
        </button>
      </div>
    </>
  );
}
