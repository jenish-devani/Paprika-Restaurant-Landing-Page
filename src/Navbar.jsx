import React from "react";

function Navbar() {
  return (
    <div className="container">
      <div className="flex mt-7 justify-between items-center">
        <img className="w-28 " src="images/logo.svg" alt="" />
        <div className="flex justify-start p-3 rounded-lg shadow-custom">
          <img className="w-6" src="images/search.svg" alt="" />
          <input
            className="ml-2 w-48 border-none focus:outline-none"
            name=""
            id=""
            placeholder="“Gluten Free Restaurants”"
          ></input>
          <img className="ml-8" src="images/line.svg" alt="" />
          <img className="w-6 ml-2" src="images/location.svg" alt="" />
          <input
            className="ml-2 w-48 border-none focus:outline-none"
            name=""
            id=""
            placeholder="2374 Willow St. Ave"
          ></input>
        </div>
        <div className="buttons flex justify-start">
          <button className="text-[#FF7B7B] ml-2 font-semibold">Sign Up</button>
          <button className="text-[#FF7B7B] font-semibold bg-[#FFE7E7] rounded-full ml-7 px-8 py-2">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
