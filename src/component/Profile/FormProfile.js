import React from "react";
import Button from "../Button";
import { useState } from "react";

const FormProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="border p-12 w-[400px] text-center my-10 mx-6">
      <div className="border border-blackish bg-yellow w-[162px] h-[162px] rounded-full mx-auto relative ">
        <img
          className="mx-auto w-[155px] h-[155px]"
          src="mentor.png"
          alt="profile img"
        ></img>
      </div>
      <img className="absolute left-[22%] bottom-[20%] " src="img.svg"></img>
      <form className="flex flex-col gap-4 my-14   ">
        <input
          class="border  border-blackish px-4 mx-auto  shadow-shdInset  w-[300px] h-16  font-monteserrat font-semibold text-2xl focus:outline-none   placeholder-gray-500 placeholder-opacity-50"
          placeholder="name"
          type="text"
          value={name}
          onChange={handleChangeName}
        />
        <input
          class="border  border-blackish px-4 mx-auto shadow-shdInset  w-[300px] h-16  font-monteserrat font-semibold text-2xl focus:outline-none   placeholder-gray-500 placeholder-opacity-50"
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          class="border  border-blackish px-4 mx-auto  shadow-shdInset  w-[300px] h-16  font-monteserrat font-semibold text-2xl focus:outline-none   placeholder-gray-500 placeholder-opacity-50"
          placeholder="Phone"
          type="text"
          value={phone}
          onChange={handleChangePhone}
        />
      </form>
      <Button name={"Edit account"} color={"yellow"} />
    </div>
  );
};

export default FormProfile;
