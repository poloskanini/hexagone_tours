import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export const HoverImageLinks = ({ locale, onClick, translations }) => {
  const links = [
    {
      heading: translations.home || "Accueil",
      subheading: translations.sub_home || "Retour à l’accueil",
      imgSrc: "/imgs/pexels-pok-rie-33563-135477.jpg",
      href: `/${locale}`,
    },
    {
      heading: translations.about || "À propos", // ← espace normal
      subheading: translations.sub_about || "Découvrir notre vision",
      imgSrc: "/imgs/pexels-evonics-2086765.jpg",
      href: `/${locale}/a-propos`,
    },
    {
      heading: translations.contact || "Contact",
      subheading: translations.sub_contact || "Prenons contact",
      imgSrc: "/imgs/pexels-pixabay-41004.jpg",
      href: `/${locale}/contact`,
    },
  ];

  return (
    <section className="bg-transparent">
      {links.map((link, index) => (
        <HoverLink key={index} {...link} onClick={onClick} />
      ))}
    </section>
  );
};

const HoverLink = ({ heading, imgSrc, subheading, href, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex flex-row-reverse items-center justify-between border-b-2 border-neutral-300 py-4 transition-colors duration-500 hover:border-neutral-400 md:py-8 cursor-pointer"
    >
      <div className="text-right">
        <motion.h2
          variants={{
            initial: { x: 0 },
            whileHover: { x: 16 },
          }}
          transition={{ type: "spring", staggerChildren: 0.075, delayChildren: 0.25 }}
          className="relative z-10 block text-4xl font-bold text-neutral-300 transition-colors duration-500 group-hover:text-white md:text-6xl"
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

        <p className="relative z-10 mt-2 block text-base text-neutral-200 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </p>
      </div>

      <motion.img
        style={{ top, left, translateX: "-150%", translateY: "-50%" }}
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
        <FiArrowLeft className="text-5xl text-neutral-200" />
      </motion.div>
    </motion.a>
  );
};
