import React from "react";

const Button = ({ color, name, onClick }) => {
  return (
   
    <button
      onClick={onClick}
      className={`inline-block px-6 py-2 my-0 font-custom md:text-[18px] max-md:text-[16px] text-darkBlue no-underline border border-grey  cursor-pointer bg-white shadow-${color} transform transition duration-300 hover:translate-y-2 `}
    >
      {name}
      
    </button>
  );
};

export default Button;
