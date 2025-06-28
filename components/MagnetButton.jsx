'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import getTranslations from '../lib/getTranslations';
import { MdOutlineArrowUpward } from 'react-icons/md';

const MagnetButtonExample = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'fr';
  const t = getTranslations(locale);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[500px] p-4 md:flex-row md:gap-12"
      id="contact"
    >
      <MagnetButton label={t.contact.mailCircle} />

      <div className="mt-8 text-center md:mt-0 md:text-left">
        <h2 className="mb-4 text-3xl font-playfair font-medium text-black md:text-5xl">
          {t.contact.title}
        </h2>
        <p className="text-base font-light text-gray-700 md:text-lg">
          {t.contact.subtitle}
        </p>
      </div>
    </div>
  );
};

const MagnetButton = ({ label }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { width, left, top, height } = ref.current.getBoundingClientRect();
    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="mailto:infos@hexagone-tours.com?subject=Demande%20de%20contact%20depuis%20hexagone-tours.com"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative grid h-[220px] w-[220px] place-content-center rounded-full border-2 border-black transition-colors duration-700 ease-out cursor-pointer"
    >
      <MdOutlineArrowUpward className="pointer-events-none relative z-10 rotate-45 text-7xl text-black transition-all duration-700 ease-out group-hover:rotate-90" />

      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-100" />

      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
        style={{
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        width="200"
        height="200"
        className="pointer-events-none absolute z-10"
      >
        <path
          id="circlePath"
          d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            fill="black"
            className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          >
            {label} •••• {label}
          </textPath>
        </text>
      </motion.svg>
    </motion.a>
  );
};

export default MagnetButtonExample;
