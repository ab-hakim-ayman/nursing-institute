import React from "react";
import EventCard from "../Card/EventCard";
import Adha from "../../../assets/eidul-azha.png";

const UpcomingEvents = () => {
  return (
    <>
      <div className="container pt-10">
        <div className="grid lg:grid-cols-4 items-center  gap-5  mb-8">
          <EventCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            schedule="5:00 - 9:00"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <EventCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            schedule="5:00 - 9:00"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <EventCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            schedule="5:00 - 9:00"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <EventCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            schedule="5:00 - 9:00"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
          <EventCard
            date="24"
            month="April"
            title="Eid-Ul Adha"
            schedule="5:00 - 9:00"
            description="Time to register for First Semester is now! complete online registration for new and returning students. Our office is open to assist you with the admission process."
            image={Adha}
          />
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
