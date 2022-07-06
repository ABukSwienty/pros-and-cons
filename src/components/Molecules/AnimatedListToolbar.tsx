import { motion } from "framer-motion";
import { Icon } from "../Atoms/Icon";
import { Tooltip } from "../Atoms/Tooltip";

const toolbarVariants = {
  initial: {},
  in: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const toolBarChildrenVariants = {
  initial: {
    opacity: 0,
    top: -10,
  },
  in: {
    opacity: 1,
    top: 0,
  },
};

export const AnimatedListToolbar = (props: { clearHandler: () => void }) => {
  return (
    <motion.aside
      variants={toolbarVariants}
      initial="initial"
      animate="in"
      className=""
    >
      <motion.button
        variants={toolBarChildrenVariants}
        whileTap={{ scale: 0.8 }}
        whileHover={{ color: "rgb(249,115,22)" }}
        className="group h-full flex items-center"
        onClick={props.clearHandler}
      >
        <Icon icon="x" className="text-neutral dark:text-neutral-light" />
      </motion.button>
    </motion.aside>
  );
};
