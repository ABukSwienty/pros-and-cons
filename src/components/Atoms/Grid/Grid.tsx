import React from "react";

export const Grid = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const className = props.className ? props.className : "";
  return (
    <section
      className={`grid grid-cols-12 gap-5 row-auto w-full px-5 ${className}`}
    >
      {props.children}
    </section>
  );
};
