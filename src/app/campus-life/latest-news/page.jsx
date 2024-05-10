import React from "react";
import Banner from "@/components/Banner/Banner";
import LatestNews from "@/components/News/LatestNews";

const page = () => {
  return (
    <>
      <Banner title="Our Latest News" />
      <LatestNews />
    </>
  );
};

export default page;
