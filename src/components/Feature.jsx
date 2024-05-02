import React from "react";

const Feature = ({ feature }) => {
  return (
    <div
      className={`${
        feature.spanTwo && "grid-span-two"
      } relative h-[492.45px] p-[32px] bg-[#FAFAFA] border-[1px] border-[#F3F3F3] rounded-[24px] overflow-hidden`}
    >
      {feature.isNew && (
        <div className="mb-[10px] w-fit bg-[#FFC5F6] py-[6px] px-[12px] rounded-[100px] text-[12px] font-[500]">
          NEW
        </div>
      )}
      <h1
        className={`${
          feature.spanTwo && "w-[50%]"
        } text-[28px] font-[500] leading-[31.36px]`}
      >
        {feature.title}
      </h1>
      {!feature.spanTwo && (
        <img
          className="h-[212px] my-[20px]"
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
          className="absolute bottom-[-57px] left-[60px] w-[85%]"
          src={feature.img}
          alt="feature illustration"
        />
      )}
    </div>
  );
};

export default Feature;
