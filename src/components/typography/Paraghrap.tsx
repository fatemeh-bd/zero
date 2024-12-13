import React from "react";

const Paraghrap = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`lg:text-xl text-base py-6 text-center sm:px-8 px-0 font-medium lg:leading-10 leading-8 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
};

export default Paraghrap;
