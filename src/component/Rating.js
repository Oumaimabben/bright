import React from "react";

const Rating = (props) => {
  return (
    <div className="flex mt-[4px] items-center">
      {/* <p className="text-darkBlue text-[20px] max-md:text-[12px] font-montserrat font-semibold mr-2">{props.rate}</p> */}

      {[1, 2, 3, 4, 5].map((value) => (
        <div key={value} className="relative">
          {value <= Math.floor(props.rate) ? (
            <img src="star.png" className={`h-4  w-4 max-md:w-2.5 max-md:h-2.5 text-yellow-500`} />
          ) : (
            <img src="star1.svg" className={`h-4 w-4 max-md:w-2.5 max-md:h-2.5 text-yellow-500`} />
          )}

          {value === Math.ceil(props.rate) && (
            <div
              className="absolute top-0 left-0 w-1/2 h-full  overflow-hidden"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            >
              <img src="star.png" className="h-4 w-4 max-md:w-2.5 max-md:h-2.5 text-yellow-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rating;
