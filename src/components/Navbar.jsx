import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="w-full py-[24px] flex items-center justify-between">
      <nav className="flex items-center gap-[16px]">
        <Link to="features" smooth={true} duration={500}>
          Features
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="security" smooth={true} duration={1000}>
          Security
        </Link>
      </nav>

      <div className="flex items-center gap-[10px]">
        <img className="w-[30px]" src={logo} alt="logo" />
        <h1 className="font-bold text-[1.2rem]">SafeWallet</h1>
      </div>

      <div className="flex items-center gap-[10px]">
        <button className="px-[14px] py-[10px] rounded-[10px] text-[#0F0F0F] border-[1px] border-[#E7E7E7] hover:bg-[#FAFAFA] duration-300">
          Support
        </button>
        <Link
          to="download"
          smooth={true}
          duration={1000}
          className="cursor-pointer px-[14px] py-[10px] rounded-[10px] bg-black text-white"
        >
          Download
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
