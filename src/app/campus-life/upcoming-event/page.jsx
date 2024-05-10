import React from "react";
import UpcomingEvents from "@/components/Events/UpComingEvents";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Banner title="Our Upcoming Events" />
      <UpcomingEvents />
    </>
  );
};

export default page;
