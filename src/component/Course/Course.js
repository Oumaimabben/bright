import React, { useState, useEffect } from "react";
import Button from "../Button";
import Summary from "../Quiz/Summary";
import Rating from "../Rating";
import axios from "axios";

const Course = () => {
  const [isWatch, setIsWatch] = useState(false);
  const [url , setUrl] = useState('')
  const [course , setCourse] = useState('')

  const watch = () => {
    setIsWatch(true);
    setUrl('?autoplay=1')
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/course/64d6587ce9a001cd55a10daf`
        );
      setCourse(response.data)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-between">
      <div className={`w-[70%]  h-[445px] ${!isWatch && "bg-blur"}`}>
        <div className="w-[100%] relative    z-[-1] video-container">
          {/* <video>
            <source
              src="https://www.youtube.com/embed/uuT54JIpJzc"
              alt="course video"
              type="video/mp4"
            />
          </video> */}
          <iframe
            src={`https://www.youtube.com/embed/uuT54JIpJzc${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
            className="w-[100%] h-[445px]"
          />
        </div>
        <div
          className={`absolute top-20 pt-20 pl-10  w-[65%]  ${
            isWatch && "hidden"
          }`}
        >
          <h2 className="font-montserrat text-[40px] font-bold text-white  w-[600px]">
            {/* Introduction to web development 101 */}
            {course.title}
          </h2>
          <div className="flex  items-center justify-between w-32">
            <p className="text-white text-[20px] max-md:text-[20px] font-montserrat font-semibold mr-2">
              5
            </p>
            <Rating rate={5} />
          </div>
          <p className="font-montserrat text-[20px] font-medium text-white  w-[500px] my-4">
            {/* Start your journey with web development 101 and dive into its
            fundamentals, rules, and more with Jane Doe. */}
            {course.description}
          </p>
          <p className="font-custom text-[24px] font-medium text-white ">
            80.000 DT
          </p>

          <div className="flex items-center  justify-between mt-6">
            <Button name={"Enroll Now"} color={"purp"} colorr={"purpp"}/>
            <div className="flex items-center  w-[200px] gap-2">
              <img src="add-circle.svg" alt=""></img>
              <p className="text-white font-montserrat text-[18px] font-medium ">
                Add to wishlist
              </p>
            </div>
            <p
              className="text-white font-montserrat text-[18px] font-bold cursor-pointer"
              onClick={watch}
            >
              Watch introduction
            </p>
          </div>
        </div>
      </div>
      <Summary />
    </div>
  );
};

export default Course;
