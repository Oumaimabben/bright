import React from "react";
import Titles from "../Titles";
import Progress from "./Progress";
import WelcomeProfile from "./WelcomeProfile";
import CourseComponent from "../Home/CourseComponent";
import Button from "../Button";

const Profile = () => {
  return (
    <section className="pl-20 mb-40">
      <WelcomeProfile />
      <Titles title={"Your progress"} />
      <div className="flex my-20">
        <Progress
          title={"Introduction to web development 101"}
          name={"Jane Doe"}
          img={"course.png"}
        />
        <Progress
          title={"Introduction to web development 101"}
          name={"Jane Doe"}
          img={"course.png"}
        />
      </div>
      <Titles title={"Certificates"} />
      <div className="flex gap-10 my-14">
        <div className=" w-[350px]">
          <img src="certif.png" alt="certificate"></img>
          <p className="font-custom text-2xl text-green-900 text-center">
            Received on 16-06-2023
          </p>
        </div>
        <div className="w-[350px]">
          <img src="certif.png" alt="certificate"></img>
          <p className="font-custom text-2xl text-green-900 text-center">
            Received on 16-06-2023
          </p>
        </div>
      </div>

      <Titles title={"Your wishlist"} />
      <div className="flex gap-8 mb-40">
      <CourseComponent
          img={"course.png"}
          title={"Leadership, Team and project management"}
          name={"Jane Doe"}
          description={
            "Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe."
          }
          price={"80.000"}
          type={"online"}
          
        />
        <CourseComponent
          img={"course.png"}
          title={"Leadership, Team and project management"}
          name={"Jane Doe"}
          description={
            "Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe."
          }
          price={"80.000"}
          type={"online"}
          
        />
      </div>
      
      <Button name={"Log out"} color={"red"} colorr={"redd"}/>
    </section>
  );
};

export default Profile;
