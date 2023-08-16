import React from "react";

const Summary = () => {
  return (
    <div className="w-[471px]  pr-4">
      <h4 className="text-blak  text-[20px] font-montserrat font-medium mb-10 mt-8 ml-8 ">
        Course Summary
      </h4>
      <div className="flex items-center  gap-7 my-4 ml-[37px]">
        <img src="tick-circle.png" alt="tick circle"></img>
        <p className="text-blak text-[18px] font-montserrat font-normal">
          01. Introduction
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px]  ml-auto">
          2 min
        </span>
      </div>
      <div className="flex items-center gap-7 my-4 ml-[37px]">
        <img src="tick-circle.png" alt="tick circle"></img>
        <p className="text-darkBlue text-[18px] font-montserrat font-normal">
          02. Chapter 1: Lorem ipsum
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px] ml-auto">
          5 min
        </span>
      </div>
      <div className="flex items-center gap-7 my-4 ml-[37px]">
        <img src="tick-circle.png" alt="tick circle"></img>
        <p className="text-darkBlue text-[18px] font-montserrat font-normal">
          03. Lorem ipsum
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px] ml-auto">
          3 min
        </span>
      </div>

      <div className="flex items-center  gap-7 my-4 ml-[37px]">
        <img src="game.png" alt="game circle"></img>
        <p className="text-blak text-[18px] font-montserrat font-normal">
          04. Evaluation Quizz
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px] ml-auto">
          5 min
        </span>
      </div>
      <div className="flex items-center gap-7 my-4 ml-[37px]">
        <img src="play-circle.png" alt="play circle"></img>
        <p className="text-lightGray text-[18px] font-montserrat font-normal">
          05. Chapter 2: Lorem ipsum
        </p>
        <img src="lock.png" className="ml-auto"></img>
      </div>
      <div className="flex items-center gap-7 my-4 ml-[37px]">
        <img src="play-circle.png" alt="play circle"></img>
        <p className="text-lightGray text-[18px] font-montserrat font-normal">
          06. Lorem ipsum
        </p>
        <img src="lock.png" className="ml-auto"></img>
      </div>

      <div className="flex items-center gap-7 my-4 ml-[37px]">
        <img src="teacher.svg" alt="play circle" ></img>
        <p className="text-lightGray text-[18px] font-montserrat font-normal">
        Certification
        </p>
        <img src="lock.png" className="ml-auto"></img>
      </div>
    </div>
  );
};

export default Summary;
