import React from "react";
import WhyUs from "../WhyUs";

import FeedBack from "./FeedBack";
import FeedCard from "./FeedCard";
import Hero from "./Hero";
import Mentors from "./Mentors";
import Partners from "./Partners";
import PopularCourses from "./PopularCourses";
import TopCathegories from "./Top-cathegories";
import TopFooter from "./TopFooter";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
       <PopularCourses/> 
      
      <Mentors />
      
      <TopCathegories/>
      <WhyUs/>
      <Partners/>
      <FeedBack/>
      <TopFooter/>
    </div>
  );
};

export default Home;
