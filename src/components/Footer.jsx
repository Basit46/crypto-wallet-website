import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-[150px] mb-[48px] bg-[#272727] text-white rounded-[24px] pt-[64px] px-[48px]">
      <div className="links flex justify-between">
        <div>
          <h1>MENU</h1>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About Wallet</li>
            <li>Supported Coins</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h1>DOWNLOAD</h1>
          <ul>
            <li>IOS App</li>
            <li>Android App</li>
            <li>Chrom Extension</li>
          </ul>
        </div>
        <div>
          <h1>RESOURCES</h1>
          <ul>
            <li>Whitepaper</li>
            <li>Developer Portal</li>
            <li>Trojan Fundation</li>
          </ul>
        </div>
        <div>
          <h1>SUPPORT</h1>
          <ul>
            <li>General Support</li>
            <li>Discord Community</li>
            <li>Telegram Chat</li>
          </ul>
        </div>
      </div>

      <div className="mt-[40px] border-t-[0.5px] border-[#878787] py-[20px] flex justify-center">
        <p className="text-[#878787] text-[14px] font-[500]">
          © {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
