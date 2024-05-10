import React from "react";
import VideoContent from "../Content/VideoContent";

const VideoGallery = () => {
  return (
    <div className="container py-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
        <VideoContent
          title="This is video title"
          url="https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
        />
      </div>
    </div>
  );
};

export default VideoGallery;
