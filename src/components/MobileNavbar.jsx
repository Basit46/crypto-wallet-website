import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const MobileNavbar = ({ openNav, setOpenNav }) => {
  const closeNav = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNav]);

  return (
    <div
      className={`mobile-nav ${
        openNav ? "md:hidden" : "hidden"
      } z-[10] fixed left-0 w-full bg-[white] px-[20px] h-full flex flex-col`}
    >
      <Link onClick={closeNav} to="features" smooth={true} duration={500}>
        Features
      </Link>
      <Link onClick={closeNav} to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link onClick={closeNav} to="security" smooth={true} duration={1000}>
        Security
      </Link>
      <a
        onClick={closeNav}
        href="https://support.google.com/chrome/?hl=en"
        target="blank"
      >
        Support
      </a>
      <Link onClick={closeNav} to="download" smooth={true} duration={1000}>
        Download
      </Link>
    </div>
  );
};

export default MobileNavbar;
