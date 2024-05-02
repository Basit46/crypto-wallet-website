import React from "react";

const Feature = ({ feature, i }) => {
  return (
    <div
      className={`${feature.spanTwo && "grid-span-two"} ${
        i == 2 && ""
      } relative h-fit sm:h-[492.45px] p-[15px] sm:p-[32px] bg-[#FAFAFA] border-[1px] border-[#F3F3F3] rounded-[24px] overflow-hidden`}
    >
      {feature.isNew && (
        <div className="mb-[10px] w-fit bg-[#FFC5F6] py-[6px] px-[12px] rounded-[100px] text-[12px] font-[500]">
          NEW
        </div>
      )}
      <h1
        className={`${
          feature.spanTwo && "w-full sm:w-[50%]"
        } text-[20px] vsm:text-[23px] sm:text-[28px] font-[500] leading-[31.36px]`}
      >
        {feature.title}
      </h1>
      {!feature.spanTwo && (
        <img
          className="mx-auto sm:mx-0 h-[212px] my-[20px]"
          src={feature.img}
          alt="feature illustration"
        />
      )}
      <p
        className={`${
          feature.spanTwo && "mt-[15px] w-[70%]"
        } leading-[22.4px] text-[#4B4B4B]`}
      >
        {feature.body}
      </p>
      {feature.spanTwo && (
        <img
          className="hidden sm:block absolute bottom-[-57px] left-[60px] w-[65%]"
          src={feature.img}
          alt="feature illustration"
        />
      )}
    </div>
  );
};

export default Feature;
