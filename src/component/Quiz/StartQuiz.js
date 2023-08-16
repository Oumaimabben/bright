import React from "react";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';
import Summary from "./Summary";


const StartQuiz = () => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/Quiz');
        
        
    }
  return (
    <div className="flex justify-between">
    <div className="p-32 text-center ">
      <h3 className="text-blak font-montserrat text-2xl font-semibold text-center tracking-[.36px]">
        Chapter One: Evaluation Quiz
      </h3>

      <p className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]  my-6">
        5min
      </p>
      <p className="text-darkBlue font-montserrat text-[16px] font-normal tracking-[.24px] w-[660px] text-center mx-auto">
        Have you ever wondered how these websites actually work? How are they
        built? How do browsers, computers, and mobile devices interact with the
        web? What skills are necessary to build a website? In this quiz we will
        be asking questions to put you on track with the course introduction and
        to let you familiarize yourself with BRIGHT quiz types.
      </p>

      <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] mx-auto my-6 w-[520px]">
        Answers are final once submitted, make sure you double check before you
        submit
      </p>

       <Button name={"Start"} color={"purp"} colorr={"purp"} onClick={handleStart}/> 
      
    </div>
    <Summary/>
    </div>
  );
};

export default StartQuiz;
