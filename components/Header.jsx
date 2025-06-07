"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import getTranslations from "../lib/getTranslations";
import { RevealText } from "./RevealText";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split("/")[1] || "fr";
  const t = useMemo(() => getTranslations(locale), [locale]);

  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(false);
  const forceUpdate = useState()[1]; // for trigger re-render

  const menuButtonRef = useRef(null);
  const [menuBtnPos, setMenuBtnPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuBtnPos({ top: rect.top, right: window.innerWidth - rect.right });
    }
  }, [menuRef.current]);

  const changeLocale = (newLocale) => {
    const basePath = pathname.replace(/^\/(fr|en)/, '');
    router.push(`/${newLocale}${basePath}`, { scroll: false });
    // PAS de fermeture de menu ici !
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 text-white px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`}>
          <Image
            src="/Logo_Hexagone_Titre_White_Full.svg"
            alt="Logo"
            width={200}
            height={50}
            className="h-auto w-[270px] md:w-[500px] xl:w-[1000px]"
          />
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => {
              menuRef.current = true;
              forceUpdate({}); // force re-render
            }}
            ref={menuButtonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="tracking-wide cursor-pointer lg:text-xl font-thin text-white hover:text-primary transition-colors duration-300 xl:m-6 relative -m-6 p-6"
          >
            <RevealText isHovered={isHovered}>menu</RevealText>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuRef.current && (
          <>
            {/* Layer 1 */}
            <motion.div
              className="fixed top-0 right-0 w-full h-screen bg-[#700026] z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            />

            {/* Layer 2 */}
            <motion.div
              className="fixed top-0 right-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center text-black"
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
                className="text-4xl cursor-pointer hover:text-primary transition-colors duration-300"
                style={{
                  position: "absolute",
                  top: menuBtnPos.top,
                  right: menuBtnPos.right,
                  padding: "24px",
                }}
              >
                ×
              </button>

              <nav className="flex flex-col gap-8 text-3xl font-semibold">
                <Link href={`/${locale}`} onClick={() => {
                  menuRef.current = false;
                  forceUpdate({});
                }}>
                  {t.header.home}
                </Link>
                <Link href={`/${locale}/a-propos`} onClick={() => {
                  menuRef.current = false;
                  forceUpdate({});
                }}>
                  {t.header.about}
                </Link>
                <Link href={`/${locale}/contact`} onClick={() => {
                  menuRef.current = false;
                  forceUpdate({});
                }}>
                  {t.header.contact}
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FR / EN Floating Button */}
      <div className="fixed bottom-36 xl:bottom-30 left-6 z-50 bg-black/60 backdrop-blur-md text-white rounded-full px-4 py-2 text-sm shadow-md">
        <button
          onClick={() => changeLocale("fr")}
          className={`hover:underline cursor-pointer ${locale === "fr" ? "font-bold text-white" : "text-gray-300"}`}
        >
          FR
        </button>
        <span className="mx-1 text-gray-400">|</span>
        <button
          onClick={() => changeLocale("en")}
          className={`hover:underline cursor-pointer ${locale === "en" ? "font-bold text-white" : "text-gray-300"}`}
        >
          EN
        </button>
      </div>
    </>
  );
}
