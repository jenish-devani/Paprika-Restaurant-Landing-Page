import React from "react";
import Homemiddle from "./Homemiddle";
import Hometop from "./Hometop";
import Homebottom from "./Homebottom";

const Home = () => {
  return (
    <div className=" container flex">
      <div className="w-[22%]">
        <ul className="list-none">
          <li className="font-semibold mt-7">Best Matches</li>
          <li className="font-semibold mt-7">Menu</li>
          <li className="font-semibold mt-7">Dietary Info</li>
          <li className="font-semibold mt-7">Reviews</li>
        </ul>
      </div>
      <div className="h-144 border-r-2"> </div>
      <div className="w-[100%]">
        <Hometop />
        <div className="mt-10 ml-10 border-b-2 w[100%]"></div>
        <Homemiddle />
        <Homebottom />
      </div>
    </div>
  );
};

export default Home;
