import React from "react";

const sizes = {
  s: "text-base font-semibold",
  md: "text-lg font-semibold",
  xs: "text-sm font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-sfprotext ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
