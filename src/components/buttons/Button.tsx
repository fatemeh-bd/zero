import React from "react";
import { ButtonProps } from "./types";
export const buttonClass="lg:text-lg text-sm border border-white py-2 px-6 h-fit rounded-full flex gap-6 items-center justify-center"
const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      name="Button"
      className={`${buttonClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
