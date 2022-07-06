import { motion } from "framer-motion";

export const FadeIn = (props: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      className="w-full"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1.2,
        delay: props.delay ? props.delay : 0,
      }}
    >
      {props.children}
    </motion.div>
  );
};
