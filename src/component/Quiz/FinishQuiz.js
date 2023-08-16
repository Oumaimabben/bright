import React from "react";
import Button from "../Button";
import Summary from "./Summary";
import { useState } from "react";

const FinishQuiz = () => {
  const [isFinish, setIsFinish] = useState(true);

  return (
    <div className="flex justify-between">
      <div className="p-36 text-center w-[70%] ">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Chapter One: Evaluation Quiz
        </h3>
        <p className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px] my-8 ">
          Finished: 08/10
        </p>
        {!isFinish && <img className="mx-auto" src="failed.svg"></img> }
        

        {isFinish ? (
          <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] my-4">
            Quiz passed, proceed to the next chapter!
          </p>
        ) : (
          <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] my-4">
            It's okay to try again, giving up is not!
          </p>
        )}
        {isFinish ? (<Button name={"Continue"} color={"purp"} colorr={"purp"}/>) : <Button name={"Try again"} colorr={"purp"} color={"purp"} />}
        
        {!isFinish && <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] my-4">Skip</p>}
      </div>
      <Summary />
    </div>
  );
};

export default FinishQuiz;
