import React from "react";
import Button from "../Button";

const Progress = ({ img, title,  name }) => {
  return (
    <div className="w-[350px] ">
      <div className="relative">
        <img className="w-[300px] h-[175px] mt-12 " src={img}></img>
        
      </div>
      <div className="h-2.5 w-[300px] bg-lightGray">
          <div className="h-2.5 w-[60%] bg-purp"></div>
          <p  className="font-custom text-2xl text-white relative bottom-10 left-60">60%</p>
      </div>

      <h4 className="text-blak text-[16px] font-montserrat font-semibold mt-3.5">
        {title}
      </h4>
      <span className="text-lightGray text-[16px] font-montserrat font-semibold">
        {name}
      </span>
     

      <div className=" mt-2">
      <Button name={"Continue"} color={"purp"} colorr={"purpp"}/>
        
      </div>
    </div>
  );
};

export default Progress;
