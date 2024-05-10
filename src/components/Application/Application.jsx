import React from "react";
import ApplyCard from "../Card/ApplyCard";

const Application = () => {
  return (
    <>
      <div className="container my-10">
        <ApplyCard
          title="Online Application"
          text="Time to application for First Semester is now! complete online
            registration for new and returning students. Our office is open to
            assist you with the admission process."
          link="/academic/application"
          btn="Apply Now"
        />
      </div>
    </>
  );
};

export default Application;
