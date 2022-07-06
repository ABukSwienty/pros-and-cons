import { Variants } from "framer-motion";

const pageChangeVariants: Variants = {
  initial: {
    x: "80vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: [0, 1],
    transition: {
      mass: 100,
    },
  },
  exit: {
    x: "-100vw",
    opacity: [1, 0],
    transition: {
      delay: 0,
      mass: 100,
    },
  },
};

export default pageChangeVariants;
