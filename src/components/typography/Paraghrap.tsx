import React from "react";

const Paraghrap = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`text-xl py-6 text-center px-8 font-medium leading-10 ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paraghrap;
