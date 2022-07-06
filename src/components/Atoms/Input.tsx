import { SyntheticEvent } from "react";
import { Icon, IconProps } from "./Icon";

const Input = (props: {
  label?: string;
  id: string;
  icon?: IconProps["icon"];
  className?: string;
  placeholder?: string;
  onKeyUp?: (event: SyntheticEvent) => void;
  onFocus?: (event: SyntheticEvent) => void;
}) => {
  const { label, id, icon, className, ...rest } = props;

  const inputClassNames = [
    icon && ["pl-10 pr-4"],
    !icon && ["px-3"],
    "peer ring-2 ring-gray-200 relative h-10 w-full rounded-md bg-white dark:bg-gray-200 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-orange-400 focus:drop-shadow-lg text-neutral",
  ].join(" ");

  return (
    <div className="group h-12 flex flex-col justify-center w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block pb-1 w-full text-sm font-medium text-gray-500 dark:text-gray-100 transition-all duration-200 ease-in-out group-focus-within:text-orange-400 whitespace-nowrap"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input id={id} type="text" className={inputClassNames} {...rest} />
        {icon && (
          <Icon
            icon={icon}
            className="absolute left-2 text-gray-500 group-focus-within:text-orange-400 h-5 w-5"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
