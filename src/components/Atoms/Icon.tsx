import {
  ChevronRightIcon,
  ChevronLeftIcon,
  InformationCircleIcon,
  CheckIcon,
  MoonIcon,
  SunIcon,
  XIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  RefreshIcon,
  ArrowRightIcon,
  ScaleIcon,
} from "@heroicons/react/solid";

const icons = {
  chevronRight: (className: string) => {
    return <ChevronRightIcon className={className} />;
  },
  chevronLeft: (className: string) => {
    return <ChevronLeftIcon className={className} />;
  },
  info: (className: string) => {
    return <InformationCircleIcon className={className} />;
  },
  check: (className: string) => {
    return <CheckIcon className={className} />;
  },
  moon: (className: string) => {
    return <MoonIcon className={className} />;
  },
  sun: (className: string) => {
    return <SunIcon className={className} />;
  },
  x: (className: string) => {
    return <XIcon className={className} />;
  },
  thumbUp: (className: string) => {
    return <ThumbUpIcon className={className} />;
  },
  thumbDown: (className: string) => {
    return <ThumbDownIcon className={className} />;
  },
  refresh: (className: string) => {
    return <RefreshIcon className={className} />;
  },
  arrowRight: (className: string) => {
    return <ArrowRightIcon className={className} />;
  },
  scale: (className: string) => {
    return <ScaleIcon className={className} />;
  },
};

const iconSize = {
  sm: "h-5 w-5",
  base: "h-10 w-10",
};

const iconColor = {
  neutral: "text-neutral",
  neutralLight: "text-neutral-light dark:text-neutral",
  neutralDark: "text-neutral-dark",
};

export interface IconProps {
  className?: string;
  icon: keyof typeof icons;
  size?: keyof typeof iconSize;
  color?: keyof typeof iconColor;
}

export const Icon = ({
  className,
  icon,
  size = "sm",
  color = "neutral",
}: IconProps) => {
  let classNames = className ? className : "";
  classNames = [classNames, iconSize[size], iconColor[color]].join(" ");

  return icons[icon](classNames);
};
