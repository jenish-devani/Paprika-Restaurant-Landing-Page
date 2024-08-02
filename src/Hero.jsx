import React from "react";

const Hero = () => {
  return (
    <div
      className="h-16 bg-cover w-[100%] text-white mt-7"
      style={{
        backgroundImage: "url('/images/heroback.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "14rem",
        width: "100%",
      }}
    >
      <div className="container flex justify-between pt-6">
        <button className="bg-[url('back.svg')] bg-no-repeat w-10 h-10 bg-contain  text-[#FF7B7B]"></button>
        <div className="right">
          <button className="bg-[url('share.svg')] bg-no-repeat w-10 h-10 bg-contain text-[#FF7B7B]"></button>
          <button className="bg-[url('heart.svg')] bg-no-repeat w-10 h-10 bg-contain ml-4 text-[#FF7B7B]"></button>
        </div>
      </div>
      <div className="container flex items-end">
        <div className="w-[100%] mt-32"></div>
        <div className="w-52 h-11 bg-white rounded-md flex items-center justify-center">
          <button className="bg-[url('image.svg')] bg-no-repeat w-6 h-6 bg-contain text-[#FF7B7B]"></button>
          <p className=" text-md ml-3 text-[#FF7B7B]"> All (45) Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
