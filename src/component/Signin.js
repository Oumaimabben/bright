import React, { useState } from "react";

//import Rating from "./rating";

//import { FcGoogle } from "react-icons/fc";

//import { BiLogoFacebookSquare } from "react-icons/bi";

const SignIN = (props) => {
  const [email, setemail] = useState("");

  const [psw, setpsw] = useState("");

  const handleChangeemail = (event) => {
    setemail(event.target.value);
  };

  const handleChangepsw = (event) => {
    setpsw(event.target.value);
  };

  return (
    <div class="flex  ">
      <div className="bg-purp bg-cover  w-[370px] h-[570px] bg-no-repeat flex flex-col justify-center items-center   ">
        <h1 class="font-custom font-thin text-5xl text-white">No account?</h1>

        <p class="font-monteserat text-sm font-semibold text-center mt-[24%] mb-[20%] text-white tracking-wide">
          Easy steps to create your
          <br /> account in no time{" "}
        </p>

        <button className=" py-2 border shadow-shdB bg-white  h-9 w-[67%] font-custom font-thin text-[17px]">
          Sign Up
        </button>
      </div>

      <div class="w-[370px] flex flex-col  flex flex-col justify-center items-center h-[570px] ">
        <h1 class="font-custom font-thin text-7xl ">Sign In</h1>

        <input
          class="border broder-1 p-3 border-gray-400 shadow-shdInset h-[32px] w-[67%] mt-[75px]  text-sm font-monteserrat "
          type="text"
          value={email}
          onChange={handleChangeemail}
          placeholder="E-mail address"
        />

        <input
          class="border broder-1 p-3 border-gray-400 shadow-shdInset h-[32px] w-[67%] mt-5 font-monteserrat text-sm"
          type="password"
          value={psw}
          onChange={handleChangepsw}
          placeholder="password"
        />

        <button class="  w-[60%] mt-2 ml-[38%] font-monteserrat font-thin text-[12px] ">
          Forgot password?
        </button>

        <button
          className={`shadow-shdY  text-sm font-semibold w-[67%]  mt-[75px] pr-4 pl-1 pt-1 h-8 border border-solid  `}
        >
          <span class="font-custom font-thin text-[17px]">Sign In</span>
        </button>

        <h2 class="font-custom mt-4 text-center text-[13px]">Or use</h2>

        <div class="flex w-[60%] mt-3">
          <button className="flex items-center justify-center  py-2 border shadow-shdY text-[10px] h-9 w-[50%] font-monteserrat">
            {/* <FcGoogle className="text-2xl mr-4" /> */}
            Gmail
          </button>

          <button className="flex items-center mx-3 justify-center  py-2 pr-2 border shadow-shdY text-[10px] h-9 w-[52%] font-monteserrat">
            {/* <BiLogoFacebookSquare className=" text-2xl mr-2 text-blue-700" /> */}
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
