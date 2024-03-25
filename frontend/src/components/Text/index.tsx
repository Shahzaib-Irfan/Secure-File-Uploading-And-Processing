import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  s: "text-xl font-normal",
};

const fonts = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Georgia, serif",
  "Palatino, serif",
  "Garamond, serif",
  "Bookman, serif",
  "Comic Sans MS, cursive",
  "Copperplate, fantasy",
  "Courier, monospace",
];

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
  font: string; // Adding font property to TextProps
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  font = fonts[1], // Default font
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_01 font-sfprotext ${className} ${sizes[size]}`} style={{ fontFamily: font }} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
