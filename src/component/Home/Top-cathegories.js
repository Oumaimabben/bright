import React from "react";
import Titles from "../Titles";
import Button from "../Button";

const TopCathegories = () => {
  const buttons = [
    { name: "Web Dev", color: "yellow" },
    { name: "History", color: "yellow" },
    { name: "Arts", color: "yellow" },
    { name: "Soft skills", color: "yellow" },
    { name: "Design", color: "yellow" },
    { name: "Psychology", color: "yellow" },
    { name: "Science", color: "yellow" },
    { name: "Politics", color: "yellow"},
  ];
  return (
    <section className="lg:h-[670px] max-lg:h-[800px] bg-greey lg:pl-20 max-lg:p-4 lg:flex  lg:gap-10 xl:gap-32 py-12">
      <div >
        <Titles title={"Top categories"} />
        <p className="text-blak lg:text-[24px] max-lg:text-[16px] lg:text-start max-lg:text-center font-montserrat font-normal lg:w-[420px] max-lg:min-w-[300px] max-lg:mx-auto mt-14 mb-16 ">
          With Bright, the limit is the sky as we put our best to provide you
          with all possible learning categories from dev to design to history
          and art, psychology and soft skills, and many other categories in
          order to keep everything in the reach of your click. Get started now!
        </p>
        <div className="max-lg:hidden">
        <Button name={"Browse courses"} color={"yellow"}  /> 
        </div>
        
      </div>

      
      <div className="grid grid-cols-2 gap-6  h-[310px] lg:w-[600px] max-lg:max-w-[600px] max-lg:mx-auto   lg:mt-36  ">
        
        {buttons.map((button , index) => (
          <Button key={index} name={button.name} color={button.color} width={"307px"}/>
        ))} 
      </div>
      <div className="lg:hidden text-center mt-6">
        <Button name={"Browse courses"} color={"yellow"}  /> 
        </div>
        
    </section>
  );
};

export default TopCathegories;
