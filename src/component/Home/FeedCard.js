import React from "react";
import Rating from "../Rating";

const FeedCard = (props) => {
  return (
    <div className="w-[280px] h-[145px] sm:w-[500px] sm:h-[200px] lg:w-[800px] lg:h-[250px] shadow-purp border border-grey sm:mx-8 mx-3  my-6 p-2 lg:px-8  flex flex-col justify-evenly">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 lg:gap-5">
        <div className="border border-blackish bg-yellow w-[34px] h-[34px] lg:w-[64px] lg:h-[64px]  rounded-full relative ">
          <img
            className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] "
            src={props.img}
            alt=""
          ></img>
        </div>
        <div>
          <h3 className="font-custom text-[16px] lg:text-[24px] text-blackish font-normal">
            {props.name}
          </h3>
          <p className="font-montserrat text-[12px] lg:text-[20px] text-blackish font-normal">
            {props.job}
          </p>
        </div>
        </div>
        <Rating rate={4} />
      </div>
      <p className="font-montserrat text-[10px] sm:text-[14px] lg:text-[17px] text-blackish font-normal">
        {props.feedBack}
      </p>
    </div>
  );
};

export default FeedCard;
