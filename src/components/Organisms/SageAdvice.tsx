import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "../Atoms/Icon";

const variants = {
  initial: {
    opacity: 0.5,
    scale: 0.6,
    transistion: {
      duration: 0.3,
    },
  },
  in: {
    opacity: 1,
    scale: 1,
    transistion: {
      duration: 0.3,
    },
  },
  out: {
    opacity: 0,
    scale: 0,
    transistion: {
      duration: 0.3,
    },
  },
};

export const SageAdvice = (props: {
  author: string;
  content: string;
  pos: { x: number; y: number };
}) => {
  const x =
    props.pos.x + 256 > window.innerWidth
      ? window.innerWidth - 256
      : props.pos.x;
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="in"
      exit="out"
      className="absolute text-gray-50 text-xs font-light text-center z-50 w-64 rounded-lg bg-gray-700 drop-shadow-lg"
      style={{ left: x, top: props.pos.y }}
    >
      <div className="relative w-full h-fit">
        <p className="px-4 pt-4">"{props.content}"</p>
        <p className="font-medium text-sm px-2 py-2">{props.author}</p>
      </div>
    </motion.div>
  );
};
