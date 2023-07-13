import React from "react";
import Quiz from "./Quiz";
import Summary from "./Summary";

const QuizPage = () => {
   return (
       <section className="flex justify-between ">
         <Quiz/>
         <Summary/>
       </section>
   )
}

export default QuizPage;