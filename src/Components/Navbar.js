import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "../Assets/headerlogo.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black flex justify-between items-center fixed top-0">
      <div className="flex">
          <img src={headerlogo} alt="headerlogo" className="h-12 ml-4" />
      </div>
      <div className="flex w-full justify-end">
        <ul className="flex text-white text-xl">
        <Link to="/">
          <li className="">
           Home
          </li>
          </Link>
          <Link to="/about" >
          <li className="mx-8">
            About
          </li>
          </Link>
          <Link to="/profile">
          <li className="mr-4">
           Profile
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
