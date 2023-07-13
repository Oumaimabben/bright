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
    <section className="h-[660px] bg-greey pl-20 flex py-12">
      <div>
        <Titles title={"Top categories"} />
        <p className="text-blak text-[24px] text-start font-montserrat font-normal w-[420px] mt-14 mb-16">
          With Bright, the limit is the sky as we put our best to provide you
          with all possible learning categories from dev to design to history
          and art, psychology and soft skills, and many other categories in
          order to keep everything in the reach of your click. Get started now!
        </p>
        <Button name={"Browse courses"} color={"yellow"}  />
      </div>

      
      <div className="grid grid-cols-2 gap-6  h-[310px] w-[600px]  mt-36 ml-52 ">
        
        {buttons.map((button , index) => (
          <Button key={index} name={button.name} color={button.color} width={"307px"}/>
        ))} 
      </div>
    </section>
  );
};

export default TopCathegories;
