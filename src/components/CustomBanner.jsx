import React from "react";

const CustomBanner = ({
  bg,
  title1,
  title2,
  text,
  button,
  img,
  isDownload,
}) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="relative mt-[30px] h-[600px] lg:h-[408px] overflow-hidden w-full flex flex-col lg:justify-between rounded-[24px] py-[40px] pl-[40px]"
    >
      <h1 className="z-[2] text-[35px] xmd:text-[40px] font-[500] leading-[1.2] xmd:leading-[44.8px]">
        {title1} <br /> {title2}
      </h1>
      <div>
        <p
          className={`${
            isDownload && "download-banner"
          } mt-[10px] lg:mt-0 mb-[30px]`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {isDownload ? (
          <div className="flex gap-[10px]">
            <button>
              <img
                src="https://framerusercontent.com/images/daGlY7MhNnhjSLU3YjhdXlzBkOE.svg"
                alt="store link"
              />
            </button>
            <button>
              <img
                src="https://framerusercontent.com/images/HIwWMWocSGC4QVb8P4REjDpoq8.svg"
                alt="store link"
              />
            </button>
          </div>
        ) : (
          <button className="px-[14px] py-[10px] rounded-[10px] bg-black text-white">
            {button}
          </button>
        )}
      </div>

      <img
        className="absolute right-[-100px] bottom-0 lg:top-[50%] lg:translate-y-[-50%]"
        src="https://framerusercontent.com/images/IK6QfgfmlMk4twRecemfZGPn4.svg"
        alt="bg"
      />
      <img
        className={`${
          isDownload
            ? "right-[120px] w-[248px] h-[492px] bottom-[-300px] xmd:bottom-[-200px]"
            : "bottom-0 right-[75px]"
        } absolute`}
        src={img}
        alt="bg"
      />
    </div>
  );
};

export default CustomBanner;
