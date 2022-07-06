import React from "react";

export const Heading2 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const className = props.className ? props.className : "";
  return <h1 className={`text-2xl ${className}`}>{props.children}</h1>;
};
