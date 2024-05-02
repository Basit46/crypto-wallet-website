import React from "react";
import { useState } from "react";
import About from "./components/About";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Security from "./components/Security";

const Layout = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="w-full px-[20px] md:px-[48px]">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
      <Hero />
      <Features />
      <About />
      <Security />
      <Download />
      <Footer />
    </div>
  );
};

export default Layout;
