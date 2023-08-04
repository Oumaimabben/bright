import React, { useState } from "react";


const WritingQuiz = (props) => {
  
  const [textareaValue, setTextareaValue] = useState('');
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

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
    props.handleOptionChange(event.target.value);
  };
   

  return (
    <section className="ml-20 mt-[74px] ">
      <div className="flex gap-6">
        <h3 className="text-blak text-[24px] font-montserrat font-semibold tracking-[.36px]">
          Writing
        </h3>
        <span className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]">
        {props.time} sec
        </span>
      </div>
      <p className="text-dark font-montserrat text-[16px] font-normal tracking-[.24px] my-8">
         {props.question}
      </p>
      <textarea
        type="text"
        className="border  border-blackish px-4  shadow-shdInsetPurp h-36 w-[620px] text-gray-700 text-[16px] font-montserrat text-start focus:outline-none  pl-4 pt-4"
        placeholder="200 Characters required ..."
        value={textareaValue} onChange={handleChange}
        
      />
      
      
    </section>
  );
};

export default WritingQuiz;
