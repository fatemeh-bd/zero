import { ButtonHTMLAttributes } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  children: React.ReactNode;
  className?: string;
};
