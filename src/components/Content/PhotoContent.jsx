import React from "react";
import Image from "next/image";

const PhotoContent = ({ photo, alt }) => {
  return (
    <>
      <div className="relative w-full h-72">
        <Image src={photo} alt={alt} layout="fill" objectFit="cover" />
      </div>
    </>
  );
};

export default PhotoContent;
