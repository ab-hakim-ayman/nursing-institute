"use client";
import React from "react";
import StatisticCard from "../Card/StatisticCard";
import student from "../../../assets/graduate.png";
import teacher from "../../../assets/teacher.png";
import success from "../../../assets/promotion.png";
import founded from "../../../assets/pantheon.png";

const Statistics = ({ bg, color }) => {
  const backgroundStyle = bg
    ? { backgroundImage: `url(${bg.src})` }
    : { backgroundColor: color || "gray" };
  return (
    <>
      <div className="">
        <div
          className="lg:h-[225px] flex items-center justify-center"
          style={backgroundStyle}
        >
          <div className="w-full mx-auto grid grid-cols-2 py-2 lg:grid-cols-4 gap-10">
            <StatisticCard img={teacher} title="Teachers" start={0} end={40} />
            <StatisticCard
              img={student}
              title="Students"
              start={0}
              end={2300}
            />
            <StatisticCard img={success} title="Success" start={0} end={1750} />
            <StatisticCard img={founded} title="Founded" start={0} end={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
