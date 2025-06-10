"use client"

import React, { useRef } from "react";
import { motion } from "framer-motion";

export const ImageTrailHero = () => {
  return (
      <>
        <section className="h-[40vh] md:h-[50vh] bg-slate-200 mt-12">
          <WatermarkWrapper />
        </section>

        <section className="h-screen"></section>
      </>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Exception" />
      <Watermark text="Inspiration" reverse />
      <Watermark text="Privilège" />
    </>
  );
};

const Watermark = ({ reverse, text }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};