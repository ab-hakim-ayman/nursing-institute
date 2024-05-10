import React from "react";
import Image from "next/image";

const ContactCard = ({ icon, title, text }) => {
  return (
    <>
      <div className="text-center pb-7">
        <div className="flex items-center justify-center mb-2">
          <Image src={icon} alt="Alternative text" width={45} height={45} />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg">{text}</p>
      </div>
    </>
  );
};

export default ContactCard;
