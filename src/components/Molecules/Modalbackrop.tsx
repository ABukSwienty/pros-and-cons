import { motion } from "framer-motion";

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
  },
};

export const ModalBackrop = () => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="initial"
      animate="in"
      exit="exit"
      className="fixed w-screen h-screen backdrop-blur-sm z-10 bg-opacity-30 bg-gray-500"
    ></motion.div>
  );
};

export default ModalBackrop;
