import React from "react";
import Titles from "../Titles";
import CourseComponent from "./CourseComponent";

const items = [
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "80000dt",
    type:"online",
    rate: 4.2,
    
  },
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "21000dt",
    rate: 3.0,
    type:"online"
  },
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "99000dt",
    rate: 4.0,
    type:"online"
  },
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "150000dt",
    rate: 1.2,
    type:"online"
  },
  
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "80000dt",
    rate: 4.2,
    type:"in person"
  },
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "80000dt",
    rate: 4.2,
    type:"online"
  },
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "80000dt",
    rate: 4.2,
    type:"in person"
  },
  {
    image:
      "course.png",
    title: "Introduction to web development 101",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: "80000dt",
    rate: 4.2,
    type:"in person"
  },
  
];

const PopularCourses = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <section className="pl-20 pt-12 max-md:p-4">
      <div className="flex items-center justify-between">
        <Titles title={"Popular courses"} />
        <div>
        <button
          onClick={scrollLeft}
          className="p-2 m-4  bg-white  py-2 border shadow-purp   h-9 w-12  "
        >
          <img src="arrowRight.svg" className="mx-auto h-6"></img>
        </button>
        <button
          onClick={scrollRight}
          className="p-2 m-4   p-2 m-4  bg-white  py-2 border shadow-purp     h-9  w-12  "
        >
          <img src="arrowRight.svg" className="mx-auto h-6 rotate-180"></img>
        </button>
      </div>
      </div>
     

      <div id="content" className="flex gap-11 scroll-smooth  mt-20 overflow-hidden">
        {/* <CourseComponent
          img={"course.png"}
          title={"Introduction to web development 101"}
          name={"Jane Doe"}
          description={
            "Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe."
          }
          price={"80.000"}
          type={"in person"}
        />

        <CourseComponent
          img={"course.png"}
          title={"Introduction to web development 101"}
          name={"Jane Doe"}
          description={
            "Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe."
          }
          price={"80.000"}
          type={"online"}
          
        /> */}

{items.map((item, index) => (
          <div key={index} className="carousel-item">
            <CourseComponent
              img={item.image}
              title={item.title}
              price={item.price}
              rate={item.rate}
              description={item.description}
              type={item.type}
            />
          </div>
        ))}

       
       
        
      </div>
    </section>
  );
};

export default PopularCourses;
