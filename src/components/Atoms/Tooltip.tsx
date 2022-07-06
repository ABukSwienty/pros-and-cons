export const Tooltip = (props: { tip: string; position?: string }) => {
  const { tip, position } = props;

  const getPos = () => {
    let pos = "";
    switch (position) {
      case "left":
        pos = "left-[110%]";
        break;

      case "right":
        pos = "right-[110%]";
        break;

      case "topRight":
        pos = "right-[110%] top-[110%]";
        break;

      case "bottom":
        pos = "bottom-[110%]";
        break;

      default:
        pos = "top-[110%]";
        break;
    }

    return pos;
  };

  return (
    <div
      className={`group scale-0 will-change-transform absolute ${getPos()} text-white text-xs md:text-sm font-light group-hover:scale-100 z-[9999]`}
    >
      <p className="transition-all duration-300 delay-100 ease-in-out opacity-0 group-hover:opacity-100 w-24 md:w-32 px-4 py-2 h-7 flex items-center justify-center bg-gray-500 dark:bg-gray-100 dark:text-gray-700 rounded-lg scale-90 group-hover:scale-100">
        {tip}
      </p>
    </div>
  );
};
