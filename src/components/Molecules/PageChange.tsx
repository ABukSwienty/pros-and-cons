import React from "react";
import { motion } from "framer-motion";
import pageChangeVariants from "../framer/pageChangeVariants";

const PageChange = (props: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={pageChangeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full w-full"
    >
      {props.children}
    </motion.div>
  );
};

export default PageChange;
