import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const ReorderQuiz = (props) => {
 
  const [sentence, updateSentence] = useState(props.options);
  /* const [time, setTime] = useState(60);


  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
    }
    

    return () => {
      clearInterval(timer);
    };
  }, [time]);  */
  

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(sentence);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateSentence(items);
    props.handleOptionChange(items.map(item=>item.id));
  } 

  return (
    <div className="ml-20 mt-[74px] ">
      <div className="flex gap-5 items-center ">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Re-order these sentences
        </h3>
        <span className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]">
        {props.time} sec
        </span>
      </div>
       <p className="text-blak text-[16px] font-montserrat font-normal tracking-[.24px] my-8 text-start">
         {props.question}
      </p>
      <DragDropContext onDragEnd={handleOnDragEnd}>
      {sentence &&
      <Droppable droppableId="sentence">
        {(provided) => (
          <ul
            
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {sentence.map(({ id, sentence }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li className=" w-[647px] bg-greey my-4 p-2 px-4 flex items-center justify-between"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      
          
                      <p>{sentence}</p>
                      <img src="menu.svg"></img>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>}
    </DragDropContext> 
     
    </div>
  );
};

export default ReorderQuiz;
