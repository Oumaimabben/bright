import React  from "react";
import { useState  } from "react";


const FillBlanksQuiz = (props) => {
  const [inputValue, setInputValue] = useState("");
  //const [time, setTime] = useState(60);

  const questionParts = props.question.split("...");

  /* useEffect(() => {
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

   const handleInputChange = (event , index) => {
    setInputValue(event.target.value);
    props.handleOptionChange(event.target.value , index)
  }; 

  return (
    <section className="ml-20 mt-[74px] ">
      <div className="flex gap-6">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Choose the right answer
        </h3>
        <span className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]">
           {props.time} sec
        </span>
      </div>
      <p className="text-dark font-montserrat text-[16px] font-normal tracking-[.24px] my-6">
        Complete the following paragraph with words from the list:
      </p>

      <div className="flex gap-4">
        {props.answer.map((word , index) => (
          <div key={index} className="text-dark font-montserrat text-[16px] font-normal tracking-[.24px] p-1.5 bg-greey border border-solid ">
            
            {word}
          </div>
        ))}
      </div>

      
      <p className="text-dark font-montserrat text-[16px] font-normal tracking-[.24px] my-6 ">
        {questionParts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index !== questionParts.length - 1 && <input 
            type="text" 
            placeholder="[.................................]" 
            value={inputValue} 
            onChange={(event) => handleInputChange(event, index)}
            className="m-4 w-32 border-none outline-none focus:border-none"/>}
          </React.Fragment>
        ))}
      </p>

    </section>
  );
};

export default FillBlanksQuiz;
