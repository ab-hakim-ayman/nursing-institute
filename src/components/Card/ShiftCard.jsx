import React from "react";

const ShiftCard = ({ bg, color, title, link, btn }) => {
  const backgroundStyle = bg
    ? { backgroundImage: `url(${bg.src})` }
    : { backgroundColor: color || "gray" };

  return (
    <>
      <div
        className="flex flex-row items-center justify-center bg-cover bg-center h-72 rounded-md"
        style={backgroundStyle}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-7">{title}</h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse autem voluptates sunt magni deserunt vitae harum, amet error
            culpa quo qui, aperiam enim atque est ut reprehenderit dicta,
            necessitatibus nemo ab. Eum quia ducimus, corporis fugit aspernatur
            placeat eveniet.
          </p>
          <button className="border rounded-md border-gray-400 p-2 hover:border-lime-400">
            <a href={link}>{btn}</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShiftCard;
