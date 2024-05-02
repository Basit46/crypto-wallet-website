import React from "react";
import { securityList } from "../data/Security";
import CustomBanner from "./CustomBanner";
import SecurityBox from "./SecurityBox";

const Security = () => {
  return (
    <section
      id="security"
      className="w-full mt-[100px] md:mt-[150px] px-[0px] xl:px-[112px]"
    >
      <h1 className="text-[40px] md:text-[52px] font-[500] leading-[1.2] md:leading-[58.24px]">
        Bulletproofing Your <br /> Crypto Investments
      </h1>

      <div className="w-full mt-[30px] grid grid-cols-1 xmd:grid-cols-3 gap-[24px]">
        {securityList.map((security, i) => (
          <SecurityBox key={i} security={security} />
        ))}
      </div>

      <CustomBanner
        bg="#FDBC45"
        title1="Trojan's Unrivaled"
        title2="Security Features"
        text=" Protect your investments with Trojan's security <br /> measures.
        From robust encryption protocols to multi- <br /> factor
        authentication and continuous monitoring, our <br /> platform
        ensures the safety for your digital assets."
        button="Download Wallet"
        img="https://framerusercontent.com/images/8eBh1l9vLYc5zAmnp2N2rBzrW0.svg"
      />
    </section>
  );
};

export default Security;
