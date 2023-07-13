import React, { useState, useEffect } from "react";
import Button from "../Button";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";

const ReorderQuiz = () => {
  /* const questions = [
    {
      id: 0,
      task: "Re-order these sentences",
      question:
        "Put the sentences in the right order to define web development",
      options: [
        {
          id: "1",
          sentence: "and security of websites and web applications,",
        },
        {
          id: "2",
          sentence: "Web development is the creation, maintenance",
        },
        {
          id: "3",
          sentence:
            "involving design, functionality implementation, and database management.",
        },
      ],
    },
  ]; */
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [time, setTime] = useState();
  const [questions, setQuestions] = useState("");
  const [sentence, updateSentence] = useState("");

  const currentQuestion =
    questions && questions.questions[currentQuestionIndex];

  useEffect(()=>{
    
    updateSentence(currentQuestion.question)
    console.log(currentQuestion)
    console.log("------",sentence)
  } , [currentQuestion])

  useEffect(()=>{
    
    
    console.log(currentQuestion)
    console.log("------",sentence)
  } ) 
 
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizId = "649f473f6ce1ecc5e9354b18";

        const response = await axios.get(
          `http://localhost:3000/api/v1/Quiz3/${quizId}`
        );
        setQuestions(response.data.quiz);
        //console.log(response.data.quiz)
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);


  const handleNextQuestion = () => {
    SetCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    /* setSelectedOption("");
    setTime(currentQuestion.duration); */
    console.log("option");
  };

  /* const handleOptionChange = (option) => {
    setSelectedOption(option);
  }; */

  

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(sentence);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateSentence(items);
  } 

  return (
    <div className="ml-20 mt-[74px] ">
      <div className="flex gap-5 items-center ">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Re-order these sentences
        </h3>
        <span className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]">
          60 sec
        </span>
      </div>
       <p className="text-blak text-[16px] font-montserrat font-normal tracking-[.24px] my-8 text-start">
        {currentQuestion.question}
      </p>
    {/*  <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="sentence">
        {(provided) => (
          <ul
            className=""
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {sentence.map(({ id, sentence }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li className=" w-[647px] bg-greey my-4 p-2"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                     
                      <p>{sentence}</p>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext> */}
      <span className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] text-start">
        Check your answers, once you submit your choice it cannot be edited!
      </span>

      <div className="mt-9 flex gap-6">
        <Button name={"Next"} color={"purp"} onClick={handleNextQuestion} />
        {/* <span className="text-darkBlue opacity-[0.6] text-[20px] font-montserrat font-normal tracking-[.3px] ">
          {currentQuestionIndex + 1}/{questions.length}
        </span> */}
      </div>
    </div>
  );
};

export default ReorderQuiz;
