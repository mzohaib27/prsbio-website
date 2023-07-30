import React from "react";
import linkedin from "../assets/linkedin2.png";
import youtube from "../assets/youtube.png";

const Follow = () => {
  return (
    <>
      <div className="flex space-y-8 items-center justify-center my-10 mx-auto">
        <div>
          <h1 className="font-bold text-5xl text-green-600">Follow Us!</h1>
          <div className="flex space-x-4 items-center justify-center mt-6">
            <div>
              <img src={linkedin} alt="" className="w-16 h-16" />
            </div>
            <div>
              <img src={youtube} alt="" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Follow;
