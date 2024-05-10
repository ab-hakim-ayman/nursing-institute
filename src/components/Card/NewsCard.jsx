import React from "react";
import Image from "next/image";
import clock from "../../../assets/clock.png";
import eid from "../../../assets/eidul-azha.png";

const NewsCard = ({
  date,
  month,
  title,
  schedule,
  reporter,
  description,
  image,
}) => {
  return (
    <>
      <div className="flex  md:items-center flex-col md:flex-row  md:gap-10 gap-5 col-span-4 lg:col-span-3">
        <div>
          <h2 className="text-[40px] font-[600] text-[#FFBF64]">{date}</h2>
          <p className="text-[#999] text-[18px]">{month}</p>
        </div>
        <div>
          <h3 className="text-24px font-[600] xl:mb-3 mb-1 ">{title}</h3>
          <div className="flex items-center flex-wrap gap-5 xl:mb-3 mb-1 justify-between">
            <div className="flex items-center gap-3 ">
              <Image
                src={clock}
                alt="Alternative text"
                width={15}
                height={15}
              />
              <span className="text-[13px]">{schedule}</span>
            </div>
            <div>
              <h3 className="text-black text-[18px] pr-20">
                Reported by {reporter}
              </h3>
            </div>
          </div>
          <p className="text-[#999] text-[16px]">{description}</p>
        </div>
      </div>
      <div className=" col-span-4 lg:col-span-1 ">
        <Image
          style={{ objectFit: "contain" }}
          width={1000}
          height={1000}
          alt="Alternative text"
          src={image}
        />
      </div>
    </>
  );
};

export default NewsCard;
