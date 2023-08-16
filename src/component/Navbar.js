import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [burgerIcone, setBurgerIcone] = useState(true);
  const [image , setImage] = useState('Ellipse.png')
  const [firstname , setFirstName] = useState('')
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {

        const response = await axios.get(
          `http://localhost:8000/Student/64d0e9ae1188959cdd460f18`
        );
        setFirstName(response.data.username)
        setImage(response.data.profileimg)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  const ClickImage = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const changeState = () => {
    setBurgerIcone(!burgerIcone);
  };

  return (
    <>
      <section
        className={`lg:flex bg-greey h-[122px] flex justify-between items-center hidden `}
      >
        {/* <p className="text-darkBlue text-5xl font-custom px-20 ">Bright</p> */}
        <img src="logo.svg" alt="bright logo" className="w-36  ml-20 "></img>

        <div className="text-darkBlue text-5xl font-custom text-[32px] flex justify-between items-center w-[50%]  mr-14">
          <Link to="/">Home</Link>
          <Link to="/Courses">Courses</Link>
          <Link to="/">Pricing</Link>
          {/* <Link to="/StartQuiz">Quiz</Link> */}
          <p>{firstname}</p>
          <div
            className={`border border-blackish bg-yellow w-[65px] h-[65px] rounded-full relative  `}
          >
            <img
              className="w-[60px] h-[60px] mx-auto rounded-full"
              src={image}
              alt="profile img"
              onMouseEnter={ClickImage} // Run when the mouse enters the div
              //onMouseLeave={ClickImage}
            ></img>
          </div>

          {open && (
            <>
              <div className="w-36 h-28 border border-grey bg-white absolute top-28 right-16 z-10 grid items-stretch text-center shadow-yellow">
                <Link
                  to="/profile"
                  className="text-dark text-[20px] font-custom font-normal my-auto "
                  onClick={ClickImage}
                >
                  View profile
                </Link>
                <p className="text-red text-[20px] font-custom font-normal my-auto">
                  Logout
                </p>
              </div>
            </>
          )}
        </div>
      </section>
      {!burgerIcone && (
        <div className="bg-blur absolute top-0 left-0 z-[10] w-[100%] h-[100%]"></div>
      )}
      <div className="lg:hidden flex justify-between items-center p-6  w-[100%] h-20 bg-greey relative ">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={image}
          alt="profile img"
          onClick={ClickImage}
        ></img>
        {/* <p className="text-darkBlue text-3xl font-custom  ">Bright</p> */}
        <img src="logo.svg" alt="bright logo" className="w-24"></img>

        <button onClick={changeState}>
          {burgerIcone && <img src="burger.svg" alt="burger menu icon"></img>}
        </button>
      </div>
      {!burgerIcone && (
        <aside className="w-[100%] h-[450px]  absolute top-0 bg-greey right-0  p-10 z-[10]">
          <div className="flex justify-end " onClick={changeState}>
            <img className="w-6 h-6" src="icon-menu-close.svg" alt="icon menu close"></img>
          </div>

          <p className="text-darkBlue text-3xl font-custom  mb-6">Bright</p>
          <div className="flex flex-col gap-4 text-darkBlue text-2xl font-custom ">
            <Link to="/" onClick={changeState}>Home</Link>
            <Link to="/Courses" onClick={changeState}>Courses</Link>
            <Link to="/" onClick={changeState}>Pricing</Link>
          </div>
          <div className="flex items-center mt-14  ">
            <div className="border border-blackish bg-yellow w-[45px] h-[45px] rounded-full relative mr-4">
              <img
                className="w-[40px] h-[40px] mx-auto rounded-full"
                src={image}
                alt="profile img"
              ></img>
            </div>
            <p className="text-darkBlue text-2xl font-custom ">Name</p>
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;
