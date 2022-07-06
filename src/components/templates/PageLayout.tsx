import React from "react";
const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <main className="w-screen min-h-screen h-screen transition-all duration-300 ease-in-out dark:bg-gray-900 pt-12 text-gray-600 dark:text-gray-100">
      {props.children}
    </main>
  );
};

export default PageLayout;
