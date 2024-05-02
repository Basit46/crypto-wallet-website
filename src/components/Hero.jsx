import React, { useRef } from "react";
import screen1 from "../assets/screen1.webp";
import screen2 from "../assets/screen2.webp";
import screen3 from "../assets/screen3.webp";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".main_text", {
        opacity: 0,
        y: 10,
        ease: "power2.out",
        duration: 1,
        delay: 0.5,
      });
      tl.from(".p_text", {
        opacity: 0,
        y: 10,
        ease: "power2.out",
        duration: 0.5,
      });
      tl.from(".hero_btn_cont", {
        opacity: 0,
        y: 10,
        ease: "power2.out",
        duration: 0.5,
      });
      tl.from(".screen1", {
        opacity: 0,
        y: 50,
        ease: "power2.out",
        duration: 1,
      });
      tl.from(
        ".screen3",
        {
          opacity: 0,
          y: 50,
          ease: "power2.out",
          duration: 1,
        },
        "<"
      );
      tl.from(".screen2", {
        opacity: 0,
        y: 50,
        ease: "power2.out",
        duration: 1,
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="hero relative h-[857px] w-full rounded-[20px] bg-[#FAFAFA] border-[1px] border-[#F3F3F3] overflow-hidden"
    >
      <div className="relative w-full h-full">
        {/* Icons */}
        <div className="absolute top-[37%] w-full hidden md:flex flex-col items-center justify-center">
          <span className="flex items-center gap-[550px]">
            <img className="w-[48px] animate-bounce-3" src={icon1} alt="icon" />
            <img className="w-[48px] animate-bounce-3" src={icon2} alt="icon" />
          </span>
          <span className="flex items-center gap-[380px]">
            <img className="w-[40px] animate-bounce-3" src={icon3} alt="icon" />
            <img className="w-[40px] animate-bounce-3" src={icon4} alt="icon" />
          </span>
        </div>
        {/* Banner */}
        <div className="banner absolute left-0 bottom-[57px] w-full h-[144px] bg-[#FDBC45]" />
        {/* App Mobile screens */}
        <div className="w-full flex justify-center gap-[40px]">
          <img
            className="screen1 hidden xl:block absolute left-[140px] bottom-[-240px] w-[256px] h-[590px]"
            src={screen1}
            alt="mobile screen"
          />
          <img
            className="screen2 absolute bottom-[-230px] vsm:bottom-[-298px] w-[90%] vsm:w-[360px] h-fit vsm:h-[715px]"
            src={screen2}
            alt="mobile screen"
          />
          <img
            className="screen3 hidden xl:block absolute right-[140px] bottom-[-270px] w-[256px] h-[635px]"
            src={screen3}
            alt="mobile screen"
          />
        </div>
        {/* Slider */}
        <div className="absolute left-0 bottom-0 h-[57px] w-full bg-[#333333] flex items-center">
          <div className="w-full slider flex items-center gap-[18px] pl-[18px]">
            <div className="flex items-center gap-[18px]">
              <p>TRANSPARENT</p>
              <span />
              <p>UNIQUE</p>
              <span />
              <p>FRIENDLY</p>
              <span />
              <p>TRUSTWORTHY</p>
              <span />
              <p>DECENTRALIZED</p>
              <span />
              <p>SECURE</p>
              <span />
              <p>FAST</p>
              <span />
              <p>OPEN-SOURCE</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <span />
              <p>TRANSPARENT</p>
              <span />
              <p>UNIQUE</p>
              <span />
              <p>FRIENDLY</p>
              <span />
              <p>TRUSTWORTHY</p>
              <span />
              <p>DECENTRALIZED</p>
              <span />
              <p>SECURE</p>
              <span />
              <p>FAST</p>
              <span />
              <p>OPEN-SOURCE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 pt-[40px] md:pt-[80px] w-full h-full flex flex-col items-center">
        <h1 className="main_text text-center text-[55px] vsm:text-[62px] md:text-[72px] font-[500] leading-[1.1] vsm:leading-[1.2] md:leading-[80.64px]">
          Safeguard Your Digital <br className="hidden sm:inline" /> Wealth with{" "}
          <span className="text-[purple]">Trojan</span>
        </h1>
        <p className="p_text my-[20px] text-center text-[#4B4B4B]">
          Manage your cryptocurrencies securely and effortlessly with our
          intuitive <br className="hidden sm:inline" /> cryptowallet app. Take
          control of your digital assets wherever you go.
        </p>
        <div className="hero_btn_cont flex items-center gap-[30px]">
          <Link
            to="download"
            smooth={true}
            duration={1000}
            className="cursor-pointer px-[14px] py-[10px] rounded-[10px] bg-black text-white"
          >
            Get Wallet
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={1000}
            className="cursor-pointer px-[14px] py-[10px] rounded-[10px] text-[#0F0F0F] border-[1px] border-[#E7E7E7] hover:bg-[#FAFAFA] duration-300"
          >
            Key Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
