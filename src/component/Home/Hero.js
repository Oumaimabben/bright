import React from "react";
import Button from "../Button";

const Hero = () => {
  
  return (
    <section className="bg-greey h-[813px] pt-[61px] pl-20 flex relative ">
      
      <div>
        <img src="Group.svg" className="absolute left-0 top-0"></img>
        <h1 className="text-darkBlue text-[84px] font-custom font-normal leading-[100%]  w-[614px] text-start ">
          Bright Future starts with the right education
        </h1>
        <p className="text-blackish text-[24px] font-montserrat text-start font-normal w-[628px] mt-6  mb-20">
          Online courses never easier to access with Bright, meeting the best
          pricing, best mentors nad best planning to achieve your goals in the
          deadlines following your own schedule and time preferences!
        </p>
        <Button name={"Sign up now"} color={"purp"}  />
        
       
      </div>
      <div className="w-[388px] h-[559px] rounded-t-full border border-solid border-blackish bg-white  ml-60 mt-32">
          <img className="w-[631px] h-[408px] mt-[168px] " src="juicy-girl.png" alt="juicy girlc"></img>
      </div>

      <div className="w-[76px] h-[76px] rounded-full bg-gray-300 flex justify-center items-center absolute bottom-3 right-5 ">
        <img className=" w-cover" src="elastic-head.png" alt="head img" ></img>
      </div>
    </section>
  );
};

export default Hero;
