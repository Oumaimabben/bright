import React from "react";
import Button from "../Button";
import Summary from "../Quiz/Summary";
import Rating from "../Rating";

const Course = () => {
  return (
    <div className="flex justify-between">
    <div className="w-[70%] bg-blur h-[445px] ">
      <div className="w-[100%] relative h-[550px]   z-[-1]">
        <video >
          <source src="video-course.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-20 pt-20 pl-10  w-[65%]  ">
        <h2 className="font-montserrat text-[40px] font-bold text-white  w-[600px]">
          Introduction to web development 101
        </h2>
        <p className="font-montserrat text-[20px] font-medium text-white  w-[500px] my-4">
          Start your journey with web development 101 and dive into its
          fundamentals, rules, and more with Jane Doe.
        </p>
        <Rating rate={5}/>
        <div className="flex items-center  justify-between mt-10">
          <Button name={"Enroll Now"} color={"purp"} />
          <div className="flex items-center  w-[200px] gap-2">
            <img src="add-circle.svg" ></img>
            <p className="text-white font-montserrat text-[18px] font-medium ">Add to wishlist</p>
          </div>
          <p className="text-white font-montserrat text-[18px] font-bold ">Watch introduction</p>
        </div>
      </div>
    </div>
    <Summary/>
    </div>
  );
};

export default Course;
