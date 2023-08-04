import React from "react";
import Rating from "../Rating";

const MentorComponent = ({name , job}) => {
  return (
    <div className="w-40  mt-[75px] mb-8  mx-10  max-md:w-28 max-md:mx-6">
      <div className="border border-blackish bg-purp w-[149px] max-md:w-[85px] h-[149px] max-md:h-[85px] rounded-full mx-auto relative ">
      <img className="w-[142px] max-md:w-[80px] max-md:h-[80px] h-[142px] right-0 absolute" src="mentor.png" alt="mentor image"></img>
      </div>
        
        <h5 className="text-blak text-[24px] max-md:text-[14px] font-montserrat font-semibold    text-center">{name}</h5>
        <p className="text-darkBlue text-[20px] max-md:text-[12px] font-montserrat font-semibold text-center ">{job}</p>
        <div className="flex  justify-around">
            {/* <span className="text-darkBlue text-[20px] font-montserrat font-semibold ">4.7</span> */}
            {/* <div className="flex  items-center">
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
                <img className="w-[17px] h-[17px]" src="star.png"></img>
            </div> */}
            <p className="text-darkBlue text-[18px] max-md:text-[12px] font-montserrat font-semibold mr-2">4.7</p>
            <Rating rate={4.7}/>
            <span className="text-grey text-[12px]  max-md:text-[7px] font-montserrat font-normal flex items-center" >(211)</span>
        </div>
    </div>
  );
}; 

export default MentorComponent;
