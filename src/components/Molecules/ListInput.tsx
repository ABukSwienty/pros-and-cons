import { useCallback, useEffect, useState } from "react";
import { TxtInput } from "./TxtInput";
import { motion } from "framer-motion";
import { AnimatedListToolbar } from "./AnimatedListToolbar";
import Input from "../Atoms/Input";

const liVariants = {
  initial: {
    scale: 0,
  },
  in: {
    scale: 1,
    boxShadow: "0px 0px 10px 5px rgba(0,0,0,0)",
    transition: {
      duration: 0.3,
    },
  },
};

export const ListInput = (props: { ghost: boolean; pro: boolean }) => {
  const [remove, setRemove] = useState(false);

  const [ghost, setGhost] = useState(false);

  const [isGhost, setIsGhost] = useState(props.ghost);

  const ghostInputHandler = () => {
    if (!ghost) setGhost(true);
  };

  const isGhostHandler = () => {
    if (isGhost) setIsGhost(false);
  };

  const clearHandler = () => {
    setRemove(true);
  };

  const className = isGhost ? "opacity-10" : "";

  const icon = props.pro ? "thumbUp" : "thumbDown";

  // hacky way of scrolling down
  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) return;
    const scrollHeight = root.scrollHeight;

    console.log(scrollHeight);
    window.scroll({
      top: scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [isGhost]);

  return (
    <>
      {!remove && (
        <motion.li
          variants={liVariants}
          initial="initial"
          animate="in"
          layoutScroll={true}
          className="relative w-full h-12 rounded-lg origin-center flex flex-row space-x-4 items-center"
        >
          <Input
            id={Math.random().toString()}
            className={`${className} w-full`}
            onKeyUp={ghostInputHandler}
            onFocus={isGhostHandler}
            icon={icon}
          />
          <div className="w-2/5 h-fit">
            {!isGhost && ghost && (
              <>
                <AnimatedListToolbar clearHandler={clearHandler} />
              </>
            )}
          </div>
        </motion.li>
      )}
      {ghost && <ListInput pro={props.pro} ghost={true} />}
    </>
  );
};
