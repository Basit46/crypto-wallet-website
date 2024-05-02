import React from "react";

const Download = () => {
  return (
    <section
      id="download"
      className="relative mt-[150px] px-[112px] pt-[80px] pb-[120px] min-h-[200px] w-full rounded-[20px] bg-[#FAFAFA] border-[1px] border-[#F3F3F3] overflow-hidden"
    >
      <h1 className="text-[52px] font-[500] leading-[58.2px]">
        Get the Trojan App and <br /> Dive Into Crypto
      </h1>
      <div className="mt-[50px] w-full flex justify-between">
        <div className="w-[30%] h-[219px] p-[32px]  border-[1px] border-[#F3F3F3] bg-white rounded-[24px] flex flex-col justify-between">
          <img
            className="w-[48px]"
            src="https://framerusercontent.com/images/ShBuiLqeIyWr9tFDtx24p4roGKE.svg"
            alt="store logo"
          />
          <h1 className="text-[20px] font-[500]">Download for IOS</h1>
          <p className="text-[#4B4B4B]">
            Download the Trojan mobile app from the App Store
          </p>
        </div>
        <div className="w-[30%] h-[219px] p-[32px]  border-[1px] border-[#F3F3F3] bg-white rounded-[24px] flex flex-col justify-between">
          <img
            className="w-[48px]"
            src="https://framerusercontent.com/images/FrxZyy6kfKwLeUdY1uobOZ9OEk.svg"
            alt="store logo"
          />
          <h1 className="text-[20px] font-[500]">Download for Android</h1>
          <p className="text-[#4B4B4B]">
            Download the Trojan mobile app from the Google play
          </p>
        </div>
        <div className="w-[30%] h-[219px] p-[32px]  border-[1px] border-[#F3F3F3] bg-white rounded-[24px] flex flex-col justify-between">
          <img
            className="w-[48px]"
            src="https://framerusercontent.com/images/X007m2fizmS2iG1h23OpgO2GE.svg"
            alt="store logo"
          />
          <h1 className="text-[20px] font-[500]">Download for Chrome</h1>
          <p className="text-[#4B4B4B]">
            Download the Trojan mobile app from the Chrome Web Store
          </p>
        </div>
      </div>

      <div className="relative mt-[30px] bg-[#77E3AF] h-[408px] overflow-hidden w-full flex flex-col justify-between rounded-[24px] py-[40px] pl-[40px]">
        <h1 className="text-[40px] font-[500] leading-[44.8px]">
          Take Your Crypto <br /> Assets Anywhere!
        </h1>
        <div>
          <p className="mb-[30px]">
            Unlock the power of crypto on the go with the Trojan <br /> app.
            Seamlessly manage, trade, and track your digital <br /> assets from
            the palm of your hand, wherever you are. <br /> Download now and
            take control of your crypto.
          </p>
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
        </div>

        <img
          className="absolute right-[-100px] top-[50%] translate-y-[-50%]"
          src="https://framerusercontent.com/images/IK6QfgfmlMk4twRecemfZGPn4.svg"
          alt="bg"
        />
        <img
          className="absolute right-[120px] w-[248px] h-[492px]"
          src="https://framerusercontent.com/images/6jMT6Tgpe3S8Ishzeh2ryLD7rw.png"
          alt="bg"
        />
      </div>

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
    </section>
  );
};

export default Download;
