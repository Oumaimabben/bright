import Checkbox from "./Checkbox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";
import FillBlanksQuiz from "./FillBlanksQuiz";
import WritingQuiz from "./Writing";
import ReorderQuiz from "./ReorderQuiz";
import { useNavigate } from "react-router-dom";
import Summary from "./Summary";

const QuizPage = () => {
  const [questions, setQuestions] = useState("");
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [post, setPost] = useState(false);
  const [time, setTime] = useState(60);

  const currentQuestion =
    questions && questions.questions[currentQuestionIndex];

    

  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/FinishQuiz");
  };
  useEffect(() => {
    console.log("answers:::", answers);
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.questions.length - 1) {
      if (Array.isArray(selectedOption)) {
        setAnswers([
          ...answers,
          {
            questionId: currentQuestion._id,
            selectedOptionIds: selectedOption,
          },
        ]);
      } else {
        setAnswers([
          ...answers,
          {
            questionId: currentQuestion._id,
            selectedOptionIds: [selectedOption],
          },
        ]);
      }

      setSelectedOption();
      setTime(60);
      SetCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      SetCurrentQuestionIndex();
    }
    if (currentQuestionIndex === questions.questions.length - 2) {
      setShowSubmitButton(true);
      setShowNextButton(false);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizId = "64b94629ebf6acd1aa1b2106";

        const response = await axios.get(
          `http://localhost:3000/api/v1/Quiz/${quizId}`
        );
        setQuestions(response.data.quiz);
        console.log(response.data.quiz);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  const submitAnswers = async () => {
    try {
      const quizId = "64b94629ebf6acd1aa1b2106"; //Replace with the actual quiz ID
      const userId = "649869c7e9290c9d2b9665b3";

      const response = await axios.post(
        `http://localhost:3000/api/v1/Quiz/submit`,
        {
          user: userId,

          quiz: quizId,

          answers: answers,
        }
      );
      console.log("reponce::::", response.data);

      //  Handle response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitButton = async () => {
    setTime(60)
    setAnswers([
      ...answers,
      { questionId: currentQuestion._id, selectedOptionIds: [selectedOption] },
    ]);
    setPost(true);
    
  };

  useEffect(() => {
    if (post) {
      submitAnswers();
      handleStart();
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

    // Clear the timer when the component unmounts or when the time and currentQuestionIndex change
    return () => {
      clearInterval(timer);
    };
  }, [time, currentQuestionIndex]);


  const renderQuestionComponent = (question) => {
    switch (question.type) {
      case "checkbox":
        return (
          <Checkbox
            key={question._id}
            question={question.question}
            options={question.options}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            time={time}
          />
        );
      case "text":
        return (
          <FillBlanksQuiz
            key={question._id}
            question={question.question}
            answer={question.answer}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            time={time}
          />
        );
      case "order":
        return (
          <ReorderQuiz
            key={question._id}
            question={question.question}
            options={question.options}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            time={time}
          />
        );
      case "paragraph":
        return (
          <WritingQuiz
            key={question._id}
            question={question.question}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            time={time}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-between">
    <div >
      {currentQuestion ? (
        <>
          
          {renderQuestionComponent(currentQuestion)}
          <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] text-start my-6 ml-20">
            Check your answers, once you submit your choice it cannot be edited!
          </p>
          <div className="my-9 flex gap-6 ml-20">
            <div>
              {showNextButton && (
                <div className=" flex items-center gap-6">
                  <Button
                    name={"Next"}
                    color={"purp"}
                    colorr={"purp"}
                    onClick={handleNextQuestion}
                  />
                  <span className="text-darkBlue opacity-[0.6] text-[20px] font-montserrat font-normal tracking-[.3px] ">
                    {currentQuestionIndex + 1} / {questions.questions.length}
                  </span>
                </div>
              )}

              {showSubmitButton && (
                <div className=" flex items-center gap-6">
                  <Button
                    name={"Submit"}
                    color={"purp"}
                    colorr={"purp"}
                    onClick={handleSubmitButton}
                  />
                  <span className="text-darkBlue opacity-[0.6] text-[20px] font-montserrat font-normal tracking-[.3px] ">
                    {currentQuestionIndex + 1} / {questions.questions.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div>Loading......</div>
      )}
     
    </div>
    <Summary/>
    </div>
  );
};

export default QuizPage;
