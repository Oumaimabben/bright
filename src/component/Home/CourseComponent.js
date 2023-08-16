import React from "react";
import Button from "../Button";
import Rating from "../Rating";

const CourseComponent = ({ img, title, description, name, price, type , rate }) => {
  return (
    <div className=" w-[350px] shadow-lg p-2.5  ">
      <div className="relative ">
        <img className="w-[335px] h-[150px]  mx-auto " src={img}></img>
        <p
          className={`w-[60px] h-[27px] text-white  text-[12px] font-custom font-normal text-center absolute top-0 right-6 ${
            type === "online" ? "bg-yellow" : "bg-purp"
          }`}
        >
          {type}
        </p>
      </div>

      <h4 className="text-blak text-[18px] font-montserrat font-semibold mt-3.5">
        {title}
      </h4>
      <span className="text-lightGray text-[16px] font-montserrat font-semibold">
        {name}
      </span>
      <p className="text-lightBlack text-[14px] font-montserrat font-normal">
        {description}
      </p>

      <div className="flex  justify-between items-center mt-2">
        <Button name={"Enroll"} color={"purp"} colorr={"purpp"} />
        <div>
          <p className="text-darkBlue text-[22px] font-custom font-normal ">
            {price} DT
          </p>
          <div className="flex  justify-between">
            {/* <span className="text-darkBlue text-[16px] font-montserrat font-semibold ">
              4.7
            </span> */}
            {/* <div className="flex  items-center">
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
              <img className="w-[17px] h-[17px]" src="star.png" alt="star icone"></img>
            </div> */}
            <p className="text-darkBlue text-[18px] max-md:text-[12px] font-montserrat font-semibold mr-2">{rate}</p>
            <Rating rate={rate}/>
            
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
