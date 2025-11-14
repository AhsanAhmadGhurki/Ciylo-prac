import React from "react";
import { Button, Flex } from "antd";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center m-x mt-4 rounded-custom p-6 border-2 border-white/25 bg-white/20 backdrop-blur-[44px] shadow-[0_0_116px_0_rgba(0,0,0,0.1)]">
          <div className="logo w-auto h-[45px] flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" flex items-center gap-4 text-black">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <Button
              type="primary"
              size="large"
              className="button-custom !px-4 !py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
