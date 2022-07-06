import React from "react";

export const Container = (props: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full w-full lg:w-4/5 mx-auto flex flex-col items-start justify-center">
      {props.children}
    </div>
  );
};
