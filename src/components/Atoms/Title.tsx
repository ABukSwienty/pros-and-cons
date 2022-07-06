import React from "react";

const titleSize = {
  sm: "text-1xl",
  md: "text-1xl lg:text-2xl",
  lg: "text-2xl md:text-4xl",
  xl: "text-7xl",
};

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof titleSize;
  level?: "h1" | "h2" | "h3";
}

const Title = ({
  size = "lg",
  level = "h1",
  className = "",
  children,
}: TitleProps) => {
  const classNames = ["", className, titleSize[size]].join(" ");
  const Tag = level;
  return <Tag className={classNames}>{children}</Tag>;
};

export default Title;
