import { motion } from "framer-motion";

const modalVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      spring: 20,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

const Modal = () => {
  return (
    <motion.div
      variants={modalVariants}
      initial="initial"
      animate="in"
      exit="exit"
      className="fixed w-screen h-screen flex justify-center items-center z-20"
    >
      <div className="w-3/5 h-3/5 border rounded-lg bg-gray-50 drop-shadow-lg"></div>
    </motion.div>
  );
};

export default Modal;
