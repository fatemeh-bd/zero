import React from "react";

const Title = ({ children }: { children?: React.ReactNode }) => {
  return <h1 className="font-medium xl:text-6xl lg:text-5xl sm:text-4xl text-2xl text-center">{children}</h1>;
};

export default Title;
