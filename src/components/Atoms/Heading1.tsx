import React from "react";

const Heading1 = (props: { children: React.ReactNode; className?: string }) => {
  const className = props.className ? props.className : "";
  return <h1 className={`text-4xl ${className}`}>{props.children}</h1>;
};

Heading1.defaultProps = {
  children: <>Hello World</>,
  className: "bg-red-700",
};

export default Heading1;
