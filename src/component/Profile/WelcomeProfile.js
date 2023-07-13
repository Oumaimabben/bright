import React from "react";
import Titles from "../Titles";
import FormProfile from "./FormProfile";

const WelcomeProfile = () => {
  return (
    <div className=" pt-28 flex items-center justify-between">
      <div>
        <Titles title={"Welcome back Moatez!"} />
        <FormProfile />
      </div>

      <div className="text-center h-[600px] relative">
        <Titles title={"Badges"} />
        <img className="w-[500px]" src="badge.png"></img>
        <p className="text-white font-custom text-7xl w-40 text-center absolute bottom-52 right-48">Level 06</p>
      </div>
    </div>
  );
};

export default WelcomeProfile;
