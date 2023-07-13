import React from "react";

const Button = ({ color, name, onClick }) => {
  return (
    /* <div className={`w-[200px]  h-14 border border-solid border-blackish bg-${color}  relative`} >
      <button onClick={onClick} className={`text-darkBlue text-2xl font-custom font-normal w-[200px]  h-14 border border-solid border-blackish bg-white absolute bottom-1 left-1.5`}>
        {name}
      </button>
    </div>  */
    <button
      onClick={onClick}
      className={`inline-block px-6 py-3 my-0 font-custom text-2xl text-darkBlue no-underline border border-solid  cursor-pointer bg-white shadow-${color} transform transition duration-300 hover:translate-y-2 hover:translate-y-2`}
    >
      {name}
    </button>
  );
};

export default Button;
