import React from "react";
import InstituteArticle from "../Article/InstituteArticle";
import Notice from "../Notice/Notice";
import { Institute } from "../../../data";

const InstituteContent = () => {
  return (
    <>
      <div className="container grid max-lg:grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
        <div className="max-h-full">
          <InstituteArticle
            institute={Institute}
            link="#"
            btn="More details..."
          />
        </div>
        <div className="max-h-full">
          <h1 className="text-4xl text-black font-bold pb-3">
            Academic Notice
          </h1>
          <Notice />
        </div>
      </div>
    </>
  );
};

export default InstituteContent;
