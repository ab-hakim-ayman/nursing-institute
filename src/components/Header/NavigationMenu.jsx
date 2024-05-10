import React from "react";
import phoneIcon from "../../../assets/phone_icon.svg";
import mailIcon from "../../../assets/Mail Icon.svg";
import Image from "next/image";

const NavigationMenu = () => {
  return (
    <div className="hidden lg:flex py-1">
      <div className="container flex flex-wrap justify-between gap-5">
        <div className="flex items-center gap-10">
          <div className="flex flex-wrap items-center gap-3">
            <Image alt="" src={phoneIcon} width={20} height={20} />
            <p>+880-1820-888825</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Image alt="" src={mailIcon} width={20} height={20} />
            <p>contact@saancbd.com</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-5">
          <p>
            <a href="/academic/calender">Calendar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
