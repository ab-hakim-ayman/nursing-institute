import React from "react";
import PhotoContent from "../Content/PhotoContent";
import photo from "../../../assets/galary-4.png";

const PhotoGallery = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className="text-3xl font-bold mb-5 text-center">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
          <PhotoContent photo={photo} alt="Alternative text" />
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
