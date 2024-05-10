import React from "react";
import Image from "next/image";
import phone from "../../../assets/phone-call.png";
import email from "../../../assets/email.png";
import location from "../../../assets/location.png";

const Contact = () => {
  return (
    <div>
      <h2 className="text-[18px] font-[600] mb-3 ">Contact info</h2>
      <div className="flex items-center gap-5 mb-5">
        <Image src={phone} alt="Alternative text" width={15} height={15} />
        <div>
          <p className="text-[16px] text-[#BFB7B9]">+880 1820 888825 </p>
        </div>
      </div>
      <div className="flex items-center gap-5 mb-5">
        <Image src={email} alt="Alternative text" width={15} height={15} />
        <div>
          <p className="text-[16px] text-[#BFB7B9]">info.saancctg@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-5 mb-5">
        <Image src={location} alt="Alternative text" width={15} height={15} />
        <div>
          <p className="text-[16px] text-[#BFB7B9]">
            147/11 East Nasirabad, Khulshi Bayzid Bostami Road, Chattogram
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
