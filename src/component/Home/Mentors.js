import React from "react";
import Titles from "../Titles";
import Button from "../Button";
import { useEffect , useRef } from "react";
import CarouselMentors from "./CarouselMentors";
const Mentors = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosRef.current.querySelector(".logos-slide");

    const copy = logosSlide.cloneNode(true);

    logosRef.current.appendChild(copy);
  }, []);
  return (
    <section className=" py-14 ">
     <div className="pl-20 max-lg:p-4">
     <Titles title={"Our mentors"} />
     </div>
      
      {/* <div className="flex gap-24 ">
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
          <MentorComponent name={"Jane Doe"} job={"Web dev"}/>
      </div> */}
       <div
      className="overflow-hidden py-[20px] bg-white whitespace-nowrap"
      ref={logosRef}
    >
      <div className="logos-slide inline-block animate-slide-infinite">
       <CarouselMentors/>
      </div>
    </div>
      

      <div className="flex items-center justify-center ">
        
        <Button name={"In-Person Course"} color={"purp"} colorr={"purpp"} />
      </div>
    </section>
  );
};

export default Mentors;
