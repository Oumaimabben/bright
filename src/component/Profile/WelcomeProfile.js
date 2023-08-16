import React from "react";
import Titles from "../Titles";
import FormProfile from "./FormProfile";
import { useState , useEffect } from "react";
import axios from "axios";

const WelcomeProfile = () => {
  const [firstname , setFirstName] = useState('')
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {

        const response = await axios.get(
          `http://localhost:8000/Student/64d0e9ae1188959cdd460f18`
        );
        setFirstName(response.data.username)
        console.log("name",firstname)
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className=" pt-28 flex items-center justify-between">
      <div>
        <Titles title={`Welcome back ${firstname}!`} />
        <FormProfile  />
      </div>

      <div className="text-center  mr-24 h-[620px]  ">
        <Titles title={"Badges"} />
        {/* <img className="w-[500px] border border-red" src="badge.png"></img>
        <p className="text-white font-custom text-7xl w-52 text-center absolute bottom-56 right-36">Level 06</p> */}
        <div className="w-[400px] h-[400px] border border-1 border-blak rounded-full flex items-center justify-center my-4">
          <div className="bg-blue w-[320px] h-[320px] border border-1 border-blak rounded-full flex items-center justify-center">
            <p className="text-white font-custom text-7xl w-52 text-center ">
              Level 06
            </p>
          </div>
        </div>
        <p className="text-4xl font-custom font-normal text-darkBlue">Rank : 005</p>
      </div>
    </div>
  );
};

export default WelcomeProfile;
