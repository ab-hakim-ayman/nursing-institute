import React from "react";
import InstituteArticle from "@/components/Article/InstituteArticle";
import { Institute } from "../../../../data";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Banner title="A Brief History Of South Asian Applied Nursing College, Chattogram" />
      <div className="container py-10">
        <InstituteArticle institute={Institute} />
      </div>
    </>
  );
};

export default page;
