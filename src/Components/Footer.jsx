import React from "react";
import { FooterLinks, prg } from "../Constants/constant";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="flex space-x-1 bg-gray-800 text-gray-200">
        <div className=" px-12 py-12">
          {FooterLinks.map((link, i) => (
            <div className="grid grid-cols-3 gap-6" key={i}>
              <div>
                <ul>
                  <li>{link.link1}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>{link.link2}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>{link.link3}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] mx-12 my-10 px-12">
          <h1 className="text-lg font-semibold text-white">About Us</h1>
          <p className="text-base">{prg.PRG}</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-800 text-gray-200 border-t-2 border-gray-200">
        <div>
          <h1 className="flex space-x-2 items-center text-xl  py-2">
            <AiOutlineCopyrightCircle className="w-5 h-5" />
            Copywrite 2023 PRS Bio & Automation Solutions, All rights reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
