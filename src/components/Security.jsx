import React from "react";
import { securityList } from "../data/Security";
import SecurityBox from "./SecurityBox";

const Security = () => {
  return (
    <section id="security" className="w-full mt-[150px] px-[112px]">
      <h1 className="text-[52px] font-[500] leading-[58.24px]">
        Bulletproofing Your <br /> Crypto Investments
      </h1>

      <div className="w-full mt-[30px] grid grid-cols-3 gap-[24px]">
        {securityList.map((security, i) => (
          <SecurityBox key={i} security={security} />
        ))}
      </div>

      <div className="relative mt-[30px] bg-[#FDBC45] h-[408px] overflow-hidden w-full flex flex-col justify-between rounded-[24px] py-[40px] pl-[40px]">
        <h1 className="text-[40px] font-[500] leading-[44.8px]">
          Trojan's Unrivaled <br /> Security Features
        </h1>
        <div>
          <p className="mb-[30px]">
            Protect your investments with Trojan's security <br /> measures.
            From robust encryption protocols to multi- <br /> factor
            authentication and continuous monitoring, our <br /> platform
            ensures the safety for your digital assets.
          </p>
          <button className="px-[14px] py-[10px] rounded-[10px] bg-black text-white">
            Download Wallet
          </button>
        </div>

        <img
          className="absolute right-[-100px] top-[50%] translate-y-[-50%]"
          src="https://framerusercontent.com/images/IK6QfgfmlMk4twRecemfZGPn4.svg"
          alt="bg"
        />
        <img
          className="absolute right-[75px]"
          src="https://framerusercontent.com/images/8eBh1l9vLYc5zAmnp2N2rBzrW0.svg"
          alt="bg"
        />
      </div>
    </section>
  );
};

export default Security;
