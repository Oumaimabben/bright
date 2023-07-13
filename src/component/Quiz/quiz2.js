/*  import React, { useState } from 'react';
 import axios from 'axios';



 const CreateQuiz = () => {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [questions, setQuestions] = useState([{ question: '', options: [''], answer: [''] }]);



   const handleQuestionChange = (index, field, value) => {
     const updatedQuestions = [...questions];
     updatedQuestions[index][field] = value;
     setQuestions(updatedQuestions);
   };



   const handleOptionChange = (questionIndex, optionIndex, value) => {
     const updatedQuestions = [...questions];
     updatedQuestions[questionIndex].options[optionIndex] = value;
     setQuestions(updatedQuestions);
   };



   const handleAnswerChange = (questionIndex, answerIndex, value) => {
     const updatedQuestions = [...questions];
     updatedQuestions[questionIndex].answer[answerIndex] = value;
     setQuestions(updatedQuestions);
   };



   const addQuestion = () => {
     setQuestions([...questions, { question: '', options: [''], answer: [''] }]);
   };



   const removeQuestion = (index) => {
     const updatedQuestions = [...questions];
     updatedQuestions.splice(index, 1);
     setQuestions(updatedQuestions);
   };



   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post('httplocalhost:3000/api/v1/Quiz', {
         title,
         description,
         questions,
       });
       console.log(response.data);
     Reset form or show success message
     } catch (error) {
       console.error(error);
     Show error message
     }
   };



   return (
     <div>
       <h2>Create Quiz</h2>
       <form onSubmit={handleSubmit}>
         <div>
           <label>Title:</label>
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         </div>
         <div>
           <label>Description:</label>
           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
         </div>
         {questions.map((question, index) => (
           <div key={index}>
             <h3>Question {index + 1}</h3>
             <div>
               <label>Question:</label>
               <input
                 type="text"
                 value={question.question}
                 onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
               />
             </div>
             <div>
               <label>Options:</label>
               {question.options.map((option, optionIndex) => (
                 <input
                   type="text"
                   key={optionIndex}
                   value={option}
                   onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                 />
               ))}
               <button type="button" onClick={() => handleOptionChange(index, question.options.length, '')}>
                 Add Option
               </button>
             </div>
             <div>
               <label>Answer:</label>
               {question.answer.map((answer, answerIndex) => (
                 <input
                   type="text"
                   key={answerIndex}
                   value={answer}
                   onChange={(e) => handleAnswerChange(index, answerIndex, e.target.value)}
                 />
               ))}
               <button type="button" onClick={() => handleAnswerChange(index, question.answer.length, '')}>
                 Add Answer
               </button>
             </div>
             {questions.length > 1 && (
               <button type="button" onClick={() => removeQuestion(index)}>
                 Remove Question
               </button>
             )}
           </div>
         ))}
         <button type="button" onClick={addQuestion}>
           Add Question
         </button>
         <button type="submit">Create Quiz</button>
       </form>
     </div>

   );

 };




 export default CreateQuiz;  */

/* import React, { useState, useEffect } from 'react';

 import axios from 'axios';




 const Quizz = () => {

   const [quiz, setQuiz] = useState(null);

   const [questions, setQuestions] = useState([]);

   const [answers, setAnswers] = useState([]);




   // Fetch the quiz by ID

   const fetchQuiz = async () => {

     try {

       const quizId = '64a04513a594ed67f5868b9a';  //Replace with the actual quiz ID

       const response = await axios.get(`http:localhost:3000/api/v1/Quiz/${quizId}`);

       setQuiz(response.data.quiz);

       setQuestions(response.data.quiz.questions.map(question => question._id));

       setAnswers(new Array(response.data.quiz.questions.length).fill([]));

     } catch (error) {

       console.error(error);

     }

   };




  //  Handle answer submission

   const submitAnswers = async () => {
 
     try {

       const quizId = '64a5a1823e427397890f1045';  //Replace with the actual quiz ID

       const sortedAnswers = answers.map(arr => [...arr].sort()); // Sort the user answer array

       const response = await axios.post(`http:localhost:3000/api/v1/Quiz1/submit`, {

         quiz: quizId,

         questions,

         answer: sortedAnswers,

       });

       console.log(response.data);

      //  Handle response data as needed

     } catch (error) {

       console.error(error);

     }

   };




   useEffect(() => {

     fetchQuiz();

   }, []);




   const handleAnswerChange = (index, option) => {

     const updatedAnswers = [...answers];

     const selectedOptions = [...updatedAnswers[index]];




     // Toggle the selection of the option

     if (selectedOptions.includes(option)) {

      //  Remove the option if already selected

       const optionIndex = selectedOptions.indexOf(option);

       selectedOptions.splice(optionIndex, 1);

     } else {

      //  Add the option if not selected

       selectedOptions.push(option);

     }




     updatedAnswers[index] = selectedOptions;

     setAnswers(updatedAnswers);

   };




   if (!quiz) {

     return <p>Loading quiz...</p>;

   }




   return (

     <div>

       <h2>{quiz.title}</h2>

       <form>

         {quiz.questions.map((question, index) => (

           <div key={question._id}>

             <h3>{question.question}</h3>

             {question.options.map(option => (

               <label key={option}>

                 <input

                   type="checkbox"

                   value={option}

                   checked={answers[index].includes(option)}

                   onChange={() => handleAnswerChange(index, option)}

                 />

                 {option}

               </label>

             ))}

           </div>

         ))}

         <button type="button" onClick={submitAnswers}>

           Submit Answers

         </button>

       </form>

     </div>

   );

 };




 export default Quizz;
 */

import React, { useState, useEffect } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import axios from "axios";

function App1() {
  const [characters, updateCharacters] = useState([]);

  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    console.log("-----------", characters);
  });

  useEffect(() => {
    // Fetch the quiz data from the backend API

    axios

      .get("http://localhost:3000/api/v1/Quiz3/649f473f6ce1ecc5e9354b18") // Replace with your API endpoint

      .then((response) => {
        const { quiz } = response.data;

        setQuiz(quiz);
        // Map the quiz data to the characters state format

        const charactersData = quiz.questions.map((question, index) => {
          
          return {
            id: question._id,

            question: question,
          };
        });

        updateCharacters(charactersData);
        
      })

      .catch((error) => {
        console.error("Error fetching quiz", error);

        // Handle error scenario
      });
  }, []);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);

    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);

    const updatedOrder = items.map((character) => character.id);

    // Send the updated characters order to the backend

    axios

      .post("http://localhost:3000/api/v1/Quiz3/submit", {
        order: updatedOrder,
      })

      .then((response) => {
        console.log("Quiz submitted successfully", response.data.quiz);

        // Perform any additional actions after successful submission
      })

      .catch((error) => {
        console.error("Error submitting quiz", error);

        // Handle error scenario
      });

    console.log(updatedOrder);
  }

  function handleSubmit() {
    // Call handleOnDragEnd to submit the order

    handleOnDragEnd({
      destination: { index: characters.length - 1 },

      source: { index: 0 },
    });
  }

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{quiz.title}</h1>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, question }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                         <div className="characters-thumb">
                          {question.question.map((q, subIndex) => (
                            <p key={id + "-" + subIndex}>
                              Question {index + 1}.{subIndex + 1}: {q}
                            </p>
                          ))}
                        </div> 
                      </li>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <button onClick={handleSubmit}>Submit Order</button>
      </header>

      <p>
        Images from{" "}
        <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App1;
