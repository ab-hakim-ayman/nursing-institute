import React from "react";
import MessageCard from "@/components/Card/MessageCard";
import Banner from "@/components/Banner/Banner";
import { PrincipalMsg } from "../../../../data";

const Msg = () => {
  return (
    <div>
      <Banner title="Inspirational Message From Our Respected Principal" />
      <MessageCard content={PrincipalMsg} />
    </div>
  );
};

export default Msg;
