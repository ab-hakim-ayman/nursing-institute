import React from "react";
import Image from "next/image";

const NoticeCard = ({ image, title, link, btn }) => {
  return (
    <>
      <div className="flex py-2">
        <div className="w-2/12">
          <Image
            src={image}
            alt="Notice image"
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="w-10/12">
          <p className="text-md pl-3">
            {title}
            <span className="pl-2 text-lime-400">
              <a href={link}>{btn}</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NoticeCard;
