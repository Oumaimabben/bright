import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Profile from "./component/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Courses from "./component/Courses/Courses";
import StartQuiz from "./component/Quiz/StartQuiz";
import QuizPage from "./component/Quiz/QuizPage";
import NavLogin from "./component/NavLogin";
import FinishQuiz from "./component/Quiz/FinishQuiz";
import Course from "./component/Course/Course";
import GridList from "./component/MentorsPage";
import Hero from "./component/Home/Hero";
function App() {
  return (
    <div className="App overflow-x-hidden">
         <Navbar />   
       {/* <NavLogin/> */}
      
         <Routes>
           
            <Route  path="*" element={<Home />} />     
          <Route  path="/Profile" element={<Profile />} />
          <Route  path="/Courses" element={<Courses/>} />
          <Route  path="/Quiz" element={<QuizPage/>} />
          <Route  path="/StartQuiz" element={<StartQuiz/> } />
          <Route  path="/FinishQuiz" element={<FinishQuiz/> } />
        </Routes> 
       {/* <GridList/> */}
     {/*  <Course/> */}
     
      <Footer/>
    </div>
  );
}

export default App;
