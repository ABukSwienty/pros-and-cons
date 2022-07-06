import { motion, Variant } from "framer-motion";
import { Tooltip } from "./Tooltip";

const btnShape = {
  square: "h-11 w-11",
  rect: "px-5 py-2.5 w-auto h-auto",
};

const btnColor = {
  primary: "bg-primary",
  primaryS1: "bg-primary-s1",
  secondary: "bg-secondary",
  secondaryS1: "bg-secondary-s1",
  neutral: "bg-neutral",
  neutralLight: "bg-neutral-light dark:neutral-strong",
  neutralStrong: "bg-neutral-strong dark:bg-neutral-light",
};

const btnTextColor = {
  primary: "text-primary",
  primaryS1: "text-primary-s1",
  secondary: "text-secondary",
  secondaryS1: "text-secondary-s1",
  neutral: "text-neutral",
  neutralLight: "text-neutral-light dark:text-neutral-strong",
  neutralStrong: "text-neutral-strong dark:text-neutral-strong",
};

const btnFontSize = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
};

const buttonVariants = {
  tap: { scale: 0.8 },
  hover: {
    boxShadow: "0 2px 10px rgba(249, 115, 22, 0.75)",
    border: "2px solid #fb923c",
    transition: {
      type: "tween",
    },
  },
  animate: {},
};

export interface ButtonProps {
  children?: React.ReactNode;
  color?: keyof typeof btnColor;
  textColor?: keyof typeof btnTextColor;
  shape?: keyof typeof btnShape;
  fontSize?: keyof typeof btnFontSize;
  tooltip?: string;
  tap?: Variant;
  hover?: Variant;
  animate?: Variant;
  tooltipPos?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  onClick,
  children,
  color = "neutralLight",
  shape = "square",
  fontSize = "sm",
  textColor = "neutralStrong",
  disabled = false,
  tap = buttonVariants.tap,
  hover = buttonVariants.hover,
  animate = buttonVariants.animate,
  tooltip,
  ...rest
}: ButtonProps) => {
  const btnClassNames = [
    "flex flex-row items-center border-2 border-transparent justify-center rounded-lg bg-neutral-light dark:neutral-strong",
    btnShape[shape],
    btnFontSize[fontSize],
    btnTextColor[textColor],
    btnColor[color],
  ].join(" ");

  return (
    <div className="relative group flex justify-center">
      <motion.button
        variants={{ tap, hover, animate }}
        animate="animate"
        whileTap="tap"
        whileHover="hover"
        onClick={onClick}
        disabled={disabled}
        {...rest}
        className={btnClassNames}
      >
        {children}
      </motion.button>
      {tooltip && <Tooltip tip={tooltip} />}
    </div>
  );
};

export default Button;
