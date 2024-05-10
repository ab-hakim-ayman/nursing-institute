import React from "react";
import Contacts from "@/components/Contacts/Contacts";
import ContactForm from "@/components/Forms/ContactForm";
import Banner from "@/components/Banner/Banner";

const page = () => {
  return (
    <>
      <Banner title="Get In Touch With Us" />
      <div className="container grid grid-col-1 lg:grid-cols-2 lg:gap-10 py-10">
        <Contacts />
        <ContactForm />
      </div>
    </>
  );
};

export default page;
