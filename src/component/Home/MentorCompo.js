import React from "react";

const MentorComponent = ({name , job}) => {
  return (
    <div className="w-40  mt-[75px] mb-8  ">
        <img className="w-[142px] h-[142px] mx-auto" src="mentor.png"></img>
        <h5 className="text-blak text-[24px] font-montserrat font-semibold    text-center">{name}</h5>
        <p className="text-darkBlue text-[20px] font-montserrat font-semibold text-center ">{job}</p>
        <div className="flex  justify-between">
            <span className="text-darkBlue text-[20px] font-montserrat font-semibold ">4.7</span>
            <div className="flex  items-center">
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
            </div>
            <span className="text-grey text-[12px] font-montserrat font-normal flex items-center" >(211)</span>
        </div>
    </div>
  );
};

export default MentorComponent;
