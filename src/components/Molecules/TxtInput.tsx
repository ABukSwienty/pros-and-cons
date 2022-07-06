import { SyntheticEvent } from "react";

export const TxtInput = (props: {
  label?: string;
  id: string;
  icon: string;
  className?: string;
  onKeyUp?: (event: SyntheticEvent) => void;
  onFocus?: (event: SyntheticEvent) => void;
}) => {
  const { label, id, icon, className, ...rest } = props;

  return (
    <div className="group w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block pb-1 w-full text-sm font-medium text-gray-500 dark:text-gray-100 transition-all duration-200 ease-in-out group-focus-within:text-orange-500"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={id}
          type="text"
          className={`peer ring-2 ring-gray-400 relative h-10 w-full rounded-md bg-white pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-orange-500 focus:drop-shadow-lg ${
            className ?? className
          }`}
          {...rest}
        />
        <span className="material-symbols-outlined absolute left-2 transition-all text-gray-500 duration-200 ease-in-out group-focus-within:text-orange-500">
          {icon}
        </span>
      </div>
    </div>
  );
};
