import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="bg-greey lg:h-[813px] max-lg:min-h-[1000px]  pt-[61px] md:pl-20 max-md:pl-8 max-md:text-center   lg:flex">
      <div className="">
        <img src="Group.svg" className="absolute left-0 top-0 max-md:hidden "></img>
        <div className="flex  items-center   ">
          <h1 className="text-darkBlue sm:text-[75px] max-sm:text-[36px] relative  f font-custom font-normal leading-[100%] max-sm:max-w-[270px]  sm:w-[614px] text-start ">
            Bright Future starts with the right education
          </h1>
          <img className="shadow-purp h-10 w-16 border border-grey max-md:w-12 max-md:h-8 transform transition duration-300 hover:translate-x-4" src="arrow-right.svg"></img>
          {/* <img className="absolute bottom-[16%] md:right-[8%] md:w-6 max-md:right-[24%] max-md:w-4" src="starss.svg"></img> */}
          {/* <img className="absolute  bottom-0 md:right-[0%] max-md:right-[15%]  max-md:w-10" src="starss.svg"></img> */}
          <img className="absolute w-[40px] left-[220px] top-[160px] md:w-[60px] md:left-[680px] md:top-[230px] lg:w-[70px] lg:left-[530px] lg:top-[250px] xl:w-[70px] xl:left-[680px] xl:top-[230px]" src="starss.svg"></img>
          <img className="absolute w-[14px] left-[220px] top-[160px] md:w-[20px] md:left-[680px] md:top-[230px] lg:w-[20px] lg:left-[530px] lg:top-[250px] xl:w-[20px] xl:left-[680px] xl:top-[230px]" src="starss.svg"></img>
        </div>

        <p className="text-blackish sm:text-[24px] max-sm:text-[20px] font-montserrat text-start font-normal  sm:w-[628px] max-sm:max-w-[430px] mt-6   max-sm:mb-6 sm:mb-20">
          Online courses never easier to access with Bright, meeting the best
          pricing, best mentors nad best planning to achieve your goals in the
          deadlines following your own schedule and time preferences!
        </p>
        <div className="max-lg:hidden relative">
       <Button name={"Sign up now"} color={"purp"} />
       <img src="Cursor.svg" className="absolute left-28"></img>
       </div>
      </div>
      <div className="lg:w-[388px] max-lg:w-[250px] lg:h-[559px] max-lg:h-[390px] relative  rounded-t-full border border-solid border-blackish bg-white max-lg:mx-auto max-lg:mb-20 lg:ml-20 xl:ml-40 lg:mt-24">
        <img
          className="lg:w-[631px] max-lg:w-[430px] lg:h-[408px] max-lg:h-[300px] lg:mt-[168px] max-lg:mt-[100px]"
          src="juicy-girl.png"
          alt="juicy girlc"
        ></img>
        <img className="absolute bottom-[82%] w-20 xl:w-24" src="starss.svg" alt="star icon"></img>
        <img className="absolute bottom-[93%] w-6 max-sm:bottom-[95%]" src="starss.svg" alt="star icon"></img> 
      </div>
       <div className="lg:hidden   text-center">
       <Button name={"Sign up now"} color={"purp"} />
       </div>
      

      <div className="w-[76px] h-[76px] rounded-full bg-gray-300 flex justify-center items-center shadow-custom  fixed bottom-3 right-5 z-[10] cursor-pointer  hover:scale-110 transition-transform duration-300  ">
        <img className=" w-cover" src="elastic-head.png" alt="head img"></img>
      </div>
    </section>
  );
};

export default Hero;
