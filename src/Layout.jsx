import React from "react";
import About from "./components/About";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Security from "./components/Security";

const Layout = () => {
  return (
    <div className="w-full px-[48px]">
      <Navbar />
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
