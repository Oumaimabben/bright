import React from "react";
import Titles from "../Titles";
import Button from "../Button";
import MentorComponent from "./MentorCompo";
const Mentors = () => {
  return (
    <section className="pl-20 py-14 ">
     
      <Titles title={"Our mentors"} />
      <div className="flex gap-24 ">
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
      </div>
      <div className="flex items-center justify-center ">
        
        <Button name={"In-Person Course"} color={"purp"} />
      </div>
    </section>
  );
};

export default Mentors;
