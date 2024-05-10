import React from "react";

const InfoCard = ({ bg, color, title, link, btn }) => {
  const backgroundStyle = bg
    ? { backgroundImage: `url(${bg.src})` } // If bg prop is provided, set background image
    : { backgroundColor: color || "gray" }; // Otherwise, set background color to gray

  return (
    <>
      <div
        className="flex flex-row items-center justify-center bg-cover bg-center h-52 rounded-md"
        style={backgroundStyle} // Apply the background style
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-7">{title}</h1>
          <button className="border rounded-md border-gray-400 p-2 hover:border-lime-400">
            <a href={link}>{btn}</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
