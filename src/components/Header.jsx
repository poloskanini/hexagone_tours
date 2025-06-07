"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import getTranslations from "@/lib/getTranslations";

export default function Header() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr"; // fallback "fr"
  const t = useMemo(() => getTranslations(locale), [locale]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 text-foreground px-6 py-4 flex justify-between items-center shadow-md bg-white">
      <Link href={`/${locale}`}>
        <Image
          src="/Logo_Hexagone_Titre_Black_Full.svg"
          alt="Logo"
          width={400}
          height={100}
        />
      </Link>

      <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
        <Link href={`/${locale}`}>{t.header.home}</Link>
        <Link href={`/${locale}/a-propos`}>{t.header.about}</Link>
        <Link href={`/${locale}/contact`}>{t.header.contact}</Link>

        <div className="flex gap-2 ml-6">
          <Link
            href="/fr"
            className={`hover:underline underline-offset-2 ${
              locale === "fr" ? "font-bold text-primary" : "text-gray-500"
            }`}
          >
            FR
          </Link>
          <span>|</span>
          <Link
            href="/en"
            className={`hover:underline underline-offset-2 ${
              locale === "en" ? "font-bold text-primary" : "text-gray-500"
            }`}
          >
            EN
          </Link>
        </div>
      </nav>

      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className="w-6 h-0.5 bg-current" />
        <span className="w-6 h-0.5 bg-current" />
        <span className="w-6 h-0.5 bg-current" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-background text-foreground shadow-lg flex flex-col gap-6 p-8 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-2xl font-bold"
            >
              ×
            </button>
            <Link href={`/${locale}`} onClick={() => setIsOpen(false)}>
              {t.header.home}
            </Link>
            <Link href={`/${locale}/a-propos`} onClick={() => setIsOpen(false)}>
              {t.header.about}
            </Link>
            <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)}>
              {t.header.contact}
            </Link>

            <div className="flex gap-2 mt-4">
              <Link
                href="/fr"
                onClick={() => setIsOpen(false)}
                className={`hover:underline underline-offset-2 ${locale === "fr" ? "font-bold text-primary" : "text-gray-500"
                }`}
              >
                FR
              </Link>
              <span>|</span>
              <Link
                href="/en"
                onClick={() => setIsOpen(false)}
                className={`hover:underline underline-offset-2 ${locale === "en" ? "font-bold text-primary" : "text-gray-500"
                }`}
              >
                EN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
