import React from "react";
import About from "./About";
import Contact from "./Contact";
import SocialAccount from "./SocialAccount";
import ImportantLinks from "./ImportantLinks";
import OtherPages from "./OtherPages";
import Courtesy from "./Courtesy";

const Footer = () => {
  return (
    <div className="container bg-primary">
      <div className="text-white py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <ImportantLinks />
        </div>
        <div>
          <SocialAccount />
          <OtherPages />
        </div>
      </div>
      <Courtesy />
    </div>
  );
};

export default Footer;
