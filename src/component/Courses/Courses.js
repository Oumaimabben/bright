import React from "react";
import Titles from "../Titles";
import { useEffect, useState } from "react";
import Button from "../Button";
const Courses = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <section className="">
      <div className="bg-blur h-[480px] relative">
        <img
          className="w-[100%] absolute inset-0 w-full h-full object-cover z-[-1]"
          src="graduation.png"
        ></img>
        <h3 className="text-[54px] font-custom font-normal  text-center text-white  absolute top-1/4 w-[950px] left-1/4 ">
          Graduate now online from the top universities worldwide
        </h3>
      </div>
      <div className="flex my-10 justify-around">
        <input
          class="border  border-blackish px-4  shadow-shdInsetPurp  w-[520px] h-16  font-monteserrat font-normal text-2xl focus:outline-none   placeholder-gray-500 placeholder-opacity-50"
          placeholder="What are you looking for?"
          type="text"
          value={search}
          onChange={handleSearch}
        />

        <Button name={"Search"} color={"purp"} />
      </div>
    </section>
  );
};

export default Courses;
