"use client";
import { useState, useEffect } from "react";

const useScreenWidth = (width: number) => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= width);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isScreenSmall;
};

export default useScreenWidth;
