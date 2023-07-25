import React from "react";
import Button from "../Button";
import Summary from "./Summary";


const FinishQuiz = () => {
  return (
    <div className="flex justify-between">
    <div className="p-36 text-center w-[70%] ">
      <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
        Chapter One: Evaluation Quiz
      </h3>
      <p className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px] mb-20 mt-8">
        Finished: 08/10
      </p>

      <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] my-4">
        Quiz passed, proceed to the next chapter!
      </p>
      <Button name={"Continue"} color={"purp"}  />
    </div>
    <Summary/>
    </div>
  );
};

export default FinishQuiz;
