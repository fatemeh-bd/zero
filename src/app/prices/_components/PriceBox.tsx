import { numberWithCommas } from "@/utils/helper";
import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

const PriceBox = ({
  title,
  items,
  price,
}: {
  title: string;
  items: string[];
  price?: number;
}) => {
  return (
    <div className="bg-white bg-opacity-20 p-4 rounded-lg lg:col-span-4 col-span-12 w-full min-h-[300px]">
      <p className="p-4 font-bold text-2xl text-center bg-white bg-opacity-25 text-secondary rounded-lg">
        {title}
      </p>
      <ul className="mt-6 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <StarIcon className="size-6 text-secondary" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      {price && (
        <p className="px-6 py-3 mt-8 text-center bg-white bg-opacity-35 text-secondary rounded-lg w-fit mx-auto">
          {numberWithCommas(price)} تومان
        </p>
      )}
    </div>
  );
};

export default PriceBox;
