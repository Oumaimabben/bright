import React from "react";

const Card = (props) => {
  const { title, description , marginLeft } = props;
  return (
    <div
      className={`w-[340px] h-[250px] border border-solid border-blackish bg-purp    relative ml-${marginLeft} `}
    >
      <div className={`w-[340px] h-[250px] border border-solid border-blackish bg-white absolute bottom-1 left-1.5 p-2  grid items-stretch`}>
        <h3 className="text-blackish text-[20px] font-montserrat  font-semibold text-center  flex items-center justify-center">
          {title}
        </h3>
        <p className="text-blackish text-[15px] font-montserrat  text-center font-normal  ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
