import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      name="Button"
      className={`border border-white py-2 px-6 h-fit rounded-full flex gap-6 items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
