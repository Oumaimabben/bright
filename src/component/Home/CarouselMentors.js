import React from "react";

import MentorComponent from "./MentorCompo";
const CarouselMentors = () => {
  return (
    <div className="flex ">
      <MentorComponent name={"Jane Doe"} job={"Web dev"} />
      <MentorComponent name={"Magnus Glare"} job={"History"} />
      <MentorComponent name={"Jane Doe"} job={"Web dev"} />
      <MentorComponent name={"Magnus Glare"} job={"History"} />
      <MentorComponent name={"Jane Doe"} job={"Web dev"} />
      <MentorComponent name={"Magnus Glare"} job={"History"} />
      
    </div>
  );
};

export default CarouselMentors;
