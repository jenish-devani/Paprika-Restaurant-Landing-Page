import React from "react";

const Homemiddle = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="pt-10 pl-10">
      <h1 className="font-bold text-lg text-gray-700">Best Matches</h1>
      <div className="flex gap-8 mt-7">
        {items.map((item) => (
          <div key={item} className="flex flex-col gap-0.5">
            <img className="w-36 h-36" src="images/item.svg" alt="" />
            <p className="text-sm font-semibold">Avocado Green Toast</p>
            <p className="text-[#2A9865] text-xs font-semibold">
              100% Preference Match
            </p>
            <p className="text-xs font-semibold">$8.99</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homemiddle;
