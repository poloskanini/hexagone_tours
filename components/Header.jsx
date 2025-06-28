"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
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
  const [logoSrc, setLogoSrc] = useState("/Logo_Hexagone_Titre_White_Full.svg");
  const [logoWidthVW, setLogoWidthVW] = useState("45vw");

  useEffect(() => {
    setHydrated(true);

    const updateIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    const updateFromScroll = () => {
      const scrollTop = window.scrollY;
      const shouldFix = scrollTop > 300;

      setIsScrolled(shouldFix);
      setLogoSrc(
        shouldFix
          ? "/Logo_Hexagone_Titre.svg"
          : "/Logo_Hexagone_Titre_White_Full.svg"
      );

      if (!hydrated || !isDesktop) {
        setLogoWidthVW("70vw");
        return;
      }

      if (shouldFix) {
        setLogoWidthVW("20vw");
      } else {
        const interpolated = 45 - ((25 * scrollTop) / 300);
        setLogoWidthVW(`${interpolated}vw`);
      }
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll);

    return () => {
      window.removeEventListener("resize", updateIsDesktop);
      window.removeEventListener("scroll", updateFromScroll);
    };
  }, [hydrated, isDesktop]);

  useEffect(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuBtnPos({ top: rect.top, right: window.innerWidth - rect.right });
    }
  }, [menuRef.current]);

  const changeLocale = (newLocale) => {
    const basePath = pathname.replace(/^\/(fr|en)/, "");
    router.push(`/${newLocale}${basePath}`, { scroll: false });
  };

  return (
    <>
      <motion.header
        className={`w-full fixed top-0 left-0 z-50 px-6 py-2 flex justify-between items-center transition-colors duration-500 ${
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

        <div className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => {
              menuRef.current = true;
              forceUpdate({});
            }}
            ref={menuButtonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`tracking-wide cursor-pointer text-lg lg:text-xl font-thin transition-colors duration-300 xl:m-6 relative p-2 -m-2 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <RevealText isHovered={isHovered}>menu</RevealText>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuRef.current && (
          <>
            <motion.div
              className="fixed top-0 right-0 w-full h-screen bg-orange-100 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
              }}
            />

            <motion.div
              className="fixed inset-0 right-0 w-full h-screen bg-sky-200 z-50 flex flex-col justify-center items-center text-black/50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.9,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <button
                onClick={() => {
                  menuRef.current = false;
                  forceUpdate({});
                }}
                className="text-5xl cursor-pointer hover:text-black hover:font-medium transition-colors duration-300"
                style={{
                  position: "absolute",
                  top: menuBtnPos.top - 20,
                  right: menuBtnPos.right,
                  padding: "24px",
                }}
              >
                ×
              </button>

              <div className="relative w-full max-w-5xl mx-auto px-4 md:px-8">
                <LogoMaskWithImage
                  imageUrl="/imgs/pexels-sahil-prajapati-178989-974320.jpg"
                  className="absolute xl:-left-0 2xl:-left-70 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[1200px] md:h-[1200px] opacity-20 pointer-events-none z-0"
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

      <div className="fixed bottom-5 left-6 z-50">
  <div
    onClick={() => changeLocale(locale === "fr" ? "en" : "fr")}
    className="relative w-20 h-10 bg-black/60 backdrop-blur-md rounded-full cursor-pointer shadow-md"
  >
    {/* Emoji FR */}
    <span
      className={`absolute left-2.5 text-lg top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
        locale === "fr" ? "opacity-100" : "opacity-40"
      }`}
    >
      🇫🇷
    </span>

    {/* Emoji EN */}
    <span
      className={`absolute right-2.5 text-lg top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
        locale === "en" ? "opacity-100" : "opacity-40"
      }`}
    >
      🇬🇧
    </span>

    {/* Curseur rond */}
    <div
      className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-transform duration-300 z-0 ${
        locale === "fr" ? "translate-x-0" : "translate-x-10"
      }`}
    />
  </div>
</div>


    </>
  );
}