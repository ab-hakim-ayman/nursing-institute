import React from "react";

const VideoContent = ({ title, url }) => {
  return (
    <div className="relative overflow-hidden" style={{ paddingBottom: "70%" }}>
      <iframe
        title={title}
        src={url}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContent;
