import React from "react";
import NoticeCard from "../Card/NoticeCard";
import image from "../../../assets/galary-4.png";

const Notice = () => {
  return (
    <>
      <div>
        <NoticeCard
          image={image}
          title="This is a notice title for summary of article or circulation. It's very important thing for notice.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="#"
          btn="More details..."
        />
        <NoticeCard
          image={image}
          title="This is a notice title for summary of article or circulation. It's very important thing for notice.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="#"
          btn="More details..."
        />
        <NoticeCard
          image={image}
          title="This is a notice title for summary of article or circulation. It's very important thing for notice.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="#"
          btn="More details..."
        />
        <NoticeCard
          image={image}
          title="This is a notice title for summary of article or circulation. It's very important thing for notice.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="#"
          btn="More details..."
        />
        <NoticeCard
          image={image}
          title="This is a notice title for summary of article or circulation. It's very important thing for notice.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          link="#"
          btn="More details..."
        />
      </div>
    </>
  );
};

export default Notice;
