import React from "react";

const SecurityBox = ({ security }) => {
  return (
    <div className="h-fit xmd:h-[477px] p-[15px] md:p-[32px] bg-[#FAFAFA] border-[1px] border-[#F3F3F3] rounded-[24px] overflow-hidden">
      <h1 className="text-[28px] font-[500] leading-[31.36px]">
        {security.title}
      </h1>
      <p className="mt-[15px] mb-[20px] text-[#4B4B4B] leading-[22.4px]">
        {security.body}
      </p>
      <img
        className="mx-auto xmd:mx-0 h-[212px] w-fit"
        src={security.img}
        alt="feature illustration"
      />
    </div>
  );
};

export default SecurityBox;
