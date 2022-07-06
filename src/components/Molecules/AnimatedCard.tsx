import React from "react";
import { motion } from "framer-motion";
import { random } from "../../functions/random";

const CardVariants = {
  none: {},
  initial: () => {
    return {
      rotate: random().interval(1, 12),
      opacity: 0,
      scale: random().interval(0.9, 1),
      x: random().interval(-window.innerWidth, window.innerWidth),
      y: random().interval(-window.innerHeight, window.innerHeight),
      transition: {
        duration: 1,
        delay: 1,
      },
    };
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  rotate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const exit = () => {
  return {
    transition: {
      duration: random().interval(0.8, 1.2),
    },
    scale: random().interval(0.9, 1),
    x: random().interval(-window.innerWidth, window.innerWidth),
    y: random().interval(-window.innerHeight, window.innerHeight),
    rotate: random().interval(-360, 360),
    opacity: 0,
  };
};

export const AnimatedCard = (props: {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
  animate: "none" | "in" | "rotate";
  bgColor: string;
}) => {
  const { animate, bgColor, header, main, footer } = props;

  return (
    <motion.div
      variants={CardVariants}
      initial="initial"
      animate={animate}
      exit={exit()}
      layout="size"
      className={`animatedCard absolute space-y-2 rounded-lg ${bgColor} shadow-xl drop-shadow-lg transition-colors duration-300 ease-in-out h-2/3 w-full md:w-2/3 px-10 py-6`}
    >
      <div className="w-full h-1/6 flex items-center flex-col justify-center p-4">
        {header}
      </div>
      <div id="animatedCard_main" className=" w-full h-4/6 p-4 overflow-scroll">
        {main}
      </div>
      <div className="w-full h-1/6 p-4">{footer}</div>
    </motion.div>
  );
};
