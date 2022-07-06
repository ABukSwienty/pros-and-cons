export const Col8 = (props: {
  children?: React.ReactNode;
  start?: boolean;
  className?: string;
}) => {
  const start = props.start ? "col-start-1 lg:col-start-3" : "";
  const className = props.className ? props.className : "";
  const children = props.children ? props.children : "";
  return (
    <div className={`col-span-10 lg:col-span-8 ${className} ${start}`}>
      {children}
    </div>
  );
};
