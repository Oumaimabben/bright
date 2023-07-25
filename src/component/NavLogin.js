import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import Button from "./Button";
import SignInbtn from "./Popup";
const NavLogin = () => {
  

  return (
    <section className="bg-greey h-[122px] flex justify-between items-center ">
      <p className="text-darkBlue text-5xl font-custom px-20 ">Bright</p>
      <div className="text-darkBlue text-5xl font-custom text-[32px] flex justify-between items-center w-[50%]  mr-14">
        <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/">Pricing</Link>
        {/* <Button name={"Login"} color={"purp"} onClick={""}/> */}
        <SignInbtn/>
        

        
      </div>
    </section>
  );
};

export default NavLogin;
