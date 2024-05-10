"use client";
import Image from "next/image";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const StatisticCard = ({ img, title, start, end }) => {
  const [counterStage, setCounterStage] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStage(true)}
        onExit={() => setCounterStage(false)}
      >
        <div className="flex flex-col items-center justify-center text-center  text-white">
          <div className="border-2 border-stone-500 rounded-full p-5">
            <Image src={img} alt="Alternative text" width={50} height={50} />
          </div>
          <div>
            <h2 className="text-[32px] font-[400] ">
              {counterStage && <CountUp duration={2} start={start} end={end} />}{" "}
              +
            </h2>
            <p className="text-[18px] ">{title}</p>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default StatisticCard;
