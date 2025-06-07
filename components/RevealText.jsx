import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const RevealText = ({ children, isHovered }) => {
  return (
    <motion.span
      animate={isHovered ? "hovered" : "initial"}
      className="relative block overflow-hidden leading-none"
    >
      <span className="block">
        {children.split("").map((l, i) => (
          <motion.span
            key={`top-${i}`}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: i * STAGGER,
            }}
          >
            {l}
          </motion.span>
        ))}
      </span>
      <span className="absolute inset-0 block">
        {children.split("").map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: i * STAGGER,
            }}
          >
            {l}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
};
