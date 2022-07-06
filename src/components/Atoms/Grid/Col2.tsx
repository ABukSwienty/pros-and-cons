export const Col2 = (props: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const className = props.className ? props.className : "";
  return (
    <div className={`w-full h-auto col-span-2 ${className}`}>
      {props.children}
    </div>
  );
};
