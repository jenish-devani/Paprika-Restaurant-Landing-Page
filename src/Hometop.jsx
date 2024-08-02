import React from "react";

const Hometop = () => {
  return (
    <div className=" home-top flex pt-10 pl-10 justify-between items-center">
      <div className="">
        <div className="flex items-center justify-start">
          <h1 className="font-bold text-2xl text-gray-800">The Daily Grind</h1>
          <img className="w-7 ml-2" src="images/menu.svg" alt="" />
        </div>
        <div className="flex items-center mt-2 justify-start">
          <p className="text-gray-600">1.2 miles away</p>
          <div className="h-6 ml-2 border-r-2 border-gray-400"></div>
          <p className="ml-2 text-[#36AA7D] font-bold">Open</p>
        </div>
      </div>
      <div className="flex items-center border border-gray-300 px-5 py-2 justify-start rounded-2xl">
        <img src="images/man.svg" className="" alt="" />
        <div className="ml-5">
          <h1 className="font-bold p-0.25 text-gray-800">Add Item</h1>
          <p className="p-0.25 text-gray-600">Add a new item to this menu</p>
        </div>
        <button className="bg-[url('right.svg')] ml-8 bg-no-repeat w-7 h-7 bg-contain"></button>
      </div>
    </div>
  );
};

export default Hometop;
