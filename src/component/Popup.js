import React, { useState } from "react";

import SignIN from "./Signin";

//import { MdCancel } from "react-icons/md";

export default function SignInbtn() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="  p-4 pb-4 border shadow-shdY bg-white  h-9 w-auto p font-custom font-thin text-[17px]"
      >
        SignIN
      </button>

      {modal && (
        <div className="modal w-screen h-screen top-[50%] left-0 right-0  fixed">
          <div
            onClick={toggleModal}
            className="overlay w-screen h-screen top-0 bg-gray-800 bg-opacity-40 fixed"
          ></div>

          <div className=" absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-6 bg-gray-100 p-7 rounded-md max-w-600 min-w-300">
            <SignIN />

            <button
              className="close-modal fixed top-0 right-0 p-7 "
              onClick={toggleModal}
            >
{/*               <MdCancel /> */}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
