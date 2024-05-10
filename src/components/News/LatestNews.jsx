import React from "react";
import NewsCard from "../Card/NewsCard";
import Adha from "../../../assets/eidul-azha.png";

const LatestNews = () => {
  return (
    <>
      <div className="container mt-10">
        <div className="grid lg:grid-cols-4 items-center  gap-5  mb-8">
          <NewsCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            reporter="Mr. Xxxxxx"
            schedule="9:45 PM"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <NewsCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            reporter="Mr. Xxxxxx"
            schedule="9:45 PM"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <NewsCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            reporter="Mr. Xxxxxx"
            schedule="9:45 PM"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <NewsCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            reporter="Mr. Xxxxxx"
            schedule="9:45 PM"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <NewsCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            reporter="Mr. Xxxxxx"
            schedule="9:45 PM"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
