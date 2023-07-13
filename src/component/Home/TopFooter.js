import React from "react";
import Button from "../Button";
import { useState } from "react";

const TopFooter = () => {
  const [email, setemail] = useState("");

  const handleChangeemail = (event) => {
    setemail(event.target.value);
  };
  return (
    <div className="h-[447px] bg-greey pt-20 ">
      <h2 className="text-blak text-5xl font-custom font-normal text-center w-[743px] mx-auto">
        Subscribe to our newsletter in order to get the latest news and offers
        from Bright
      </h2>
      <div className="flex items-center justify-center gap-8 mt-20 relative">
        {/* <input
          type="email"
          className="w-[520px] h-16 px-4 border border-solid border-blackish bg-white  focus:outline-none   placeholder-gray-500 placeholder-opacity-50 text-2xl font-montserrat font-normal"
          placeholder="E-mail address"
        /> */}
        <input
          class="border  border-blackish px-4  shadow-shdInset  w-[520px] h-16  font-monteserrat font-normal text-2xl focus:outline-none   placeholder-gray-500 placeholder-opacity-50"
          placeholder="E-mail address"
          type="text"
          value={email}
          onChange={handleChangeemail}
        />
        {/*  <div className="absolute bottom-[0.5px] left-96 h-[4px] w-[518px]  bg-yellow"></div> */}
        <Button name={"Subscribe"} color={"yellow"} />
      </div>
      {/* <div className="relative mt-20">
        <img
          className=" w-[50px] absolute bottom-72 left-48"
          src="Rectangle1.png"
        ></img>
        <img className="w-[212px] bottom-0 absolute" src="Vector1.png"></img>
      </div> */}

      <div className="relative mt-36">
        <img
          className=" w-[50px] absolute bottom-36 right-48"
          src="Rectangle2.png"
        ></img>
        <img
          className="w-[212px] absolute bottom-0 right-0"
          src="Vector2.png"
        ></img>
        <div className="relative ">
          <img
            className=" absolute bottom-2 left-6 w-[315px] h-[294px]"
            src="Asset.png"
          ></img>
          <img src="Group.svg" className="absolute left-0 bottom-0"></img>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
