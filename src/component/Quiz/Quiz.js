import React, { useState, useEffect } from "react";
import Button from "../Button";
import axios from "axios";

const Quiz = () => {
  
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [time, setTime] = useState(60);
  const [answers, setAnswers] = useState([]);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [questions, setQuestions] = useState("");
  const [questionId, setQuestionId] = useState([]);
  const [post , setPost] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizId = "64a04513a594ed67f5868b9a";

        const response = await axios.get(
          `http://localhost:3000/api/v1/Quiz/${quizId}`
        );
        setQuestions(response.data.quiz);
        //console.log(response.data.quiz)
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  const currentQuestion =
    questions && questions.questions[currentQuestionIndex];

    const handleNextQuestion = async () => {
      if (currentQuestionIndex < questions.questions.length - 1) {
        
        setSelectedOption([]);
        setTime(60);
       
        setAnswers([ ...answers, [selectedOption]])
        setQuestionId([...questionId , currentQuestion._id])
        
        SetCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        SetCurrentQuestionIndex();
      }
      if (currentQuestionIndex === questions.questions.length - 2) {
        setShowSubmitButton(true);
        setShowNextButton(false);
      }
    };

  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  /* useEffect(()=>{
    console.log("answerss....",answers)
    console.log("idssss:",questionId)
  },[answers])
   */
  

  const submitAnswers = async () => {
    try {
      const quizId = "64a04513a594ed67f5868b9a"; //Replace with the actual quiz ID
      const userId="649869c7e9290c9d2b9665b3" ;
      
      const response = await axios.post(
        `http://localhost:3000/api/v1/Quiz1/submit`,
        {
          user:userId,

          quiz: quizId,

          questions : questionId,

          answer:  answers,
          score : 0
        }
      );
      console.log("reponce::::",response.data);

      //  Handle response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleSubmitButton = async () => {
    setTime(0);
    setAnswers([...answers, [selectedOption]]);
    setQuestionId([...questionId, currentQuestion._id]);
    setPost(true);
  };
  
  useEffect(() => {
    if(post) {
      submitAnswers();
    }
    
  }, [post]);

   useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
       if (currentQuestionIndex === questions.questions.length - 1) {
        handleSubmitButton();
      } else {
        handleNextQuestion();
      } 
    }
    

    return () => {
      clearInterval(timer);
    };
  }, [time, currentQuestionIndex]); 
  

  

  return (
    <div className="ml-20 mt-[74px] ">
      <div className="flex gap-5 items-center ">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Choose the right answer
        </h3>
        <span className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]">
          {time} sec
        </span>
      </div>
      {currentQuestion && (
        <>
          <p className="text-blak text-[16px] font-montserrat font-normal tracking-[.24px] my-8 text-start">
            {currentQuestion.question}
          </p>

          <ul>
            {currentQuestion.options &&
              currentQuestion.options.map((option, index) => (
                <li key={index} className=" mb-2 text-start">
                  <label className="text-blak text-[16px] font-montserrat font-normal tracking-[.24px] inline-flex items-center">
                    <input
                      className="mr-6 w-6 h-6  border-5 border-grey  rounded-full checked:bg-blak"
                      type="radio"
                      name=""
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />

                    {option}
                  </label>
                </li>
              ))}
          </ul>
        </>
      )}
      <span className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] text-start">
        Check your answers, once you submit your choice it cannot be edited!
      </span>

      <div className="mt-9 flex gap-6">
        {/* <Button name={"Next"} color={"purp"} onClick={handleNextQuestion} />
        <span className="text-darkBlue opacity-[0.6] text-[20px] font-montserrat font-normal tracking-[.3px] ">
          {currentQuestionIndex + 1}/10
        </span> */}
        <div >
          {showNextButton && (
            <div className=" flex items-center gap-6">
              <Button
                name={"Next"}
                color={"purp"}
                onClick={handleNextQuestion}
              />
              <span className="text-darkBlue opacity-[0.6] text-[20px] font-montserrat font-normal tracking-[.3px] ">
                {currentQuestionIndex + 1}/  {questions.questions.length}
              </span>
            </div>
          )}

          {showSubmitButton && (
            <div className=" flex items-center gap-6">
              <Button
                name={"Submit"}
                color={"purp"}
                onClick={handleSubmitButton}
              />
               <span className="text-darkBlue opacity-[0.6] text-[20px] font-montserrat font-normal tracking-[.3px] ">
                {currentQuestionIndex + 1}/ {questions.questions.length}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
