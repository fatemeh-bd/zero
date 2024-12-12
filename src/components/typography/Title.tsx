import React from "react";

const Title = ({ children }: { children?: React.ReactNode }) => {
  return <h1 className="font-medium text-6xl text-center">{children}</h1>;
};

export default Title;
