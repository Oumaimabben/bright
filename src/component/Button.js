import React from "react";

const Button = ({ color, colorr, name, onClick }) => {
  return (
    <button
    /*  className="button button--secondary"  */
      onClick={onClick}
        className={`inline-block px-6 py-2 my-0 font-custom md:text-[18px] max-md:text-[16px] text-darkBlue no-underline border border-grey  cursor-pointer bg-white shadow-${color} hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-${colorr} `}  
    >
      {name}
    </button>
  );
};

export default Button;
