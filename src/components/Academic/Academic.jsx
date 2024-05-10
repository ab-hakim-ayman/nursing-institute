import React from "react";
import MorningShift from "./Shifts/MorningShift";
import EveningShift from "./Shifts/EveningShift";
import UpComingEvents from "./UpComingEvents/UpComingEvents";
import Calender from "./Calender/Calender";

const Academic = () => {
  return (
    <div className=" ">
      <div className="my-16">
        <MorningShift />
        <EveningShift />
      </div>
      <Calender />
      <UpComingEvents />
    </div>
  );
};

export default Academic;
