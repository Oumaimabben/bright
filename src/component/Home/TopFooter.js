import React from "react";
import Button from "../Button";
import { useState } from "react";

const TopFooter = () => {
  const [email, setemail] = useState("");

  const handleChangeemail = (event) => {
    setemail(event.target.value);
  };
  return (
    <div className="h-[447px] bg-greey lg:pt-20 relative">
      <img src="Group.svg" alt="" className="absolute left-0 top-0 w-[60%] md:hidden"></img>
      <img
          className=" w-[25px]  absolute top-0 right-20 md:hidden"
          src="Rectangle2.png" alt=""
        ></img>
      <img
          className="w-[85px] absolute top-4 right-0 md:hidden"
          src="Vector2.png " alt=""
        ></img>
      <h2 className="text-blak lg:text-5xl max-lg:text-[16px] font-custom font-normal text-center max-lg:pt-14 lg:w-[743px] max-lg:max-w-[400px] mx-auto">
        Subscribe to our newsletter in order to get the latest news and offers
        from Bright
      </h2>
      <div className="lg:flex lg:items-center lg:justify-center max-lg:text-center gap-8 mt-14 relative">
        
        <input
          class="border  border-grey px-4  shadow-shdInset  lg:max-w-[520px] max-lg:[310px] max-lg:mb-4 h-14  font-monteserrat font-normal text-[20px] focus:outline-none   placeholder-gray-500 placeholder-opacity-50"
          placeholder="E-mail address"
          type="text"
          value={email}
          onChange={handleChangeemail}
        />
        
        <div>
        <Button name={"Subscribe"} color={"yellow"} colorr={"yelloww"} />
        </div>
        
      </div>
      

      <div className="relative mt-36 max-md:hidden">
        <img
          className=" w-[50px]  absolute bottom-36 right-48"
          src="Rectangle2.png" alt=""
        ></img>
        <img
          className="w-[212px] absolute bottom-0 right-0 "
          src="Vector2.png " alt=""
        ></img>
        <div className="relative ">
          <img
            className=" absolute bottom-2 left-6 w-[315px] h-[294px]  md:w-[250px] md:h-[220px]"
            src="Asset.png" alt=""
          ></img>
          <img src="Group.svg" alt="" className="absolute left-0 bottom-0 "></img>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
