import React from "react";
import { featuresList } from "../data/features";
import CustomBanner from "./CustomBanner";
import Feature from "./Feature";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full mt-[100px] md:mt-[200px] px-[0px] xl:px-[112px]"
    >
      <h1 className="text-[30px] vsm:text-[40px] md:text-[52px] font-[500] leading-[1.2] md:leading-[58.24px]">
        Powerful Features for <br className="hidden md:inline" /> Managing Your
        Crypto
      </h1>

      <div className="w-full mt-[30px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[24px]">
        {featuresList.map((feature, i) => (
          <Feature key={i} feature={feature} i={i} />
        ))}
      </div>

      <CustomBanner
        bg="#FFC5F6"
        title1="Streamline Your"
        title2="Crypto Experience"
        text="Experience seamless cryptocurrency management <br /> with our
        user-friendly app. Effortlessly track, trade, <br /> and secure your
        digital assets, all in one place."
        button="Supported Chains"
        img="https://framerusercontent.com/images/lOXf7O0V57KOYVY785AjrDqfHE.svg"
      />
    </section>
  );
};

export default Features;
