import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Profile from "./component/Profile/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
     
        <Routes>
          <Route  path="*" element={<Home />} />
          <Route  path="/Profile" element={<Profile />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
