import React from "react";
import WhyUs from "../WhyUs";
import Hero from "./Hero";
import Mentors from "./Mentors";
import Partners from "./Partners";
import PopularCourses from "./PopularCourses";
import TopCathegories from "./Top-cathegories";
import TopFooter from "./TopFooter";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularCourses/>
      <Mentors />
      
      <TopCathegories/>
      <WhyUs/>
      <Partners/>
      <TopFooter/>
    </div>
  );
};

export default Home;
