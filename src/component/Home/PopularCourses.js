import React from "react";
import Titles from "../Titles";
import CourseComponent from "./CourseComponent";

const PopularCourses = () => {
  return (
    <section className="pl-20 pt-12">
      <div className="flex items-center ">
        <Titles title={"Popular courses"} />
      </div>
      <div className="flex gap-11">
        <CourseComponent
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
        />
      </div>
    </section>
  );
};

export default PopularCourses;
