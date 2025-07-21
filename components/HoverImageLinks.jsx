"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

export const HoverImageLinks = ({ locale, onClick, translations }) => {
  const links = [
    {
      heading: translations.home || "Accueil",
      subheading: translations.sub_home || "Retour à l’accueil",
      imgSrc: "/imgs/pexels-pok-rie-33563-135477.jpg",
      href: "#home",
    },
    {
      heading: translations.expertise || "Savoir Faire",
      subheading: translations.sub_expertise || "Découvrir notre vision",
      imgSrc: "/imgs/carousel/diner2_11zon.jpg",
      href: "#expertise",
    },
    {
      heading: translations.approch || "Une approche 360°",
      subheading: translations.sub_approch || "Découvrir notre vision",
      imgSrc: "/imgs/360.jpg",
      href: "#approche",
    },
    {
      heading: translations.whoarewe || "Qui sommes-nous ?",
      subheading: translations.sub_whoarewe || "Une équipe dévouée",
      imgSrc: "/imgs/team.jpg",
      href: "#qui-sommes-nous",
    },
    {
      heading: translations.contact || "Contact",
      subheading: translations.sub_contact || "Prenons contact",
      imgSrc: "/imgs/pexels-pixabay-41004.jpg",
      href: "#contact",
    },
  ];

  return (
    <section className="bg-transparent font-raleway">
      {links.map((link, index) => (
        <HoverLink key={index} {...link} locale={locale} onClick={onClick} />
      ))}
    </section>
  );
};

const HoverLink = ({ heading, imgSrc, subheading, href, onClick, locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isHome) {
      // Scroll direct si on est déjà sur home
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      // Redirection vers la home avec l’ancre
      router.push(`/${locale}${href}`);
    }
    if (onClick) onClick();
  };

  return (
    <motion.div
      ref={ref}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex flex-row-reverse items-center justify-between border-b-2 border-black py-4 transition-colors duration-500 hover:border-neutral-400 cursor-pointer"
    >
      <div className="text-right">
        <motion.h2
          variants={{
            initial: { x: 0 },
            whileHover: { x: 16 },
          }}
          transition={{ type: "spring", staggerChildren: 0.075, delayChildren: 0.25 }}
          className="relative z-10 block text-3xl whitespace-nowrap font-bold text-stone-800 transition-colors duration-500 group-hover:font-black md:text-5xl uppercase"
        >
          {heading.split(" ").map((word, wi) => (
            <React.Fragment key={wi}>
              {Array.from(word).map((l, i) => (
                <motion.span
                  key={`${wi}-${i}`}
                  className="inline-block"
                  variants={{ initial: { x: 0 }, whileHover: { x: 16 } }}
                  transition={{ type: "spring" }}
                >
                  {l}
                </motion.span>
              ))}
              {wi < heading.split(" ").length - 1 && (
                <motion.span
                  className="inline-block w-[0.25em]"
                  variants={{ initial: { x: 0 }, whileHover: { x: 16 } }}
                  transition={{ type: "spring" }}
                >
                  {" "}
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.h2>

        <p className="relative z-10 mt-2 block text-lg text-stone-800 font-light transition-colors duration-500">
          {subheading}
        </p>
      </div>

      <motion.img
        style={{ top, left, translateX: "-180%", translateY: "-50%" }}
        variants={{ initial: { scale: 0, rotate: "-12.5deg" }, whileHover: { scale: 1, rotate: "12.5deg" } }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image représentant le lien ${heading}`}
      />

      <motion.div
        variants={{
          initial: { x: "-25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowLeft className="text-5xl text-black" />
      </motion.div>
    </motion.div>
  );
};
