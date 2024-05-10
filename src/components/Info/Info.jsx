import React from "react";
import InfoCard from "../Card/InfoCard";

const Info = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl font-bold py-7">Information</h1>
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between">
          <InfoCard
            title="B.Sc in Nursing (basic)"
            link="/courses/bsc-nursing-basic"
            btn="For Details"
          />
          <InfoCard
            title="B.Sc in Nursing (post basic)"
            link="/courses/bsc-nursing-post-basic"
            btn="For Details"
          />
          <InfoCard
            title="M.Sc in Nursing"
            link="/courses/msc-nursing"
            btn="For Details"
          />
          <InfoCard
            title="B.Sc in Nursing & Midwifery"
            link="/courses/bsc-nursing-midwifery"
            btn="For Details"
          />
          <InfoCard
            title="Diploma in Community Paramedic"
            link="/courses/diploma-community-paramedic"
            btn="For Details"
          />
          <InfoCard
            title="Diploma in Midwifery"
            link="/courses/diploma-midwifery"
            btn="For Details"
          />
        </div>
      </div>
    </>
  );
};

export default Info;
