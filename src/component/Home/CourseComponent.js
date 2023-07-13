import React from "react";
import Button from "../Button";

const CourseComponent = ({ img, title, description, name, price, type }) => {
  return (
    <div className=" w-[350px] ">
      <div className="relative">
        <img className="w-[343px] h-[175px] mt-12 " src={img}></img>
        <p
          className={`w-[60px] h-[27px] text-white text-[12px] font-custom font-normal text-center absolute top-0 right-6 ${
            type === "online" ? "bg-yellow" : "bg-purp"
          }`}
        >
          {type}
        </p>
      </div>

      <h4 className="text-blak text-[20px] font-montserrat font-semibold mt-3.5">
        {title}
      </h4>
      <span className="text-lightGray text-[16px] font-montserrat font-semibold">
        {name}
      </span>
      <p className="text-lightBlack text-[16px] font-montserrat font-normal">
        {description}
      </p>

      <div className="flex  justify-between items-center mt-2">
        <Button name={"Enroll"} color={"purp"} width={"300px"} />
        <div>
          <p className="text-darkBlue text-[22px] font-custom font-normal ">
            {price} DT
          </p>
          <div className="flex  justify-between">
            <span className="text-darkBlue text-[16px] font-montserrat font-semibold ">
              4.7
            </span>
            <div className="flex  items-center">
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
            </div>
            <span className="text-grey text-[12px] font-montserrat font-normal flex items-center">
              (211)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
