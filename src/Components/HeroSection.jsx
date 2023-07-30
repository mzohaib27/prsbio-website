import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className=" bg-img w-full h-[90vh] flex items-center opacity-[0.6] justify-center "></div>
        <div className="absolute space-y-8 z-20 top-72 left-80">
          <h1 className=" text-black font-bold text-6xl">
            PRS Bio & Automation Solutions
          </h1>
          <div className="flex items-center justify-center">
            <button className="px-6 py-2 bg-blue-600 hover-effect hover:text-white rounded hover:bg-blue-700 text-lg text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
