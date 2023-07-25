import React, { useState, useEffect } from "react";


const Checkbox = (props) => {
  
  //const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(0);
  //const [selectedOption, setSelectedOption] = useState([]);
  //const [time, setTime] = useState(60);
  //const [answers, setAnswers] = useState([]);
  
  /* useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizId = "64a59c376492c453bf2c868d";

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
 */
  /* const currentQuestion =  questions && questions.questions[currentQuestionIndex];  */

    /* const handleNextQuestion = async () => {
      if (currentQuestionIndex < questions.questions.length - 1) {
        
        setSelectedOption([]);
        setTime(60);
       
        setAnswers([ ...answers, [selectedOption]])
        //setQuestionId([...questionId , currentQuestion._id])
        
        SetCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        SetCurrentQuestionIndex();
      }
      if (currentQuestionIndex === questions.questions.length - 2) {
        setShowSubmitButton(true);
        setShowNextButton(false);
      }
    }; */

  
  /* const handleOptionChange = (option) => {
    setSelectedOption(option);
  }; */

  /* useEffect(()=>{
    console.log("answerss....",answers)
    console.log("idssss:",questionId)
  },[answers])
   */
  

  /* const submitAnswers = async () => {
    try {
      const quizId = "64a59c376492c453bf2c868d"; //Replace with the actual quiz ID
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
  }; */

  
  /* const handleSubmitButton = async () => {
    setTime(0);
    setAnswers([...answers, [selectedOption]]);
    setQuestionId([...questionId, currentQuestion._id]);
    setPost(true);
  };
  
  useEffect(() => {
    if(post) {
      submitAnswers();
    }
    
  }, [post]); */

    /*  useEffect(() => {
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
  }, [time]);   */
   

  

  return (
    <div className="ml-20 mt-[74px] ">
      <div className="flex gap-5 items-center ">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Choose the right answer
        </h3>
        <span className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]">
          {props.time} sec
        </span>
      </div>
      {props && (
        <>
          <p className="text-blak text-[16px] font-montserrat font-normal tracking-[.24px] my-8 text-start">
             {props.question}
          </p>

          <ul>
            {  props.options&&
              props.options.map((option, index) => (
                <li key={option._id} className=" mb-2 text-start">
                  <label className="text-blak text-[16px] font-montserrat font-normal tracking-[.24px] inline-flex items-center">
                    <input
                      className="mr-6 w-6 h-6  border-5 border-grey  rounded-full checked:bg-blak"
                      type="radio"
                      name=""
                      value={option.sentence}
                      checked={props.selectedOption === option.sentence}
                      onChange={() => props.handleOptionChange(option.sentence)}
                    />

                    {option.sentence}
                  </label>
                </li>
              ))}
          </ul>
        </>
      )}
      

     
        </div>
      
    
  );
};

export default Checkbox;
