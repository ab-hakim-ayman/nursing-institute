import React from "react";
import Image from "next/image";

const MessageCard = ({ content }) => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="relative aspect-w-16 aspect-h-9 mt-14">
            <Image
              src={content.img}
              alt="Alternative text"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold">{content.name}</h2>
            <p>{content.designation}</p>
            <p>{content.institute}</p>
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-gray-400 font-semibold mb-2">{content.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
