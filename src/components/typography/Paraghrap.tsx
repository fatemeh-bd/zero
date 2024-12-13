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
      className={`lg:text-xl text-base py-6 text-center px-8 font-medium lg:leading-10 leading-8 ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paraghrap;
