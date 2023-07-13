import React from 'react';





const Logo =(props)=>{

    return(

        <div className="flex justify-center">

            <div className="mx-16">

                <img  className="border-1 border-black  rounded-custom w-[170px] h-[170px]  " src={props.src}></img>

                <h2 className="ml-5  mt-3 font-Oleo_script text-center">{props.name}</h2>

            </div>

            <div className="mx-16" >

                <img  className="border-1 border-black  rounded-custom w-[170px] h-[170px]  " src={props.src1}></img>

                <h2 className="ml-5  mt-3 font-Oleo_script text-center">{props.name}</h2>

            </div>

            <div className="mx-16">

                <img  className="border-1 border-black  rounded-custom w-[170px] h-[170px]  " src={props.src}></img>

                <h2 className="ml-5  mt-3 font-Oleo_script text-center">{props.name}</h2>

            </div>

            <div className="mx-16">

                <img  className="border-1 border-black  rounded-custom w-[170px] h-[170px]  " src={props.src1}></img>

                <h2 className="ml-5  mt-3 font-Oleo_script text-center ">{props.name}</h2>

            </div>

           

      </div>

      )

}

export default Logo;