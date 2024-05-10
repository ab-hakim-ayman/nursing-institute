import React from "react";
import Banner from "@/components/Banner/Banner";
import Notice from "@/components/Notice/Notice";

const page = () => {
  return (
    <>
      <Banner title="Academic Notice" />
      <div className="container my-10">
        <Notice />
      </div>
    </>
  );
};

export default page;
