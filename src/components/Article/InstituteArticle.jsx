import React from "react";

const InstituteArticle = ({ institute, link, btn }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-4xl text-black font-bold pb-3">
          {institute.title}
        </h1>
        <p className="text-md">
          {institute.description}
          <button className="text-center text-lime-400 pl-2">
            <a href={link}>{btn}</a>
          </button>
        </p>
      </div>
    </>
  );
};

export default InstituteArticle;
