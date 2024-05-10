import Link from "next/link";
import React from "react";

const ImportantLinks = () => {
  return (
    <div className="">
      <h2 className="text-[18px] font-[600] mb-3 ">Important Links</h2>
      <Link href="/">
        <p className="text-[16px] text-[#BFB7B9]">Support</p>
      </Link>
      <Link href="/">
        <p className="text-[16px] text-[#BFB7B9]">Privacy Policy</p>
      </Link>
      <Link href="/">
        <p className="text-[16px] text-[#BFB7B9]">Terms & Condition</p>
      </Link>
    </div>
  );
};

export default ImportantLinks;
