import React from "react";
import ShiftCard from "../Card/ShiftCard";
import bg from "../../../assets/academic-info.png";

const AcademicShifts = () => {
  return (
    <>
      <div className="container">
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-2 justify-between my-10">
          <ShiftCard title="Morning Shift" link="#" btn="For Details" />
          <ShiftCard title="Evening Shift" link="#" btn="For Details" />
        </div>
      </div>
    </>
  );
};

export default AcademicShifts;
