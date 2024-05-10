"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/institute.jpg";
import Header from "./Header";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-blue-500 py-1 sticky top-0 z-50">
      <div className="container flex items-center gap-5 justify-between">
        <Image
          className="rounded-full"
          alt="saanc logo"
          src={logo}
          width={50}
          height={50}
        />
        <div>
          <div className="hidden lg:flex">
            <Header />
          </div>
          <div className="lg:hidden flex justify-end px-5">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoClose className="text-white text-3xl" />
              ) : (
                <IoMdMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
          <div
            className={`lg:hidden w-full h-full text-start top-[58px] absolute transition-all duration-500 ease-in-out ${
              isOpen ? "left-0" : "-left-[1280px]"
            }`}
          >
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
