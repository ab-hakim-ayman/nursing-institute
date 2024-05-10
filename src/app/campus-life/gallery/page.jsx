import React from "react";
import PhotoGallery from "@/components/Gallery/PhotoGallery";
import VideoGallery from "@/components/Gallery/VideoGallary";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Banner title="Campus Gallery" />
      <PhotoGallery />
      <VideoGallery />
    </>
  );
};

export default page;
