import React from "react";
import Titles from "../Titles";
import FeedCard from "./FeedCard";
import { useState } from "react";
const items = [
  {
    image:
      "Ellipse.png",
    name: "Moatez",
    job:
      "UI/UX Designer",
    
    rate: 4.2,
    FeedBack:"Bright is an excellent e-learning platform with well-organized and engaging courses, knowledgeable instructors, and a helpful community. I would highly recommend it to anyone who wants to learn new skills or advance their career."
  },
  {
    image:
      "Ellipse.png",
    name: "Moatez",
    job:
      "Web Dev",
      FeedBack:"Bright is an excellent e-learning platform with well-organized and engaging courses, knowledgeable instructors, and a helpful community. I would highly recommend it to anyone who wants to learn new skills or advance their career.",
    rate: 3.0,
    
  },
  {
    image:
      "Ellipse.png",
    name: "Moatez",
    job:
      "Web Dev",
      FeedBack:"Bright is an excellent e-learning platform with well-organized and engaging courses, knowledgeable instructors, and a helpful community. I would highly recommend it to anyone who wants to learn new skills or advance their career.",
    rate: 3.0,
    
  },
]
const FeedBack = () => {
  
   const scrollLeft = () => {
    //document.getElementById("feed").scrollLeft -= 400;
      const feedElement = document.getElementById("feed");
    const scrollWidth = feedElement.scrollWidth;
    const itemWidth = feedElement.clientWidth;
    const maxScrollLeft = scrollWidth - itemWidth;
    const scrollLeft = feedElement.scrollLeft - itemWidth;
    feedElement.scrollLeft = scrollLeft < 0 ? 0 : scrollLeft;  
    
  };
  const scrollRight = () => {
     //document.getElementById("feed").scrollLeft += 400; 
      const feedElement = document.getElementById("feed");
    const scrollWidth = feedElement.scrollWidth;
    const itemWidth = feedElement.clientWidth;
    const maxScrollLeft = scrollWidth - itemWidth;
    const scrollLeft = feedElement.scrollLeft + itemWidth;
    feedElement.scrollLeft = scrollLeft > maxScrollLeft ? maxScrollLeft : scrollLeft;  
    
  }

  return (
    <div className="my-10  ">
      <div className="pl-20  max-md:p-4">
        <Titles title={"What people say about us"} />
      </div>
      <div className="flex  justify-center items-center mx-auto  p-2 py-14  lg:max-w-[950px] sm:max-w-[600px] max-w-[350px]">
        <button
          onClick={scrollLeft}
          className="lg:p-2  bg-white  lg:py-2 border shadow-purp  flex items-center justify-center   lg:h-9 lg:w-12  h-6 w-8"
        >
          <img src="arrowRight.svg" alt="" className=" lg:h-8 h-3"></img>
        </button>
        {/* <FeedCard /> */}
         <div id="feed" className="flex gap-2 sm:gap-0 lg:gap-2 scroll-smooth overflow-hidden">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <FeedCard
              img={item.image}
              name={item.name}
              rate={item.rate}
              job={item.job}
              feedBack={item.FeedBack}
            />
          </div>
        ))}
        </div> 
        
        
        
        <button
          onClick={scrollRight}
          className="lg:p-2  bg-white  lg:py-2 border shadow-purp flex items-center justify-center  lg:h-9 lg:w-12  h-6 w-8"
        >
          <img
            src="arrowRight.svg"
            alt=""
            className=" lg:h-8 h-3 rotate-180"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
