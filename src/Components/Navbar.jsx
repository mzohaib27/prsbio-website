import React from "react";
import logo from "../assets/navlogo.png";
import { Navlinks } from "../Constants/constant";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineDown,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="flex mx-24 py-6 justify-between">
        <div>
          <img src={logo} alt="" className="w-32 h-16" />
        </div>
        <div className="flex items-center">
          <div className="flex space-x-4 items-center  ">
            <button className="peer flex items-center  text-lg font-semibold">
              Applications <AiOutlineDown className="mx-2" />
            </button>
            <div className="hidden peer-hover:flex  z-20 hover:flex top-16 absolute  w-[20rem] flex-col px-5 py-2  bg-white ">
              <a href="#" className="menu-hover">
                Food Industries
              </a>
              <a href="#" className="menu-hover">
                Biotech Industries
              </a>
              <a href="#" className="menu-hover">
                Agriculture Industries
              </a>
            </div>
            <div>
              <button className="peer flex items-center text-lg font-semibold">
                Products <AiOutlineDown className="mx-2" />
              </button>
              <div className="hidden peer-hover:flex z-20 hover:flex top-16 absolute  w-[20rem] flex-col px-5 py-2  bg-white ">
                <a href="#" className="menu-hover">
                  Food Industries
                </a>
                <a href="#" className="menu-hover">
                  Biotech Industries
                </a>
                <a href="#" className="menu-hover">
                  Agriculture Industries
                </a>
              </div>
            </div>
          </div>
          {Navlinks.map((link, i) => (
            <div key={i}>
              <ul className="flex">
                <li className="mx-6 my-2 hover-effect text-lg font-semibold">
                  {link.link}
                </li>
              </ul>
            </div>
          ))}
          <div className="flex">
            <h1 className="hover-effect  mx-6 my-2 text-3xl">
              <AiFillFacebook />
            </h1>
            <h1 className="hover-effect  mx-6 my-2 text-3xl">
              <AiOutlineTwitter />
            </h1>
            <h1 className="hover-effect  mx-6 my-2 text-3xl">
              <AiFillInstagram />
            </h1>
            <h1 className="hover-effect  mx-6 my-2 text-3xl">
              <AiFillLinkedin />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
