import React from "react";
import Titles from "../Titles";
import { useEffect , useRef } from "react";
import Carousel from "./Carousel";

const Partners = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosRef.current.querySelector(".logos-slide");

    const copy = logosSlide.cloneNode(true);

    logosRef.current.appendChild(copy);
  }, []);

  return (
    <section >
      <div className="lg:pl-20 max-lg:p-4">
      <Titles title={"Our partners"} />
      <p className="text-black lg:text-[20px] max-lg:text-[14px] font-montserrat font-medium lg:text-start max-lg:text-center  mt-[22px] lg:mr-12">
      <span className=" font-custom">Bright</span> has established partnerships with leading companies and
        organizations in various industries. These partnerships offer exclusive
        job placement opportunities to users who successfully complete relevant
        courses and certifications. By leveraging these connections, <span className="font-custom">Bright</span> aims
        to bridge the gap between education and employment, providing a direct
        pathway to job opportunities for its users.
      </p>
      </div>
      <div
      className="overflow-hidden py-[20px] bg-white whitespace-nowrap"
      ref={logosRef}
    >
      <div className="logos-slide inline-block animate-slide-infinite">
        <Carousel  />
      </div>
    </div>
      
      {/* <div className="flex items-center  gap-28 mt-3.5 mb-36">
        <div className="justify-center ">
          <img className="w-[169px] h-[169px] " src="microsoft.png"></img>
          <h4 className="text-black text-[25px] font-custom font-normal text-center ">
            Microsoft Learn
          </h4>
        </div>
        <div>
          <img className="w-32 h-32  " src="coursera.png "></img>
          <h4 className="text-black text-[25px] font-custom font-normal text-center ">
            Coursera
          </h4>
        </div>

        <div>
          <img className="w-[169px] h-[169px] " src="microsoft.png"></img>
          <h4 className="text-black text-[25px] font-custom font-normal text-center ">
            Microsoft Learn
          </h4>
        </div>
        <div>
          <img className="w-32 h-32" src="coursera.png"></img>
          <h4 className="text-black text-[25px] font-custom font-normal text-center ">
            Coursera
          </h4>
        </div>
        <div>
          <img className="w-[169px] h-[169px]" src="microsoft.png"></img>
          <h4 className="text-black text-[25px] font-custom font-normal text-center ">
            Microsoft Learn
          </h4>
        </div>
        <div>
          <img className="w-32 h-32" src="coursera.png"></img>
          <h4 className="text-black text-[25px] font-custom font-normal text-center ">
            Coursera
          </h4>
        </div>
      </div> */}
    </section>
  );
};

export default Partners;


