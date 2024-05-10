import React from "react";
import MessageCard from "@/components/Card/MessageCard";
import Banner from "@/components/Banner/Banner";
import { ChairmanMsg } from "../../../../data";

const Msg = () => {
  return (
    <div>
      <Banner title="Inspirational Message From Our Respected Chairman" />
      <MessageCard content={ChairmanMsg} />
    </div>
  );
};

export default Msg;
