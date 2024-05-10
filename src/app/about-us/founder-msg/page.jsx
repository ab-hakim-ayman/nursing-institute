import React from "react";
import MessageCard from "@/components/Card/MessageCard";
import Banner from "@/components/Banner/Banner";
import { FounderMsg } from "../../../../data";

const Msg = () => {
  return (
    <div>
      <Banner title="Inspirational Message From Our Respected Founder" />
      <MessageCard content={FounderMsg} />
    </div>
  );
};

export default Msg;
