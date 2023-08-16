import React from "react";
import Button from "../Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles

const FormProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedImage, setSelectedImage] = useState("mentor.png");
  const [locked, setLocked] = useState(true);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;
        setSelectedImage(base64Image);
        console.log("+++++", base64Image);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/Student/64d0e9ae1188959cdd460f18`
        );

        setName(response.data.firstname);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setSelectedImage(response.data.profileimg);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  const editAccount = () => {
    setLocked(!locked);
  };

  const submitAnswers = async () => {
    try {
      const userId = "64d0e9ae1188959cdd460f18";
      const obj = {
        _id: userId,
        firstname: name,
        email: email,
        phone: phone,
        profileimg: selectedImage,
      };
      console.log("object::", obj);
      const response = await axios.put(
        `http://localhost:8000/Student/updateEtudiant`,
        obj
      );
      console.log("reponce::::", response.data);
      toast.success("Profile updated successfully!");

      //  Handle response data as needed
    } catch (error) {
      console.error(error);
      toast.error("failed !");
    }
  };

  const handleSubmitButton = async () => {
    submitAnswers();
  };

  

  return (
    <div className="border p-12 w-[400px] text-center my-10 mx-6">
      <div className="border border-blackish bg-yellow w-[162px] h-[162px] rounded-full mx-auto relative ">
        {/*  {selectedImage ? (<img
          className="mx-auto w-[155px] h-[155px] rounded-full"
          src={selectedImage}
          alt="profile img"
        ></img>) : <img
        className="mx-auto w-[155px] h-[155px]"
        src="mentor.png"
        alt="profile img"
      ></img> } */}
        <img
          className="mx-auto w-[155px] h-[155px] rounded-full"
          src={selectedImage}
          alt="profile img"
        ></img>
      </div>
      <label htmlFor="imageInput">
        <img
          className="absolute left-[24%] bottom-[20%] cursor-pointer"
          src="img.svg"
        ></img>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      <form className="flex flex-col gap-4 my-14  ">
        <input
          class={`border ${
            locked ? "border-grey" : "border-blak"
          }  px-4 mx-auto  shadow-shdInset  w-[300px] h-16 ${
            locked ? "text-lightBlack" : "text-blak"
          }   font-monteserrat font-semibold text-[20px] focus:outline-none   placeholder-gray-500 placeholder-opacity-50`}
          placeholder="name"
          type="text"
          value={name}
          onChange={handleChangeName}
          readOnly={locked}
        />
        <input
          class={`border  ${
            locked ? "border-grey" : "border-blak"
          } ${
            locked ? "text-lightBlack" : "text-blak"
          } px-4 mx-auto shadow-shdInset  w-[300px] h-16  font-monteserrat font-semibold text-[20px] focus:outline-none   placeholder-gray-500 placeholder-opacity-50`}
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={handleChangeEmail}
          readOnly={locked}
        />
        <input
          class={`border  ${
            locked ? "border-grey" : "border-blak"
          } ${
            locked ? "text-lightBlack" : "text-blak"
          } px-4 mx-auto  shadow-shdInset  w-[300px] h-16  font-monteserrat font-semibold text-[20px] focus:outline-none   placeholder-gray-500 placeholder-opacity-50`}
          placeholder="Phone"
          type="text"
          value={phone}
          onChange={handleChangePhone}
          readOnly={locked}
        />
      </form>
      {locked ? (
        <Button name={"Edit account"} color={"yellow"} colorr={"yelloww"} onClick={editAccount} />
      ) : (
        <Button name={"Save"} color={"blue"} colorr={"bluee"} onClick={handleSubmitButton} />
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={() =>
          "shadow-purp flex items-center justify-center  h-14  p-1 bg-white  cursor-pointer"
        }
        bodyClassName={() =>
          "text-sm text-darkBlue font-custom  flex items-center  justify-between p-2"
        }
       
      />
    </div>
  );
};

export default FormProfile;
