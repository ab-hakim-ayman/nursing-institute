import React from "react";
import MessageCard from "../Card/MessageCard";
import { ChairmanMsg } from "@/data";

const Messages = () => {
  return (
    <>
      <div className="pt-5">
        <MessageCard content={ChairmanMsg} />
        <MessageCard content={ChairmanMsg} />
        <MessageCard content={ChairmanMsg} />
      </div>
    </>
  );
};
export default Messages;
