import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    scale: 0.6,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

export const ScaleIn = (props: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="border"
      variants={variants}
      initial="initial"
      animate="in"
    >
      {props.children}
    </motion.div>
  );
};
