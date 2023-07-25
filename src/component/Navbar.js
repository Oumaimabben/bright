import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ClickImage = () => {
    if(!open ){
      setOpen(true);
    } else {
      setOpen(false)
    }
    
  };

  return (
    <section className="bg-greey h-[122px] flex justify-between items-center ">
      <p className="text-darkBlue text-5xl font-custom px-20 ">Bright</p>
      <div className="text-darkBlue text-5xl font-custom text-[32px] flex justify-between items-center w-[50%]  mr-14">
        <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/">Pricing</Link>
        <Link to="/StartQuiz">Quiz</Link>
        <p>Name</p>
        <div className="border border-blackish bg-yellow w-[65px] h-[65px] rounded-full relative">
          <img
            className="w-[60px] h-[60px] mx-auto"
            src="Ellipse.png"
            alt="profile img"
            onClick={ClickImage}
          ></img>
        </div>

        {open && (
          <>
            <div className="w-36 h-28 border border-blackish absolute top-28 right-16 z-10 grid items-stretch text-center shadow-yellow">
            
            <Link to="/profile" className="text-dark text-[20px] font-custom font-normal my-auto " onClick={ClickImage}>
              View profile
            </Link>
            <p className="text-red text-[20px] font-custom font-normal my-auto">
              Logout
            </p>
          </div> 
         

          </>
         
          
        )}
      </div>
    </section>
  );
};

export default Navbar;
