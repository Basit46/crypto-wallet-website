import React from "react";
import { FiLock, FiSmartphone } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className="w-full mt-[150px] px-[112px]">
      <div className="w-full flex items-center justify-between">
        <div className="banner relative w-[411px] h-[541px] bg-[#FDBC45] rounded-[24px] flex justify-center overflow-hidden">
          <img
            className="absolute bottom-[-230px] w-[307px] h-[708px]"
            src="https://framerusercontent.com/images/azK7SxLvXhfnWccuG0zMSG6xEqI.png"
            alt="screen"
          />
        </div>
        <div className="w-[45%]">
          <div className="w-fit px-[12px] py-[6px] rounded-[100px] border-[1px] border-black text-[12px]">
            ABOUT APP
          </div>
          <h1 className="mt-[10px] mb-[20px] text-[52px] font-[500] leading-[58.24px]">
            Discover Trojan Cryptowallet Solution
          </h1>
          <p className="text-[#4B4B4B] mb-[10px]">
            Experience the pinnacle of security and convenience with Trojan's
            Cryptowallet Solution. Our state-of-the-art wallet offers
            unparalleled protection for your digital assets, coupled with
            intuitive features designed to streamline your crypto experience.
          </p>
          <p className="text-[#4B4B4B]">
            With Trojan, you can securely store, manage, and transact with ease,
            empowering you to navigate the world of cryptocurrency with
            confidence and peace of mind.
          </p>
        </div>
      </div>

      <div className="mt-[100px] w-full h-[249px] bg-[#FAFAFA] rounded-[16px] p-[40px] border-[1px] border-[#F3F3F3] flex justify-between">
        <div className="w-[30%]">
          <FiLock className="text-[32px]" />
          <h1 className="my-[20px] mb-[10px] text-[20px] font-[500]">
            Keep Your Crypto Safe
          </h1>
          <p className="text-[#4B4B4B]">
            Rest easy knowing your digital assets are protected by our robust
            security features, keeping hackers at bay.
          </p>
        </div>
        <div className="w-[30%]">
          <IoWalletOutline className="text-[32px]" />
          <h1 className="my-[20px] mb-[10px] text-[20px] font-[500]">
            Manage Everything Easily
          </h1>
          <p className="text-[#4B4B4B]">
            Effortlessly handle your crypto portfolio in one place, making
            transactions simple and intuitive.
          </p>
        </div>
        <div className="w-[30%]">
          <FiSmartphone className="text-[32px]" />
          <h1 className="my-[20px] mb-[10px] text-[20px] font-[500]">
            Access Anywhere
          </h1>
          <p className="text-[#4B4B4B]">
            Stay connected to your crypto world on the go, with seamless syncing
            across all your devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
