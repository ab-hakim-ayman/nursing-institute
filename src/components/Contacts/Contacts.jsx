import React from "react";
import ContactCard from "../Card/ContactCard";
import phone from "../../../assets/phone-call.png";
import email from "../../../assets/email.png";
import location from "../../../assets/location.png";

const Contacts = () => {
  return (
    <>
      <div>
        <ContactCard
          icon={phone}
          title="Contact Number"
          text="+880 1820 888825"
        />
        <ContactCard
          icon={email}
          title="Email Address"
          text="info.saancctg@gmail.com"
        />
        <ContactCard
          icon={location}
          title="College Address"
          text="147/11 East Nasirabad, Khulshi, Bayzid Bostami Road, Chattogram"
        />
      </div>
    </>
  );
};

export default Contacts;
