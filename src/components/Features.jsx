import React from "react";
import { featuresList } from "../data/features";
import Feature from "./Feature";

const Features = () => {
  return (
    <section id="features" className="w-full mt-[200px] px-[112px]">
      <h1 className="text-[52px] font-[500] leading-[58.24px]">
        Powerful Features for <br /> Managing Your Crypto
      </h1>

      <div className="w-full mt-[30px] grid grid-cols-3 gap-[24px]">
        {featuresList.map((feature, i) => (
          <Feature key={i} feature={feature} />
        ))}
      </div>

      <div className="relative mt-[30px] bg-[#FFC5F6] h-[408px] overflow-hidden w-full flex flex-col justify-between rounded-[24px] py-[40px] pl-[40px]">
        <h1 className="text-[40px] font-[500] leading-[44.8px]">
          Streamline Your <br /> Crypto Experience
        </h1>
        <div>
          <p className="mb-[30px]">
            Experience seamless cryptocurrency management <br /> with our
            user-friendly app. Effortlessly track, trade, <br /> and secure your
            digital assets, all in one place.
          </p>
          <button className="px-[14px] py-[10px] rounded-[10px] bg-black text-white">
            Supported Chains
          </button>
        </div>

        <img
          className="absolute right-[-100px] top-[50%] translate-y-[-50%]"
          src="https://framerusercontent.com/images/IK6QfgfmlMk4twRecemfZGPn4.svg"
          alt="bg"
        />
        <img
          className="absolute right-[75px]"
          src="https://framerusercontent.com/images/lOXf7O0V57KOYVY785AjrDqfHE.svg"
          alt="bg"
        />
      </div>
    </section>
  );
};

export default Features;
