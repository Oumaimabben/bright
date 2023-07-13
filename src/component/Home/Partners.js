import React from "react";
import Titles from "../Titles";

const Partners = () => {
  return (
    <section className="pl-20">
      <Titles title={"Our partners"} />
      <p className="text-black text-[20px] font-montserrat font-medium text-start  mt-[22px] mr-12">
      Bright has established partnerships with leading companies and
        organizations in various industries. These partnerships offer exclusive
        job placement opportunities to users who successfully complete relevant
        courses and certifications. By leveraging these connections,Bright aims
        to bridge the gap between education and employment, providing a direct
        pathway to job opportunities for its users.
      </p>
      <div className="flex items-center  gap-28 mt-3.5 mb-36">
        <div className="justify-center ">
          <img className="w-[169px] h-[169px] " src="microsoft.png"></img>
          <h4 className="text-black text-[30px] font-custom font-normal text-center ">
            Microsoft Learn
          </h4>
        </div>
        <div>
          <img className="w-32 h-32 " src="coursera.png "></img>
          <h4 className="text-black text-[30px] font-custom font-normal text-center ">
            Coursera
          </h4>
        </div>

        <div>
          <img className="w-[169px] h-[169px] " src="microsoft.png"></img>
          <h4 className="text-black text-[30px] font-custom font-normal text-center ">
            Microsoft Learn
          </h4>
        </div>
        <div>
          <img className="w-32 h-32" src="coursera.png"></img>
          <h4 className="text-black text-[30px] font-custom font-normal text-center ">
            Coursera
          </h4>
        </div>
        <div>
          <img className="w-[169px] h-[169px]" src="microsoft.png"></img>
          <h4 className="text-black text-[30px] font-custom font-normal text-center ">
            Microsoft Learn
          </h4>
        </div>
        <div>
          <img className="w-32 h-32" src="coursera.png"></img>
          <h4 className="text-black text-[30px] font-custom font-normal text-center ">
            Coursera
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Partners;


