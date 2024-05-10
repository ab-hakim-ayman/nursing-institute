import React from "react";

const Banner = ({ bg, color, title, description, link, btn }) => {
  const backgroundStyle = bg
    ? { backgroundImage: `url(${bg.src})` }
    : { backgroundColor: color || "gray" };

  return (
    <div
      className="bg-cover bg-center h-80 p-10 flex flex-col justify-center"
      style={backgroundStyle}
    >
      <h1 className="text-3xl font-bold text-gray-50 text-center">{title}</h1>
      <p className="text-xl font-bold text-black px-20 py-5 text-center">
        {description}
      </p>
      <button className="px-20">
        <a href={link}>{btn}</a>
      </button>
    </div>
  );
};

export default Banner;
